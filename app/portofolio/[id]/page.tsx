import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { daftarProyek } from "../../data/proyek";

export default async function DetailProyek({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const proyek = daftarProyek.find((p) => p.id === id);

  if (!proyek) {
    return notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">

      {/* === BACK LINK === */}
      <Link
        href="/portofolio"
        className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors mb-14"
      >
        <svg
          className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        
      </Link>

      {/* === HEADER === */}
      <div className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
          — {proyek.kategori}
        </p>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-none">
          {proyek.judul.split(" ")[0]}
          <span
            style={{ WebkitTextStroke: "2px #3B82F6", color: "transparent" }}
          >
            {proyek.judul.includes(" ")
              ? " " + proyek.judul.split(" ").slice(1).join(" ") + "."
              : "."}
          </span>
        </h1>
        <div className="mt-5 h-[5px] w-12 bg-blue-500" />
      </div>

      {/* === GAMBAR === */}
      <div className="relative w-full h-64 sm:h-96 overflow-hidden mb-12 bg-gray-100 dark:bg-gray-900">
        <Image
          src={proyek.gambar}
          alt={proyek.judul}
          fill
          className="object-cover"
          priority
        />
        {/* Badge nomor */}
        <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white bg-blue-500 px-1.5 py-0.5">
          #01
        </span>
      </div>

      {/* === DESKRIPSI === */}
      <div className="flex flex-col gap-0">

        <div className="border-t border-gray-200 dark:border-gray-800 py-8 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 sm:gap-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 pt-1">
            01 — Ringkasan
          </p>
          <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed">
            {proyek.deskripsiSingkat}
          </p>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 py-8 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 sm:gap-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 pt-1">
            02 — Detail
          </p>
          <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed">
            Aplikasi ini merupakan sistem Information Retrieval yang digunakan
            untuk mencari dan membandingkan dokumen berdasarkan kemiripan teks.
            Sistem ini menyediakan fitur unggah dokumen serta pencarian kata
            kunci, kemudian menganalisis tingkat kesamaan menggunakan metode
            TF-IDF dan Cosine Similarity. Tampilan antarmuka dirancang sederhana
            dan modern agar memudahkan pengguna dalam melakukan proses pencarian
            informasi secara cepat dan efisien.
          </p>
        </div>

        {/* Teknologi jika ada */}
        {"teknologi" in proyek && Array.isArray(proyek.teknologi) && (
          <div className="border-t border-gray-200 dark:border-gray-800 py-8 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 sm:gap-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 pt-1">
              03 — Teknologi
            </p>
            <div className="flex flex-wrap gap-2">
              {(proyek.teknologi as string[]).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-bold uppercase tracking-widest border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 px-2.5 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Back button bawah */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <Link
            href="/portofolio"
            className="group inline-flex items-center gap-2.5 border border-blue-500 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-blue-600 transition-all hover:bg-blue-50 active:scale-95 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Portofolio
          </Link>
        </div>

      </div>

    </main>
  );
}