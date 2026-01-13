import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function InvestorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-24 px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-medium mb-8 uppercase tracking-tight">Investor Relations</h1>
        <p className="text-xl text-muted-foreground mb-12 font-normal">
          Transparent reporting and performance metrics for our capital partners.
        </p>

        <div className="space-y-12">
          <div className="bg-zinc-50 dark:bg-zinc-950 p-8 rounded-2xl border">
            <h2 className="text-2xl font-medium mb-6 uppercase tracking-tight">Financial Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium mb-1">AUM</div>
                <div className="text-2xl font-medium">$125M</div>
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium mb-1">Portfolio ROI</div>
                <div className="text-2xl font-medium">3.2x</div>
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium mb-1">Active Funds</div>
                <div className="text-2xl font-medium">2</div>
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium mb-1">Exits</div>
                <div className="text-2xl font-medium">12</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-6 uppercase tracking-tight">Recent Reports</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[10px] uppercase tracking-widest font-medium">Report Name</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-widest font-medium">Date</TableHead>
                  <TableHead className="text-right text-[10px] uppercase tracking-widest font-medium">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">2025 Annual Performance</TableCell>
                  <TableCell className="font-normal">Jan 15, 2026</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="font-medium text-xs">Download PDF</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Q4 Portfolio Update</TableCell>
                  <TableCell className="font-normal">Oct 12, 2025</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="font-medium text-xs">Download PDF</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

