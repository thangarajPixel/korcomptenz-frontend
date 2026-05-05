import Layout from "@/components/layout";
import { getLayoutService } from "@/services";

export default async function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch layout data server-side so header/footer render on first paint — no CLS
  let layoutData = null;
  try {
    layoutData = await getLayoutService();
  } catch {
    // Render with null data (skeleton) if API is unavailable
  }

  return <Layout data={layoutData}>{children}</Layout>;
}
