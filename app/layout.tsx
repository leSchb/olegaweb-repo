import classNames from "classnames";
import ClientRootLayout from "./client-layout";

import { Metadata } from "next";
import { layoutMetadata } from "~/shared/config/meta/layout.meta";
import { layoutFonts } from "~/shared/config/fonts";

import "./styles/reset.css";
import "./styles/sizes.css";
import "./styles/colors.css";
import "./styles/text.css";
import "./styles/utilities.css";
import "./styles/global.css";

export const metadata: Metadata = layoutMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={classNames(...layoutFonts)}>
      <body className="flex-column">
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
