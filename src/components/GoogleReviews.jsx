import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Button from './Button';

const GoogleReviews = () => {

    const dummyData = [
        {
            id: 1,
            name: 'Joe Lawson',
            username: '@joelawson',
            time: '10 Min ago',
            rating: 5,
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis mauris blandit sollicitudin amet. Tellus dignissim amet, dictum quis pulvinar. Hendrerit imperdiet et cursus tempor, sed amet. Facilisis phasellus eu nulla felis in mattis.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            username: '@janesmith',
            time: '20 Min ago',
            rating: 4,
            review: 'Amet consectetur adipiscing elit. Mollis mauris blandit sollicitudin amet. Tellus dignissim amet, dictum quis pulvinar. Hendrerit imperdiet et cursus tempor, sed amet. Facilisis phasellus eu nulla felis in mattis.',
        },
        {
            id: 3,
            name: 'John Doe',
            username: '@johndoe',
            time: '30 Min ago',
            rating: 3,
            review: 'Dolor sit amet, consectetur adipiscing elit. Mollis mauris blandit sollicitudin amet. Tellus dignissim amet, dictum quis pulvinar. Hendrerit imperdiet et cursus tempor, sed amet. Facilisis phasellus eu nulla felis in mattis.',
        },
        {
            id: 4,
            name: 'Sarah Johnson',
            username: '@sarahjohnson',
            time: '40 Min ago',
            rating: 5,
            review: 'Sit amet, consectetur adipiscing elit. Mollis mauris blandit sollicitudin amet. Tellus dignissim amet, dictum quis pulvinar. Hendrerit imperdiet et cursus tempor, sed amet. Facilisis phasellus eu nulla felis in mattis.',
        },
        {
            id: 5,
            name: 'Michael Brown',
            username: '@michaelbrown',
            time: '50 Min ago',
            rating: 4,
            review: 'Ipsum dolor sit amet, consectetur adipiscing elit. Mollis mauris blandit sollicitudin amet. Tellus dignissim amet, dictum quis pulvinar. Hendrerit imperdiet et cursus tempor, sed amet. Facilisis phasellus eu nulla felis in mattis.',
        },
        {
            id: 6,
            name: 'Emily Wilson',
            username: '@emilywilson',
            time: '1 hour ago',
            rating: 3,
            review: 'Consectetur adipiscing elit. Mollis mauris blandit sollicitudin amet. Tellus dignissim amet, dictum quis pulvinar. Hendrerit imperdiet et cursus tempor, sed amet. Facilisis phasellus eu nulla felis in mattis.',
        },
        {
            id: 7,
            name: 'David Thompson',
            username: '@davidthompson',
            time: '2 hours ago',
            rating: 5,
            review: 'Adipiscing elit. Mollis mauris blandit sollicitudin amet. Tellus dignissim amet, dictum quis pulvinar. Hendrerit imperdiet et cursus tempor, sed amet. Facilisis phasellus eu nulla felis in mattis.',
        },
    ];



    return (
        <section className='px-4 md:px-0 py-20'>
            <h2 className="md:text-center text-5xl font-medium mb-4">
                Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5367FF] to-[#00D09C]">Google </span>
                Reviews
            </h2>
            <p className='md:text-center mb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, sapien cursus sollicitudin eget fringilla.</p>

            <div className='border p-4 rounded-xl space-y-6 md:space-y-0 md:flex md:justify-between md:items-center mb-8'>
                <div>
                    <div className='flex gap-2 items-center'>
                        <img src="/assets/icons/google.svg" alt="" />
                        <h3 className='font-semibold w-full'>Google Rating</h3>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span className='font-semibold'>4.9</span>
                        <img src="/assets/icons/5stars.svg" alt="" />
                        <p className='text-sm'>- 58 Ratings</p>
                    </div>
                </div>
                <Button btnText='Write a review' />
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                modules={[Pagination]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {dummyData.map((review) => (
                    <SwiperSlide key={review.id}>
                        <div className='border rounded-2xl p-6'>
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <img src="./assets/people/joe.png" alt="" />
                                    <div>
                                        <h4>{review.name}</h4>
                                        <div className="text-sm text-gray-600">
                                            <span>{review.username}</span> - <span>{review.time}</span>
                                        </div>
                                    </div>
                                </div>
                                <img src="assets/icons/google.svg" alt="" />
                            </div>
                            <img src="assets/icons/5stars.svg" className="mx-auto my-4" alt="" />
                            <p>{review.review}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    );
};

export default GoogleReviews;
