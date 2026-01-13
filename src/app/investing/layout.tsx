import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investing | Capital Allocation",
  description: "Strategic investments in early-stage ventures and global leaders, backed by deep technical due diligence.",
};

export default function InvestingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
