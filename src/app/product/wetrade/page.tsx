import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LineChart, Globe, Zap, ShieldCheck } from "lucide-react";

export default function WeTradePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 px-8 border-b">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex p-4 bg-zinc-50 dark:bg-zinc-900 border mb-8">
              <LineChart className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-medium mb-6 uppercase tracking-tight">WeTrade</h1>
            <p className="text-xl text-muted-foreground font-normal max-w-2xl mx-auto uppercase tracking-widest text-sm">
              Multi-Asset Execution Platform
            </p>
          </div>
        </section>

        <section className="py-24 px-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="aspect-square bg-zinc-50 dark:bg-zinc-900 border flex items-center justify-center p-12 order-2 md:order-1">
              <div className="w-full h-full border border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Beta Access Only
              </div>
            </div>
            <div className="space-y-8 order-1 md:order-2">
              <h2 className="text-3xl font-medium uppercase tracking-tight">Market Access, Redefined.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                WeTrade provides low-latency execution across global markets. Built for professional traders, it combines deep liquidity with sophisticated analytical tools in a unified institutional environment.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Zap className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-medium uppercase tracking-widest text-xs mb-1">Low-Latency Execution</h4>
                    <p className="text-sm text-muted-foreground">Sub-millisecond order routing across major global venues.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Globe className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-medium uppercase tracking-widest text-xs mb-1">Unified Liquidity</h4>
                    <p className="text-sm text-muted-foreground">Aggregated access to digital and traditional asset markets.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <ShieldCheck className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-medium uppercase tracking-widest text-xs mb-1">Risk Management</h4>
                    <p className="text-sm text-muted-foreground">Institutional-grade risk controls and real-time monitoring.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <div className="inline-block px-4 py-1 bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 text-[10px] font-bold uppercase tracking-widest border border-amber-200 dark:border-amber-900">
                  Currently In Development
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
