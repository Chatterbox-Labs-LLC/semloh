import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  const lastUpdated = "January 12, 2026";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-24 px-8 max-w-3xl mx-auto">
        <div className="space-y-12">
          <header className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-medium uppercase tracking-tight">Privacy Policy</h1>
            <p className="text-muted-foreground font-normal">Last Updated: {lastUpdated}</p>
          </header>

          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-12 text-muted-foreground font-normal leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-black dark:text-white uppercase tracking-tight">Overview</h2>
              <p>
                Privacy and data integrity are fundamental to the technical operations at Semloh Solutions ("the Firm"). This policy outlines our approach to data protection across our software platforms, consulting engagements, and investment operations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-black dark:text-white uppercase tracking-tight">Data Collection</h2>
              <p>
                We collect minimal data necessary to provide high-performance services. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Professional contact information provided during inquiries.</li>
                <li>Technical metadata required for secure platform access.</li>
                <li>Operational data necessary for consulting fulfillment.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-black dark:text-white uppercase tracking-tight">Data Protection</h2>
              <p>
                All data is processed using industry-standard encryption and stored within resilient global infrastructure. We implement strict access controls to ensure that only authorized personnel can access sensitive information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-black dark:text-white uppercase tracking-tight">Global Compliance</h2>
              <p>
                While we are headquartered in Chicago, we adhere to international data protection standards where applicable to our global client base and cross-border operations.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
