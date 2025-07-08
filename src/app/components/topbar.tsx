"use client";
import { AlignJustify, FolderOpen } from 'lucide-react';
import React from 'react';

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#gallery", label: "Gallery" },
    { href: "#features", label: "Features" },
    { href: "#faq", label: "FAQ" },
    { href: "#download", label: "Download", isButton: true },
];

const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 73;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
};

const TopBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm border-b-zinc-600 border-b-1 fixed z-50">
            <div className="navbar-start flex gap-2 p-2">
                <div className={`rounded-lg p-2 flex items-center justify-center bg-primary`}>
                    <FolderOpen size={18} />
                </div>
                <h1 className='text-xl font-bold'>Sortra</h1>
            </div>
            <div className="navbar-center" />
            {/* Desktop nav */}
            <div className="navbar-end gap-5 p-2 font-semibold hidden md:flex">
                {navLinks.map(link =>
                    link.isButton ? (
                        <a
                            key={link.href}
                            href={link.href}
                            className="btn rounded-2xl btn-primary link link-hover"
                            onClick={scrollToSection(link.href.substring(1))}
                        >
                            {link.label}
                        </a>
                    ) : (
                        <a
                            key={link.href}
                            href={link.href}
                            className="link link-hover"
                            onClick={scrollToSection(link.href.substring(1))}
                        >
                            {link.label}
                        </a>
                    )
                )}
            </div>
            {/* Mobile dropdown - moved to navbar-end for right alignment */}
            <div className="navbar-end flex items-center md:hidden">
                <details className="dropdown dropdown-end">
                    <summary className="btn m-1"><AlignJustify /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm right-0 grid gap-2">
                        {navLinks.map(link =>
                            <li key={link.href}>
                                {link.isButton ? (
                                    <a
                                        href={link.href}
                                        className="btn rounded-2xl btn-primary link link-hover"
                                        onClick={scrollToSection(link.href.substring(1))}
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <a
                                        href={link.href}
                                        className="link link-hover"
                                        onClick={scrollToSection(link.href.substring(1))}
                                    >
                                        {link.label}
                                    </a>
                                )}
                            </li>
                        )}
                    </ul>
                </details>
            </div>
        </div>
    );
};

export default TopBar;