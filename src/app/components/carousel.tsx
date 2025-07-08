"use client";
import React from 'react';
import { MotionWrapper } from './motion/MotionWrapper';
import Image from 'next/image';
import { useRef } from "react";

const animation2Props = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.3, ease: "easeOut", delay: 0.4 },
};

const animation3Props = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.3, ease: "easeOut", delay: 0.6 },
};


const slides = [
    { id: "slide1", src: "/1.png", alt: "Screenshot of the app" },
    { id: "slide2", src: "/2.png", alt: "Screenshot of the app" },
    { id: "slide3", src: "/3.png", alt: "Screenshot of the app" },
];

const Carousel = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollToSlide = (idx: number) => {
        if (carouselRef.current) {
            const slide = carouselRef.current.children[idx] as HTMLElement;
            slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
    };

    return (
        <div id="gallery" className="h-dvh flex flex-col p-20">
            <MotionWrapper {...animation2Props}>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">See it in action</h1>
            </MotionWrapper>
            <h1 className="flex justify-center text-md md:text-xl mb-4 text-gray-400">Simple, intuitive and powerful</h1>
            <MotionWrapper {...animation3Props}>
                <div
                    className="carousel w-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory"
                    ref={carouselRef}
                    style={{ scrollBehavior: "smooth" }}
                >
                    {slides.map((slide, idx) => (
                        <div
                            key={slide.id}
                            className="carousel-item relative w-full h-[400px] md:h-[600px] flex-shrink-0 snap-center"
                            style={{ scrollSnapAlign: "center" }}
                        >
                            <Image
                                src={slide.src}
                                fill
                                alt={slide.alt}
                                style={{ objectFit: "contain" }}
                                sizes="(max-width: 1200px) 100vw, 1200px"
                                priority
                            />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <button
                                    className="btn btn-circle"
                                    onClick={() => scrollToSlide((idx - 1 + slides.length) % slides.length)}
                                    aria-label="Previous slide"
                                >
                                    ❮
                                </button>
                                <button
                                    className="btn btn-circle"
                                    onClick={() => scrollToSlide((idx + 1) % slides.length)}
                                    aria-label="Next slide"
                                >
                                    ❯
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </MotionWrapper>
        </div>
    );
};

export default Carousel;