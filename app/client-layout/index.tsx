import StoreProvider from "../store/provider";

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StoreProvider>{children}</StoreProvider>;
}
