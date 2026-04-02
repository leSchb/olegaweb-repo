import localFont from "next/font/local";

export const onestFont = localFont({
  variable: "--font-onest",
  src: [
    {
      path: "../../../assets/fonts/Onest.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
});
export const boundedFont = localFont({
  variable: "--font-bounded",
  src: [
    {
      path: "../../../assets/fonts/Bounded.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
});

export const layoutFonts = [onestFont.variable, boundedFont.variable];
