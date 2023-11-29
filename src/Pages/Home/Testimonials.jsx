import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {AiOutlineStar} from 'react-icons/ai'
import {AiFillStar} from  'react-icons/ai';
import Rating from 'react-rating';
import { useState } from 'react';

const Testimonials = () => {
    const [reviews,setReviews] = useState([]);
    

useState(()=>{
    fetch('/Json/Reviews.json')
    .then(res => res.json())
    .then(data => setReviews(data))
},[])

    return (
        <div>
            <h1 className='text-4xl text-center text-white font-semibold font-inter'>What Our Clients Are Saying</h1>
          
<div className='py-10'>
      <Swiper
        // slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // Add more breakpoints as needed
        }}
        modules={[Pagination]}
        
        className="mySwiper"
      >
     {
        reviews?.map((review,index)=>{

        return <SwiperSlide key={index}>
           <div className='p-5 rounded-lg bg-white text-black font-pop shadow-md h-[400px]'>
         <img src={review.photo} alt="" className='w-20 h-20 rounded-full' />
         <h2 className='text-2xl text-black font-semibold py-2'>{review.client_name} - <span className='text-[20px] text-blue-600'>{review.profession}</span></h2>
         <Rating initialRating={review.rating} readonly  emptySymbol={<AiOutlineStar className='text-xl text-amber-400'></AiOutlineStar>}
          fullSymbol={<AiFillStar className='text-xl text-amber-500'></AiFillStar>}/>

         <p>{review.review}</p>
           </div>
        </SwiperSlide>
        })
     }
        
      </Swiper>
</div>
        </div>
    );
}

export default Testimonials;
