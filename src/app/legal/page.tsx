import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function LegalPage() {
  const lastUpdated = "January 12, 2026";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 px-8 border-b">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-medium mb-6 uppercase tracking-tight">Legal & Compliance</h1>
            <p className="text-xl text-muted-foreground font-normal max-w-2xl mx-auto">
              Institutional transparency and regulatory disclosures governing our software, consulting, and investment operations.
            </p>
            <div className="mt-8 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Last Updated: {lastUpdated}
            </div>
          </div>
        </section>

        <section className="py-24 px-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[250px_1fr] gap-24">
            <aside className="space-y-8 sticky top-32 h-fit hidden md:block">
              <div className="space-y-4">
                <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Sections</div>
                <nav className="flex flex-col space-y-4">
                  <a href="#terms" className="text-sm font-medium hover:opacity-60 transition-opacity">Terms of Service</a>
                  <a href="#privacy" className="text-sm font-medium hover:opacity-60 transition-opacity">Privacy Policy</a>
                  <a href="#disclosures" className="text-sm font-medium hover:opacity-60 transition-opacity">Institutional Disclosures</a>
                  <a href="#cookies" className="text-sm font-medium hover:opacity-60 transition-opacity">Cookie Policy</a>
                </nav>
              </div>
            </aside>

            <div className="space-y-32">
              {/* Terms of Service */}
              <section id="terms" className="space-y-8">
                <h2 className="text-3xl font-medium uppercase tracking-tight">Terms of Service</h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-muted-foreground font-normal leading-relaxed">
                  <p>
                    By accessing the platforms and services provided by Semloh Solutions ("the Firm"), you agree to be bound by these Terms of Service. Our services include but are not limited to software-as-a-service platforms, technical consulting engagements, and investment advisory communications.
                  </p>
                  <h3 className="text-lg font-medium text-black dark:text-white uppercase tracking-widest mt-12 mb-4">Use of Services</h3>
                  <p>
                    You agree to use our services only for lawful purposes and in accordance with institutional guidelines. Any unauthorized use of our technical infrastructure or proprietary software is strictly prohibited.
                  </p>
                </div>
              </section>

              {/* Privacy Policy */}
              <section id="privacy" className="space-y-8">
                <h2 className="text-3xl font-medium uppercase tracking-tight">Privacy Policy</h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-muted-foreground font-normal leading-relaxed">
                  <p>
                    Privacy and data integrity are fundamental to our technical operations. This policy outlines how we collect, process, and protect information across our global infrastructure.
                  </p>
                  <h3 className="text-lg font-medium text-black dark:text-white uppercase tracking-widest mt-12 mb-4">Data Collection</h3>
                  <p>
                    We collect minimal data necessary for the high-performance operation of our software and the fulfillment of our consulting obligations. We do not sell user data to third parties.
                  </p>
                </div>
              </section>

              {/* Institutional Disclosures */}
              <section id="disclosures" className="space-y-8">
                <h2 className="text-3xl font-medium uppercase tracking-tight">Institutional Disclosures</h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-muted-foreground font-normal leading-relaxed">
                  <p>
                    Semloh operates as a multidisciplinary firm. Our investment operations are distinct from our software development and consulting divisions to prevent conflicts of interest.
                  </p>
                  <h3 className="text-lg font-medium text-black dark:text-white uppercase tracking-widest mt-12 mb-4">Investment Risks</h3>
                  <p>
                    Venture investing and capital allocation involve significant risk. Past performance is not indicative of future results. Our technical due diligence is intended to inform, not guarantee, investment outcomes.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 border-t bg-zinc-50 dark:bg-zinc-950">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-2xl font-medium uppercase tracking-tight">Legal Inquiries</h2>
            <p className="text-muted-foreground font-normal">
              For specific legal questions or regulatory documentation requests, please contact our compliance office.
            </p>
            <div className="pt-4">
              <a href="mailto:legal@semlohsolutions.com" className="inline-flex items-center px-8 py-4 bg-black text-white dark:bg-white dark:text-black text-xs uppercase tracking-[0.2em] font-medium hover:opacity-80 transition-opacity">
                Contact Compliance
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
