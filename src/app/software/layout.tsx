import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software | Products & Infrastructure",
  description: "Building and operating the platforms that power modern communication and commerce, including Chatterbox Teams and WeTrade.",
};

export default function SoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
