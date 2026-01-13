import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Portal",
  description: "Secure access and resources for Semloh's individual capital partners.",
};

export default function InvestorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
