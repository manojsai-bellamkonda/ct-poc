'use client'
import { ImageCard, ImageCardData, ImageCardDataType } from '@repo/ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

type Props = {
  ImageCardData: ImageCardDataType[]
  title?: string
}
export const ImageCarousel: React.FC<Props> = ({
  title = 'External Tools',
}) => {
  return (
    <>
      <div className="flex flex-row items-center justify-between px-8">
        <p className="font-semibold text-lg py-8 leading-5">{title}</p>
        <a
          href="#"
          className="font-semibold py-8 leading-5 text-blue-cyan text-sm"
          onClick={() => alert('Browse All Clicked')}
        >
          Browse All
        </a>
      </div>
      <div className="px-4 lg:px-8 mb-10 ">
        <Swiper spaceBetween={20} slidesPerView="auto" direction="horizontal">
          {ImageCardData.map((imgCard, index) => {
            return (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <ImageCard
                  imgUrl={imgCard.imgUrl}
                  caption={imgCard.caption}
                  tag={imgCard.tag}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}
