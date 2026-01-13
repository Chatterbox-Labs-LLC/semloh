import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8 px-8 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-transparent hover:border-zinc-100 dark:hover:border-zinc-900 transition-colors">
      <div className="text-xl font-medium tracking-[0.3em] uppercase">
        <Link href="/">SEMLOH</Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-12">
        <div className="flex space-x-10 text-[11px] uppercase tracking-widest font-medium">
          <Link href="/product" className="hover:opacity-50 transition-opacity">Software</Link>
          <Link href="/consulting" className="hover:opacity-50 transition-opacity">Consulting</Link>
          <Link href="/investing" className="hover:opacity-50 transition-opacity">Investing</Link>
          <Link href="/leadership" className="hover:opacity-50 transition-opacity">Leadership</Link>
          <Link href="/about" className="hover:opacity-50 transition-opacity text-muted-foreground">About</Link>
        </div>
        <Link href="/contact" className="text-[11px] uppercase tracking-widest border border-black dark:border-white px-5 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all font-medium">
          Contact
        </Link>
      </div>
    </nav>
  );
}

