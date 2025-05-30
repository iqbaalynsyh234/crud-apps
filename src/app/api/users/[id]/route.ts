import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: context.params.id },
      include: { address: true },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { firstname, lastname, birthdate, address } = body;

    const user = await prisma.user.update({
      where: { id: context.params.id },
      data: {
        firstname,
        lastname,
        birthdate: new Date(birthdate),
        address: {
          upsert: {
            create: address,
            update: address,
          },
        },
      },
      include: {
        address: true,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    await prisma.user.delete({
      where: { id: context.params.id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    );
  }
} 