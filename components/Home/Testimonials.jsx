import styles from "@/styles/Home/Testimonials.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Navigation, Pagination } from "swiper";

export default function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <div className="bg"></div>
      <div className="container">
        <div className="testimonials__title">RƏYLƏR</div>
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          modules={[Navigation, Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
              centeredSlides: true
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          pagination={{ clickable: true }}
          className="swiper__testimonial"
          loop={true}
        >
          <SwiperSlide>
            <div className="testimonial">
              <img src="/images/testimonial.png" alt="Logo" />
              <div className="testimonial__info">
                <div className="testimonial__title">Kənan Əhmədov</div>
                <p className="testimonial__description">
                  “İşgüzar nüfuzumun müdafiəsi üçün Emin bəyə müraciət etdim.
                  Məhkəmədə əvvəlcə haqsızlıqla üzləşsəm də, sonradan hüquqlarım
                  vəkilimin dəstəyi ilə bərpa olundu. Təşəkkürümü bildirirəm.”
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <img src="/images/testimonial.png" alt="Logo" />
              <div className="testimonial__info">
                <div className="testimonial__title">Kənan Əhmədov</div>
                <p className="testimonial__description">
                  “İşgüzar nüfuzumun müdafiəsi üçün Emin bəyə müraciət etdim.
                  Məhkəmədə əvvəlcə haqsızlıqla üzləşsəm də, sonradan hüquqlarım
                  vəkilimin dəstəyi ilə bərpa olundu. Təşəkkürümü bildirirəm.”
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <img src="/images/testimonial.png" alt="Logo" />
              <div className="testimonial__info">
                <div className="testimonial__title">Kənan Əhmədov</div>
                <p className="testimonial__description">
                  “İşgüzar nüfuzumun müdafiəsi üçün Emin bəyə müraciət etdim.
                  Məhkəmədə əvvəlcə haqsızlıqla üzləşsəm də, sonradan hüquqlarım
                  vəkilimin dəstəyi ilə bərpa olundu. Təşəkkürümü bildirirəm.”
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <img src="/images/testimonial.png" alt="Logo" />
              <div className="testimonial__info">
                <div className="testimonial__title">Kənan Əhmədov</div>
                <p className="testimonial__description">
                  “İşgüzar nüfuzumun müdafiəsi üçün Emin bəyə müraciət etdim.
                  Məhkəmədə əvvəlcə haqsızlıqla üzləşsəm də, sonradan hüquqlarım
                  vəkilimin dəstəyi ilə bərpa olundu. Təşəkkürümü bildirirəm.”
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
