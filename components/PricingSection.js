function PricingSection() {
    return (
        <section className="mt-[140px] md:mt-[158px]" >
            <div className="container text-center">
                <div className="title_md">Insert a long sentence about the pricing structure.</div>
                <p className="subtitle_md mt-3">Magna eu cras amet leo. Id ultrices tortor convallis vivamus at pellentesque.</p>
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-[358px,auto] gap-[22px] my-[58px]">

                {/* Left Price Plan --Start-- */}
                <div
                    className="border-[1.5px] lg:border border-transparent w-full rounded-[30px] overflow-hidden"
                    style={{
                        background: "linear-gradient(#000, #000) padding-box, linear-gradient(270deg, #2E27FE 0%, #9A12FF 73.96%, #CD05FF 100%) border-box"
                    }}
                >
                    <div
                        style={{
                            backgroundImage: "url('/img/price_paln_1_bg.png')"
                        }}
                        className="bg-cover bg-no-repeat h-full bg-bottom"
                    >
                        <div className="w-full h-[170px] flex flex-col items-center justify-center">
                            <h6 className="text-white font-lufga-bold text-sm !leading-[97.5%]" >Plan #1</h6>
                            <h1 className="title_md mt-3">$500.00</h1>
                            <p className="mt-1.5 subtitle_sm">ONE TIME FEE</p>
                        </div>
                        <Devider />

                        <div className="pt-8 px-[20px] lg:px-[34px]">
                            <div className="flex flex-wrap justify-between">
                                <h6 className="text-white font-lufga-bold text-lg" >+ $325</h6>
                                <p className="subtitle_sm">Management Fee</p>
                            </div>
                            <div className="flex flex-wrap justify-between mt-1.5">
                                <h6 className="text-white font-lufga-bold text-lg" >+ $50</h6>
                                <p className="subtitle_sm">Insurance</p>
                            </div>

                            <div className="mt-10">
                                <h6 className="text-white font-lufga-bold text-sm" >Plan Title</h6>
                                <p className="subtitle_md mt-3">
                                    Dui scelerisque cras mollis fermentum fermentum ac ipsum magna egestas. Vitae ullamcorper commodo.
                                </p>
                            </div>

                            <div className="mt-7 space-y-[14px]">
                                <div className="flex gap-3 items-center">
                                    <img src="/img/check.svg" alt="check" className="w-4 h-4 shrink-0" />
                                    <p className="subtitle_sm text-white">Feugiat placerat sit sed in imperdiet.</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <img src="/img/check.svg" alt="check" className="w-4 h-4 shrink-0" />
                                    <p className="subtitle_sm text-white">Aliquam eget convallis eu.</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <img src="/img/check.svg" alt="check" className="w-4 h-4 shrink-0" />
                                    <p className="subtitle_sm text-white">Gravida vitae faucibus feugiat quis. </p>
                                </div>
                            </div>
                            <div className="mt-[60px] pb-[60px] flex justify-center">
                                <button className="font-inter duration-150 font-bold text-sm text-white px-[45px] py-3 border-[1.5px] border-white rounded-full hover:bg-white group">
                                    <span className="group-hover:gradient_contact_text" >
                                        Contact Us
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Left Price Plan --End-- */}

                {/* Right Price Plan --Start-- */}
                <div
                    className="border-[1.5px] lg:border border-transparent w-full rounded-[30px] overflow-hidden"
                    style={{
                        background: "linear-gradient(#000, #000) padding-box, linear-gradient(270deg, #2E27FE 0%, #9A12FF 73.96%, #CD05FF 100%) border-box"
                    }}
                >
                    <div
                        style={{
                            backgroundImage: "url('/img/price_paln_2_bg.png')"
                        }}
                        className="bg-cover bg-no-repeat bg-bottom h-full"
                    >

                        <div className="w-full lg:h-[170px] grid grid-cols-1 gap-y-10 lg:gap-y-0 py-12 lg:py-0 lg:grid-cols-[auto,230px] content-center px-5 lg:px-[54px]">
                            <div className="flex flex-col items-center lg:block" >
                                <h6 className="text-white font-lufga-bold text-sm !leading-[97.5%]" >Plan #2</h6>
                                <h1 className="title_md mt-3">$1000.00</h1>
                                <p className="mt-1.5 subtitle_sm">PER MINER</p>
                            </div>
                            <div className="flex flex-col justify-center" >
                                <div className="flex flex-wrap justify-between">
                                    <h6 className="text-white font-lufga-bold text-lg" >+ $325</h6>
                                    <p className="subtitle_sm">Management Fee</p>
                                </div>
                                <div className="flex flex-wrap justify-between mt-1.5">
                                    <h6 className="text-white font-lufga-bold text-lg" >+ $50</h6>
                                    <p className="subtitle_sm">Insurance</p>
                                </div>
                            </div>
                        </div>
                        <Devider />

                        <div className="pt-8 px-5 lg:px-[54px]">
                            <h6 className="text-white font-lufga-bold text-sm" >Plan Title</h6>
                            <p className="subtitle_md mt-3">
                                Mauris metus enim eget id cursus interdum sit mauris magnis. Egestas convallis aenean etiam justo. Nunc at enim fringilla est et.
                            </p>

                            <div className="pr-8 lg:px-0 grid grid-cols-1 lg:grid-cols-2 mt-[57px] gap-y-[35px] gap-x-[20px]">
                                <div>
                                    <h6 className="flex items-center gap-2.5 text-white font-lufga-bold text-sm">
                                        <img src="/img/icons8_select_all.svg" width={24} height={24} alt="icons8_select_all" />
                                        Plan Title
                                    </h6>
                                    <p className="subtitle_md text-sm mt-[15px] text-white">
                                        Mauris metus enim eget id cursus interdum sit mauris magnis. Egestas convallis
                                    </p>
                                </div>
                                <div>
                                    <h6 className="flex items-center gap-2.5 text-white font-lufga-bold text-sm">
                                        <img src="/img/icons8_web_design.svg" width={24} height={24} alt="icons8_web_design" />
                                        Plan Title
                                    </h6>
                                    <p className="subtitle_md text-sm mt-[15px] text-white">
                                        Mauris metus enim eget id cursus interdum sit mauris magnis. Egestas convallis
                                    </p>
                                </div>
                                <div>
                                    <h6 className="flex items-center gap-2.5 text-white font-lufga-bold text-sm">
                                        <img src="/img/icons8_internet_connection.svg" width={24} height={24} alt="icons8_internet_connection" />
                                        Plan Title
                                    </h6>
                                    <p className="subtitle_md text-sm mt-[15px] text-white">
                                        Mauris metus enim eget id cursus interdum sit mauris magnis. Egestas convallis
                                    </p>
                                </div>
                                <div>
                                    <h6 className="flex items-center gap-2.5 text-white font-lufga-bold text-sm">
                                        <img src="/img/icons8_pubg_helmet.svg" width={24} height={24} alt="icons8_pubg_helmet" />
                                        Plan Title
                                    </h6>
                                    <p className="subtitle_md text-sm mt-[15px] text-white">
                                        Mauris metus enim eget id cursus interdum sit mauris magnis. Egestas convallis
                                    </p>
                                </div>
                            </div>

                            <div className="mt-[50px] mb-6 lg:mb-[50px]">
                                <button className="font-inter duration-150 font-bold text-sm px-[45px] py-3 border-[1.5px] border-white rounded-full bg-white hover:bg-transparent group">
                                    <span className="gradient_contact_text group-hover:white_contact_text">
                                        Contact Us
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Price Plan --End-- */}
            </div>
        </section>
    )
}

export default PricingSection

const Devider = () => {
    return (
        <div
            className="w-full h-px"
            style={{
                background: "linear-gradient(270deg, #2E27FE 0%, #9A12FF 73.96%, #CD05FF 100%)"
            }}></div>
    )
}