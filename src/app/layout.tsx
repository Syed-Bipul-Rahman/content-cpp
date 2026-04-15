import "./globals.css";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.author }],
  keywords: [
    "C++",
    "learn C++",
    "C++ tutorial",
    "build your own",
    "C++ projects",
    "systems programming",
    "compiler",
    "operating system",
    "database from scratch"
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: site.twitter
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url }
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight text-ink">
          learncpp<span className="text-mute">.dev</span>
        </Link>
        <div className="flex items-center gap-7 text-sm text-mute">
          <Link href="/learn" className="hover:text-ink transition-colors">Learn</Link>
          <Link href="/projects" className="hover:text-ink transition-colors">Projects</Link>
          <Link href="/roadmap" className="hover:text-ink transition-colors">Roadmap</Link>
          <Link href="/about" className="hover:text-ink transition-colors">About</Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line mt-32">
      <div className="mx-auto max-w-6xl px-6 py-12 text-sm text-mute flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="font-semibold text-ink">learncpp.dev</div>
          <div className="mt-1">Learn C++ by building everything from scratch.</div>
        </div>
        <div className="flex gap-8">
          <Link href="/learn">Foundations</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/roadmap">Roadmap</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </footer>
  );
}
