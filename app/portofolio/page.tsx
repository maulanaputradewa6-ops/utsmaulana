import Image from "next/image";
import Link from "next/link";
import { daftarProyek } from "../data/proyek";

export default function Portofolio() {
  const proyek = daftarProyek[0]; // ambil 1 proyek saja

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">

      {/* === HEADER === */}
      <div className="mb-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
          — Featured Project
        </p>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-tight">
          Proyek
          <span
            style={{ WebkitTextStroke: "2px #3B82F6", color: "transparent" }}
          >
            {" "}Terbaik.
          </span>
        </h1>
        <p className="mt-6 text-[15px] text-gray-500 dark:text-gray-400 max-w-lg">
          Salah satu proyek unggulan yang saya kerjakan dengan fokus pada desain dan pengembangan modern.
        </p>
      </div>

      {/* === FEATURED PROJECT === */}
      <Link
        href={`/portofolio/${proyek.id}`}
        className="group grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Gambar */}
        <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900">
          <Image
            src={proyek.gambar}
            alt={proyek.judul}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            priority
          />
        </div>

        {/* Konten */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
            {proyek.kategori}
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            {proyek.judul}
          </h2>

          <div className="mt-4 h-[3px] w-12 bg-blue-500 group-hover:w-20 transition-all duration-300" />

          <p className="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
            {proyek.deskripsiSingkat}
          </p>

          {/* Button */}
          <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-blue-500 transition-colors">
            Lihat Detail
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </Link>

    </main>
  );
} 