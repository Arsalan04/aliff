import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CardCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <Carousel responsive={responsive} showDots={true}>


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


        </Carousel>
    );
};

export default CardCarousel;
