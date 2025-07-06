"use client";
import { FolderOpen } from 'lucide-react';
import React from 'react';

const TopBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm border-b-zinc-600 border-b-1 fixed z-50">
            <div className="navbar-start flex gap-2 p-2">
                <div className={`rounded-lg p-2 flex items-center justify-center bg-primary`}>
                    <FolderOpen size={18} />
                </div>
                <h1 className='text-xl font-bold'>Sortra</h1>
            </div>
            <div className="navbar-center">

            </div>
            <div className="navbar-end flex gap-5 p-2 font-semibold">
                <a
                    href="#home"
                    className="link link-hover"
                    onClick={e => {
                        e.preventDefault();
                        const el = document.getElementById('home');
                        if (el) {
                            const y = el.getBoundingClientRect().top + window.scrollY - 73;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                    }}
                >
                    Home
                </a>
                <a
                    href="#gallery"
                    className="link link-hover"
                    onClick={e => {
                        e.preventDefault();
                        const el = document.getElementById('gallery');
                        if (el) {
                            const y = el.getBoundingClientRect().top + window.scrollY - 73;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                    }}
                >
                    Gallery
                </a>
                <a
                    href="#features"
                    className="link link-hover"
                    onClick={e => {
                        e.preventDefault();
                        const el = document.getElementById('features');
                        if (el) {
                            const y = el.getBoundingClientRect().top + window.scrollY - 73;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                    }}
                >
                    Features
                </a>
                <a
                    href="#faq"
                    className="link link-hover"
                    onClick={e => {
                        e.preventDefault();
                        const el = document.getElementById('faq');
                        if (el) {
                            const y = el.getBoundingClientRect().top + window.scrollY - 73;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                    }}
                >
                    FAQ
                </a>
                <a
                    href="#download"
                    className="btn rounded-2xl btn-primary link link-hover"
                    onClick={e => {
                        e.preventDefault();
                        const el = document.getElementById('download');
                        if (el) {
                            const y = el.getBoundingClientRect().top + window.scrollY - 73;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                    }}
                >
                    Download
                </a>
            </div>
        </div>
    );
};

export default TopBar;