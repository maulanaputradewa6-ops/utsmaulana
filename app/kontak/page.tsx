"use client";

import { useState } from "react";

export default function Kontak() {
  const [terkirim, setTerkirim] = useState(false);
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  const tanganiKirimPesan = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailto = `mailto:kadekgusdedwiputra1@gmail.com?subject=Pesan dari ${encodeURIComponent(nama)}&body=${encodeURIComponent(pesan)}`;
    window.location.href = mailto;

    setTerkirim(true);
    setNama("");
    setPesan("");
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">

      {/* === HEADER === */}
      <div className="mb-16 border-b border-gray-200 dark:border-gray-800 pb-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
          — Kontak
        </p>
        <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-none">
          Hubungi
          <span
            style={{ WebkitTextStroke: "2px #3B82F6", color: "transparent" }}
          >
            {" "}Saya.
          </span>
        </h1>
        <div className="mt-5 h-[5px] w-12 bg-blue-500" />
        <p className="mt-6 text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
          Punya proyek atau sekadar ingin menyapa? Silakan isi form di bawah —
          pesan akan langsung dikirim via email.
        </p>
      </div>

      {/* === FORM / SUCCESS === */}
      {terkirim ? (
        <div className="border-t border-gray-200 dark:border-gray-800 pt-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
            01 — Status
          </p>

          <div className="flex flex-col gap-4">
            <h3
              className="text-4xl font-extrabold tracking-tighter"
              style={{ WebkitTextStroke: "2px #22C55E", color: "transparent" }}
            >
              Terkirim.
            </h3>
            <div className="h-[5px] w-12 bg-green-500" />
            <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
              Aplikasi email Anda telah terbuka dengan pesan yang sudah terisi.
              Pastikan untuk menekan kirim di sana.
            </p>
            <button
              onClick={() => setTerkirim(false)}
              className="mt-4 inline-flex items-center gap-2 border border-blue-500 px-7 py-3 text-sm font-bold uppercase tracking-widest text-blue-600 transition-all hover:bg-blue-50 active:scale-95 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950 self-start"
            >
              Kirim Pesan Lain
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={tanganiKirimPesan} className="flex flex-col gap-0">

          {/* Nama */}
          <div className="border-t border-gray-200 dark:border-gray-800 py-8 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 items-start">
            <label
              htmlFor="nama"
              className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 pt-3"
            >
              01 — Gmail Anda
            </label>
            <input
              type="text"
              id="nama"
              required
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan Gmail lengkap..."
              className="w-full border-b border-gray-300 dark:border-gray-700 bg-transparent py-2 text-base font-medium text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
            />
          </div>

          {/* Pesan */}
          <div className="border-t border-gray-200 dark:border-gray-800 py-8 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 items-start">
            <label
              htmlFor="pesan"
              className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 pt-3"
            >
              02 — Pesan
            </label>
            <textarea
              id="pesan"
              rows={5}
              required
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              placeholder="Tulis pesan Anda di sini..."
              className="w-full resize-none border-b border-gray-300 dark:border-gray-700 bg-transparent py-2 text-base font-medium text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
            />
          </div>

          {/* Submit */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-gray-400 dark:text-gray-600 uppercase tracking-widest">
              → Dikirim ke maulanaputradewa6@gmail.com
            </p>

            <button
              type="submit"
              className="group inline-flex items-center gap-2.5 bg-blue-600 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-blue-700 active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-600 self-start sm:self-auto"
            >
              Kirim Pesan
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </form>
      )}

    </main>
  );
}