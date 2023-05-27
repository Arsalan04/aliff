import Button from "./Button"

const StudentEnquiryForm = () => {
    return (
        <section className="py-4 md:py-20 md:flex gap-20">


            <div className="hidden md:block md:w-5/12 rounded-xl relative bg-gradient-to-br from-[#5367FF] to-[#00D09C]">
                <div className="bg-white text-center rounded-xl px-8 py-8 shadow-xl absolute left-7 -right-8 top-7 bottom-8">
                    <img src="/assets/3.png" className="mb-6 mx-auto" alt="" />
                    <h3 className="text-2xl mb-4 font-bold text-gray-800">Love to Hear From You</h3>
                    <p className="text-gray-600 text-sm leading-7">
                        When planning to study abroad, there are a thousand questions that come to your mind. Will I get through the University of my Dreams? How will I survive the years abroad alone without family? What can I do to excel in my college? How will I sustain the finances? These and a million other questions are bound to keep your mind occupied. Your parents and family will also be pondering over a lot of things when it comes to your study abroad plans. These worries and thoughts may seem endless, but dont let them bother you. Just speak to us, and we will help you find the answers and solutions you need.
                    </p>
                </div>
            </div>


            <div className="mx-auto md:w-7/12">
                <h2 className="text-center text-5xl font-medium mb-4 md:mb-12">
                    Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5367FF] to-[#00D09C]">Enquiry Form</span>
                </h2>

                <p className="text-center mb-12 block md:hidden">We would love to hear from you!</p>

                <form className="">

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="text-xs md:text-base font-normal block mb-2" htmlFor="firstName">Enter Name</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label className="text-xs md:text-base font-normal block mb-2" htmlFor="email">Enter Email Address</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email address"
                            />
                        </div>


                    </div>

                    <div className="grid grid-cols-12 gap-4 mb-4">

                        <div className="col-span-5">
                            <label className="text-xs md:text-base font-normal block mb-2" htmlFor="firstName">Enter Mobile Number</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="+91"
                            />
                        </div>

                        <div className="col-span-7">
                            <label htmlFor="mySelect" className="block mb-2">Select State</label>
                            <select id="mySelect" name="mySelect"
                                className="w-full px-3 py-2 border border-gray-300 rounded">
                                <option value="option1" selected>Maharashtra</option>
                                <option value="option2">Kerela</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>


                    </div>


                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="text-xs md:text-base font-normal block mb-2" htmlFor="firstName">Select City</label>
                            <select id="mySelect" name="mySelect"
                                className="w-full px-3 py-2 border border-gray-300 rounded">
                                <option value="option1">Option 1</option>
                                <option value="option2" selected>Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs md:text-base font-normal block mb-2" htmlFor="email">Select Course</label>
                            <select id="mySelect" name="mySelect"
                                className="w-full px-3 py-2 border border-gray-300 rounded">
                                <option value="option1">Option 1</option>
                                <option value="option2" selected>Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>


                    </div>


                    <div className="mb-4">
                        <label htmlFor="mySelect" className="block">Select Specialisation</label>
                        <select id="mySelect" name="mySelect"
                            className="w-full px-3 py-2 border border-gray-300 rounded">
                            <option value="option1">Option 1</option>
                            <option value="option2" selected>Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>


                    <div className="mb-4">
                        <label htmlFor="mySelect" className="block">Select Country</label>
                        <select id="mySelect" name="mySelect"
                            className="w-full px-3 py-2 border border-gray-300 rounded">
                            <option value="option1">Option 1</option>
                            <option value="option2" selected>India</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>


                    <div className="grid grid-cols-12 gap-4 mb-4">
                        <div className="col-span-7">
                            <label className="text-xs md:text-base font-normal block mb-2" htmlFor="firstName">Enter Highest Qualification</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="col-span-5">
                            <label className="text-xs md:text-base font-normal block mb-2" htmlFor="email">Enter Budget</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email address"
                            />
                        </div>

                    </div>

                    <div className="flex gap-2 items-center">
                        <input type="checkbox" name="privacy-policy" id="privacy-policy"
                            className="text-white rounded-full accent-emerald-500/25" />
                        <label className="text-xs md:text-base font-normal mb-4" htmlFor="privacy-policy">I agree to the <a className="underline text-green-500">privacy policy</a></label>
                    </div>


                    <Button btnText="Submit" />
                </form>
            </div>

        </section>
    )
}

export default StudentEnquiryForm


