import "./media.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


export const MediaCard = () =>{
    return (
        <div className="media__card">
            <h2>Lorem ipsum dolor.</h2>

            <div className="media__card-content">
                <div className="card__content-img">
                    <img src="/assets/images/media.png" alt=""/>
                    <div className="card__content-img-tag completed">completed</div>
                </div>
                <p>Token issuance and tokenomics
                    development <br/>
                    development</p>
            </div>
        </div>
    )
}

export const MediaBody = () => {
    return (
        <main className="media-slide">
            <h1>Media</h1>

            <div className="media-slider">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".media__arrow--right",
                        prevEl: ".media__arrow--left",
                    }}
                    loop={true}
                >
                    {[...Array(5)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <MediaCard />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="media__arrows">
                <img src="/assets/icons/media__arrow--left.svg" alt="" className="media__arrow media__arrow--left"/>
                <img src="/assets/icons/media__arrow--right.svg" alt="" className="media__arrow media__arrow--right"/>
            </div>
        </main>
    );
}


export const MediaSection = () => {
    return(
        <section className="wrapper">
            <MediaBody/>
        </section>
    )
}