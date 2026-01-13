import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Portfolio",
  description: "A selection of technical redesigns and digital transformations delivered by the Semloh team.",
};

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
