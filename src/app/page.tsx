import TopBar from "./components/topbar";
import WorkSection from "./components/work_section";
import { WorkText } from "./text/work_text";
import { ArrowRight, FolderOpen, Heart } from "lucide-react";
import { ChooseText } from "./text/choose_text";
import ChooseSection from "./components/choose_section";
import { AccordionText } from "./text/accordion_text";
import Accordion from "./components/accordion";
import DownloadModal from "./components/download_modal";
import { BsApple, BsWindows } from "react-icons/bs";
import { FcLinux } from "react-icons/fc";
import { MotionWrapper } from "./components/motion/MotionWrapper";
import Link from "next/link";
import Carousel from "./components/carousel";

const animation1Props = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.3, ease: "easeOut", delay: 0.2 },
};

const animation2Props = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.3, ease: "easeOut", delay: 0.4 },
};

const animation3Props = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.3, ease: "easeOut", delay: 0.6 },
};

const animation4Props = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.3, ease: "easeOut", delay: 0.8 },
};
export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] snap-y">
      <TopBar />
      <div className="h-[73px]"></div>
      {/* Hero */}
      <div className="hero h-dvh">
        <div id="home" className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <MotionWrapper {...animation1Props}>
            <div className="max-w-lg flex flex-col gap-5">
              <h1 className="mb-5 text-5xl md:text-7xl font-bold">Organize files effortlessly</h1>
              <p className="mb-5 text-xl md:text-3xl font-light">
                The ultimate file organization tool that sorts your files with simple drag-and-drop functionality.
              </p>
              <MotionWrapper {...animation2Props}>
                <div className="justify-center grid md:grid-cols-2 p-2 gap-2">
                  <a href="#download" className="btn btn-primary btn-wide rounded-2xl">Download for free <ArrowRight size={16} /></a>
                  <a href="#features" className="btn btn-wide rounded-2xl btn-ghost">See how it works</a>
                </div>
              </MotionWrapper>
              <MotionWrapper {...animation3Props}>
                <div className="flex gap-2 justify-center">
                  <div className="badge badge-soft badge-primary">Version 1.0.0</div>
                  <div className="badge badge-soft badge-success">100% Free</div>
                  <div className="badge badge-soft badge-info">Open Source</div>
                </div>
              </MotionWrapper>
            </div>
          </MotionWrapper>
        </div>
      </div>

      {/* Gallery */}
      <Carousel />

      {/* How Sortra Works */}
      <div className="h-dvh p-20 bg-base-300 grid grid-cols-1 md:grid-cols-4 gap-5">
        <MotionWrapper
          className="col-span-1 md:col-span-4 flex flex-col gap-3"
          {...animation1Props}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center">How it works</h1>
          <h1 className="text-xl text-gray-400 text-center">Simple, intuitive and powerful</h1>
        </MotionWrapper>
        {WorkText.map(section => (
          <MotionWrapper
            key={section.index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 + section.index * 0.1 }}
          >
            <WorkSection index={section.index} header={section.header} footer={section.footer} />
          </MotionWrapper>
        ))}
      </div>

      {/* Why choose sortra */}
      <div id="features" className="h-dvh grid grid-cols-1 md:grid-cols-3 p-5 pt-10 md:p-20">
        <MotionWrapper
          className="col-span-1 md:col-span-3 flex flex-col gap-3"
          {...animation1Props}
        >
          <h1 className="text-3xl md:text-6xl font-bold text-center">Why choose Sortra</h1>
          <h1 className="text-xl text-gray-400 text-center">Built with privacy and simplicity in mind</h1>
        </MotionWrapper>
        {ChooseText.map((section, idx) => (
          <MotionWrapper
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 + idx * 0.1 }}
          >
            <ChooseSection icon={section.icon} header={section.header} footer={section.footer} color={section.color} />
          </MotionWrapper>
        ))}
      </div>

      {/* Get sortra today */}
      <div id="download" className="h-dvh bg-base-300 flex flex-col justify-center items-center gap-5 p-5">
        <MotionWrapper {...animation1Props}>
          <h1 className="flex justify-center text-4xl md:text-6xl font-bold mb-4">Get Sortra today</h1>
          <h1 className="text-xl text-gray-400 text-center font-light">Start organizing your files in minutes. Free Forever.</h1>
        </MotionWrapper>
        <MotionWrapper {...animation2Props}>
          <div className="grid justify-center md:grid-cols-3 gap-5">
            <DownloadModal icon={<BsWindows />} color={"bg-blue-500"} osName={"Windows"} file={"https://github.com/Schoji/juan-note/releases/download/Release/Sortra.exe"} id={0} />
            <DownloadModal icon={<BsApple />} color={"bg-black"} osName={"macOS"} file={"https://github.com/Schoji/juan-note/releases/download/Release/Sortra_1.0.0_aarch64.dmg"} id={1} />
            <DownloadModal icon={<FcLinux size={20} />} color={"bg-orange-500"} osName={"Linux"} file={"https://github.com/Schoji/juan-note/releases/download/Release/Sortra_1.0.0_amd64.AppImage"} id={2} />
          </div>
        </MotionWrapper>
        <MotionWrapper {...animation3Props}>
          <div className="grid justify-center md:grid-cols-2 gap-5">
            <Link className="btn btn-outline btn-wide rounded-xl" href={"https://www.paypal.com/donate/?hosted_button_id=NS5B4E326KRYE"}><Heart size={16} />Support with donation</Link>
            <Link className="btn rounded-xl bg-black text-white border-black" href={"https://github.com/Schoji/Sortra"}>
              <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
              Visit GitHub
            </Link>
          </div>
        </MotionWrapper>
        <MotionWrapper {...animation4Props}>
          <h1 className="text-gray-400 text-center pt-5">Sortra is completely free to use. If you find it helpful, consider supporting development with a donation.</h1>
        </MotionWrapper>
      </div>

      {/* Questions */}
      <div id="faq" className="h-dvh flex flex-col justify-center items-center gap-5">
        <MotionWrapper {...animation1Props}>
          <h1 className="flex justify-center text-6xl font-bold">Questions?</h1>
          <h1 className="text-xl text-gray-400 text-center font-light">Everything you need to know</h1>
        </MotionWrapper>
        <div className="p-10 grid gap-2">
          {AccordionText.map((accordion, idx) => (
            <MotionWrapper
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 + idx * 0.1 }}
            >
              <Accordion header={accordion.header} content={accordion.content} />
            </MotionWrapper>
          ))}
        </div>
      </div>
      {/* Disclaimer */}
      <div className="h-[20vh] flex justify-center items-center">
        <MotionWrapper
          className="p-5 flex flex-col justify-center items-center text-center gap-5"
          {...animation1Props}
        >
          <h1 className="font-bold">Important Notice</h1>
          <MotionWrapper {...animation2Props}>
            <p className=" text-gray-400">Sortra is provided &quot;as is&quot; without warranty. The author shall not be held liable for any damages or data loss. Users assume all responsibility. Backup your files before use. By downloading Sortra, you agree to this disclaimer.</p>
          </MotionWrapper>
        </MotionWrapper>
      </div>
      {/* Footer */}
      <div className="footer footer-center bg-base-300 border-t-zinc-600">
        <MotionWrapper {...animation1Props}>
          <div className="flex flex-col items-center gap-2">
            <div className="pt-5 flex gap-2 items-center">
              <div className={`rounded-lg p-2 flex items-center justify-center bg-primary`}>
                <FolderOpen size={18} />
              </div>
              <h1 className='text-xl font-bold'>Sortra</h1>
            </div>
            <p className="pb-5 text-gray-400">© 2025 Sortra. File organization made simple.</p>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}
