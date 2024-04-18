type ProfileCardProps = {
  name: string;
  imageSrc?: string;
};

export const ProfileCard: React.FC<ProfileCardProps> = ({ name, imageSrc }) => {
  const nameParts = name.split(" ");
  return (
    <div className="flex flex-col items-center bg-custom-gray rounded-lg shadow px-9 py-4 hover:shadow-lg transition-shadow">
      <div className="relative w-20 h-20 rounded-full bg-custom-gray flex justify-center items-center">
        <img
          src={imageSrc}
          alt={`${name}'s avatar`}
          className="object-cover w-12 h-12 rounded-full ring-2 ring-purple-600"
        />
      </div>

      {name && (
        <div className="text-md font-bold text-black text-center">
          {nameParts.map((part, index) => (
            <div key={index}>{part}</div>
          ))}
        </div>
      )}
    </div>
  );
};
