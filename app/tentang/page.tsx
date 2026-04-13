import Image from "next/image";

export default function Tentang() {
  const hobi = [
    {
      icon: "🎮",
      title: "Bermain Game",
      desc: "Menjelajahi dunia virtual dan strategi.",
      tag: "Gaming",
    },
    {
      icon: "⚽",
      title: "Sepak Bola",
      desc: "Olahraga tim favorit di lapangan.",
      tag: "Sport",
    },
  ];

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">

      {/* === HERO PROFIL === */}
      <div className="mb-16 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-10 items-end">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
            — Mahasiswa Informatika
          </p>
          <h1
            className="text-6xl sm:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-none"
          >
            Mau
            <span
              style={{ WebkitTextStroke: "2px #3B82F6", color: "transparent" }}
            >
              lana.
            </span>
          </h1>
          <div className="mt-5 h-[5px] w-12 bg-blue-500" />
        </div>

        {/* Foto */}
        <div className="relative h-36 w-28 shrink-0 overflow-hidden border-2 border-blue-500 self-end">
         <Image
  src="/profil.png"
  alt="Foto Profil Maulana"
  fill
  unoptimized          // ← tambah ini
  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
/>
          {/* Nomor dekoratif */}
          <span className="absolute bottom-2 right-2 text-[10px] font-bold uppercase tracking-widest text-white bg-blue-500 px-1.5 py-0.5">
            #01
          </span>
        </div>
      </div>

      {/* === TENTANG SAYA === */}
      <div className="mb-16 grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-4">
        {/* Nomor rotasi samping */}
        <div className="hidden sm:flex items-start pt-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-300 dark:text-gray-600 rotate-90 origin-left translate-y-3">
            About
          </p>
        </div>

        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
            01 — Tentang Saya
          </p>
          <p className="mb-4 text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
            Halo! Saya mahasiswa Informatika di Kampus Primakara yang tertarik
            di bidang Web Development. Saat ini, saya sedang fokus belajar
            membangun antarmuka web menggunakan React.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
            Website ini saya bangun untuk mendapatkan nilai ulangan tengah
            semester.
          </p>
        </div>
      </div>

      {/* === HOBI === */}
      <div>
        <p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
          02 — Hobi
        </p>

        <div className="flex flex-col gap-0 border-t border-gray-200 dark:border-gray-800">
          {hobi.map((item, i) => (
            <div
              key={i}
              className="group flex items-center justify-between gap-6 border-b border-gray-200 dark:border-gray-800 py-7 transition-all hover:pl-3"
            >
              <div className="flex items-center gap-5">
                {/* Nomor */}
                <span className="text-xs font-bold text-gray-300 dark:text-gray-700 w-5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon bulat */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gray-200 dark:border-gray-700 text-2xl group-hover:border-blue-400 transition-all">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-extrabold text-base tracking-tight text-gray-900 dark:text-white uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Tag kanan */}
              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden sm:block text-[10px] font-bold uppercase tracking-widest text-blue-500 border border-blue-500 px-2.5 py-1">
                  {item.tag}
                </span>
                {/* Arrow */}
                <svg
                  className="h-4 w-4 text-gray-300 dark:text-gray-700 transition-transform group-hover:translate-x-1 group-hover:text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}