'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserList } from '@/components/UserList';
import { UserForm } from '@/components/UserForm';
import { Toaster } from 'sonner';

interface User {
  id: string;
  firstname: string;
  lastname: string;
  birthdate: Date;
  address?: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
  };
}

export default function Home() {
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [editingUser, setEditingUser] = useState<User | undefined>(undefined);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleFormClose = () => {
    setIsAddingUser(false);
    setEditingUser(undefined);
    setRefreshKey(prev => prev + 1);
  };

  return (
    <main className="container mx-auto p-4">
      <Toaster position="top-right" />
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>User Management</CardTitle>
          <Button onClick={() => setIsAddingUser(true)}>Add New User</Button>
        </CardHeader>
        <CardContent>
          <UserList 
            onEdit={setEditingUser}
            refreshKey={refreshKey}
          />
        </CardContent>
      </Card>

      {(isAddingUser || editingUser) && (
        <UserForm
          user={editingUser}
          onClose={handleFormClose}
        />
      )}
    </main>
  );
}
