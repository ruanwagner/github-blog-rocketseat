import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import {
  ProfileContainer,
  ProfileInfoSection,
  ProfileHeader,
  ProfileBody,
  ProfileFooter,
} from './styles'
import { IconAndInfo } from '../../../../components/IconAndInfo'
import { defaultTheme } from '../../../../styles/themes/default'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
interface IUserInfo {
  name: string
  followers: number
  githubUsername: string
  company: string
  url: string
  imgUrl: string
  description: string
}
export function ProfileCard() {
  const [userInfo, setUserInfo] = useState<IUserInfo>()

  const fetchUsers = useCallback(async () => {
    const response = await api.get('users/ruanwagner')
    const {
      name,
      followers,
      login,
      company,
      html_url: htmlUrl,
      avatar_url: avatarUrl,
      bio,
    } = response.data
    const newUserObj = {
      name,
      followers,
      githubUsername: login,
      company,
      url: htmlUrl,
      imgUrl: avatarUrl,
      description: bio,
    }
    setUserInfo(newUserObj)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])
  return (
    <ProfileContainer>
      <img src={userInfo?.imgUrl} alt="" />
      <ProfileInfoSection>
        <ProfileHeader>
          <strong>{userInfo?.name}</strong>
          <a href={userInfo?.url} target="_blank" rel="noreferrer">
            GITHUB
            <ArrowSquareOut size={defaultTheme['18px']} weight="bold" />
          </a>
        </ProfileHeader>
        <ProfileBody>{userInfo?.description}</ProfileBody>
        <ProfileFooter>
          <IconAndInfo
            textColor={defaultTheme['base-subtitle']}
            icon={
              <GithubLogo color={defaultTheme['base-label']} weight="bold" />
            }
            textInfo={userInfo?.githubUsername}
          />
          <IconAndInfo
            textColor={defaultTheme['base-subtitle']}
            icon={
              <Buildings color={defaultTheme['base-label']} weight="bold" />
            }
            textInfo={userInfo?.company}
          />
          <IconAndInfo
            textColor={defaultTheme['base-subtitle']}
            icon={<Users color={defaultTheme['base-label']} weight="bold" />}
            textInfo={'' + userInfo?.followers + ' followers'}
          />
        </ProfileFooter>
      </ProfileInfoSection>
    </ProfileContainer>
  )
}
