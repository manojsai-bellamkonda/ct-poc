// eslint-disable-next-line no-redeclare
import Image from 'next/image'
export interface ProfileCardProps {
  name: string
  imageSrc?: string
  goldCustomer?: boolean
}

export const ProfileCard = ({ profile }: { profile: ProfileCardProps }) => {
  const { name, imageSrc, goldCustomer } = profile
  const [firstName, middleName, lastName] = name.split(/\s+/)

  const defaultImageSrc = 'profile-pic.png'
  const formattedImageSrc = imageSrc
    ? imageSrc.startsWith('/') ||
      imageSrc.startsWith('http://') ||
      imageSrc.startsWith('https://')
      ? imageSrc
      : `/` + imageSrc
    : defaultImageSrc

  return (
    <div
      className="flex flex-col items-center gap-4 bg-white-smoke rounded-2xl shadow px-9 py-6 hover:shadow-lg transition-shadow w-[165px] cursor-pointer"
      onClick={() => {
        window.alert('Redirect to Profile Page')
      }}
    >
      <div
        className={`w-12 h-12 rounded-full ${goldCustomer ? 'bg-gradient-to-r from-purple-300 to-purple-600' : 'bg-white'}`}
      >
        <div className="bg-white rounded-full m-[3px]">
          <Image
            src={formattedImageSrc}
            alt={`${name}'s avatar`}
            className="object-cover rounded-full"
            width={42}
            height={42}
          />
        </div>
      </div>
      {name && (
        <div className="text-md font-bold text-black text-center">
          {firstName && <div>{firstName}</div>}
          {middleName && <div>{middleName}</div>}
          {lastName && <div>{lastName}</div>}
        </div>
      )}
    </div>
  )
}
