import { useState } from 'react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="flex justify-between items-center">
            <div className={`md:hidden w-full ${isMobileMenuOpen ? 'fixed top-0 left-0 h-screen z-50 bg-white' : ''}`}>
                <div className="flex justify-between items-center px-4 py-2">
                    <img className="h-14" src="/assets/logo-aliff.png" alt="Logo" />
                    <button
                        className="bg-transparent p-2 rounded"
                        onClick={handleMobileMenuToggle}
                        aria-label="Toggle Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6"
                        >
                            {isMobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
                        </svg>
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden w-full h-full">
                        <nav className="flex flex-col space-y-4 px-4 py-2">
                            <a href="/">Search</a>
                            <a href="/">Country</a>
                            <a href="/">Services</a>
                            <a href="/">About us</a>
                            <a href="/">Resources</a>
                        </nav>
                        <div className="flex flex-col space-y-4 px-4 py-2">
                            <button className="bg-transparent px-6 py-2 rounded border-2 border-orange-500">Login</button>
                            <button className="bg-orange-500 text-white px-6 py-2 rounded">Register</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="hidden md:flex items-center w-full">
                <img className="h-14 md:h-auto" src="/assets/logo-aliff.png" alt="Logo" />
                <nav className="space-x-6 flex-grow">
                    <a href="/">Search</a>
                    <a href="/">Country</a>
                    <a href="/">Services</a>
                    <a href="/">About us</a>
                    <a href="/">Resources</a>
                </nav>
                <div className="space-x-4">
                    <button className="bg-transparent px-12 py-2 rounded border-2 border-orange-500">Login</button>
                    <button className="bg-orange-500 text-white px-12 py-2 rounded">Register</button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
