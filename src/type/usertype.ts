export interface User {
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
  
  export interface UserFormProps {
    user?: User;
    onClose: () => void;
  }

  export interface Pagination {
    total: number;
    pageSize: number;
    currentPage: number;
    totalPages: number;
  }

  export interface UserListProps {
    onEdit: (user: User) => void;
    refreshKey?: number;
  }