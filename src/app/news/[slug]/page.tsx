import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ChevronLeft, Calendar, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

// Mock news data - in a real app, this would come from a CMS or DB
const newsArticles = {
  "expansion-technical-consulting": {
    date: "January 12, 2026",
    title: "Semloh Solutions Announces Expansion of Technical Consulting Division",
    category: "Company News",
    content: `
      <p>Semloh Solutions is pleased to announce a significant expansion of its technical consulting division, responding to the growing demand for institutional-grade digital transformation and architectural guidance.</p>
      <p>Since its inception, the firm has focused on bridging the gap between abstract technical potential and concrete institutional value. This expansion includes the appointment of three new senior technical leads and the opening of a dedicated research lab focused on high-performance web architecture.</p>
      <h3>Strategic Focus</h3>
      <p>The expanded division will prioritize three core areas: System Resilience, Cloud Infrastructure Optimization, and Modern Frontend Architecture. By deepening our expertise in these domains, we ensure that our clients continue to receive the most advanced technical guidance in an ever-evolving digital landscape.</p>
      <p>"Our goal has always been precision in execution and clarity in strategy," said George Holmes, Founder & CEO of Semloh. "This expansion allows us to take on more complex challenges while maintaining the boutique, high-fidelity service our partners expect."</p>
    `
  },
  "wetrade-private-beta": {
    date: "December 05, 2025",
    title: "WeTrade Platform Enters Private Beta for Institutional Partners",
    category: "Product Update",
    content: `
      <p>The WeTrade platform, Semloh's flagship institutional-grade trading architecture, has officially entered its private beta phase. A select group of institutional partners has been granted access to the platform's core execution and clearing modules.</p>
      <p>Built on a foundation of low-latency architecture and deep liquidity integration, WeTrade represents the next generation of multi-asset trading platforms. The beta phase will focus on stress-testing the global clearing infrastructure and refining the user interface for professional traders.</p>
      <h3>Technological Milestones</h3>
      <p>During the development phase, the team achieved several key milestones, including sub-millisecond execution times for digital asset pairs and seamless integration with legacy banking APIs for traditional stock and bond clearing.</p>
    `
  },
  "ai-infrastructure-investment": {
    date: "October 20, 2025",
    title: "Semloh Participates in Series A for AI-Driven Infrastructure Startup",
    category: "Investment",
    content: `
      <p>Semloh is proud to announce its participation in the $25M Series A funding round for a leading-edge startup focused on AI-driven cloud infrastructure optimization.</p>
      <p>This investment aligns with Semloh's strategy of allocating capital to ventures that are building the fundamental building blocks of the future technical landscape. The startup's proprietary orchestration engine allows for dynamic scaling of compute resources based on real-time AI model requirements, significantly reducing infrastructure costs for high-growth firms.</p>
      <h3>Technical Due Diligence</h3>
      <p>As part of our investment process, the Semloh engineering team conducted an exhaustive technical audit of the startup's core engine, verifying its scalability and security protocols. This technical-first approach to investing ensures that our capital is backed by engineering reality.</p>
    `
  }
};

export async function generateStaticParams() {
  return Object.keys(newsArticles).map((slug) => ({
    slug: slug,
  }));
}

export default async function NewsArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const article = newsArticles[slug as keyof typeof newsArticles];

  if (!article) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-24 px-8 max-w-3xl mx-auto">
        <div className="space-y-12">
          <Link href="/newsroom" className="inline-flex items-center text-[10px] uppercase tracking-widest font-medium text-muted-foreground hover:text-black dark:hover:text-white transition-colors">
            <ChevronLeft className="mr-1 h-3 w-3" /> Back to Newsroom
          </Link>

          <header className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
                {article.category}
              </div>
              <div className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                <Calendar className="h-3 w-3" /> {article.date}
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-medium uppercase tracking-tight leading-tight">
              {article.title}
            </h1>
          </header>

          <div 
            className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-muted-foreground font-normal leading-relaxed article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <footer className="pt-12 border-t mt-12 flex justify-between items-center">
            <div className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground">
              &copy; {new Date().getFullYear()} Semloh Solutions
            </div>
            <button className="inline-flex items-center text-[10px] uppercase tracking-widest font-medium hover:opacity-60 transition-opacity">
              <Share2 className="mr-2 h-3 w-3" /> Share Article
            </button>
          </footer>
        </div>
      </main>
      <Footer />
    </div>
  );
}
