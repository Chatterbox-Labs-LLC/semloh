import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relations",
  description: "Transparent reporting and performance metrics for Semloh's capital partners.",
};

export default function InvestorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
