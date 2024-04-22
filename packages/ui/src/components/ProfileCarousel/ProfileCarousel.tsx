"use client";
import { ProfileCard, ProfileCardProps } from "../ProfileCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../../styles/global.css";

type Props = {
  profileCardData: ProfileCardProps[];
  title?: string;
};

export const ProfilesCarousel: React.FC<Props> = ({
  profileCardData,
  title = "Clients",
}) => {
  return (
    <div className="profile-carousel px-4 lg:px-8">
      <p className="font-semibold text-lg py-8 leading-5">{title}</p>

      <div className="overflow-x-auto">
        <Swiper spaceBetween={8} slidesPerView="auto" direction="horizontal">
          {profileCardData.map((profile, index) => {
            return (
              <SwiperSlide key={index} className="mr-2">
                <ProfileCard name={profile.name} imageSrc={profile.imageSrc} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
