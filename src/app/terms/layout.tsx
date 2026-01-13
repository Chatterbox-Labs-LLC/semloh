import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The institutional guidelines governing the use of Semloh's technical platforms and services.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
