import { useState } from 'react';

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Is there a free trial available?",
            answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        },
        {
            question: "Can I change my plan later?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            question: "Is there a free trial available?",
            answer: "This is the answer to the third question.",
        },
        {
            question: "What is your cancellation policy?",
            answer: "This is the answer to the third question.",
        },
        {
            question: "Can other info be added to an invoice?",
            answer: "This is the answer to the third question.",
        },
        {
            question: "How does billing work?",
            answer: "This is the answer to the third question.",
        },
        {
            question: "How do I change my account email?",
            answer: "This is the answer to the third question.",
        },
    ];

    return (
        <section className='py-20'>

            <h2 className="text-center text-5xl font-medium mb-4">Have <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5367FF] to-[#00D09C]">Questions?</span>
            </h2>

            <p className='text-center mb-16'>Everything you need to know about the career and help.</p>

            <div className="px-4 md:px-32 mx-auto">
                {faqData.map((faq, index) => (
                    <div className="accordion-item border-b border-b-slate-300" key={index}>
                        <input
                            type="checkbox"
                            id={`faq${index}`}
                            className="accordion-toggle hidden"
                        />

                        {/* Question */}
                        <label
                            className="accordion-title flex items-center justify-between cursor-pointer text-lg md:text-xl font-semibold py-4"
                            htmlFor={`faq${index}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            {faq.question}
                            <img
                                className="accordion-icon"
                                src={activeIndex === index ? "/assets/icons/minus.svg" : "/assets/icons/plus.svg"}
                                alt={activeIndex === index ? "-" : "+"}
                            />
                        </label>

                        {/* Answer */}
                        <div
                            className={`accordion-content ${activeIndex === index ? "block" : "hidden"}`}
                        >
                            <p className="mb-4">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQAccordion;
