import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-8 md:pt-48 md:pb-40 flex flex-col items-center text-center">
          <div className="mb-8 flex items-center gap-2">
            <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground">Operating at the intersection of Tech & Capital</span>
            <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-10 max-w-4xl leading-[1.1]">
            Building software. <br />
            Strategizing growth. <br />
            Investing in the future.
          </h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl font-normal leading-relaxed">
            Semloh is a multidisciplinary firm dedicated to technical excellence and strategic value creation across global markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 items-center font-medium">
            <Link href="/contact" className="group flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black dark:border-white pb-1 hover:opacity-60 transition-all">
              Inquire
              <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/company" className="group flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black dark:border-white pb-1 hover:opacity-60 transition-all">
              The Firm
              <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-32 px-8 max-w-6xl mx-auto border-t">
          <div className="grid md:grid-cols-3 gap-24">
            <div className="space-y-6">
              <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">01 / Software</div>
              <h2 className="text-2xl font-medium uppercase tracking-tight">Digital Platforms</h2>
              <p className="text-muted-foreground leading-relaxed font-normal">
                We develop high-performance applications like Chatterbox Teams and WeTrade, focusing on resilient architecture and intuitive user experiences.
              </p>
              <Link href="/software" className="inline-flex items-center text-[10px] uppercase tracking-widest font-medium hover:opacity-60 transition-opacity">
                View Portfolio <ChevronRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
            <div className="space-y-6">
              <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">02 / Consulting</div>
              <h2 className="text-2xl font-medium uppercase tracking-tight">Technical Strategy</h2>
              <p className="text-muted-foreground leading-relaxed font-normal">
                Advising organizations on system architecture, cloud infrastructure, and security to ensure sustainable technical growth and efficiency.
              </p>
              <Link href="/consulting" className="inline-flex items-center text-[10px] uppercase tracking-widest font-medium hover:opacity-60 transition-opacity">
                Our Services <ChevronRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
            <div className="space-y-6">
              <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">03 / Investing</div>
              <h2 className="text-2xl font-medium uppercase tracking-tight">Capital Allocation</h2>
              <p className="text-muted-foreground leading-relaxed font-normal">
                Strategic investments in early-stage ventures and global leaders like Apple, Alphabet, and Amazon, backed by deep technical due diligence.
              </p>
              <Link href="/investing" className="inline-flex items-center text-[10px] uppercase tracking-widest font-medium hover:opacity-60 transition-opacity">
                Investment Focus <ChevronRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products Callout */}
        <section className="py-32 px-8 bg-zinc-50 dark:bg-zinc-950 border-y">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-medium uppercase tracking-tight leading-tight">Operating at the <br /> edge of possibility.</h2>
              <p className="text-lg text-muted-foreground font-normal leading-relaxed">
                From real-time team communication with Chatterbox to global market access through WeTrade, our products are built to handle complexity at scale.
              </p>
              <Button variant="outline" className="px-8 py-6 h-auto uppercase tracking-widest font-medium" asChild>
                <Link href="/software">Explore Our Products</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-8 border bg-background rounded-2xl flex justify-between items-center group hover:border-black dark:hover:border-white transition-colors cursor-default">
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground mb-1">Active Operation</div>
                  <div className="text-xl font-medium uppercase tracking-tight">Chatterbox Teams</div>
                </div>
                <div className="h-2 w-2 rounded-full bg-green-500" />
              </div>
              <div className="p-8 border bg-background rounded-2xl flex justify-between items-center group hover:border-black dark:hover:border-white transition-colors cursor-default opacity-80">
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground mb-1">In Development</div>
                  <div className="text-xl font-medium uppercase tracking-tight">WeTrade</div>
                </div>
                <div className="h-2 w-2 rounded-full bg-amber-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Values / Philosophy */}
        <section className="py-32 px-8 max-w-5xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-3xl font-medium mb-8 uppercase tracking-tight">Guided by precision.</h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-normal">
              We believe true value is built through a rigorous commitment to quality and a long-term perspective. Our multidisciplinary approach allows us to see opportunities where others see obstacles.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-y-12 gap-x-8">
              <div className="space-y-2">
                <div className="text-sm font-medium uppercase tracking-widest">Technical Due Diligence</div>
                <p className="text-xs text-muted-foreground font-normal">Informed by engineering reality.</p>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium uppercase tracking-widest">Operational Excellence</div>
                <p className="text-xs text-muted-foreground font-normal">Disciplined execution at every level.</p>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium uppercase tracking-widest">Long-term Vision</div>
                <p className="text-xs text-muted-foreground font-normal">Focusing on decades, not quarters.</p>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium uppercase tracking-widest">Global Reach</div>
                <p className="text-xs text-muted-foreground font-normal">Impact across borders and markets.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square border-l border-t p-12 flex items-center justify-center">
             <div className="absolute top-0 right-0 h-px w-24 bg-zinc-300 dark:bg-zinc-700" />
             <div className="absolute bottom-0 left-0 v-px w-24 bg-zinc-300 dark:bg-zinc-700" />
             <div className="text-[10px] uppercase tracking-[0.5em] font-medium text-muted-foreground rotate-90 absolute right-0 translate-x-1/2">Disciplined</div>
             <div className="text-[20vw] md:text-[10rem] font-medium opacity-5 select-none">S</div>
          </div>
        </section>

        {/* Institutional CTA */}
        <section className="py-40 px-8 text-center border-t bg-zinc-50 dark:bg-zinc-950">
          <h2 className="text-3xl font-medium mb-10 uppercase tracking-tight">Strategic Inquiry</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12 font-normal leading-relaxed">
            We are always interested in connecting with visionary founders, institutional partners, and technical leaders.
          </p>
          <Button variant="outline" className="px-12 py-6 h-auto uppercase tracking-widest font-medium text-sm" asChild>
            <Link href="/contact">Connect with the Firm</Link>
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
