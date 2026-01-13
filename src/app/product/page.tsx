import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ChevronRight, MessageSquare, LineChart, Brain } from "lucide-react";

export default function ProductPage() {
  const products = [
    {
      id: "chatterbox",
      name: "Chatterbox",
      tagline: "Institutional Communication Architecture",
      description: "A high-fidelity communication platform designed for secure, institutional-grade collaboration and data integrity.",
      icon: <MessageSquare className="w-6 h-6" />,
      link: "/product/chatterbox"
    },
    {
      id: "wetrade",
      name: "WeTrade",
      tagline: "Multi-Asset Execution Platform",
      description: "Low-latency market access and sophisticated execution tools for professional traders and institutions.",
      icon: <LineChart className="w-6 h-6" />,
      link: "/product/wetrade"
    },
    {
      id: "sherlock",
      name: "Sherlock",
      tagline: "Cognitive Institutional Assistant",
      description: "Advanced AI-driven analytical assistant powered by Anthropic's Claude API for strategic decision support.",
      icon: <Brain className="w-6 h-6" />,
      link: "/product/sherlock"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 px-8 border-b">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-medium mb-6 uppercase tracking-tight">The Ecosystem</h1>
            <p className="text-xl text-muted-foreground font-normal max-w-2xl mx-auto">
              Institutional-grade software architectures designed for technical precision and operational excellence.
            </p>
          </div>
        </section>

        <section className="py-24 px-8">
          <div className="max-w-5xl mx-auto grid gap-12">
            {products.map((product) => (
              <Link 
                key={product.id}
                href={product.link}
                className="group grid md:grid-cols-[1fr_300px] gap-12 p-12 border hover:border-black transition-all"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border group-hover:bg-black group-hover:text-white transition-colors">
                      {product.icon}
                    </div>
                    <h2 className="text-3xl font-medium uppercase tracking-tight">{product.name}</h2>
                  </div>
                  <p className="text-xl font-medium text-black dark:text-white uppercase tracking-widest text-sm opacity-60">
                    {product.tagline}
                  </p>
                  <p className="text-lg text-muted-foreground font-normal leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <div className="w-full h-40 bg-zinc-50 dark:bg-zinc-900 border" />
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium group-hover:translate-x-2 transition-transform">
                    Explore Platform <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
