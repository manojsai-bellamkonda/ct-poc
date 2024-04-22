export interface ProfileCardProps {
  name: string;
  imageSrc?: string;
}

export const ProfileCard = ({ name, imageSrc }: ProfileCardProps) => {
  const [firstName, middleName, lastName] = name.split(/\s+/);
  return (
    <div
      onClick={() => {
        window.alert(`Redirect to Profile Page`);
      }}
    >
      <div className="flex flex-col items-center gap-4 bg-white-smoke rounded-2xl shadow px-9 py-4 hover:shadow-lg transition-shadow w-[188px]">
        <div className="w-12 h-12 rounded-full bg-white-smoke">
          <img
            src={imageSrc}
            alt={`${name}'s avatar`}
            className="object-cover rounded-full ring-4 ring-purple-600"
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
    </div>
  );
};
