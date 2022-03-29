const roadmaps = [
    {
        iconSrc: "/img/icons8_city_block.svg",
        title: "Place a down payment to reserve miners ahead of their launch date.",
        description: "Place a down payment to reserve miners ahead of their launch date."
    },
    {
        iconSrc: "/img/icons8_digger.svg",
        title: "You Earn Bitcoin",
        description: "Once live, your miners will start earing BTC by providing support to the network."
    },
    {
        iconSrc: "/img/icons8_wi-fi_router.svg",
        title: "Miners Go Live",
        description: "Your miners will go live at the hosting facility on the launch date specified."
    },
    {
        iconSrc: "/img/icons8_merchant_account.svg",
        title: "Account Deposits",
        description: "The BTC your miner generates will be delivered straight to your account."
    },
]

function RoadmapSection() {
    return (
        <section className="mt-[145px]" >
            <div className="container">
                <div className="flex flex-col items-center text-center">
                    <h2 className="title_md">Onboarding Process</h2>
                    <p className="subtitle_md sm:w-[467px] mx-auto mt-[14px]">Magna eu cras amet leo. Id ultrices tortor convallis vivamus at pellentesque. Maecenas sagittis proin venenatis.</p>

                </div>

                <div className="mt-[120px] relative pt-[53px] pb-[110px]">

                    <div className="absolute -translate-x-[7px] lg:left-1/2 lg:-translate-x-1/2 bottom-full flex justify-center flex-col lg:items-center gap-3" >
                        <p className="text-white text-sm font-lufga-bold" >Start</p>
                        <img src="/img/roadmap_top_circle.svg" width={18} height={18} alt="roadmap_top_circle" />
                    </div>
                    <div className="absolute -translate-x-[7px] lg:left-1/2 lg:-translate-x-1/2 top-full flex justify-center flex-col lg:items-center gap-3" >
                        <img src="/img/roadmap_top_circle.svg" width={18} height={18} alt="roadmap_top_circle" />
                        <p className="text-white text-sm font-lufga-bold" >Earn Money</p>
                    </div>
                    {/* Line --Start-- */}
                    <div
                        style={{
                            background: "linear-gradient(270deg, #2E27FE 0%, #9A12FF 73.96%, #CD05FF 100%)"
                        }}
                        className="absolute top-0 lg:left-1/2 lg:-translate-x-1/2 w-1 h-full">


                    </div>
                    {/* Line --End-- */}
                    <div className="space-y-[30px]">
                        {
                            roadmaps.map((roadmap, index) => {
                                const isOdd = (index + 1) % 2 !== 0

                                return isOdd ?
                                    <LeftSideRoadmap step={index + 1} roadmap={roadmap} /> :
                                    <RightSideRoadmap step={index + 1} roadmap={roadmap} />
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoadmapSection


const RoadmapCard = ({ iconSrc, title, description }) => {
    return (
        <div
            style={{
                background: "linear-gradient(#000, #000) padding-box,linear-gradient(180deg, #2E27FE 0%, #9A12FF 100%) border-box"
            }}
            className="lg:w-[356px] rounded-[30px] border-2 border-transparent pl-[42px] pt-8 pb-10 pr-6">
            <img src={iconSrc} width={36} height={36} />
            <h6 className="text-sm text-white font-lufga-bold mt-5 mb-1.5">{title}</h6>
            <p className="subtitle_sm font-lufga-regular">{description}</p>
        </div>
    )
}

const RightSideRoadmap = ({ step, roadmap }) => {
    return (
        <div className="lg:w-[904px] mx-auto flex pr-3 pl-7 lg:px-0">
            <div className="w-1/2 grow-0 shrink-0 items-center hidden lg:flex justify-end">
                <div className="-mr-[12px] flex items-center gap-5">
                    <p className="title_sm text-lg">Step {step}</p>
                    <img src="/img/step_even_line.png" alt="step_even_line" className="relative z-10" />
                </div>
            </div>
            <div className="lg:w-1/2 lg:grow-0 lg:shrink-0 relative flex justify-end">
                <img src="/img/step_ball.png" alt="step_ball" width={20} height={20} className="absolute left-[calc(-28px-8px)] top-1/2 -translate-y-1/2 lg:hidden" />
                <div>
                    <RoadmapCard {...roadmap} />
                </div>
            </div>
        </div>
    )
}
const LeftSideRoadmap = ({ step, roadmap }) => {
    return (
        <div className="lg:w-[904px] mx-auto flex pr-3 pl-7 lg:px-0">
            <div className="lg:w-1/2 lg:grow-0 lg:shrink-0 relative">
                <img src="/img/step_ball.png" alt="step_ball" width={20} height={20} className="absolute left-[calc(-28px-8px)] top-1/2 -translate-y-1/2 lg:hidden" />
                <div>
                    <RoadmapCard {...roadmap} />
                </div>
            </div>
            <div className="w-1/2 grow-0 shrink-0 items-center hidden lg:flex">
                <div className="-ml-[12px] flex items-center gap-5">
                    <img src="/img/step_odd_line.png" alt="step_odd_line" className="relative z-10" />
                    <p className="title_sm text-lg">Step {step}</p>
                </div>
            </div>
        </div>
    )
}