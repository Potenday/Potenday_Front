import { User } from '../types/user'
import { BASE_URL } from './constant'
import { Tree } from '../types/user'

type LoginResult = 'success' | 'fail'

export interface LoginRequest {
  username: string
  password: string
}

export const login = async (args: LoginRequest): Promise<LoginResult> => {
  const authCode = new URL(document.location.toString()).searchParams.get('code')
  const loginRes = await fetch(`${BASE_URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include'
    },
    body: JSON.stringify(args)
  })

  return loginRes?.ok ? 'success' : 'fail'
}

export const getCurrentUserInfo = async (): Promise<User | null> => {
  // TODO: GET, '/profile' 호출
  // 호출 성공시 유저 정보 반환
  const userInfoRes = await fetch(`${ BASE_URL }/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include'
    }
  })

  return userInfoRes.ok ? userInfoRes.json() : null
}

// TODO 4-2: GET, '/items' 호출
export const getItems = async (): Promise<Tree[] | null> => {
  const itemRes = await fetch(`${ BASE_URL }/api/trees`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include'
    }
  })

  return itemRes.ok ? itemRes.json() : null
}

// TODO 4-2: GET, '/all-items' 호출
export const getAllItems = async (): Promise<Tree[] | null> => {
  const itemRes = await fetch(`${ BASE_URL }/all-items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include'
    }
  })

  return itemRes.ok ? itemRes.json() : null
}


// TODO 4-2: POST, '/logout' 호출
export const logout = async (): Promise<void> => {
  await fetch(`${ BASE_URL }/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include'
    }
  })
}