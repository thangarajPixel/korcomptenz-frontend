import Layout from "@/components/layout";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
