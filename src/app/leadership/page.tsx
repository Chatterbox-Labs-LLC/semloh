import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function LeadershipPage() {
  const leaders = [
    {
      name: "George Holmes",
      role: "Founder & CEO",
      email: "george@semlohcorp.com",
      bio: "Leading the firm's strategic vision across software development and investment operations.",
      socials: { x: "#", linkedin: "#" }
    },
    {
      name: "Edward Spencer",
      role: "President",
      email: "edward@semlohcorp.com",
      bio: "Directing firm operations and institutional strategy across all business units.",
      socials: { x: "#", linkedin: "#" }
    },
    {
      name: "Connor Dugan",
      role: "CTO",
      email: "connor@semlohcorp.com",
      bio: "Overseeing technical architecture and product engineering for Semloh's software portfolio.",
      socials: { x: "#", linkedin: "#" }
    },
    {
      name: "Nico Paskitwitz",
      role: "Chief Investor Officer",
      email: "nico@semlohcorp.com",
      bio: "Managing capital allocation and portfolio strategy across public and private markets.",
      socials: { x: "#", linkedin: "#" }
    },
    {
      name: "Michael Chessare",
      role: "Board Member",
      email: "micheal@semlohcorp.com",
      bio: "Providing governance and strategic oversight to the firm's executive leadership.",
      socials: { x: "#", linkedin: "#" }
    }
  ];

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
            {leaders.map((leader) => (
              <div key={leader.name} className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div className="text-lg font-medium uppercase tracking-widest">{leader.name}</div>
                    <div className="flex gap-2">
                      <Link href={leader.socials.x} className="text-muted-foreground hover:text-black dark:hover:text-white transition-colors">
                        <Twitter className="h-3.5 w-3.5" />
                      </Link>
                      <Link href={leader.socials.linkedin} className="text-muted-foreground hover:text-black dark:hover:text-white transition-colors">
                        <Linkedin className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-tight font-normal">{leader.role}</div>
                  <div className="text-[10px] text-muted-foreground mt-1 lowercase font-normal">{leader.email}</div>
                </div>
                <p className="text-sm text-muted-foreground font-normal leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            ))}
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
