import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsroom",
  description: "Official announcements, press releases, and media resources from Semloh.",
};

export default function NewsroomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
