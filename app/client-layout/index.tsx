import StoreProvider from "../store/provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SpeedInsights />
      <StoreProvider>{children}</StoreProvider>
    </>
  );
}
