import React, { useCallback, useEffect } from 'react';
import { getCurrentUserInfo } from './api/login'
import { useRouter } from './hooks/useRouter'
import { useRecoilState } from 'recoil'
import { UserAtom } from './atoms/user'

interface GeneralLayoutProps {
  children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({children}) => {
  const [userProfile, setUserProfile] = useRecoilState(UserAtom)
  const {routeTo} = useRouter()

  const fetchUserProfile = useCallback(async () => {
    const userProfileResponse = await getCurrentUserInfo()

    if (userProfileResponse === null) {
      routeTo('/login')
      return
    }
    setUserProfile(userProfileResponse)
  }, [])

  useEffect(() => {
    fetchUserProfile()
  }, [children])

  // TODO 4-1: 응답으로 받은 user의 userInfo.roles가 비어있다면 아무 권한이 없는 user이므로 로그인 페이지로 이동
  if (userProfile?.userInfo.roles.length === 0) {
    routeTo('/login')
    return <></>
  }


  if (userProfile === null) return (<div>loading...</div>)

  return (<div className="general-layout">
    <div className="general-layout__body">
      { children }
    </div>
  </div>)
}

export default GeneralLayout