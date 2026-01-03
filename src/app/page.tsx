import Image from "next/image";
import Header from "./components/core/header";
import Button from "./components/ui/button";
import ButtonDownload from "./components/ui/button-download";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-bl from-primary-feeble/10 to-white/90">
      <main className="flex min-h-screen w-full flex-col items-center pt-10 bg-linear-to-bl from-primary-feeble/10 to-white/90 sm:items-start">
      <div className="px-30 mb-13.5">
        <Header />
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center justify-center gap-6 mt-16">
              <Button 
              text="..."
              />
              <h2 className="text-black font-bold text-[64px] text-center"><span className="text-primary-feeble">iMessage</span> Automation for Teams and AI Workflows.</h2>
              <h3 className="text-lg text-black text-center">Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac Mini. </h3>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Button 
              text="Get Started"
              />
              <ButtonDownload 
              text="Download the Mac app"
              />
            </div>
          </div>
      </div>
          <Image src="/images/cloud.svg" alt="Cloud Background" width={2560} height={520} />
      </main>
    </div>
  );
}
