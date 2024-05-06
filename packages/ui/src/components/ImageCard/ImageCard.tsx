import { Icon } from '@repo/ui'
import NextImage from 'next/image'
export const ImageCard = ({
  imgUrl,
  caption,
  tag,
  onClick,
}: {
  imgUrl: string
  caption: string
  tag?: string
  onClick?: any
}) => {
  return (
    <div
      className="relative flex flex-col h-[314px] w-[183px] md:h-[444px] md:w-[259px] rounded-lg shrink-0 items-stretch overflow-hidden cursor-pointer bg-white text-black"
      onClick={onClick}
    >
      <div className="w-full h-full object-cover relative">
        <NextImage src={imgUrl} alt={caption} layout="fill" objectFit="cover" />
      </div>
      <div className="h-16 bg-white-smoke flex items-center justify-between">
        <div className="pl-4 text-sm">{caption}</div>
        <div className="mr-4">
          <Icon iconName="arrowRight" size="18px"></Icon>
        </div>
      </div>
      {tag && (
        <div className="absolute bg-white-smoke top-2 left-2 font-semibold text-[10px] py-[2px] px-2 border border-black rounded-full">
          {tag}
        </div>
      )}
    </div>
  )
}
