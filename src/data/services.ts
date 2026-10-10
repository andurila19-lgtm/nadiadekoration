export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  colSpanClass: string;
  linkText: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'pelaminan',
    number: '01',
    title: 'Dekorasi Pelaminan',
    description: 'Panggung utama pelaminan dengan ragam tema: modern minimalis, klasik mewah, gebyok Jawa kontemporer, maupun rustic natural. Didesain proporsional sesuai denah venue.',
    tags: ['Panggung 6–14m', 'Lampu Panggung', 'Sofa Pengantin', 'Floral Art'],
    colSpanClass: 'lg:col-span-4 md:col-span-6 col-span-12',
    linkText: 'Konsultasi Pelaminan',
  },
  {
    id: 'akad',
    number: '02',
    title: 'Dekorasi Akad Nikah',
    description: 'Penataan area prosesi ijab kabul yang khusyuk dan estetik. Menghadirkan set meja kayu solid pilihan, taplak sutra/sifon, floral runner melati, serta backdrop akad syahdu.',
    tags: ['Meja Ijab Kabul', 'Kursi Tiffany', 'Bunga Meja Segar', 'Lentera Lilin'],
    colSpanClass: 'lg:col-span-4 md:col-span-6 col-span-12',
    linkText: 'Konsultasi Meja Akad',
  },
  {
    id: 'backdrop',
    number: '03',
    title: 'Backdrop & Dekorasi Custom',
    description: 'Rancangan backdrop fleksibel untuk pertunangan (lamaran), photobooth tamu, acara siraman adat, tedak siten, hingga perayaan keluarga dengan aksen nama neon akrilik.',
    tags: ['Lamaran / Engagement', 'Photobooth Tamu', 'Custom Neon Sign', 'Siraman Adat'],
    colSpanClass: 'lg:col-span-4 md:col-span-6 col-span-12',
    linkText: 'Konsultasi Backdrop',
  },
  {
    id: 'rumah',
    number: '04',
    title: 'Dekorasi Pernikahan Rumahan',
    description: 'Mengubah area teras, halaman, dan tenda rumah menjadi suasana pesta megah layaknya ballroom. Kami merancang tata sirkulasi tamu, penutupan kain drapery dinding yang rapi, dan lorong masuk berkesan intim nan anggun.',
    tags: ['Tenda Rumah Berkelas', 'Drapery Kain Rapi', 'Penataan Halaman', 'Gate Masuk Tamu'],
    colSpanClass: 'lg:col-span-6 col-span-12',
    linkText: 'Diskusikan Dekorasi Rumah',
  },
  {
    id: 'persewaan',
    number: '05',
    title: 'Persewaan Perlengkapan Pernikahan',
    description: 'Layanan sewa peralatan pesta untuk keluarga pengantin dan vendor rekanan. Tersedia kursi tiffany putih mulus, kursi futura bercover, set meja perjamuan, karpet jalan, standing flower, dan tata lampu spotlight panggung.',
    tags: ['Sewa Kursi Tiffany', 'Set Meja Akad', 'Karpet & Spotlight', 'Standing Flower'],
    colSpanClass: 'lg:col-span-6 col-span-12',
    linkText: 'Cek Ketersediaan Alat',
  },
];
