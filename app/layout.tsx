import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import TombolTema from "./components/TombolTema";

export const metadata: Metadata = {
  title: "Portofolio Maulana",
  description: "Website portofolio pribadi Maulana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col bg-gray-50 text-gray-800 font-sans transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50 transition-colors duration-300 dark:bg-gray-900 dark:border-b dark:border-gray-800">
          <div className="mx-auto flex max-w-4xl flex-col sm:flex-row sm:items-center justify-between gap-4 p-5">
            {/* Bagian Logo */}
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-xl font-bold text-blue-600 dark:text-blue-400"
              >
                Maulana.
              </Link>

              {/* Tombol Tema kita letakkan di sebelah logo khusus layar HP */}
              <div className="sm:hidden">
                <TombolTema />
              </div>
            </div>

            {/* Bagian Menu Link */}
            <div className="flex items-center gap-6 text-sm font-medium overflow-x-auto pb-2 sm:pb-0">
              <Link
                href="/"
                className="hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap"
              >
                Home
              </Link>
              <Link
                href="/tentang"
                className="hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap"
              >
                Tentang
              </Link>
              <Link
                href="/portofolio"
                className="hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap"
              >
                Portofolio
              </Link>
              <Link
                href="/kontak"
                className="hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap"
              >
                Kontak
              </Link>

              {/* Tombol Tema khusus layar Desktop */}
              <div className="hidden sm:block">
                <TombolTema />
              </div>
            </div>
          </div>
        </nav>

        <div className="flex-1">{children}</div>

        <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500 transition-colors duration-300 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400">
          <p>© 2026 Maulana.</p>
        </footer>
      </body>
    </html>
  );
}
