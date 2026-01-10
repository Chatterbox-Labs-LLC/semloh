import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Landmark, History, Users } from "lucide-react";

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-24 px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-medium mb-12 text-center uppercase tracking-tight">The Company</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-3xl font-medium mb-6 uppercase tracking-tight">Our History</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-normal">
              Founded on the belief that software, strategy, and capital should work in harmony, Semloh has grown from a boutique development shop into a multi-faceted firm serving global clients and investing in the future.
            </p>
          </div>
          <div className="flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 rounded-3xl border">
            <History className="h-24 w-24 text-zinc-300" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <Card className="border-zinc-200 dark:border-zinc-800">
            <CardHeader>
              <Building2 className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-sm uppercase tracking-widest font-medium text-muted-foreground">Headquarters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-normal">Chicago, IL</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 dark:border-zinc-800">
            <CardHeader>
              <Landmark className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-sm uppercase tracking-widest font-medium text-muted-foreground">Entity Type</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-normal">Private Holding Company</p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 dark:border-zinc-800">
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-sm uppercase tracking-widest font-medium text-muted-foreground">Size</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground font-normal">5 Global Professionals</p>
            </CardContent>
          </Card>
        </div>

        <section className="text-center py-12 border-t">
          <Link href="/leadership" className="text-sm font-medium uppercase tracking-widest border-b border-black dark:border-white pb-2 hover:opacity-50 transition-opacity">
            View Leadership Team
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
