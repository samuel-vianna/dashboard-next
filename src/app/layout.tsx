import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import QueryProvider from "@/components/providers/queryProvider";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | Dashboard",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head></head>
      <body>
        <QueryProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </QueryProvider>
      </body>
    </html>
  );
}
