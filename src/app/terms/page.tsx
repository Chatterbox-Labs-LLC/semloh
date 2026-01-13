import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  const lastUpdated = "January 12, 2026";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-24 px-8 max-w-3xl mx-auto">
        <div className="space-y-12">
          <header className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-medium uppercase tracking-tight">Terms of Service</h1>
            <p className="text-muted-foreground font-normal">Last Updated: {lastUpdated}</p>
          </header>

          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-12 text-muted-foreground font-normal leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-black dark:text-white uppercase tracking-tight">Agreement</h2>
              <p>
                By accessing or using any platforms, software, or consulting services provided by Semloh Solutions ("the Firm"), you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-black dark:text-white uppercase tracking-tight">Intellectual Property</h2>
              <p>
                All technical architectures, software code, design patterns, and strategic methodologies developed by the Firm are protected by intellectual property laws. Unauthorized reproduction or redistribution is strictly prohibited.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-black dark:text-white uppercase tracking-tight">Consulting & Advisory</h2>
              <p>
                Technical guidance and strategic consulting are provided based on the information available at the time of engagement. The Firm is not liable for outcomes resulting from changes in external market conditions or technical environments post-delivery.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-black dark:text-white uppercase tracking-tight">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Semloh Solutions shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our technical platforms.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
