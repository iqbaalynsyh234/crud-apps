import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const search = searchParams.get('search') || '';
    const pageSize = 5;
    const skip = (page - 1) * pageSize;

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where: {
          firstname: {
            contains: search,
          },
        },
        include: {
          address: true,
        },
        take: pageSize,
        skip: skip,
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.user.count({
        where: {
          firstname: {
            contains: search,
          },
        },
      }),
    ]);

    return NextResponse.json({
      users,
      pagination: {
        total,
        pageSize,
        currentPage: page,
        totalPages: Math.ceil(total / pageSize),
      },
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstname, lastname, birthdate, address } = body;

    const user = await prisma.user.create({
      data: {
        firstname,
        lastname,
        birthdate: new Date(birthdate),
        address: {
          create: address,
        },
      },
      include: {
        address: true,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
} 