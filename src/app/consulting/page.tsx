import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function ConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 px-8 border-b text-center">
          <h1 className="text-4xl md:text-6xl font-medium mb-6">Tech Consulting</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Strategic technical guidance for evolving organizations.
          </p>
        </section>

        <section className="py-24 px-8 max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-medium uppercase tracking-tight">System Architecture</h3>
            <p className="text-muted-foreground font-normal leading-relaxed">Designing scalable, resilient, and modern technical foundations for high-growth products.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium uppercase tracking-tight">Cloud Strategy</h3>
            <p className="text-muted-foreground font-normal leading-relaxed">Optimizing infrastructure spend and performance across AWS, GCP, and Azure environments.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium uppercase tracking-tight">Security Audit</h3>
            <p className="text-muted-foreground font-normal leading-relaxed">Comprehensive reviews of your technical stack to ensure data integrity and compliance.</p>
          </div>
        </section>

        <section className="py-24 px-8 max-w-5xl mx-auto border-t text-center">
          <h2 className="text-2xl font-medium mb-8">Need technical clarity?</h2>
          <Button variant="outline" className="font-medium px-8 py-6 h-auto" asChild>
            <a href="/contact">Schedule a Technical Review</a>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { Footer } from "@/components/footer";

