'use client'
import { RecentOrderItem, RecentOrderItemProps } from '../RecentOrderItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import '../../styles/global.css'

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
                brand={order.brand}
                empId={order.empId}
                orderId={order.orderId}
                orderDate={order.orderDate}
                orderStatus={order.orderStatus}
                inStoreId={order.inStoreId}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
