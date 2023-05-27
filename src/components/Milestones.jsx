const Milestones = () => {
    return (
        <section className="px-4 md:px-0 py-6 md:py-20">
            <h2 className="text-center text-4xl md:text-5xl font-medium mb-12">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5367FF] to-[#00D09C]">Milestones</span>
            </h2>

            {/* CARD GRID */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">

                <div className="rounded-xl shadow-md px-4 py-6 relative">
                    <img src="/assets/icons/users.png" className="absolute -top-4 -translate-x-1/2 left-1/2" alt="" />
                    <span className="text-4xl font-semibold">5L+</span>
                    <p>Total number of users</p>
                </div>

                <div className="rounded-xl shadow-md px-4 py-6 relative">
                    <img src="/assets/icons/users.png" className="absolute -top-4 -translate-x-1/2 left-1/2" alt="" />
                    <span className="text-4xl font-semibold ">100%</span>
                    <p>Success Rate</p>
                </div>
                <div className="rounded-xl shadow-md px-4 py-6 relative">
                    <img src="/assets/icons/users.png" className="absolute -top-4 -translate-x-1/2 left-1/2" alt="" />
                    <span className="text-4xl font-semibold ">1400+</span>
                    <p>No. of Universities</p>
                </div>
                <div className="rounded-xl shadow-md px-4 py-6 relative">
                    <img src="/assets/icons/users.png" className="absolute -top-4 -translate-x-1/2 left-1/2" alt="" />
                    <span className="text-4xl font-semibold ">20K+</span>
                    <p>No. of active discussion</p>
                </div>
            </div>
        </section>
    )
}

export default Milestones