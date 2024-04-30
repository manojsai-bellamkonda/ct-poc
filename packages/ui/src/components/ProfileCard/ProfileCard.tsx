'use client'
import NextImage from 'next/image'
import { User } from '../../assets'

export interface ProfileCardProps {
  id: number
  assignedTo: number
  firstName: string
  lastName: string
  profilePic: string
  premiumCustomer: boolean
}

export const ProfileCard = ({
  profile,
  onClick,
}: {
  profile: ProfileCardProps
  onClick: () => void
}) => {
  const { firstName, lastName, premiumCustomer } = profile

  return (
    <div
      className="flex flex-col items-center gap-4 bg-white-smoke rounded-2xl shadow px-9 py-6 hover:shadow-lg transition-shadow w-[165px] cursor-pointer "
      onClick={onClick}
    >
      <div
        className={`w-12 h-12 rounded-full ${premiumCustomer ? 'bg-gradient-to-r from-purple-300 to-purple-600' : 'bg-white'}`}
      >
        <div className="bg-white rounded-full w-[42px] h-[42px] m-[3px]">
          <NextImage
            src={User.profilePic}
            height={48}
            width={48}
            alt={`${firstName} ${lastName}'s avatar`}
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <div className="text-md font-bold text-black text-center">
        {firstName && <div>{firstName}</div>}
        {lastName && <div>{lastName}</div>}
      </div>
    </div>
  )
}
