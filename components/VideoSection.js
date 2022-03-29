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
        <section className="mt-[130px]">
            <div className="container">
                <h2 className="title_md text-center md:w-[35%] mx-auto" >Insert a title sentence here for benefits.</h2>
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
            <div className="flex flex-col items-center mt-10">
                <h4 className="title_sm">Video Title Here</h4>
                <p className="subtitle_md mt-[7px] sm:w-[320px] text-center">Magna eu cras amet leo. Id ultrices tortor convallis vivamus at pellentesque.</p>
            </div>
            <div className="container_sm mt-[72px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {cards.map((card, index) => <Card {...card} key={index} />)}
                </div>
            </div>
        </section>
    )
}

export default VideoSection


const Card = ({ iconSrc, title, subtitle }) => {
    return (
        <div
            style={{
                backgroundImage: "url('/img/card_border.png')"
            }}
            className="bg-no-repeat"
        >
            <div className="px-[67px] py-[55px]">
                <img src={iconSrc} alt={title} className="w-6 h-6 object-cover inline-block mb-3" />
                <h6 className="title_xs mb-2.5">{title}</h6>
                <p className="subtitle_md">{subtitle}</p>
            </div>
        </div>
    )
}