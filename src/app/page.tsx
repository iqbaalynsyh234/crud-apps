'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserList } from '@/components/UserList';
import { UserForm } from '@/components/UserForm';

export default function Home() {
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);

  return (
    <main className="container mx-auto p-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>User Management</CardTitle>
          <Button onClick={() => setIsAddingUser(true)}>Add New User</Button>
        </CardHeader>
        <CardContent>
          <UserList 
            onEdit={setEditingUser}
          />
        </CardContent>
      </Card>

      {(isAddingUser || editingUser) && (
        <UserForm
          user={editingUser}
          onClose={() => {
            setIsAddingUser(false);
            setEditingUser(null);
          }}
        />
      )}
    </main>
  );
}
