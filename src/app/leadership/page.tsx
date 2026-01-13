import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

// Custom X (formerly Twitter) Icon
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Custom LinkedIn Icon (more balanced)
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function LeadershipPage() {
  const leaders = [
    {
      slug: "george",
      name: "George Holmes",
      role: "Founder & CEO",
      email: "george@semlohsolutions.com",
      bio: "Leading the firm's strategic vision across software development and investment operations.",
      socials: { x: "#", linkedin: "#" }
    },
    {
      slug: "edward",
      name: "Edward Spencer",
      role: "President",
      email: "edward@semlohsolutions.com",
      bio: "Directing firm operations and institutional strategy across all business units.",
      socials: { x: "#", linkedin: "#" }
    },
    {
      slug: "connor",
      name: "Connor Dugan",
      role: "CTO",
      email: "connor@semlohsolutions.com",
      bio: "Overseeing technical architecture and product engineering for Semloh's software portfolio.",
      socials: { x: "#", linkedin: "#" }
    },
    {
      slug: "nico",
      name: "Nico Paskitwitz",
      role: "Chief Investor Officer",
      email: "nico@semlohsolutions.com",
      bio: "Managing capital allocation and portfolio strategy across public and private markets.",
      socials: { x: "#", linkedin: "#" }
    },
    {
      slug: "michael",
      name: "Michael Chessare",
      role: "Board Member",
      email: "michael@semlohsolutions.com",
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
              <Link 
                key={leader.name} 
                href={`/leadership/${leader.slug}`}
                className="group space-y-4 block"
              >
                <div className="border-b pb-4 group-hover:border-black dark:group-hover:border-white transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="text-lg font-medium uppercase tracking-widest">{leader.name}</div>
                    <div className="flex gap-2">
                      <div className="text-muted-foreground group-hover:text-black dark:group-hover:text-white transition-colors">
                        <XIcon className="h-3.5 w-3.5" />
                      </div>
                      <div className="text-muted-foreground group-hover:text-black dark:group-hover:text-white transition-colors">
                        <LinkedInIcon className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-tight font-normal">{leader.role}</div>
                  <div className="text-[10px] text-muted-foreground mt-1 lowercase font-normal">{leader.email}</div>
                </div>
                <p className="text-sm text-muted-foreground font-normal leading-relaxed group-hover:text-black dark:group-hover:text-white transition-colors">
                  {leader.bio}
                </p>
              </Link>
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
