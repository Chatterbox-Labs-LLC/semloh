import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Brain, Cpu, Database, Search, ChevronRight } from "lucide-react";

export default function SherlockPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 px-8 border-b">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex p-4 bg-zinc-50 dark:bg-zinc-900 border mb-8">
              <Brain className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-medium mb-6 uppercase tracking-tight">Sherlock</h1>
            <p className="text-xl text-muted-foreground font-normal max-w-2xl mx-auto uppercase tracking-widest text-sm">
              Cognitive Institutional Assistant
            </p>
          </div>
        </section>

        <section className="py-24 px-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-medium uppercase tracking-tight">Intelligence, with Integrity.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sherlock is our next-generation AI assistant, developed in partnership with Anthropic. By utilizing the Claude API, Sherlock provides deep analytical reasoning while maintaining the highest standards of AI safety and data privacy.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Cpu className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-medium uppercase tracking-widest text-xs mb-1">Powered by Anthropic</h4>
                    <p className="text-sm text-muted-foreground">Utilizing the Claude API for industry-leading reasoning and safety.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Search className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-medium uppercase tracking-widest text-xs mb-1">Deep Analysis</h4>
                    <p className="text-sm text-muted-foreground">Sophisticated data synthesis for strategic institutional decision support.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Database className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-medium uppercase tracking-widest text-xs mb-1">Contextual Awareness</h4>
                    <p className="text-sm text-muted-foreground">Fine-tuned for technical consulting and financial architecture domains.</p>
                  </div>
                </div>
              </div>
              <div className="pt-8 p-6 bg-zinc-50 dark:bg-zinc-900 border space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Strategic Partner</div>
                    <div className="flex items-center gap-4 grayscale opacity-80">
                      <div className="text-xl font-bold tracking-tighter">ANTHROPIC</div>
                    </div>
                  </div>
                  <Link 
                    href="/news/anthropic-partnership-sherlock"
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
                  >
                    Learn More <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-zinc-50 dark:bg-zinc-900 border flex items-center justify-center p-12">
              <div className="w-full h-full border border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Internal Alpha Testing
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
