import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Consulting",
  description: "Strategic technical guidance and high-performance website development. We specialize in transforming existing web presences into institutional-grade platforms.",
};

export default function ConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
