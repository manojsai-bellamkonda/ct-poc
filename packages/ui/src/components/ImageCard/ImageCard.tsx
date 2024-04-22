import { Icon } from "@repo/ui";
export const ImageCard = ({
  imgUrl,
  caption,
  tag,
}: {
  imgUrl: string;
  caption: string;
  tag: string;
}) => {
  return (
    <div className="relative flex flex-col h-[314px] w-[183px] md:h-[444px] md:w-[259px] rounded-lg shrink-0 items-stretch overflow-hidden cursor-pointer bg-white text-black">
      <img
        className="w-full h-full object-cover"
        src={imgUrl}
        alt={caption}
        draggable="false"
      />
      <div className="h-16 bg-gray-200 flex items-center justify-between">
        <div className="flex pl-4 text-sm items-center">{caption}</div>
        <div className="mr-4">
          <Icon iconName="arrowRight" size="18px"></Icon>
        </div>
      </div>
      <div className="absolute bg-white bg-opacity-60 top-2 left-2 font-semibold text-[10px] py-[2px] px-2 border border-black rounded-full">
        {tag}
      </div>
    </div>
  );
};
