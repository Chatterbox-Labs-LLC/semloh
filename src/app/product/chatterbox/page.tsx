import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MessageSquare, Shield, Zap, Lock } from "lucide-react";

export default function ChatterboxPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 px-8 border-b">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex p-4 bg-zinc-50 dark:bg-zinc-900 border mb-8">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-medium mb-6 uppercase tracking-tight">Chatterbox</h1>
            <p className="text-xl text-muted-foreground font-normal max-w-2xl mx-auto uppercase tracking-widest text-sm">
              Institutional Communication Architecture
            </p>
          </div>
        </section>

        <section className="py-24 px-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-medium uppercase tracking-tight">Secure. Transparent. Scalable.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chatterbox is built for the modern institution that demands absolute data integrity and secure communication. It bridges the gap between casual collaboration and formal institutional record-keeping.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-medium uppercase tracking-widest text-xs mb-1">End-to-End Encryption</h4>
                    <p className="text-sm text-muted-foreground">Military-grade encryption for all institutional communications.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Lock className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-medium uppercase tracking-widest text-xs mb-1">Audit Trail</h4>
                    <p className="text-sm text-muted-foreground">Immutable logs for regulatory compliance and internal transparency.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-medium uppercase tracking-widest text-xs mb-1">Real-time Sync</h4>
                    <p className="text-sm text-muted-foreground">High-performance synchronization across global institutional offices.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-zinc-50 dark:bg-zinc-900 border flex items-center justify-center p-12">
              <div className="w-full h-full border border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Interface Preview Coming Soon
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
