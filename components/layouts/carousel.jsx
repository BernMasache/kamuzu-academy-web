import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCreative, EffectCards, EffectCoverflow } from 'swiper'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from 'framer-motion';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function HomeCarouselComponent() {

    const carouselImagesContainer = [

        {
            url: "./assets/images/carousel/b1.jpg",
            title: "Vision and Mission ",
            description: " Kamuzu Academy is a selective, co-educational boarding school for pupils in the 11 to 18 age range. It occupies a large, purpose-built campus close to the village of Mtunthama, 150 km from Lilongwe City. "
        },
        {
            url: "./assets/images/carousel/b2.jpg",
            title: "Our Curriculum",
            description: "The Academy offers courses leading to the IGCSE examinations of the University of Cambridge and other UK examining bodies at the end of Form 5, and to GCE AS and A levels"
        },

        {
            url: "./assets/images/carousel/b3.jpg",
            title: "Team of Excellency",
            description: " ALL WORK AND NO PLAY MAKES JACK A DULL BOY, Kamuzu Academy encourage creativity."
        },
    ]
    return (
        <>
            <div className="bg-white relative sm:pb-32 py-2 lg:py-2">

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    speed={1200}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={false}
                    modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                    effect="coverflow"
                    className="relative bg-white"
                >
                    <div className="">
                        {
                            carouselImagesContainer.map((carousel, key) => {

                                return <SwiperSlide key={key}>


                                    <div className="absolute inset-0 opacity-90">
                                        <img
                                            className="h-full w-full object-cover object-center"
                                            src={carousel.url}
                                            alt=""
                                        />
                                        <div className="absolute inset-0 bg-primary opacity-20 mix-blend-multiply" aria-hidden="true" />
                                    </div>
                                    <div className="relative  mx-auto max-w-7xl py-32 px-6 sm:py-56 lg:px-8 text-center">
                                        <div className="mb-32"></div>
                                        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-2xl lg:text-6xl shadow-sm">{carousel.title}</h1>
                                        <p className="text-sm tracking-tight text-white sm:text-xl lg:text-2xl">{carousel.description}
                                        </p>
                                    </div>

                                </SwiperSlide>
                            })
                        }
                    </div>
                </Swiper>
            </div>

        </>
    );
}

