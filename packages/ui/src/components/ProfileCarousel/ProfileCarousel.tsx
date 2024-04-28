'use client'
import { ProfileCard, ProfileCardProps } from '../ProfileCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import '../../styles/global.css'
import Link from 'next/link'
import { Icon } from '..'
import { useState } from 'react'

type Props = {
  clients: ProfileCardProps[]
  title?: string
}

export const ProfilesCarousel: React.FC<Props> = ({
  clients,
  title = 'Clients',
}) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }
  const handleClickViewAll = () => {
    alert('Redirected to view all')
  }

  const filteredClients = clients.filter((client) =>
    `${client.firstName} ${client.lastName}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <div className="w-[fit] lg:px-8 px-4">
        <div className="flex flex-row items-center justify-between">
          <p className="font-semibold text-lg py-8 leading-5">{title}</p>
          <p
            className="font-semibold py-8 leading-5 text-blue-cyan text-sm"
            onClick={handleClickViewAll}
          >
            View all
          </p>
        </div>
        <div className="flex items-center p-2 bg-white-smoke rounded-md overflow-hidden mb-4">
          <Icon iconName="search" />
          <input
            type="text"
            placeholder="Search by name"
            className="bg-white-smoke rounded-2xl px-3 py-1 w-full mr-2 focus:outline-none"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="profile-carousel px-4 lg:px-8">
        <div className="overflow-x-auto">
          <Swiper spaceBetween={20} slidesPerView="auto" direction="horizontal">
            <SwiperSlide className="!w-fit">
              <Link href="/clients/create">
                <div className="flex flex-col items-center gap-4 bg-white-smoke rounded-2xl shadow px-9 py-6 hover:shadow-lg transition-shadow w-[165px] cursor-pointer">
                  <div className="bg-white rounded-full w-[42px] h-[42px] m-[3px]">
                    <img
                      src={'profile-pic.png'}
                      alt={`add new`}
                      className="object-cover rounded-full "
                    />
                  </div>
                  <div className="text-md font-bold text-black text-center">
                    Add
                    <br />
                    New
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            {filteredClients.map((profile, index) => (
              <SwiperSlide key={profile.id || index} className="!w-fit">
                <Link href={`/clients/${profile.id}`} passHref>
                  <ProfileCard profile={profile} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
