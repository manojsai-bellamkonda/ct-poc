'use client'
import { RecentOrderItem, RecentOrderItemProps } from '../RecentOrderItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

type Props = {
  recentOrderCardData: RecentOrderItemProps[]
  title?: string
}
export const RecentOrderCarousel: React.FC<Props> = ({
  recentOrderCardData,
  title = 'Recent Orders',
}) => {
  return (
    <div className="recent-order-carousel px-4 lg:px-8 ">
      <p className="font-semibold text-lg py-8 leading-5">{title}</p>
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        direction="vertical"
        breakpoints={{
          1024: {
            direction: 'horizontal',
          },
        }}
      >
        {recentOrderCardData.map((order, index) => {
          return (
            <SwiperSlide key={index}>
              <RecentOrderItem
                store={order.store}
                employeeID={order.employeeID}
                orderNumber={order.orderNumber}
                deliveryDate={order.deliveryDate}
                shipingStatus={order.shipingStatus}
                rackNumber={order.rackNumber}
                purchaseDate={order.purchaseDate}
                isInStore={order.isInStore}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
