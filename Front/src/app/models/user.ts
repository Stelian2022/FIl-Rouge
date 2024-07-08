export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role?: string;  //admin, agence, candidat
    password?: string;
  }
  