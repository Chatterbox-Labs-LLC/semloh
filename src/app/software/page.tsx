import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Code2, Cpu, Rocket } from "lucide-react";

export default function SoftwarePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 px-8 border-b text-center">
          <h1 className="text-4xl md:text-6xl font-medium mb-6 uppercase tracking-tight">Software</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Building and operating the platforms that power modern communication and commerce.
          </p>
        </section>

        <section className="py-24 px-8 max-w-5xl mx-auto space-y-32">
          {/* Chatterbox Teams */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-medium mb-6 uppercase tracking-tight">Chatterbox Teams</h2>
              <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
                A unified communication platform designed for high-performance teams. Chatterbox provides secure, real-time messaging, voice, and collaborative tools to streamline organizational workflow.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-1 bg-primary rounded-full" />
                  <span className="text-sm font-medium uppercase tracking-widest">End-to-End Encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-1 bg-primary rounded-full" />
                  <span className="text-sm font-medium uppercase tracking-widest">Global Infrastructure</span>
                </div>
              </div>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950 rounded-3xl p-12 border flex flex-col items-center justify-center text-center space-y-4">
              <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Product Status</div>
              <div className="text-2xl font-medium">Active Operation</div>
              <Button variant="outline" className="mt-4 font-medium px-8">Open Chatterbox</Button>
            </div>
          </div>

          {/* WeTrade */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-zinc-50 dark:bg-zinc-950 rounded-3xl p-12 border flex flex-col items-center justify-center text-center space-y-4 md:order-last">
              <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Product Status</div>
              <div className="text-2xl font-medium">In Development</div>
              <p className="text-xs text-muted-foreground font-normal italic">Institutional trading for the next generation.</p>
            </div>
            <div>
              <h2 className="text-3xl font-medium mb-6 uppercase tracking-tight">WeTrade</h2>
              <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
                Our flagship institutional-grade trading platform. WeTrade offers seamless execution across Stocks, Bonds, ETFs, and Digital Assets (Crypto), providing users with professional tools and deep liquidity.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-xl text-center">
                  <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">Stocks & Bonds</div>
                  <div className="text-xs font-normal">Global Markets</div>
                </div>
                <div className="p-4 border rounded-xl text-center">
                  <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">Crypto</div>
                  <div className="text-xs font-normal">24/7 Access</div>
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure */}
          <div className="border-t pt-24">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-medium mb-6 uppercase tracking-tight">Technical Foundations</h2>
              <p className="text-muted-foreground font-normal leading-relaxed">
                Beyond our core products, we provide the technical infrastructure and architectural guidance that allows these platforms to scale to millions of users globally.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { Footer } from "@/components/footer";

