import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/50 blur-[100px] dark:bg-blue-900/20"></div>

      <div className="z-10 max-w-3xl">
        <div className="mb-6 flex justify-center">
          <span className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 dark:border-blue-800/50 dark:bg-blue-900/30 dark:text-blue-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            Website Uts Maulana 
          </span>
        </div>

        <div className="flex flex-col gap-2">
  <span className="text-lg font-light text-gray-500 dark:text-gray-400 tracking-tight">
  </span>

  <div className="leading-none flex flex-wrap items-end gap-x-3">
    {/* Outline text */}
    <span
      className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter"
      style={{
        WebkitTextStroke: "2px #3B82F6",
        color: "transparent",
      }}
    >
      Cepat
    </span>

    {/* Divider */}
    <span className="text-4xl sm:text-5xl font-light text-gray-400 dark:text-gray-500 mb-2">
      &amp;
    </span>

    {/* Solid text */}
    <span className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-gray-900 dark:text-white">
      Menarik.
    </span>
  </div>

  {/* Accent bar */}
  <div className="mt-4 h-[5px] w-14 rounded-full bg-blue-500" />
</div>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-300">
          Halo, saya{" "}
          <strong className="font-semibold text-gray-900 dark:text-white">
            Maulana
          </strong>
          . Seorang mahasiswa primakara yang gemar Belajar hal hal baru 
        </p>

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
  {/* Primary — solid block, sudut tajam */}
  <Link
    href="/portofolio"
    className="group inline-flex items-center gap-2.5 bg-blue-600 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-blue-700 active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-600"
  >
    Lihat Karya Saya
    <svg
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </Link>

  {/* Secondary — outline biru, echo stroke dari heading */}
  <Link
    href="/tentang"
    className="group inline-flex items-center gap-2 border border-blue-500 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-blue-600 transition-all hover:bg-blue-50 active:scale-95 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
  >
    Mengenal Lebih Jauh
  </Link>
</div>
        <div className="mt-16 border-t border-gray-100 pt-8 dark:border-gray-800/80">
          <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            Teknologi yang saya gunakan:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Next.js", "React", "Tailwind CSS", "TypeScript"].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
