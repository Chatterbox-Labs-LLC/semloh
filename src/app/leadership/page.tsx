import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function LeadershipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 px-8 border-b text-center">
          <h1 className="text-4xl md:text-6xl font-medium mb-6 uppercase tracking-tight">Leadership</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            A small, disciplined team driving technical and strategic excellence.
          </p>
        </section>

        <section className="py-24 px-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="text-lg font-medium uppercase tracking-widest">George Holmes</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-tight font-normal">Founder & CEO</div>
                <div className="text-[10px] text-muted-foreground mt-1 lowercase font-normal">george@semlohcorp.com</div>
              </div>
              <p className="text-sm text-muted-foreground font-normal leading-relaxed">
                Leading the firm's strategic vision across software development and investment operations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="text-lg font-medium uppercase tracking-widest">Edward Spencer</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-tight font-normal">President</div>
                <div className="text-[10px] text-muted-foreground mt-1 lowercase font-normal">edward@semlohcorp.com</div>
              </div>
              <p className="text-sm text-muted-foreground font-normal leading-relaxed">
                Directing firm operations and institutional strategy across all business units.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="text-lg font-medium uppercase tracking-widest">Connor Dugan</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-tight font-normal">CTO</div>
                <div className="text-[10px] text-muted-foreground mt-1 lowercase font-normal">connor@semlohcorp.com</div>
              </div>
              <p className="text-sm text-muted-foreground font-normal leading-relaxed">
                Overseeing technical architecture and product engineering for Semloh's software portfolio.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="text-lg font-medium uppercase tracking-widest">Nico Paskitwitz</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-tight font-normal">Chief Investor Officer</div>
                <div className="text-[10px] text-muted-foreground mt-1 lowercase font-normal">nico@semlohcorp.com</div>
              </div>
              <p className="text-sm text-muted-foreground font-normal leading-relaxed">
                Managing capital allocation and portfolio strategy across public and private markets.
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="text-lg font-medium uppercase tracking-widest">Michael Chessare</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-tight font-normal">Board Member</div>
                <div className="text-[10px] text-muted-foreground mt-1 lowercase font-normal">micheal@semlohcorp.com</div>
              </div>
              <p className="text-sm text-muted-foreground font-normal leading-relaxed">
                Providing governance and strategic oversight to the firm's executive leadership.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 max-w-3xl mx-auto border-t text-center">
          <h2 className="text-2xl font-medium mb-6">Built on expertise.</h2>
          <p className="text-muted-foreground font-normal leading-relaxed italic">
            "We believe in small teams of highly capable individuals who can navigate complex challenges with precision and speed."
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
