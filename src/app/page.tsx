import Button from "./components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-bl from-primary-feeble/10 to-white/90">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 bg-linear-to-bl from-primary-feeble/10 to-white/90 sm:items-start">
        <h1 className="text-black">Feeble</h1>
        <Button />
      </main>
    </div>
  );
}
