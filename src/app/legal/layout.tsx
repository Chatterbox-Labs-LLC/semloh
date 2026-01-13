import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & Compliance",
  description: "Terms of service, privacy policy, and institutional disclosures for Semloh.",
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
