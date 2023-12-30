"use client";
import Link from "next/link";
import { FaSistrix, FaRegBell } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const content = <>
        <div className="md:hidden block absolute top-0 left-0 right-0 w-full h-full bg-red-500 pl-3">
            <h3 className="text-bold pt-6">ARTSY.</h3>
            <ul className="pt-12 flex-col space-y-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/pages/marketplace">Marketplace</Link></li>
                <li><Link href="/pages/auctions">Auctions</Link></li>
                <li><Link href="/pages/drops">Drops</Link></li>
            </ul>
        </div>
    </>
    return (
        <header className="h-10vh flex justify-between z-50 lg:py-5 py-4 px-3 md:px-10">
            <div>
                { click && content }
            </div>
            <button className="block sm:hidden transition" onClick={handleClick}>
                { click ? <FaTimes /> : <FiMenu />}
            </button>
            <h3 className="text-bold">ARTSY.</h3>
            <nav className="hidden md:flex items-center justify-between">
                <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-sm">
                        <li><Link href="/" className="hover:border-b hover:border-black transition-all duration-3">Home</Link></li>
                        <li><Link href="/pages/marketplace" className="hover:border-b hover:border-black transition-all duration-3">Marketplace</Link></li>
                        <li><Link href="/pages/auctions" className="hover:border-b hover:border-black transition-all duration-3">Auctions</Link></li>
                        <li><Link href="/pages/drops" className="hover:border-b hover:border-black transition-all duration-3">Drops</Link></li>
                    </ul>
                </div>
                
            </nav>
            <div>
                <ul className="flex gap-2 md:gap-4 cursor-pointer">
                    <li><FaSistrix /></li>
                    <li className="flex"><MdOutlineShoppingCart /><span className="before:content-['*'] before:text-red-500 before:ml-0 before:mt-0"></span></li>
                    <li className="md:block sm:hidden"><FaRegBell /></li>
                </ul>
            </div>
            
            
        </header>
    )
}