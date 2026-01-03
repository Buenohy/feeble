import Link from "next/link";
import Button from "../ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-background-feeble py-5.5 w-full rounded-full p-5">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image src="/images/coup.png" alt="Coup Logo" width={106} height={34} />
        </Link>
        <nav className="flex gap-4">
        <ul><Link href="/" className="text-gray-feeble font-medium text-base">How it Works</Link></ul>
        <ul><Link href="/" className="text-gray-feeble font-medium text-base">Pricing</Link></ul>
        <ul><Link href="/" className="text-gray-feeble font-medium text-base">Use Case</Link></ul>
        <ul><Link href="/" className="text-gray-feeble font-medium text-base">FAQ</Link></ul>
        </nav>
        <Button />
      </div>
    </header>
  )
}
