import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ChevronLeft, Mail } from "lucide-react";
import { notFound } from "next/navigation";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const leaders = {
  "george-holmes": {
    name: "George Holmes",
    role: "Founder & CEO",
    email: "george@semlohsolutions.com",
    bio: "Leading the firm's strategic vision across software development and investment operations. With a background in high-performance computing and strategic consulting, George founded Semloh to bridge the gap between abstract technical potential and concrete institutional value.",
    extendedBio: "George's leadership is defined by a commitment to technical precision and a multi-disciplinary approach to problem-solving. He oversees the firm's core software projects, including WeTrade and Sherlock, while directing capital allocation strategies that support the next generation of technical infrastructure. His vision for Semloh is built on the belief that small, highly-capable teams are the most effective engines of innovation.",
    socials: { x: "#", linkedin: "#" }
  },
  "edward-spencer": {
    name: "Edward Spencer",
    role: "President",
    email: "edward@semlohsolutions.com",
    bio: "Directing firm operations and institutional strategy across all business units.",
    extendedBio: "Edward brings extensive experience in operational management and institutional growth. As President, he is responsible for the firm's day-to-day operations and the long-term strategic alignment of its diverse business units. He ensures that Semloh's consulting, software, and investment divisions operate with the same high standards of excellence and transparency.",
    socials: { x: "#", linkedin: "#" }
  },
  "connor-dugan": {
    name: "Connor Dugan",
    role: "CTO",
    email: "connor@semlohsolutions.com",
    bio: "Overseeing technical architecture and product engineering for Semloh's software portfolio.",
    extendedBio: "Connor is the architect of Semloh's technical future. As CTO, he leads the engineering teams responsible for WeTrade, Chatterbox, and our advanced AI research. His focus on low-latency systems and secure distributed architectures ensures that Semloh's software remains at the forefront of the industry. Connor is dedicated to maintaining a culture of engineering excellence and rigorous technical due diligence.",
    socials: { x: "#", linkedin: "#" }
  },
  "nico-paskitwitz": {
    name: "Nico Paskitwitz",
    role: "Chief Investor Officer",
    email: "nico@semlohsolutions.com",
    bio: "Managing capital allocation and portfolio strategy across public and private markets.",
    extendedBio: "Nico leads Semloh's investment division with a focus on high-conviction technical ventures. His approach to capital allocation is rooted in deep technical understanding and a long-term view of market evolution. Nico oversees the firm's portfolio strategy, ensuring that every investment aligns with our core mission of supporting fundamental technical innovation.",
    socials: { x: "#", linkedin: "#" }
  },
  "michael-chessare": {
    name: "Michael Chessare",
    role: "Board Member",
    email: "michael@semlohsolutions.com",
    bio: "Providing governance and strategic oversight to the firm's executive leadership.",
    extendedBio: "Michael provides critical governance and a wealth of strategic experience to the Semloh board. His oversight ensures that the firm remains focused on its core values while navigating the complexities of global operations. Michael's guidance is instrumental in shaping the firm's long-term institutional strategy and regulatory compliance framework.",
    socials: { x: "#", linkedin: "#" }
  }
};

export async function generateStaticParams() {
  return Object.keys(leaders).map((slug) => ({
    slug: slug,
  }));
}

export default function LeaderProfilePage({ params }: { params: { slug: string } }) {
  const leader = leaders[params.slug as keyof typeof leaders];

  if (!leader) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-24 px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          <Link href="/leadership" className="inline-flex items-center text-[10px] uppercase tracking-widest font-medium text-muted-foreground hover:text-black dark:hover:text-white transition-colors">
            <ChevronLeft className="mr-1 h-3 w-3" /> Back to Leadership
          </Link>

          <div className="grid md:grid-cols-[350px_1fr] gap-24">
            <div className="space-y-8">
              <div className="aspect-square bg-zinc-50 dark:bg-zinc-900 border" />
              <div className="space-y-4">
                <h1 className="text-3xl font-medium uppercase tracking-tight">{leader.name}</h1>
                <p className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground">{leader.role}</p>
                <div className="flex gap-4 pt-4">
                  <Link href={`mailto:${leader.email}`} className="text-muted-foreground hover:text-black dark:hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                  </Link>
                  <Link href={leader.socials.x} className="text-muted-foreground hover:text-black dark:hover:text-white transition-colors">
                    <XIcon className="h-4 w-4" />
                  </Link>
                  <Link href={leader.socials.linkedin} className="text-muted-foreground hover:text-black dark:hover:text-white transition-colors">
                    <LinkedInIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-black dark:text-white border-b pb-2 inline-block">Professional Profile</h2>
                <p className="text-xl text-black dark:text-white font-normal leading-relaxed">
                  {leader.bio}
                </p>
              </div>

              <div className="space-y-6 prose prose-zinc dark:prose-invert max-w-none">
                <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-black dark:text-white border-b pb-2 inline-block">Strategic Focus</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {leader.extendedBio}
                </p>
              </div>

              <div className="pt-12">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-black text-white dark:bg-white dark:text-black text-xs uppercase tracking-[0.2em] font-medium hover:opacity-80 transition-opacity"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
