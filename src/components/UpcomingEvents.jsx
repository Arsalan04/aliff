import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Button from './Button';

const upcomingEvents = [
    {
        country: 'Canada',
        date: '26 July | 5:00pm - 6:00pm',
        registered: 537,
        program: 'Masters',
        thumbnail: '/assets/event-card-1.png',
    },
    {
        country: 'United States',
        date: '15 August | 3:30pm - 4:30pm',
        registered: 452,
        program: 'Masters',
        thumbnail: '/assets/event-card-2.png',
    },
    {
        country: 'United Kingdom',
        date: '10 September | 6:00pm - 7:00pm',
        registered: 382,
        program: 'MBA',
        thumbnail: '/assets/event-card-3.png',
    },
    {
        country: 'Australia',
        date: '28 September | 7:30pm - 8:30pm',
        registered: 265,
        program: 'MBA',
        thumbnail: '/assets/event-card-1.png',
    },
    {
        country: 'Germany',
        date: '12 October | 4:00pm - 5:00pm',
        registered: 319,
        program: 'Masters',
        thumbnail: '/assets/event-card-2.png',
    },
    {
        country: 'France',
        date: '5 November | 5:30pm - 6:30pm',
        registered: 231,
        program: 'MBA',
        thumbnail: '/assets/event-card-3.png',
    },
    {
        country: 'India',
        date: '20 November | 6:30pm - 7:30pm',
        registered: 621,
        program: 'Masters',
        thumbnail: '/assets/event-card-1.png',
    },
    {
        country: 'India',
        date: '10 December | 4:30pm - 5:30pm',
        registered: 415,
        program: 'MBA',
        thumbnail: '/assets/event-card-2.png',
    },
];




const UpcomingEvents = () => {
    const [selectedCountry, setSelectedCountry] = useState('All Countries');
    const [selectedProgram, setSelectedProgram] = useState('All Programs');
    const [selectedTopic, setSelectedTopic] = useState('All Topics');

    const filteredEvents = upcomingEvents.filter((event) => {
        const countryMatch =
            selectedCountry === 'All Countries' || event.country === selectedCountry;
        const programMatch =
            selectedProgram === 'All Programs' || event.program === selectedProgram;
        const topicMatch =
            selectedTopic === 'All Topics' || event.topic === selectedTopic;

        return countryMatch && programMatch && topicMatch;
    });

    return (
        <section className="px-4 py-20">

            <h2 className="text-center text-4xl md:text-5xl font-medium mb-12 md:mb-20">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5367FF] to-[#00D09C]">Upcoming Events</span>
            </h2>
            <div className="md:flex md:gap-8 md:justify-center mb-8 md:space-y-0">
                <div className="mb-4 md:mb-0 w-full md:w-3/12">
                    <select
                        id="countrySelect"
                        name="countrySelect"
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                    >
                        <option value="All Countries">All Countries</option>
                        <option value="India">India</option>
                        <option value="Canada">Canada</option>
                    </select>
                </div>
                <div className="mb-4 md:mb-0 w-full md:w-3/12">
                    <select
                        id="programSelect"
                        name="programSelect"
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                    >
                        <option value="All Programs">All Programs</option>
                        <option value="Masters">Masters</option>
                        <option value="Masters">MBA</option>
                    </select>
                </div>
                <div className="mb-4 md:mb-0 w-full md:w-3/12">
                    <select
                        id="topicSelect"
                        name="topicSelect"
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                    >
                        <option value="All Topics">All Topics</option>
                    </select>
                </div>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
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
                {filteredEvents.map((event, index) => (
                    <SwiperSlide key={index}>
                        <div className="border shadow-md bg-white rounded-2xl overflow-hidden mb-12">
                            <img src={event.thumbnail} alt="" />
                            <div className="p-4 space-y-4">
                                <div className='flex gap-4 text-sm'>
                                    <span className='bg-blue-100 px-3 rounded-full'>{event.country}</span>
                                    <span className='bg-blue-100 px-3 rounded-full'>{event.program}</span>
                                </div>
                                <p className="text-sm">{event.date}</p>
                                <p className="text-sm"><span className='font-bold'>{event.registered}+</span> Registered</p>
                                <Button btnText="Book a free seat" fullwidth={true} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default UpcomingEvents;
