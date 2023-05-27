import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
    {
        id: 1,
        name: 'Jane Doe',
        thumbnail: '/assets/test-1.png',
        rating: 4.5,
        field: 'Engineering',
    },
    {
        id: 2,
        name: 'Neveh',
        thumbnail: '/assets/test-2.png',
        rating: 3.8,
        field: 'Medicine',
    },
    {
        id: 3,
        name: 'Max',
        thumbnail: '/assets/test-3.png',
        rating: 3.8,
        field: 'Computer Science',
    },
    {
        id: 4,
        name: 'Rob Maxwell',
        thumbnail: '/assets/test-1.png',
        rating: 3.8,
        field: 'Real Estate',
    },
    {
        id: 5,
        name: 'Gol D Roger',
        thumbnail: '/assets/test-2.png',
        rating: 3.8,
        field: 'Pharma',
    },
    {
        id: 6,
        name: 'John Wick',
        thumbnail: '/assets/test-3.png',
        rating: 3.8,
        field: 'Pyschology',
    },
];

const Testimonials = () => {
    const renderStars = (rating) => {
        const starCount = Math.floor(rating);
        const stars = [];

        for (let i = 0; i < 5; i++) {
            if (i < starCount) {
                stars.push(<img src="/assets/icons/star-filled.svg" key={i} alt="Filled star" />);
            } else {
                stars.push(<img src="/assets/icons/star-outline.svg" key={i} alt="Outline star" />);
            }
        }

        return stars;
    };

    return (
        <section className="px-4 py-20">
            <div className="md:text-center">
                <h2 className="text-4xl md:text-5xl font-medium mb-4">
                    What <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5367FF] to-[#00D09C]">People Say</span> About Us
                </h2>
                <p className="mb-6 md:mb-20">Aliff is a global education consultant based in mumbai that specialises in helps students choose the Right Course, Right College, Right Country, anywhere in the world.</p>
            </div>
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {reviews.map((reviewer) => (
                    <SwiperSlide key={reviewer.id}>
                        <div className="relative mx-auto">
                            <img src={reviewer.thumbnail} alt="" />
                            <div className="absolute bottom-7 left-0 right-0 text-center">
                                <p className="w-max mx-auto rounded mb-4 bg-blue-600 text-white px-6">
                                    {reviewer.field}
                                </p>
                                <div className="flex justify-center mt-2">
                                    {renderStars(reviewer.rating)}
                                </div>
                                <p className="text-white">{reviewer.name}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
