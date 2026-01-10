"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

function ContactContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    const sub = searchParams.get("subject");
    if (sub) setSubject(sub);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="text-center space-y-6 max-w-md mx-auto py-24">
        <CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
        <h1 className="text-3xl font-medium uppercase tracking-tight">Message Sent</h1>
        <p className="text-muted-foreground font-normal">
          Thank you for reaching out. A member of the Semloh team will be in touch shortly.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")} className="font-medium">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-medium uppercase tracking-tight">Contact</h1>
        <p className="text-xl text-muted-foreground font-normal">
          Direct communication for strategic inquiries.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground">Name</label>
            <Input required placeholder="Your Name" className="font-normal border-zinc-200 dark:border-zinc-800" />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground">Email</label>
            <Input required type="email" placeholder="email@example.com" className="font-normal border-zinc-200 dark:border-zinc-800" />
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground">Subject</label>
          <Input 
            required 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Strategic Inquiry" 
            className="font-normal border-zinc-200 dark:border-zinc-800" 
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground">Message</label>
          <Textarea required placeholder="Provide context for your inquiry..." className="min-h-[200px] font-normal border-zinc-200 dark:border-zinc-800 resize-none" />
        </div>
        <Button 
          disabled={status === "submitting"}
          className="w-full font-medium py-6 h-auto text-lg uppercase tracking-widest"
        >
          {status === "submitting" ? "Sending..." : "Send Inquiry"}
        </Button>
      </form>
    </>
  );
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-24 px-8 max-w-3xl mx-auto w-full">
        <Suspense fallback={
          <div className="flex items-center justify-center py-24">
            <div className="text-[10px] uppercase tracking-[0.5em] animate-pulse">Loading Contact Form...</div>
          </div>
        }>
          <ContactContent />
        </Suspense>

        <div className="mt-24 pt-12 border-t grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground mb-4">Direct Email</h3>
            <p className="font-normal">contact@semlohcorp.com</p>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground mb-4">Headquarters</h3>
            <p className="font-normal">New York, NY</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
