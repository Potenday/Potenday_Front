import { User } from '../types/user'
import { BASE_URL } from './constant'
import { Tree } from '../types/user'

type LoginResult = 'success' | 'fail'

// export interface LoginRequest {
//   authCode: string | null
// }

// export const login = async (authCode: string|null): Promise<LoginResult> => {
//   const loginRes = await fetch(`${BASE_URL}/api/users/login?`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       credentials: 'include'
//     },
//   })
//   console.log(loginRes)
//   return loginRes?.ok ? 'success' : 'fail'
// }

export const getCurrentUserInfo = async (): Promise<User | null> => {
  const code = new URL(document.location.toString()).searchParams.get('code')
  const userInfoRes = await fetch(`${ BASE_URL }/api/users/login?code=${code}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include'
    }
  })

  return userInfoRes.ok ? userInfoRes.json() : null
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