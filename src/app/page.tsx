import Header from "./components/core/header";
import Button from "./components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-bl from-primary-feeble/10 to-white/90">
      <main className="flex min-h-screen w-full flex-col items-center py-10 px-90 bg-linear-to-bl from-primary-feeble/10 to-white/90 sm:items-start">
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
              <Button 
              text="Get Started"
              />
            </div>
          </div>
      </main>
    </div>
  );
}
