// eslint-disable-next-line react/prop-types
const OfferStrip = ({ handleClose, openModal }) => {

    const handleOfferClose = () => {
        handleClose();
    };

    return (
        <div className="flex justify-center items-center gap-2 md:gap-4 py-2 bg-blue-600 text-white relative">
            <img className="w-5 h-5" src="/assets/free-counselling.svg" alt="" />
            <p className="text-xs">Book My Free Counselling</p>
            <a href="#" className="text-xs border rounded px-6" onClick={openModal}>
                Click here
            </a>
            <img
                className="w-5 h-5 absolute right-0 cursor-pointer"
                src="/assets/icons/close.png"
                alt=""
                onClick={handleOfferClose}
            />
        </div>
    );
};

export default OfferStrip;
