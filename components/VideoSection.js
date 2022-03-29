import SponsorsSection from "./SponsorsSection"
import VideoPlayer from "./VideoPlayer"

const cards = [
    {
        iconSrc: "/img/icons8_conference.svg",
        title: "Fully Managed",
        subtitle: "Magna eu cras amet leo. Id ultrices tortor convallis vivamus at pellentesque."
    },
    {
        iconSrc: "/img/icons8_globe_earth.svg",
        title: "World Class Power",
        subtitle: "Magna eu cras amet leo. Id ultrices tortor convallis vivamus at pellentesque."
    },
    {
        iconSrc: "/img/icons8_request_money.svg",
        title: "Daily/Monthly Payouts",
        subtitle: "Magna eu cras amet leo. Id ultrices tortor convallis vivamus at pellentesque."
    },
    {
        iconSrc: "/img/icons8_historical.svg",
        title: "Superior Uptime",
        subtitle: "Magna eu cras amet leo. Id ultrices tortor convallis vivamus at pellentesque."
    },
    {
        iconSrc: "/img/icons8_star_filled.svg",
        title: "Highly Proven & Trusted",
        subtitle: "Magna eu cras amet leo. Id ultrices tortor convallis vivamus at pellentesque."
    },
    {
        iconSrc: "/img/icons8_handshake.svg",
        title: "Operational Excellence & Speed",
        subtitle: "Magna eu cras amet leo. Id ultrices tortor convallis vivamus at pellentesque."
    },
]

function VideoSection() {
    return (
        <section
            style={{
                backgroundImage: "url('/img/body_bg_left_croped.png')",
            }}
            className="mt-[70px] lg:mt-[130px] bg-no-repeat bg-left-top">



            <div className="container">
                <h2 className="title_md text-center lg:w-[35%] mx-auto" >Insert a title sentence here for benefits.</h2>
            </div>
            <div className="container_sm mt-[50px]">
                <div className="w-full border border-transparent overflow-hidden rounded-[30px]"
                    style={{
                        background: "linear-gradient(#000, #000) padding-box, linear-gradient(270deg, #2e27fe 0%, #9a12ff 73.96%, #cd05ff 100%) border-box"
                    }}
                >
                    <div className="rounded-[34px] w-full overflow-hidden">
                        <VideoPlayer />
                    </div>
                </div>
            </div>
            <div
                className="pt-10 bg-no-repeat bg-right"
                style={{
                    backgroundImage: "url('/img/body_bg_right.png')",
                }}
            >
                <div className="flex flex-col items-center px-5 lg:px-0">
                    <h4 className="title_sm">Video Title Here</h4>
                    <p className="subtitle_md mt-[7px] sm:w-[320px] text-center">Magna eu cras amet leo. Id ultrices tortor convallis vivamus at pellentesque.</p>
                </div>
                <div className="container_sm mt-[72px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {cards.map((card, index) => <Card {...card} key={index} />)}
                    </div>
                </div>
                <SponsorsSection />
            </div>
        </section>
    )
}

export default VideoSection


const Card = ({ iconSrc, title, subtitle }) => {
    return (
        <div
            className="lg:card_bg bg-no-repeat mobile_sidebar_gradeint border-[1.5px] lg:border-0 border-transparent rounded-[30px]"
        >
            <div className="px-[25px] lg:px-[67px] py-[25px] lg:py-[55px]">
                <img src={iconSrc} alt={title} className="w-6 h-6 object-cover inline-block mb-3" />
                <h6 className="title_xs mb-2.5">{title}</h6>
                <p className="subtitle_md">{subtitle}</p>
            </div>
        </div>
    )
}