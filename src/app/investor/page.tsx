import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InvestorPage() {
  const investors = [
    { name: "John Holmes", role: "Strategic Investor" },
    { name: "Michael Cotton", role: "Strategic Investor" },
    { name: "Jenni Sorenson", role: "Strategic Investor" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 px-8 border-b text-center">
          <h1 className="text-4xl md:text-6xl font-medium mb-6 uppercase tracking-tight">Our Investors</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Strategic capital partners supporting the firm's growth and vision.
          </p>
        </section>

        <section className="py-24 px-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {investors.map((investor) => (
              <div key={investor.name} className="space-y-4 text-center">
                <div className="border-b pb-4">
                  <div className="text-lg font-medium uppercase tracking-widest">{investor.name}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-tight font-normal">{investor.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 px-8 max-w-3xl mx-auto border-t text-center">
          <h2 className="text-2xl font-medium mb-8 uppercase tracking-tight">Partnership</h2>
          <p className="text-muted-foreground font-normal leading-relaxed mb-12">
            We are proud to be backed by individuals who share our commitment to technical excellence and long-term value creation.
          </p>
          <Button variant="outline" className="font-medium px-12 py-6 h-auto" asChild>
            <Link href="/contact?subject=Investment Inquiry">Want to Invest?</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
