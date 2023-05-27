import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css'

const MySlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        rows: 2,
    };

    return (
        <div>
            <h2 className='text-center my-20'>My Slider</h2>
            <Slider {...settings} className=''>
                <div className='border rounded-2xl p-6'>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <img src="./assets/people/joe.png" alt="" />
                            <div>
                                <h4>Joe Lawson</h4>
                                <div className="text-sm text-gray-600">
                                    <span>@joelawson</span> - <span>10 Min ago</span>
                                </div>
                            </div>
                        </div>
                        <img src="assets/icons/google.svg" alt="" />
                    </div>
                    <img src="assets/icons/5stars.svg" className="mx-auto my-4" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis mauris blandit sollicitudin amet. Tellus dignissim amet, dictum quis pulvinar. Hendrerit imperdiet et cursus tempor, sed amet. Facilisis phasellus eu nulla felis in mattis.</p>
                </div>
                <div className='border rounded-2xl p-6'>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <img src="./assets/people/joe.png" alt="" />
                            <div>
                                <h4>Joe Lawson</h4>
                                <div className="text-sm text-gray-600">
                                    <span>@joelawson</span> - <span>10 Min ago</span>
                                </div>
                            </div>
                        </div>
                        <img src="assets/icons/google.svg" alt="" />
                    </div>
                    <img src="assets/icons/5stars.svg" className="mx-auto my-4" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis mauris blandit sollicitudin amet. Tellus dignissim amet, dictum quis pulvinar. Hendrerit imperdiet et cursus tempor, sed amet. Facilisis phasellus eu nulla felis in mattis.</p>
                </div>
                <div className='border rounded-2xl p-6'>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <img src="./assets/people/joe.png" alt="" />
                            <div>
                                <h4>Joe Lawson</h4>
                                <div className="text-sm text-gray-600">
                                    <span>@joelawson</span> - <span>10 Min ago</span>
                                </div>
                            </div>
                        </div>
                        <img src="assets/icons/google.svg" alt="" />
                    </div>
                    <img src="assets/icons/5stars.svg" className="mx-auto my-4" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis mauris blandit sollicitudin amet. Tellus dignissim amet, dictum quis pulvinar. Hendrerit imperdiet et cursus tempor, sed amet. Facilisis phasellus eu nulla felis in mattis.</p>
                </div>
                <div className='border rounded-2xl p-6'>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <img src="./assets/people/joe.png" alt="" />
                            <div>
                                <h4>Joe Lawson</h4>
                                <div className="text-sm text-gray-600">
                                    <span>@joelawson</span> - <span>10 Min ago</span>
                                </div>
                            </div>
                        </div>
                        <img src="assets/icons/google.svg" alt="" />
                    </div>
                    <img src="assets/icons/5stars.svg" className="mx-auto my-4" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis mauris blandit sollicitudin amet. Tellus dignissim amet, dictum quis pulvinar. Hendrerit imperdiet et cursus tempor, sed amet. Facilisis phasellus eu nulla felis in mattis.</p>
                </div>
                <div className='border rounded-2xl p-6'>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <img src="./assets/people/joe.png" alt="" />
                            <div>
                                <h4>Joe Lawson</h4>
                                <div className="text-sm text-gray-600">
                                    <span>@joelawson</span> - <span>10 Min ago</span>
                                </div>
                            </div>
                        </div>
                        <img src="assets/icons/google.svg" alt="" />
                    </div>
                    <img src="assets/icons/5stars.svg" className="mx-auto my-4" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis mauris blandit sollicitudin amet. Tellus dignissim amet, dictum quis pulvinar. Hendrerit imperdiet et cursus tempor, sed amet. Facilisis phasellus eu nulla felis in mattis.</p>
                </div>
                <div className='border rounded-2xl p-6'>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <img src="./assets/people/joe.png" alt="" />
                            <div>
                                <h4>Joe Lawson</h4>
                                <div className="text-sm text-gray-600">
                                    <span>@joelawson</span> - <span>10 Min ago</span>
                                </div>
                            </div>
                        </div>
                        <img src="assets/icons/google.svg" alt="" />
                    </div>
                    <img src="assets/icons/5stars.svg" className="mx-auto my-4" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis mauris blandit sollicitudin amet. Tellus dignissim amet, dictum quis pulvinar. Hendrerit imperdiet et cursus tempor, sed amet. Facilisis phasellus eu nulla felis in mattis.</p>
                </div>
                <div className='border rounded-2xl p-6'>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <img src="./assets/people/joe.png" alt="" />
                            <div>
                                <h4>Joe Lawson</h4>
                                <div className="text-sm text-gray-600">
                                    <span>@joelawson</span> - <span>10 Min ago</span>
                                </div>
                            </div>
                        </div>
                        <img src="assets/icons/google.svg" alt="" />
                    </div>
                    <img src="assets/icons/5stars.svg" className="mx-auto my-4" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis mauris blandit sollicitudin amet. Tellus dignissim amet, dictum quis pulvinar. Hendrerit imperdiet et cursus tempor, sed amet. Facilisis phasellus eu nulla felis in mattis.</p>
                </div>
                <div className='border rounded-2xl p-6'>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <img src="./assets/people/joe.png" alt="" />
                            <div>
                                <h4>Joe Lawson</h4>
                                <div className="text-sm text-gray-600">
                                    <span>@joelawson</span> - <span>10 Min ago</span>
                                </div>
                            </div>
                        </div>
                        <img src="assets/icons/google.svg" alt="" />
                    </div>
                    <img src="assets/icons/5stars.svg" className="mx-auto my-4" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis mauris blandit sollicitudin amet. Tellus dignissim amet, dictum quis pulvinar. Hendrerit imperdiet et cursus tempor, sed amet. Facilisis phasellus eu nulla felis in mattis.</p>
                </div>
                <div className='border rounded-2xl p-6'>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <img src="./assets/people/joe.png" alt="" />
                            <div>
                                <h4>Joe Lawson</h4>
                                <div className="text-sm text-gray-600">
                                    <span>@joelawson</span> - <span>10 Min ago</span>
                                </div>
                            </div>
                        </div>
                        <img src="assets/icons/google.svg" alt="" />
                    </div>
                    <img src="assets/icons/5stars.svg" className="mx-auto my-4" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis mauris blandit sollicitudin amet. Tellus dignissim amet, dictum quis pulvinar. Hendrerit imperdiet et cursus tempor, sed amet. Facilisis phasellus eu nulla felis in mattis.</p>
                </div>
                <div className='border rounded-2xl p-6'>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <img src="./assets/people/joe.png" alt="" />
                            <div>
                                <h4>Joe Lawson</h4>
                                <div className="text-sm text-gray-600">
                                    <span>@joelawson</span> - <span>10 Min ago</span>
                                </div>
                            </div>
                        </div>
                        <img src="assets/icons/google.svg" alt="" />
                    </div>
                    <img src="assets/icons/5stars.svg" className="mx-auto my-4" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis mauris blandit sollicitudin amet. Tellus dignissim amet, dictum quis pulvinar. Hendrerit imperdiet et cursus tempor, sed amet. Facilisis phasellus eu nulla felis in mattis.</p>
                </div>
            </Slider>
        </div>
    );
};

export default MySlider;
