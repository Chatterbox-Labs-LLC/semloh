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
                  <a href="#entities" className="text-sm font-medium hover:opacity-60 transition-opacity">Global Entities</a>
                  <a href="#trademarks" className="text-sm font-medium hover:opacity-60 transition-opacity">Intellectual Property</a>
                  <a href="#terms" className="text-sm font-medium hover:opacity-60 transition-opacity">Terms of Service</a>
                  <a href="#privacy" className="text-sm font-medium hover:opacity-60 transition-opacity">Privacy Policy</a>
                  <a href="#disclosures" className="text-sm font-medium hover:opacity-60 transition-opacity">Institutional Disclosures</a>
                </nav>
              </div>
            </aside>

            <div className="space-y-32">
              {/* Global Entities */}
              <section id="entities" className="space-y-8">
                <h2 className="text-3xl font-medium uppercase tracking-tight">Global Entity Structure</h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-muted-foreground font-normal leading-relaxed">
                  <p>
                    Semloh Solutions operates through a global network of specialized entities designed to meet regional regulatory requirements and operational demands. 
                    <strong className="text-black dark:text-white font-medium"> Semloh Solutions LLC</strong> serves as the primary parent entity and global headquarters.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-8 mt-12">
                    <div className="space-y-2 border-l border-zinc-200 dark:border-zinc-800 pl-6">
                      <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-black dark:text-white">Americas</h4>
                      <p className="text-sm">Semloh Solutions Americas LLC</p>
                    </div>
                    <div className="space-y-2 border-l border-zinc-200 dark:border-zinc-800 pl-6">
                      <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-black dark:text-white">Europe</h4>
                      <p className="text-sm">Semloh Solutions EU LLC</p>
                    </div>
                    <div className="space-y-2 border-l border-zinc-200 dark:border-zinc-800 pl-6">
                      <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-black dark:text-white">Asia-Pacific</h4>
                      <p className="text-sm">Semloh Solutions Asia LLC</p>
                    </div>
                    <div className="space-y-2 border-l border-zinc-200 dark:border-zinc-800 pl-6">
                      <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-black dark:text-white">Oceania</h4>
                      <p className="text-sm">Semloh Solutions New Zealand LLC</p>
                    </div>
                  </div>

                  <p className="text-sm italic mt-8">
                    Engagement with the Firm may be facilitated through one or more of the above entities depending on jurisdiction, service type, and regulatory framework.
                  </p>
                </div>
              </section>

              {/* Intellectual Property */}
              <section id="trademarks" className="space-y-8">
                <h2 className="text-3xl font-medium uppercase tracking-tight">Intellectual Property</h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-muted-foreground font-normal leading-relaxed">
                  <p>
                    The visual identity, proprietary software, and strategic methodologies of Semloh Solutions are protected by international copyright and trademark laws.
                  </p>
                  
                  <h3 className="text-lg font-medium text-black dark:text-white uppercase tracking-widest mt-12 mb-4">Trademarks</h3>
                  <p>
                    "Semloh", "Semloh Solutions", "WeTrade", and the Semloh brand mark are registered or pending trademarks of Semloh Solutions LLC. The use of these trademarks without express written authorization is strictly prohibited.
                  </p>

                  <h3 className="text-lg font-medium text-black dark:text-white uppercase tracking-widest mt-12 mb-4">Proprietary Software</h3>
                  <p>
                    All source code, algorithms, and technical architectures developed by the Firm remain the exclusive intellectual property of Semloh Solutions LLC. Unauthorized reverse engineering, distribution, or replication of our software platforms—including but not limited to WeTrade—will result in immediate legal action.
                  </p>

                  <h3 className="text-lg font-medium text-black dark:text-white uppercase tracking-widest mt-12 mb-4">Content Rights</h3>
                  <p>
                    All editorial content, news releases, and research materials published by Semloh Solutions are the property of the Firm. Reproduction of these materials requires explicit attribution and prior written consent.
                  </p>
                </div>
              </section>

              {/* Terms of Service */}
              <section id="terms" className="space-y-8">
                <h2 className="text-3xl font-medium uppercase tracking-tight">Terms of Service</h2>
                <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-muted-foreground font-normal leading-relaxed">
                  <p>
                    By accessing the platforms and services provided by Semloh Solutions ("the Firm", collectively comprising Semloh Solutions LLC and its global subsidiaries), you agree to be bound by these Terms of Service. Our services include but are not limited to software-as-a-service platforms, technical consulting engagements, and investment advisory communications.
                  </p>
                  <h3 className="text-lg font-medium text-black dark:text-white uppercase tracking-widest mt-12 mb-4">Liability and Warranties</h3>
                  <p>
                    While we strive for technical excellence, the Firm provides its software and consulting services on an "as-is" and "as-available" basis. We make no warranties, expressed or implied, regarding the continuous availability or absolute security of our digital platforms.
                  </p>
                  <p>
                    In no event shall Semloh Solutions LLC or its global subsidiaries be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services.
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
