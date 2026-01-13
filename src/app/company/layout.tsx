import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Entity",
  description: "Institutional details and corporate structure of Semloh, bridging the gap between technical potential and concrete value.",
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
