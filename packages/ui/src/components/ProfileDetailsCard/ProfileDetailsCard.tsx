import { Icon } from '../Icon'
import NextImage from 'next/image'

export type ProfileDetailsProps = {
  profilePic: string
  firstName: string
  lastName: string
  city: string
  stateCode: string
  tag: string
  isFavourite: boolean
  isEmailEnabled: boolean
  isSmsEnabled: boolean
  isCallEnabled: boolean
}

export function ProfileDetailsCard({
  profilePic,
  firstName,
  lastName,
  city,
  stateCode,
  tag,
  isFavourite,
  isEmailEnabled,
  isSmsEnabled,
  isCallEnabled,
}: ProfileDetailsProps) {
  return (
    <div className="h-[360px] w-full md:w-[50%] p-4 rounded-lg border border-gray-200 shadow-sm shadow-slate-200">
      <div className="flex justify-between items-center">
        <div className="px-2 py-1 bg-teal-deer rounded-2xl">{tag}</div>
        <div className="p-2 rounded-full bg-gray-200">
          <Icon iconName={isFavourite ? 'heart' : 'outlineHeart'} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 py-2">
        <NextImage
          src={profilePic}
          alt="profile-pic"
          width={100}
          height={100}
          className="borderrounded-full"
        />
        <p className="text-[20px] font-semibold">
          {firstName} {lastName}
        </p>
        <p className="text-[12px] font-light">
          {city}, {stateCode}
        </p>
      </div>

      {(isEmailEnabled || isSmsEnabled || isCallEnabled) && (
        <div className="flex justify-between items-center my-4">
          {isSmsEnabled && (
            <div className="flex items-center">
              <div className="p-2 mr-1 rounded-full bg-gray-200">
                <Icon iconName="message" />
              </div>
              Text
            </div>
          )}

          {isEmailEnabled && (
            <div className="flex items-center">
              <div className="p-2 mr-1 rounded-full bg-gray-200">
                <Icon iconName="email" />
              </div>
              Email
            </div>
          )}

          {isCallEnabled && (
            <div className="flex items-center">
              <div className="p-2 mr-1 rounded-full bg-gray-200">
                <Icon iconName="call" />
              </div>
              Call
            </div>
          )}
        </div>
      )}

      <hr className="my-4 bg-gray-200" />

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="p-2 mr-1 rounded-full bg-gray-200">
            <Icon iconName="viewPassword" />
          </div>
          View Purchases
        </div>
        <div className="p-2 mr-1 rounded-full bg-gray-200">
          <Icon iconName="info" />
        </div>
      </div>
    </div>
  )
}
