import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Meet the team leading Semloh's strategic vision across software development and investment operations.",
};

export default function LeadershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
