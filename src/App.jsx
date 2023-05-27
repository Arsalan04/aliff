// import Button from "./components/Button";
import { useState } from "react";
import FAQAccordion from "./components/FAQAccordian";
import Footer from "./components/Footer";
import GoogleReviews from "./components/GoogleReviews";
import Milestones from "./components/Milestones";
import Navbar from "./components/Navbar";
import OfferStrip from "./components/OfferStrip";
import StudentEnquiryForm from "./components/StudentEnquiryForm";
import Testimonials from "./components/Testimonials";
import UpcomingEvents from "./components/UpcomingEvents";
import Modal from "./components/Modal";
import Button from "./components/Button";


export default function App() {

  const [isOfferShown, setIsOfferShown] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClose = () => {
    setIsOfferShown(false);
  };

  const openModal = () => {
    setIsModalOpen(true)
  };

  const closeModal = () => {
    setIsModalOpen(false)
  };


  return (
    <div className="App">

      {isOfferShown && <OfferStrip handleClose={handleClose} openModal={openModal} />}
      {isModalOpen && <Modal closeModal={closeModal} />}

      <div className="max-w-6xl mx-auto">
        <Navbar />




        <StudentEnquiryForm />

        <Milestones />

        {/* ========WHY US======== */}
        <section className="px-4 md:px-0">

          <div className="md:text-center">
            <h2 className="text-5xl font-medium mb-4">
              Why Student. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5367FF] to-[#00D09C]">Abroad Study.</span>
            </h2>
            <p className="mb-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, sapien cursus sollicitudin eget fringilla.
            </p>
          </div>


          {/* SPLIT 1*/}
          <div className="px-4 md:px-0 md:flex md:gap-24 mb-16 md:mb-32">
            <img className="mb-6 md:mb-0" src="/assets/illustration-01.png" alt="" />

            <div>
              <h3 className="text-3xl md:text-4xl mb-5">Know universities that fit you right!</h3>
              <p className="text-xl text-slate-700 mb-4 md:mb-6">Your preferences, your profile and your grades. That’s all IT needs. Yes! We use an algorithm equipped with our experience and expertise to tailor-make a list of ideal universities for your abroad education.</p>
              <div>
                <div className="flex items-center mb-2 md:mb-4">
                  <span className="mr-2 bg-blue-600 p-2 rounded-full">
                    <img src="/assets/icons/live.svg" />
                  </span>
                  <p className="text-xl md:text-2xl">Live</p>
                </div>
                <div className="flex items-center mb-2 md:mb-4">
                  <span className="mr-2 bg-blue-600 p-2 rounded-full">
                    <img src="/assets/icons/community.svg" />
                  </span>
                  <p className="text-xl md:text-2xl">Community</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 bg-blue-600 p-2 rounded-full">
                    <img src="/assets/icons/events.svg" />
                  </span>
                  <p className="text-xl md:text-2xl">Events</p>
                </div>
              </div>
            </div>
          </div>

          {/* SPLIT 2*/}
          <div className="px-4 md:px-0 md:flex md:flex-row-reverse md:items-center md:gap-24 mb-16 md:mb-32">
            <img className="mb-6 md:mb-0" src="/assets/illustration-02.png" alt="" />
            <div>
              <h3 className="text-3xl md:text-4xl mb-5">Connect with aspirants like you!</h3>
              <p className="text-xl text-slate-700 mb-4 md:mb-6">We like to bring people of similar interests together. Yocket Connect is a community of help and guidance formed by the aspirants, alumni and counsellors. So, start networking and find someone with who shares your aspiration.</p>

              <div>
                <div className="flex items-center mb-2 md:mb-4">
                  <span className="mr-2 bg-blue-600 p-2 rounded-full">
                    <img src="/assets/icons/live.svg" />
                  </span>
                  <p className="text-xl md:text-2xl">Live</p>
                </div>
                <div className="flex items-center mb-2 md:mb-4">
                  <span className="mr-2 bg-blue-600 p-2 rounded-full">
                    <img src="/assets/icons/community.svg" />
                  </span>
                  <p className="text-xl md:text-2xl">Community</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 bg-blue-600 p-2 rounded-full">
                    <img src="/assets/icons/events.svg" />
                  </span>
                  <p className="text-xl md:text-2xl">Events</p>
                </div>
              </div>


            </div>


          </div>

          {/* SPLIT 3*/}
          <div className="px-4 md:px-0 md:flex md:gap-24 mb-16 md:mb-32">
            <img className="mb-6 md:mb-0" src="/assets/illustration-03.png" alt="" />

            <div>
              <h3 className="text-3xl md:text-4xl mb-5">Keep track of your aspirations.</h3>
              <p className="text-xl text-slate-700 mb-4 md:mb-6">A place where we give you some space! Space for you to apply for universities, track your applications, add task reminders, upload all your documents and even plan your finances for overseas education.</p>
              <div>
                <div className="flex items-center mb-2 md:mb-4">
                  <span className="mr-2 bg-blue-600 p-2 rounded-full">
                    <img src="/assets/icons/live.svg" />
                  </span>
                  <p className="text-xl md:text-2xl">Live</p>
                </div>
                <div className="flex items-center mb-2 md:mb-4">
                  <span className="mr-2 bg-blue-600 p-2 rounded-full">
                    <img src="/assets/icons/community.svg" />
                  </span>
                  <p className="text-xl md:text-2xl">Community</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 bg-blue-600 p-2 rounded-full">
                    <img src="/assets/icons/events.svg" />
                  </span>
                  <p className="text-xl md:text-2xl">Events</p>
                </div>
              </div>
            </div>
          </div>

          {/* SPLIT 4*/}
          <div className="px-4 md:px-0 md:flex md:gap-24 md:mt-32">
            <img className="mb-6 md:mb-0" src="/assets/illustration-04.png" alt="" />

            <div>
              <h2 className="text-4xl md:text-5xl font-medium mb-5">
                Why Should <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5367FF] to-[#00D09C]">Prefer Aliff</span>
              </h2>
              <p className="text-slate-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod etiam ligula facilisis tortor. Tincidunt habitant venenatis adipiscing vestibulum sapien, neque. Vel habitant placerat leo nibh. Elit semper neque, nunc aenean. Diam tincidunt lorem malesuada odio nisi, pellentesque non feugiat.</p>


              <div className="grid grid-cols-2 space-y-4 mb-4">

                <div className="flex gap-1 items-center">
                  <img src="/assets/icons/check_circle.svg" alt="" />
                  <span className="text-sm md:text-base">More Accurate</span>
                </div>
                <div className="flex gap-1 items-center self-center">
                  <img src="/assets/icons/check_circle.svg" alt="" />
                  <span className="text-sm md:text-base">Easy Process</span>
                </div>
                <div className="flex gap-1 items-center">
                  <img src="/assets/icons/check_circle.svg" alt="" />
                  <span className="text-sm md:text-base">Track Process</span>
                </div>
                <div className="flex gap-1 items-center">
                  <img src="/assets/icons/check_circle.svg" alt="" />
                  <span className="text-sm md:text-base">24/7 Service</span>
                </div>

              </div>

              <Button btnText="Know More" />


            </div>
          </div>

        </section>

        <GoogleReviews />
        <Testimonials />
        <FAQAccordion />


        {/* ========EVENTS HERO======== */}
        <section className="px-4 md:px-0 py-20">
          <div className="md:grid md:gap-24 md:grid-cols-2 ">

            <div className="mb-16 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-medium mb-4">Live events for study abroad aspirants.</h1>
              <p className="text-lg md:text-2xl mb-10">Hear from expert speakers</p>
              <div className="grid gap-8 grid-cols-3 justify-between items-center">
                <div>
                  <img src="/assets/icons/live-event.svg" className="mb-8" alt="" />
                  <p>Hear From Top Experts & Speakers</p>
                </div>
                <div>
                  <img src="/assets/icons/gift-card.svg" className="mb-8" alt="" />
                  <p>Exclusive Goodies For Attendees</p>
                </div>
                <div>
                  <img src="/assets/icons/free-tag.svg" className="mb-8" alt="" />
                  <p>Access Knowledge For Free</p>
                </div>
              </div>
              <Button btnText="Book a free seat" />
            </div>


            <img src="/assets/event-hero.svg" alt="" />
          </div>
        </section>

        <UpcomingEvents />


        {/* ========RECENT EVENTS======== */}
        <section className="px-4 md:px-0 py-6 md:py-20">
          <div className="md:text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-medium mb-4">
              Our Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5367FF] to-[#00D09C]">Events</span>
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, sapien cursus sollicitudin eget fringilla.</p>
          </div>

          <div className="">


            {/* SPLIT 1 */}
            <div className="md:flex md:gap-24 md:items-center mb-16 md:mb-20">
              <img src="/assets/event-1.png" alt="" />

              <div>
                <p className="font-medium mb-1">May 19-22,2022</p>
                <h3 className="text-4xl font-medium mb-1">Aliff’s A-Fest</h3>
                <p className="font-medium mb-4">Jordan</p>
                <p>Your preferences, your profile and your grades. That’s all IT needs. Yes! We use an algorithm equipped with our experience and expertise to tailor-make a list of ideal universities for your abroad education.</p>
              </div>

            </div>
            {/* SPLIT 2 */}
            <div className="md:flex md:flex-row-reverse gap-24 items-center md:gap-24 md:items-center mb-16 md:mb-20">
              <img src="/assets/event-2.png" alt="" />
              <div>
                <p className="font-medium mb-1">May 19-22, 2022</p>
                <h3 className="text-4xl font-medium mb-1">Aliff University 2022</h3>
                <p className="font-medium mb-4">Jordan</p>
                <p>Your preferences, your profile and your grades. That’s all IT needs. Yes! We use an algorithm equipped with our experience and expertise to tailor-make a list of ideal universities for your abroad education.</p>
              </div>
            </div>



            {/* SPLIT 3 */}
            <div className="md:flex md:gap-24 md:items-center mb-16 md:mb-20">
              <img src="/assets/event-3.png" alt="" />

              <div>
                <p className="font-medium mb-1">May 19-22,2022</p>
                <h3 className="text-4xl font-medium mb-1">Convocation Event</h3>
                <p className="font-medium mb-4">Jordan</p>
                <p>Your preferences, your profile and your grades. That’s all IT needs. Yes! We use an algorithm equipped with our experience and expertise to tailor-make a list of ideal universities for your abroad education.</p>
              </div>

            </div>
          </div>

        </section>




        {/* ========WHY ATTEND======== */}
        <section className="px-4 md:px-0 pt-20 pb-36">
          <h2 className="text-center text-4xl md:text-5xl font-medium mb-12 md:mb-20">
            Why Should You <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5367FF] to-[#00D09C]">Attend Our Events</span>
          </h2>

          <div className="md:grid md:grid-cols-3 space-y-8 md:space-y-0 gap-16">
            <div className="text-center">
              <img src="/assets/icons/banner.svg" className="mx-auto" alt="" />
              <h3 className="font-semibold text-3xl mb-2.5">Top Speakers</h3>
              <p>Hear from Indian students living abroad, university reps, counsellors & experts</p>
            </div>
            <div className="text-center">
              <img src="/assets/icons/diamond.svg" className="mx-auto" alt="" />
              <h3 className="font-semibold text-3xl mb-2.5">Quality Content</h3>
              <p>You get personal insights & guidance straight from the best speakers</p>
            </div>
            <div className="text-center">
              <img src="/assets/icons/network.svg" className="mx-auto" alt="" />
              <h3 className="font-semibold text-3xl mb-2.5">Networking</h3>
              <p>Meet fellow study abroad aspirants & seniors</p>
            </div>

          </div>
        </section>












        {/* ========START JOURNEY NOW======== */}
        <section>
          <h2 className="text-center text-5xl font-medium mt-20 mb-12">
            Start Your Study Abroad <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5367FF] to-[#00D09C]">Journey Now</span>
          </h2>
          {/* <Button btnText='Sign Up' /> */}
          <div className="flex justify-center mb-20">
            <button className="bg-orange-500 text-white px-4 py-2 rounded">Sign up</button>
          </div>
          <img src="/assets/end-illustration.png" alt="" />
        </section>

        <Footer />














      </div>
    </div>
  )
}