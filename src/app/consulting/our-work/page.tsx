import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ChevronRight, Layout, Monitor, Smartphone, Globe } from "lucide-react";

export default function OurWorkPage() {
  const projects = [
    {
      title: "Institutional Presence",
      description: "Complete redesign and development of a high-performance corporate platform, focusing on technical authority and minimalist design.",
      category: "Full Redesign",
      tech: "Next.js, Tailwind CSS"
    },
    {
      title: "Product Experience",
      description: "Developing the user interface and frontend architecture for a real-time communications platform.",
      category: "Product Design",
      tech: "React, TypeScript"
    },
    {
      title: "Global Reach",
      description: "Redesigning a market access platform to handle complex data visualizations with clarity and speed.",
      category: "UX/UI Redo",
      tech: "D3.js, Framer Motion"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-8 border-b text-center">
          <h1 className="text-4xl md:text-6xl font-medium mb-6 uppercase tracking-tight">Our Work</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            A selection of technical redesigns and digital transformations delivered by the Semloh team.
          </p>
        </section>

        {/* Capabilities Grid */}
        <section className="py-24 px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {[
              { icon: Layout, label: "UI Redesign" },
              { icon: Monitor, label: "Frontend Dev" },
              { icon: Smartphone, label: "Mobile First" },
              { icon: Globe, label: "Global SEO" }
            ].map((item, i) => (
              <div key={i} className="p-8 border rounded-2xl flex flex-col items-center space-y-4 bg-zinc-50 dark:bg-zinc-950">
                <item.icon className="h-6 w-6 text-muted-foreground" />
                <span className="text-[10px] uppercase tracking-widest font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="space-y-32">
            {projects.map((project, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-24 items-center">
                <div className={`space-y-8 ${i % 2 === 1 ? 'md:order-last' : ''}`}>
                  <div className="space-y-4">
                    <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">{project.category}</div>
                    <h2 className="text-3xl font-medium uppercase tracking-tight">{project.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed font-normal">
                    {project.description}
                  </p>
                  <div className="text-[10px] uppercase tracking-widest font-medium px-4 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-full inline-block">
                    {project.tech}
                  </div>
                </div>
                <div className="aspect-video bg-zinc-50 dark:bg-zinc-950 rounded-3xl border flex items-center justify-center relative overflow-hidden group">
                  <div className="text-[10px] uppercase tracking-[0.5em] font-medium text-muted-foreground opacity-30 group-hover:opacity-100 transition-opacity">
                    Case Study Under NDA
                  </div>
                  {/* Visual Decoration */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-black/5 dark:group-hover:border-white/5 transition-colors pointer-events-none rounded-3xl" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-8 bg-zinc-50 dark:bg-zinc-950 border-y text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-medium uppercase tracking-tight">Ready to redo your presence?</h2>
            <p className="text-muted-foreground font-normal leading-relaxed">
              We specialize in taking existing platforms and transforming them into modern, high-performance institutional tools.
            </p>
            <div className="pt-4">
              <Link href="/contact?subject=Consulting%20Redesign" className="inline-flex items-center px-8 py-4 bg-black text-white dark:bg-white dark:text-black text-xs uppercase tracking-[0.2em] font-medium hover:opacity-80 transition-opacity">
                Start a Redesign <ChevronRight className="ml-2 h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
