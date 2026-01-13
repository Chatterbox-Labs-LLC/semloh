import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ChevronLeft, Calendar, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

// Mock news data - in a real app, this would come from a CMS or DB
const newsArticles = {
  "anthropic-partnership-sherlock": {
    date: "January 12, 2026",
    title: "Semloh Solutions Announces Strategic Partnership with Anthropic",
    category: "Partnership",
    content: `
      <p>Semloh Solutions is pleased to announce a strategic partnership with Anthropic, a leader in AI safety and research. This collaboration marks a significant milestone in our mission to deliver institutional-grade artificial intelligence solutions.</p>
      <h3>Sherlock: The Future of Institutional Assistance</h3>
      <p>At the core of this partnership is the development of <strong>Sherlock</strong>, our next-generation AI assistant. By leveraging Anthropic's high-performance Claude API, Sherlock is engineered to provide unprecedented levels of analytical depth, security, and reliability for our clients.</p>
      <p>Sherlock is designed to operate within the complex regulatory and technical frameworks of modern enterprise. Unlike general-purpose models, Sherlock is fine-tuned to understand the nuances of technical consulting, institutional trading, and strategic capital allocation.</p>
      <h3>The Claude Advantage</h3>
      <p>The decision to partner with Anthropic was driven by their industry-leading commitment to AI safety and Constitutional AI. By utilizing the Claude API, Sherlock benefits from:</p>
      <ul>
        <li><strong>Institutional Security:</strong> Enterprise-grade data protection and privacy standards.</li>
        <li><strong>Advanced Reasoning:</strong> Superior performance in complex logical analysis and technical documentation.</li>
        <li><strong>Reliability:</strong> Reduced hallucination rates and consistent output for critical operations.</li>
      </ul>
      <h3>Integration Across the Semloh Ecosystem</h3>
      <p>Sherlock will be integrated across our entire product suite, including our upcoming institutional trading platform, WeTrade, and our boutique consulting workflows. This integration ensures that our partners have access to the most sophisticated AI tools available in the market today.</p>
      <p>"This partnership with Anthropic allows us to push the boundaries of what's possible in institutional AI," said the Firm's technical leadership. "With Sherlock, we are not just building a chatbot; we are building a cognitive partner for the modern institution."</p>
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
