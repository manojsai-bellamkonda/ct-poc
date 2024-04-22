export interface ProfileCardProps {
  name: string;
  imageSrc?: string;
}

export const ProfileCard = ({ name, imageSrc }: ProfileCardProps) => {
  const [firstName, middleName, lastName] = name.split(/\s+/);
  return (
    <div className="flex flex-col items-center bg-custom-gray rounded-2xl shadow px-9 py-4 hover:shadow-lg transition-shadow w-[188px]">
      <div className="relative w-20 h-20 rounded-full bg-custom-gray flex justify-center items-center">
        <img
          src={imageSrc}
          alt={`${name}'s avatar`}
          className="object-cover w-12 h-12 rounded-full ring-2 ring-purple-600"
        />
      </div>
      {name && (
        <div className="text-md font-bold text-black text-center">
          {firstName && <div>{firstName}</div>}
          {middleName && <div>{middleName}</div>}
          {lastName && <div>{lastName}</div>}
        </div>
      )}
    </div>
  );
};
