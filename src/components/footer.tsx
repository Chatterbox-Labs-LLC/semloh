import Link from "next/link";
import { Github, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-24 px-8 border-t bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 space-y-8">
          <div>
            <div className="text-lg font-medium tracking-widest uppercase mb-6">Semloh</div>
            <p className="text-sm text-muted-foreground max-w-xs font-normal">
              A multidisciplinary firm dedicated to software development, strategic consulting, and venture investing.
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-black dark:hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-black dark:hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-black dark:hover:text-white transition-colors">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col space-y-4">
          <div className="text-xs uppercase tracking-widest font-medium mb-2 text-muted-foreground">Solutions</div>
          <Link href="/software" className="text-sm font-medium hover:opacity-50 transition-opacity">Software</Link>
          <Link href="/consulting" className="text-sm font-medium hover:opacity-50 transition-opacity">Consulting</Link>
          <Link href="/investing" className="text-sm font-medium hover:opacity-50 transition-opacity">Investing</Link>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="text-xs uppercase tracking-widest font-medium mb-2 text-muted-foreground">Company</div>
          <Link href="/about" className="text-sm font-medium hover:opacity-50 transition-opacity">About</Link>
          <Link href="/company" className="text-sm font-medium hover:opacity-50 transition-opacity">Entity</Link>
          <Link href="/leadership" className="text-sm font-medium hover:opacity-50 transition-opacity">Leadership</Link>
          <Link href="/investor" className="text-sm font-medium hover:opacity-50 transition-opacity">Investors</Link>
          <Link href="/contact" className="text-sm font-medium hover:opacity-50 transition-opacity">Contact</Link>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto mt-24 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
        <p className="font-medium">&copy; {new Date().getFullYear()} Semloh. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-primary transition-colors font-medium">Privacy</Link>
          <Link href="#" className="hover:text-primary transition-colors font-medium">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
