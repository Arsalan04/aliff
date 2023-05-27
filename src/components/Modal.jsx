/* eslint-disable react/prop-types */
const Modal = ({ closeModal }) => {
    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };

    return (
        <div>
            <div
                onClick={handleBackgroundClick}
                className="fixed top-0 left-0 w-full h-full px-4 md:px-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
            >
                <div className="bg-white rounded-lg max-w-lg">
                    <div className="bg-blue-100 py-4 px-6 rounded-t-lg flex items-center justify-between">
                        <div className="flex">
                            <img
                                src='/assets/logo-aliff.png'
                                alt="Aliff Icon"
                                className="h-6 w-6 mr-2"
                            />
                            <h3 className="text-blue-800 text-lg font-semibold">Book My Free Counselling</h3>
                        </div>
                        <button
                            onClick={closeModal}
                            className=""
                        ><img src="./assets/icons/modal-close.svg" alt="" />
                        </button>
                    </div>

                    <div className="p-4">
                        <p className="mb-4">
                            Go doubt-free in your study abroad journey by connecting with our experts!
                        </p>
                        <p>Schedule a free call and get:</p>
                        <ul className="list-disc ml-6 mt-2">
                            <li>Your profile evaluated.</li>
                            <li>Country, university, and course guidance.</li>
                            <li>Scholarship and loan assistance.</li>
                        </ul>
                    </div>

                    <div className="pt-0 p-4">
                        <button
                            className="bg-orange-500 text-white w-full py-2 rounded mt-4"
                            onClick={closeModal}
                        >
                            Schedule Call
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Modal;
