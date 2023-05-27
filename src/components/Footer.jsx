const Footer = () => {
    return (

        <footer className="px-4 md:px-0">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-12">
                    <div className="col-span-2 md:col-span-4">
                        <h2 className="mb-6 font-semibold text-blue-700 ">Get in touch</h2>
                        <p className="mb-4">Stay connected with us and let’s hear more stories scholarships and education</p>



                        <div className="relative flex">
                            <input className="bg-blue-100 px-4 py-2 w-full" type="text" placeholder="Email address" />
                            <a className="h-[75%] mr-1 absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-2">Send</a>
                        </div>






                    </div>
                    <div className="md:col-span-2">
                        <h2 className="mb-6 font-semibold text-blue-700">Home</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline text-sm">About Us</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-sm">Search</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-sm">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="mb-6 font-semibold text-blue-700 ">Services</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-sm">Career Counselling</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-sm">Study Abroad Counselling</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-sm">IELTS Coaching</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-sm">Edge Out</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="mb-6 font-semibold text-blue-700">Resources</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-sm">Aliff Blogs</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-sm">Aliff TV</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-sm">Student Enquiry Form</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="mb-6 font-semibold text-blue-700">Useful Links</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-sm">Terms & Services</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-sm">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline text-sm">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-4 py-6 border-t-2 border-blue-700 md:flex md:items-center md:justify-between">
                    <span className="text-gray-500 sm:text-center">Copyrighted © 2023 <a href="https://google.com/">Aliff Inc</a>
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-blue-700">
                            <img src="/assets/icons/insta.png" alt="" className="w-5 h-5" />
                            <span className="sr-only">Instagram page</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-700">
                            <img src="/assets/icons/insta.png" alt="" className="w-5 h-5" />
                            <span className="sr-only">Instagram page</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-700">
                            <img src="/assets/icons/insta.png" alt="" className="w-5 h-5" />
                            <span className="sr-only">Instagram page</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-700">
                            <img src="/assets/icons/insta.png" alt="" className="w-5 h-5" />
                            <span className="sr-only">Instagram page</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-700 ">
                            <img src="/assets/icons/insta.png" alt="" className="w-5 h-5" />
                            <span className="sr-only">Instagram page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer