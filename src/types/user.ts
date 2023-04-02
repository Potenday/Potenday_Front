type ROLE_USER = 'user'

export const UserRole: ROLE_USER = 'user'

export type UserRole = ROLE_USER

export interface UserInfo {
  name: string;
  roles: UserRole[]
}

export interface User {
  userId: number; // pk
  username: string;
  userInfo: UserInfo;
}

export interface Tree {
  treeName: string
  id: number // pk
  // owner: {
  //   userId: number
  // },
  // content: {
  //   title: string
  //   property: string[]
  // }
}