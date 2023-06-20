import React from 'react';
import './Testimonial.css'
import { Swiper,SwiperSlide } from 'swiper/react';
import arif2 from '../../../assets/ARIF 2.jpg'
import arif3 from '../../../assets/ARIF 3.jpg'
import arif4 from '../../../assets/ARIF 4.jpg'
import 'swiper/swiper-bundle.css'
import { Pagination } from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css'
import { themeContext } from '../Toggle/Context';
import { useContext } from 'react';

const Testimonial = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
   const clients=[
        {
            img:arif2,
            review:"ey this is arif ,this is very exating work from. he is very decent by Arif hossain"
        },
        {
            img:arif3,
            review:"ey this is arif .im very exited for our most of the faverite color of mergendy ccolor,this is very exating work from. he is very decent getByRole."
        },
        {
            img:arif4,
            review:"ey this is arif ,this is very exating work from. he is very decent getByRole."
        },
    ]
    return (
        <div className='t-wrapper' id='Testimonials'>
            <div className='t-heading'>
            <span >Clients always get</span><br/>
            <span>Exeptional Work</span><br/>
            <span>from me...</span>
            <div className='blur t-blur1' style={{background:'var(--purple)'}}></div>
            <div className='blur t-blur1' style={{background:'var(--skyblue)'}}></div>
            </div>

            {/* slider */}

           <Swiper
           
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}
           >
             {
                clients
                .map((client,index)=>{
                    return(
                        <SwiperSlide key={index}>
                        <div className='testimonial' >
                        <img src={client.img} alt=''/>
                            <span>{client.review}</span>
                        </div>
                        
                            

                        </SwiperSlide>
                    );
                }
                )
            }
           </Swiper>

        </div>
    );
};

export default Testimonial;