import Link from "next/link";
import Button from "../ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-background-feeble py-5.5 max-w-300 rounded-full p-5">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image src="/images/coup.png" alt="Coup Logo" width={106} height={34} />
        </Link>
        <nav className="flex gap-4">
        <ul><Link href="/" className="text-gray-feeble font-medium text-base hover:text-black">How it Works</Link></ul>
        <ul><Link href="/" className="text-gray-feeble font-medium text-base hover:text-black">Pricing</Link></ul>
        <ul><Link href="/" className="text-gray-feeble font-medium text-base hover:text-black">Use Case</Link></ul>
        <ul><Link href="/" className="text-gray-feeble font-medium text-base hover:text-black">FAQ</Link></ul>
        </nav>
        <Button 
        text="Contact Sales"
        />
      </div>
    </header>
  )
}
