import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-8 border-b text-center">
          <h1 className="text-4xl md:text-6xl font-medium mb-6 uppercase tracking-tight">The Firm</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            An institutional framework for software development, strategic consulting, and capital allocation.
          </p>
        </section>

        {/* Core Identity */}
        <section className="py-24 px-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">Genesis</h2>
                <h3 className="text-3xl font-medium uppercase tracking-tight">Built for Resilience</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-normal">
                Founded on the belief that software, strategy, and capital should work in harmony, Semloh has evolved from a boutique development shop into a multi-faceted holding company. We operate with a small, elite team to maintain maximum agility and precision.
              </p>
              <div className="pt-4">
                <Link href="/leadership" className="inline-flex items-center text-[10px] uppercase tracking-widest font-medium hover:opacity-60 transition-opacity border-b border-black dark:border-white pb-1">
                  Our Leadership <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
            <div className="aspect-square bg-zinc-50 dark:bg-zinc-950 rounded-3xl border flex items-center justify-center p-12">
              <div className="text-[10px] uppercase tracking-[0.5em] font-medium text-muted-foreground text-center leading-loose">
                Established <br /> 
                MMXXI <br />
                <div className="mt-8 h-px w-12 bg-zinc-200 dark:bg-zinc-800 mx-auto" />
                <div className="mt-8 text-black dark:text-white">New York, NY</div>
              </div>
            </div>
          </div>
        </section>

        {/* Entity Details */}
        <section className="py-24 px-8 bg-zinc-50 dark:bg-zinc-950 border-y">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">01 / Structure</div>
              <h4 className="text-xl font-medium uppercase tracking-tight">Private Holding</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                Operating as a private entity to ensure long-term strategic alignment and independence in our investment and development cycles.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">02 / Scope</div>
              <h4 className="text-xl font-medium uppercase tracking-tight">Global Operations</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                While headquartered in New York, our technical and investment reach is global, managing assets and codebases across major markets.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">03 / Philosophy</div>
              <h4 className="text-xl font-medium uppercase tracking-tight">Technical Edge</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                We believe the most significant value is created by those who understand both the code and the capital that fuels it.
              </p>
            </div>
          </div>
        </section>

        {/* Values Callout */}
        <section className="py-32 px-8 max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-medium uppercase tracking-tight leading-tight">
            Commitment to <br /> Excellence & Precision.
          </h2>
          <div className="h-px w-24 bg-zinc-200 dark:bg-zinc-800 mx-auto" />
          <p className="text-muted-foreground font-normal leading-relaxed italic">
            "Our firm exists to bridge the gap between abstract technical potential and concrete institutional value."
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
