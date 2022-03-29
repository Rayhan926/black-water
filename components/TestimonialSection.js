import { useEffect, useRef } from "react"
import {
    useWindowWidth,
} from '@react-hook/window-size'
import { Swiper, SwiperSlide } from 'swiper/react';

function TestimonialSection() {
    const containerRef = useRef(null)
    const windowWidth = useWindowWidth()

    useEffect(() => {
        console.log({ width: window.innerWidth });
        containerRef.current.style.width = ((windowWidth - 1110) / 2) + 1110 + 'px'
    }, [containerRef, windowWidth])

    return (
        <section className="mt-[200px] mb-20" >
            <div ref={containerRef} className="ml-auto grid grid-cols-[360px,auto] gap-[114px] overflow-hidden">
                <div className="flex flex-col justify-center" >
                    <h2 className="title_md">What are our clients saying about us?</h2>
                    <p className="subtitle_md mt-[22px] mb-[32px]">
                        Magna eu cras amet leo. Id ultrices tortor convallis vivamus at pellentesque. Maecenas sagittis proin venenatis.
                    </p>
                    <div>
                        <button className="gradeint_bordered_btn flex items-center gap-4">
                            <span className="text-sm font-normal" >Rated 4.9/5</span>
                            <span className="flex items-center gap-1.5" >
                                <img src="/img/green_star.svg" alt="green_star" width={20.5} height={20.5} />
                                TrustPilot
                            </span>
                        </button>
                    </div>
                </div>
                <div className="overflow-hidden pb-12 flex flex-col-reverse relative" >
                    <div id="pagination_elm" className="space-x-2 flex justify-center mt-5"></div>
                    <div>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1.7}
                            modules={[Pagination]}
                            pagination={{
                                clickable: true,
                                el: '#pagination_elm'
                            }}
                        >
                            <SwiperSlide><Testimonial /></SwiperSlide>
                            <SwiperSlide><Testimonial /></SwiperSlide>
                            <SwiperSlide><Testimonial /></SwiperSlide>
                            <SwiperSlide><Testimonial /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection

import Image from "next/image"
import VideoPlayer from "./VideoPlayer"
import { Pagination } from "swiper";
const Testimonial = () => {
    return (
        <div className="rounded-[30px] overflow-hidden flex flex-col">
            <div className="overflow-hidden">
                <VideoPlayer />
            </div>
            <div className="shrink-0 grow px-[18px] pb-[17px] pt-[13px] bg-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center overflow-hidden">
                    <Image src="/img/client_1.png" width={120} height={120} alt="client 1" />
                </div>
                <div>
                    <h6 className="text-black font-lufga-bold">Zyrille S.</h6>
                    <p className="text-[#818181] text-sm !leading-[156%]" >Visual Designer | Lazy Cub Studio</p>
                </div>
            </div>
        </div>
    )
}