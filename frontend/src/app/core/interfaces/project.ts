import { User } from "./user";

export interface Project {
  id: string;
  name: string;
  key: string;
  url: string;
  description: string;
  avatar: string;
  category: ProjectCategory;
  createdAt: string;
  updatedAt: string;
  users: User[];
}

export type ProjectCategory = 'Software' | 'Marketing' | 'Business';
