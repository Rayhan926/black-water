function HeroSection() {
    return (
        <section className="mt-[60px]" >
            <div className="container grid grid-cols-[45%,auto]">
                <div className="flex flex-col justify-center">
                    <h1 className="text-white font-lufga-bold text-[96px] !leading-[89%]">Mine the <span className='gradient_future'>Future</span> of Money.</h1>
                    <p className="subtitle_md my-9 md:w-[60%]">
                        Magna eu cras amet leo. Id ultrices tortor convallis vivamus at pellentesque. Maecenas sagittis proin venenatis.
                    </p>

                    <div>
                        <button
                            className="gradeint_bordered_btn">Learn More
                        </button>
                    </div>


                </div>
                <div>
                    <img src="/img/hero_img.png" className="w-full h-auto scale-[1.15] origin-left" alt="hero_img" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
