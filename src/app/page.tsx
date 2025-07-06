import TopBar from "./components/topbar";
import Image from 'next/image';
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
      <div id="gallery" className="h-dvh flex flex-col p-20">
        <MotionWrapper {...animation2Props}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">See it in action</h1>
        </MotionWrapper>
        <h1 className="flex justify-center text-md md:text-xl mb-4 text-gray-400">Simple, intuitive and powerful</h1>
        <MotionWrapper {...animation3Props}>
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-full h-full max-h-[calc(100dvh-4rem)]">
              <Image
                src="/1.png"
                fill
                alt="Screenshot of the app"
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, 100vw"
              />
            </div>
          </div>
        </MotionWrapper>
      </div>

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
            <DownloadModal icon={<BsWindows />} color={"bg-blue-500"} osName={"Windows"} />
            <DownloadModal icon={<BsApple />} color={"bg-black"} osName={"macOS"} />
            <DownloadModal icon={<FcLinux size={20} />} color={"bg-orange-500"} osName={"Linux"} />
          </div>
        </MotionWrapper>
        <MotionWrapper {...animation3Props}>
          <button className="btn btn-outline btn-wide rounded-2xl"><Heart size={16} />Support with donation</button>
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
      <div className="h-[15vh] flex justify-center items-center">
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
