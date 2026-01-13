import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ChevronRight, Calendar, ArrowUpRight } from "lucide-react";

export default function NewsroomPage() {
  const news = [
    {
      date: "January 12, 2026",
      title: "Semloh Solutions Announces Strategic Partnership with Anthropic",
      excerpt: "Leveraging Anthropic's Claude API to power Sherlock, our next-generation institutional AI assistant.",
      category: "Partnership",
      link: "/news/anthropic-partnership-sherlock"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-8 border-b text-center">
          <h1 className="text-4xl md:text-6xl font-medium mb-6 uppercase tracking-tight">Newsroom</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            The latest updates, technical milestones, and strategic announcements from Semloh.
          </p>
        </section>

        {/* Featured News */}
        <section className="py-24 px-8 max-w-5xl mx-auto">
          <div className="space-y-16">
            {news.map((item, i) => (
              <div key={i} className="group grid md:grid-cols-[200px_1fr] gap-8 items-start">
                <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-muted-foreground pt-1">
                  <Calendar className="h-3 w-3" />
                  {item.date}
                </div>
                <div className="space-y-4">
                  <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
                    {item.category}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-tight group-hover:opacity-60 transition-opacity leading-tight">
                    <Link href={item.link} className="flex items-center gap-2">
                      {item.title}
                    </Link>
                  </h2>
                  <p className="text-lg text-muted-foreground font-normal leading-relaxed max-w-2xl">
                    {item.excerpt}
                  </p>
                  <Link href={item.link} className="inline-flex items-center text-[10px] uppercase tracking-widest font-medium border-b border-black dark:border-white pb-1 pt-2">
                    Read Full Story <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Media Assets */}
        <section className="py-24 px-8 bg-zinc-50 dark:bg-zinc-950 border-y">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-3xl font-medium uppercase tracking-tight mb-6">Media Resources</h2>
                <p className="text-lg text-muted-foreground font-normal leading-relaxed mb-8">
                  Access official brand assets, leadership photography, and technical diagrams for press use.
                </p>
                <Link href="/contact?subject=Media Inquiry" className="inline-flex items-center px-8 py-4 bg-black text-white dark:bg-white dark:text-black text-xs uppercase tracking-[0.2em] font-medium hover:opacity-80 transition-opacity">
                  Request Press Kit <ChevronRight className="ml-2 h-3 w-3" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square border rounded-2xl bg-white dark:bg-black flex items-center justify-center p-8">
                  <div className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground">Brand Identity</div>
                </div>
                <div className="aspect-square border rounded-2xl bg-white dark:bg-black flex items-center justify-center p-8">
                  <div className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground">Leadership</div>
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
