import Header from "./components/core/header";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-linear-to-bl from-primary-feeble/10 to-white/90">
      <main className="flex min-h-screen w-full flex-col items-center py-10 px-90 bg-linear-to-bl from-primary-feeble/10 to-white/90 sm:items-start">
        <Header />
      </main>
    </div>
  );
}
