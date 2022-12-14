/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Transition } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Expertise({ isShowing }) {
  const expertise = [
    { name: "Javascript", image: "/jslogo.png" },
    { name: "Typescript", image: "/typescript.png" },
    {
      name: "Next.Js",
      image: "/nextjs-logo.png",
    },
    {
      name: "React.Js",
      image: "/react.png",
    },
    {
      name: "Vue.Js",
      image: "/vuejs.png",
    },
    {
      name: "Angular.Js",
      image: "/angular.svg",
    },
    {
      name: "Express.Js",
      image: "/expressjs.png",
    },
    {
      name: "Node.Js",
      image: "/nodejs.png",
    },
    {
      name: "Laravel",
      image: "/laravel.png",
    },
    {
      name: "Codeigniter",
      image: "/ci.png",
    },
    {
      name: "PHP",
      image: "/php.svg",
    },
    {
      name: "Github",
      image: "/github.png",
    },
    {
      name: "Gitlab",
      image: "/gitlab.png",
    },
    {
      name: "PostgreSQL",
      image: "/postgresql.png",
    },
    {
      name: "mySQL",
      image: "/mysql.png",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 2024, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className='py-20 px-16 '>
      <Transition
        show={isShowing}
        enter='transition-opacity duration-700'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-700'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'>
        <h1 className='text-center underline underline-offset-8 font-bold text-4xl mb-20 subpixel-antialiased hover:scale-110 transition ease-in-out delay-150  hover:-translate-y-1'>
          MY EXPERTISE
        </h1>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          transitionDuration={1000}
          containerClass='carousel-container'
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass='custom-dot-list-style'
          itemClass=''>
          {expertise.map((item) => (
            <div key={item.name} className='mb-10'>
              <Image
                src={item.image}
                alt='Picture of the author'
                width={270}
                height={250}></Image>
            </div>
          ))}
        </Carousel>
      </Transition>
    </div>
  );
}
