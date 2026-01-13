import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 px-8 border-b text-center">
          <h1 className="text-4xl md:text-6xl font-medium mb-6 uppercase tracking-tight">Tech Consulting</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Strategic technical guidance and high-performance website development for evolving organizations.
          </p>
        </section>

        <section className="py-24 px-8 max-w-5xl mx-auto grid md:grid-cols-2 gap-24">
          <div className="space-y-6">
            <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">Capabilities</div>
            <h2 className="text-3xl font-medium uppercase tracking-tight">Website Design & Redevelopment</h2>
            <p className="text-lg text-muted-foreground font-normal leading-relaxed">
              We specialize in taking existing web presences and transforming them into modern, institutional-grade platforms. Our approach focuses on speed, accessibility, and high-fidelity design.
            </p>
            <div className="pt-4">
              <Link href="/consulting/our-work" className="inline-flex items-center text-[10px] uppercase tracking-widest font-medium hover:opacity-60 transition-opacity border-b border-black dark:border-white pb-1">
                View Our Work <ChevronRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-xl font-medium uppercase tracking-tight">System Architecture</h3>
              <p className="text-muted-foreground font-normal leading-relaxed text-sm">Designing scalable, resilient, and modern technical foundations for high-growth products.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium uppercase tracking-tight">Cloud Strategy</h3>
              <p className="text-muted-foreground font-normal leading-relaxed text-sm">Optimizing infrastructure spend and performance across AWS, GCP, and Azure environments.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium uppercase tracking-tight">Security Audit</h3>
              <p className="text-muted-foreground font-normal leading-relaxed text-sm">Comprehensive reviews of your technical stack to ensure data integrity and compliance.</p>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 max-w-5xl mx-auto border-t text-center space-y-8">
          <h2 className="text-2xl font-medium uppercase tracking-tight">Need technical clarity?</h2>
          <div className="pt-4">
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-black text-white dark:bg-white dark:text-black text-xs uppercase tracking-[0.2em] font-medium hover:opacity-80 transition-opacity">
              Schedule a Technical Review <ChevronRight className="ml-2 h-3 w-3" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

