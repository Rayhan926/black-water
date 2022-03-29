
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';

const navs = [
    {
        title: 'Services',
        url: '#'
    },
    {
        title: 'Affiliate',
        url: '#'
    },
    {
        title: 'About',
        url: '#'
    },
    {
        title: 'Brand',
        url: '#'
    },
    {
        title: 'Contact',
        url: '#'
    },
]

function Header() {

    const [showSidebar, setShowSidebar] = useState(false);

    const closeSidebar = (e) => e?.target?.id === 'mobile_sidebar' && setShowSidebar(false);
    const closeSidebarForcely = () => setShowSidebar(false);
    useEffect(() => {
        document.body.style.overflow = showSidebar ? 'hidden' : 'auto';
    }, [showSidebar]);

    // useEffect(() => {
    //     const toggleHeaderBg = (e) => {
    //         if (document.documentElement.scrollTop > (window.innerHeight - 50)) {
    //             document.querySelector('#top_header').style.background = 'black'
    //         } else {
    //             document.querySelector('#top_header').style.background = 'transparent'
    //         }
    //     }

    //     window.addEventListener('scroll', toggleHeaderBg)

    //     return () => window.removeEventListener('scroll', toggleHeaderBg)
    // }, [])

    return (
        <header className="sticky top-0 left-0 w-full z-50 duration-[0.4s]" id="top_header" >
            <div className='container relative py-6 backdrop-blur-sm md:py-10 flex justify-between items-center '>
                {/* Logo Start */}
                <div className="shrink-0" >
                    <Link href='/'>
                        <a className='w-[170px] block md:w-auto'>
                            <img src="/img/black_water_logo.svg" alt="Black water" />
                        </a>
                    </Link>
                </div>
                {/* Logo End */}

                <div>
                    {/* Nav Start */}
                    <div
                        onClick={closeSidebar}
                        id='mobile_sidebar'
                        className={`fixed pointer-events-none top-0 left-0 w-full h-screen bg-black/50 z-50 md:static md:w-auto md:h-auto md:bg-transparent opacity-0 duration-200 ${showSidebar ? 'opacity-100 pointer-events-auto' : ''
                            } md:opacity-100 md:pointer-events-auto font-openSans`}
                    >
                        <ul
                            className={`gap-10 font-inter font-normal text-white bg-black pt-5 md:pt-0 w-[80%] md:w-auto md:flex h-full md:h-auto md:bg-transparent -translate-x-full duration-200 ${showSidebar ? 'translate-x-0' : ''
                                } md:translate-x-0`}
                        >

                            {
                                navs.map((nav, i) => (
                                    <li key={i}>
                                        <Link href={nav.url} >
                                            <a
                                                onClick={closeSidebarForcely}
                                                className='hover:text-blue border-b-2 border-transparent hover:border-primary duration-100 px-6 py-2.5 block md:p-1'
                                            >
                                                {nav.title}
                                            </a></Link>
                                    </li>

                                ))
                            }
                        </ul>
                        <div
                            className='text-white hover:text-white border-b-2 border-transparent hover:border-primary hover:scale-110 duration-100 md:hidden'
                            onClick={() => setShowSidebar((prev) => !prev)}
                        >
                            <GiHamburgerMenu color="#fff" size={25} />
                        </div>
                    </div>
                    {/* Nav End */}
                    <div className='text-white flex items-center gap-6 md:gap-8'>
                        {/* Hamburger Icon --Start-- */}
                        <div
                            className='hover:text-white md:hidden'
                            onClick={() => setShowSidebar((prev) => !prev)}
                        >

                            {showSidebar ? <IoMdClose size={28} className="relative z-50" /> : <GiHamburgerMenu size={25} />}
                        </div>
                        {/* Hamburger Icon --End-- */}
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;
