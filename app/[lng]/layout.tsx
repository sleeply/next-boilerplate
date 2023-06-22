import "@/styles/index.scss";
import { Inter,  } from "next/font/google";

const inter = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

interface RootLayoutInterface {
  params: { lng: string };
  children: React.ReactNode;
}

export default function RootLayout({ params, children }: RootLayoutInterface) {
  const lang = params.lng;

  return (
    <html lang={lang}>
      <body className={inter.className} suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
}
