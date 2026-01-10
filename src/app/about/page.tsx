import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 px-8 border-b text-center">
          <h1 className="text-4xl md:text-6xl font-medium mb-6 uppercase tracking-tight">The Firm</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            A multidisciplinary collective dedicated to the pursuit of technical and strategic excellence.
          </p>
        </section>

        <section className="py-24 px-8 max-w-5xl mx-auto space-y-32">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground mb-6">Genesis</h2>
              <h3 className="text-3xl font-medium mb-8 uppercase tracking-tight">Our Philosophy</h3>
              <p className="text-lg text-muted-foreground font-normal leading-relaxed">
                Semloh was founded on the principle that the most significant value is created at the intersection of creation and capital. We don't just invest in technology; we build it, refine it, and scale it.
              </p>
            </div>
            <div className="aspect-video bg-zinc-50 dark:bg-zinc-950 border rounded-3xl flex items-center justify-center p-12">
               <div className="text-[10px] uppercase tracking-[0.5em] font-medium text-muted-foreground text-center">Building for the <br /> Long Term</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-widest">Technical Mastery</h4>
              <p className="text-sm text-muted-foreground font-normal leading-relaxed">Our engineering-first approach ensures that every project we undertake is built on a foundation of resilient, modern architecture.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-widest">Strategic Capital</h4>
              <p className="text-sm text-muted-foreground font-normal leading-relaxed">We provide more than just funding. We offer the technical due diligence and operational guidance necessary for sustained growth.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium uppercase tracking-widest">Global Perspective</h4>
              <p className="text-sm text-muted-foreground font-normal leading-relaxed">Operating from Chicago with a global mindset, we serve clients and evaluate opportunities across diverse industries and borders.</p>
            </div>
          </div>
        </section>

        <section className="py-32 px-8 bg-zinc-50 dark:bg-zinc-950 border-y">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-medium mb-8 uppercase tracking-tight italic">"Precision in execution, clarity in strategy."</h2>
            <p className="text-muted-foreground font-normal">
              At Semloh, we are committed to maintaining a small, disciplined team of highly capable individuals. This allows us to navigate complex challenges with the speed and precision that larger firms cannot match.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
