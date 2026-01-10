import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function InvestingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 px-8 border-b text-center">
          <h1 className="text-4xl md:text-6xl font-medium mb-6">Investing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Strategic capital for both emerging ventures and established enterprises.
          </p>
        </section>

        <section className="py-24 px-8 max-w-6xl mx-auto space-y-32">
          {/* Venture Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-medium mb-6 uppercase tracking-tight">Venture Capital</h2>
              <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
                We focus on early-stage companies where our technical and strategic expertise can provide an unfair advantage. We're not just passive capital—we're active partners in your success.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm uppercase tracking-widest text-muted-foreground mb-1">Seed to Series A</h4>
                  <p className="text-muted-foreground font-normal">Focusing on high-potential technical teams in AI, SaaS, and DeepTech.</p>
                </div>
              </div>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950 rounded-3xl p-12 border">
              <h3 className="text-2xl font-medium mb-6 text-center uppercase tracking-tight">Submit a Pitch</h3>
              <form className="space-y-4">
                <input className="w-full p-3 rounded-lg border bg-background font-normal" placeholder="Company Name" />
                <input className="w-full p-3 rounded-lg border bg-background font-normal" placeholder="Pitch Deck URL" />
                <Button className="w-full font-medium">Apply for Funding</Button>
              </form>
            </div>
          </div>

          {/* Public Equities Section */}
          <div className="border-t pt-24">
            <h2 className="text-3xl font-medium mb-12 uppercase tracking-tight text-center">Public Equities</h2>
            <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto text-center font-normal leading-relaxed">
              Beyond venture, we maintain long-term positions in global technology leaders and consumer enterprises that define modern industry.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              <div className="p-8 border rounded-2xl">
                <div className="text-sm font-medium uppercase tracking-widest mb-2">Alphabet</div>
                <div className="text-xs text-muted-foreground font-normal italic">Google</div>
              </div>
              <div className="p-8 border rounded-2xl">
                <div className="text-sm font-medium uppercase tracking-widest mb-2">Apple</div>
                <div className="text-xs text-muted-foreground font-normal italic">Consumer Tech</div>
              </div>
              <div className="p-8 border rounded-2xl">
                <div className="text-sm font-medium uppercase tracking-widest mb-2">Amazon</div>
                <div className="text-xs text-muted-foreground font-normal italic">E-commerce & Cloud</div>
              </div>
              <div className="p-8 border rounded-2xl">
                <div className="text-sm font-medium uppercase tracking-widest mb-2">Netflix</div>
                <div className="text-xs text-muted-foreground font-normal italic">Entertainment</div>
              </div>
              <div className="p-8 border rounded-2xl">
                <div className="text-sm font-medium uppercase tracking-widest mb-2">Uber</div>
                <div className="text-xs text-muted-foreground font-normal italic">Mobility</div>
              </div>
              <div className="p-8 border rounded-2xl">
                <div className="text-sm font-medium uppercase tracking-widest mb-2">P&G</div>
                <div className="text-xs text-muted-foreground font-normal italic">Procter & Gamble</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { Footer } from "@/components/footer";

