'use client'
import { ImageCard, collections } from '@repo/ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

type Props = {
  title?: string
}
export const ImageCarousel: React.FC<Props> = ({ title = '' }) => {
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
          {collections.map((imgCard, index) => {
            return (
              <SwiperSlide key={index} className="!w-fit">
                <ImageCard
                  imgUrl={imgCard.imgUrl}
                  caption={imgCard.caption}
                  tag={imgCard.tag}
                  onClick={() =>
                    alert('redirect to product page with specific collection')
                  }
                />
              </SwiperSlide>
            )
          })}
          <SwiperSlide className="!w-fit">
            <div
              className="flex flex-col justify-center items-center h-[314px] w-[183px] md:h-[444px] md:w-[259px] rounded-lg bg-white-smoke text-black cursor-pointer"
              onClick={() => alert('Browse all clicked')}
            >
              <div className="text-center">Browse All</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
