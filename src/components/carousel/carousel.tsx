"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from "react";

interface CarouselProp {
  props: Model.AdBanner[];
  time: number;
  actions?: boolean;
  link?: string;
}
export const Carousel: React.FC<CarouselProp> = ({
  props,
  time,
  actions = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const imageRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<any>(null);

  // const prevSlide = () => {
  //   const newSlide = currentSlide === 0 ? props.length - 1 : currentSlide - 1;
  //   setCurrentSlide(newSlide);
  //   imageRef.current?.classList.add("fade-in");
  // };
  const nextSlide = useCallback(() => {
    const newSlide = currentSlide === props.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
    imageRef.current?.classList.add("fade-in");
  }, [currentSlide, props?.length]);

  const removeAnimation = () => {
    imageRef.current?.classList.remove("fade-in");
  };

  const pauseSlider = () => {
    clearInterval(sliderRef.current);
  };
  const autoPlay = useCallback(() => {
    sliderRef.current = setInterval(
      () => {
        nextSlide();
      },
      time <= 0 ? 3000 : time
    );
  }, [nextSlide, time]);

  useEffect(() => {
    const currentImage = imageRef?.current;
    imageRef.current?.addEventListener("animationend", removeAnimation);
    autoPlay();
    return () => {
      pauseSlider();

      currentImage?.removeEventListener("animationend", removeAnimation);
    };
  }, [currentSlide, autoPlay]);

  return (
    <div className="relative  w-full h-full   group z-1">
      <a
        aria-label={`go to ${props[currentSlide].id}`}
        onClick={(e) => {
          if (!props[currentSlide].link) e.preventDefault();
        }}
        aria-disabled={!props[currentSlide].link}
        href={props[currentSlide].link ? props[currentSlide].link : ""}
        target="_blank"
      >
        <div
          className="w-full h-full overflow-hidden duration-500 bg-center bg-no-repeat bg-cover rounded-xl"
          ref={imageRef}
          style={{
            backgroundImage: `url(/assets${props[currentSlide].image})`,
          }}
        ></div>
      </a>
      {actions && (
        <div className="flex absolute -bottom-5 right-[43%] items-center justify-start gap-2">
          {props?.map((key, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={` cursor-pointer size-2 duration-150 ${
                props[currentSlide].id === key.id
                  ? "scale-150 bg-slate-600 "
                  : "scale-100 bg-gray-400"
              }   rounded-full`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};
