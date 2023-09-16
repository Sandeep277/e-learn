import Testimonial from '../../components/testimonial/Testimonial'
import './Testimonials.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className="testimonial">
                <p>Testimonials</p>
                <p style={{ fontSize: '20px', fontWeight: '500' }}>Our Cousomer</p>
                <p style={{ fontSize: '35px', fontWeight: '500' }}><span style={{ color: 'blue' }}>Testimonials</span></p>
            </div>
            <div className="testimonialbox">
                <Swiper>
                    <SwiperSlide><Testimonial/></SwiperSlide>
                    <SwiperSlide><Testimonial/></SwiperSlide>
                    <SwiperSlide><Testimonial/></SwiperSlide>
                    <SwiperSlide><Testimonial/></SwiperSlide>
                    <SwiperSlide><Testimonial/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials
