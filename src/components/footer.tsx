import Link from "next/link";
import { Youtube } from "lucide-react";

// Custom X (formerly Twitter) Icon
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom GitHub Icon (more balanced/institutional)
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

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
              <XIcon className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-black dark:hover:text-white transition-colors">
              <GithubIcon className="h-5 w-5" />
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
          <Link href="/consulting/our-work" className="text-sm font-medium hover:opacity-50 transition-opacity pl-2 border-l border-zinc-200 dark:border-zinc-800">Our Work</Link>
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
        <p className="font-medium">&copy; 2024-{new Date().getFullYear()} Semloh. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-primary transition-colors font-medium">Privacy</Link>
          <Link href="#" className="hover:text-primary transition-colors font-medium">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
