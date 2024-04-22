export interface ProfileCardProps {
  name: string
  imageSrc?: string
  goldCustomer?: boolean
}

export const ProfileCard = ({ profile }: { profile: ProfileCardProps }) => {
  const { name, imageSrc, goldCustomer } = profile
  const [firstName, middleName, lastName] = name.split(/\s+/)
  return (
    <div
      className="flex flex-col items-center gap-4 bg-white-smoke rounded-2xl shadow px-9 py-6 hover:shadow-lg transition-shadow w-[165px] cursor-pointer"
      onClick={() => {
        window.alert(`Redirect to Profile Page`)
      }}
    >
      <div
        className={`w-12 h-12 rounded-full ${goldCustomer ? 'bg-gradient-to-r from-purple-300 to-purple-600' : 'bg-white'}`}
      >
        <div className="bg-white rounded-full w-[42px] h-[42px] m-[3px]">
          <img
            src={imageSrc}
            alt={`${name}'s avatar`}
            className="object-cover rounded-full "
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
