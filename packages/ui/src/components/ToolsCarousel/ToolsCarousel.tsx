"use client";
import { ToolCard, ToolCardProps } from "../ToolCard";
import { toolsCardData } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const ToolsCarousel = () => {
  return (
    <div className="px-8">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {toolsCardData.map((tool: ToolCardProps) => {
          return (
            <SwiperSlide>
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
