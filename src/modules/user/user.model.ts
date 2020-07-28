export enum UserRole {
  USER = 'USER',
  TEACHER = 'TEACHER',
  ADMIN = 'ADMIN'
}

export interface User {
  id: number
  email: string
  fullName: string
  role?: UserRole
  password: string
}