'use client'
import { useState } from 'react'
import { ProfileCard, ProfileCardProps } from '../ProfileCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import '../../styles/global.css'
import { Icon } from '..'

type Props = {
  profileCardData: ProfileCardProps[]
  title?: string
}

export const ProfilesCarousel: React.FC<Props> = ({
  profileCardData,
  title = 'Clients',
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const normalizeText = (text: string) => text.replace(/\s+/g, '').toLowerCase()
  const filteredProfileData = profileCardData.filter((profile) =>
    searchQuery === ''
      ? true
      : normalizeText(profile.name) === normalizeText(searchQuery)
  )

  return (
    <>
      <div className="ml-8 mr-8 w-[fit]">
        <div className="flex flex-row items-center justify-between">
          <p className="font-semibold text-lg py-8 leading-5">{title}</p>
          <p className="mr-2 text-blue-600">View all</p>
        </div>
        <div className="flex items-center p-2 bg-white-smoke rounded-md overflow-hidden mb-4">
          <Icon iconName="search" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name"
            className="bg-white-smoke rounded-2xl px-3 py-1 w-full mr-2 focus:outline-none"
          />
        </div>
      </div>
      <div className="profile-carousel px-4 lg:px-8">
        <div className="overflow-x-auto">
          <Swiper spaceBetween={20} slidesPerView="auto" direction="horizontal">
            {filteredProfileData.map((profile, index) => (
              <SwiperSlide key={profile.name || index} className="!w-fit">
                <ProfileCard profile={profile} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
