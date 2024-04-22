"use client";
import { ToolCard, ToolCardProps } from "../ToolCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../../styles/global.css";

// Define the prop type for the component
type Props = {
  toolsCardData: ToolCardProps[];
  title?: string;
};
export const ToolsCarousel: React.FC<Props> = ({
  toolsCardData,
  title = "External Tools",
}) => {
  return (
    <div className="px-4 lg:px-8 ">
      <p className="font-semibold text-lg py-8 leading-5">{title}</p>
      {/* <div className="hidden lg:block"> */}

      <Swiper
        spaceBetween={120}
        slidesPerView="auto"
        direction="vertical"
        breakpoints={{
          1024: {
            direction: "horizontal",
          },
        }}
      >
        {toolsCardData.map((tool, index) => {
          return (
            <SwiperSlide key={index}>
              <ToolCard
                title={tool.title}
                subtitle={tool.subtitle}
                icon={tool.icon}
                link={tool.link}
                textStyle="text-nowrap text-ellipsis overflow-hidden"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
