import "./../styles/globals.css";

export const metadata = {
  title: "HOTMESS Admin",
  description: "Control the mess. With consent."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
