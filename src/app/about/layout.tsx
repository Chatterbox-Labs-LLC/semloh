import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Firm",
  description: "Learn about Semloh's multidisciplinary collective dedicated to the pursuit of technical and strategic excellence in Chicago.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
