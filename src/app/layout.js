import "./globals.css";

export const metadata = {
  title: "BREATHE BUDDY",
  description: "Mindful AI for a Gentler Future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
