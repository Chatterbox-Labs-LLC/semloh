import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Insights",
  description: "Official announcements and strategic insights from Semloh Solutions regarding our technical partnerships and software developments.",
};

export default function NewsArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
