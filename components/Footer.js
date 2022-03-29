import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <footer>
            <div className="h-[13px] w-full mt-[152px]" style={{ background: "linear-gradient(270deg, #2E27FE 0%, #9A12FF 73.96%, #CD05FF 100%)" }}></div>

            <div className="flex justify-between container py-[72px] bg-no-repeat"
                style={{
                    backgroundImage: "url('/img/footer_bg.png')",
                    backgroundPosition: 'bottom center'
                }}
            >
                <div>
                    <Image src="/img/black_water_icon.png" width={32} height={35} quality={100} alt="black_water_icon" />
                    <div className="mt-4">
                        <img src="/img/BLACKWATER.png" width={159} alt="BLACKWATER" />
                    </div>
                    <p className="subtitle_sm w-[260px] mt-2">
                        Copyright © 2022. All rights reserved by Blackwater LLC.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-[160px] w-[650px]">
                    <div>
                        <p className="subtitle_sm w-[260px]">Company</p>
                        <ul className="mt-5 space-y-2.5" >
                            <li>
                                <Link href="#">
                                    <a className="subtitle_md text-white hover:text-blue duration-200" >About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="subtitle_md text-white hover:text-blue duration-200" >Careers</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="subtitle_sm w-[260px]">Social</p>
                        <ul className="mt-5 space-y-2.5" >
                            <li>
                                <Link href="#">
                                    <a className="subtitle_md text-white hover:text-blue duration-200" >Twitter</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="subtitle_md text-white hover:text-blue duration-200" >Discord</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="subtitle_md text-white hover:text-blue duration-200" >Linkedin</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="subtitle_sm w-[260px]">Policies</p>
                        <ul className="mt-5 space-y-2.5" >
                            <li>
                                <Link href="#">
                                    <a className="subtitle_md text-white hover:text-blue duration-200" >Your Data</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="subtitle_md text-white hover:text-blue duration-200" >Refund Policy</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="subtitle_md text-white hover:text-blue duration-200" >Privacy Policy</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
