export interface GalleryItem {
  id: number;
  title: string;
  category: 'pelaminan' | 'akad' | 'backdrop' | 'intimate';
  categoryLabel: string;
  image: string;
  venue: string;
  description: string;
  details: string[];
  isDemoConcept: boolean;
  conceptLabel: string;
}

export const galleryCategories = [
  { id: 'all', label: 'Semua Inspirasi' },
  { id: 'pelaminan', label: 'Pelaminan' },
  { id: 'akad', label: 'Dekorasi Akad' },
  { id: 'backdrop', label: 'Backdrop' },
  { id: 'intimate', label: 'Intimate Wedding' },
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Pelaminan Grand White & Gold Arches',
    category: 'pelaminan',
    categoryLabel: 'Pelaminan',
    image: '/images/hero_pelaminan.webp',
    venue: 'Gedung Pertemuan, Madiun',
    description: 'Konsep kemewahan klasik kontemporer dengan rangkaian bunga mawar putih dan anggrek bulan mekar, backdrop geometris berbalut aksen emas champagne, serta pencahayaan warm white dramatis.',
    details: [
      'Lebar panggung 10 - 12 meter',
      'Bunga segar & artificial premium',
      'Sofa mewah pengantin ivory',
      'Lentera kaca & karpet jalan permadani'
    ],
    isDemoConcept: true,
    conceptLabel: 'Visual Konsep'
  },
  {
    id: 2,
    title: 'Dekorasi Meja Akad Nikah Sakral',
    category: 'akad',
    categoryLabel: 'Dekorasi Akad',
    image: '/images/akad_nikah.webp',
    venue: 'Pendopo & Rumah Pribadi, Ponorogo',
    description: 'Suasana akad nikah yang khusyuk dan syahdu. Meja kayu solid dengan floral runner memanjang, kursi tiffany berbalut selendang sifon, dan backdrop drapery krem hangat berbingkai lengkungan bunga.',
    details: [
      'Set meja akad & kursi tiffany',
      'Floral runner melati & baby breath',
      'Backdrop tirai drape elegan',
      'Standing flower & lentera lilin'
    ],
    isDemoConcept: true,
    conceptLabel: 'Inspirasi Dekorasi'
  },
  {
    id: 3,
    title: 'Backdrop Lamaran Floral Ring & Neon Sign',
    category: 'backdrop',
    categoryLabel: 'Backdrop',
    image: '/images/backdrop_lamaran.webp',
    venue: 'Venue Indoor, Magetan',
    description: 'Backdrop lamaran atau photobooth modern dengan lingkaran floral pampas grass eksotis, sentuhan mawar dusty rose, tirai sifon lembut, dan custom neon sign nama calon mempelai.',
    details: [
      'Frame circular arch 2.5 meter',
      'Custom neon sign akrilik nama',
      'Kombinasi bunga segar & pampas',
      'Peti kayu rustic & permadani vintage'
    ],
    isDemoConcept: true,
    conceptLabel: 'Visual Konsep'
  },
  {
    id: 4,
    title: 'Intimate Garden Wedding & Pergola',
    category: 'intimate',
    categoryLabel: 'Intimate Wedding',
    image: '/images/intimate_wedding.webp',
    venue: 'Halaman Terbuka / Villa, Madiun',
    description: 'Pernikahan berkonsep intim di ruang terbuka dengan pergola kayu, untaian lampu bohlam hangat (bistro lights), dan tata meja jamuan berhiaskan dedaunan eucalyptus dan mawar pastel.',
    details: [
      'Pergola kayu natural rustic',
      'Hanging fairy lights hangat',
      'Tata meja jamuan (long table)',
      'Rangkaian tanaman hijau asri'
    ],
    isDemoConcept: true,
    conceptLabel: 'Inspirasi Dekorasi'
  },
  {
    id: 5,
    title: 'Pelaminan Modern Botanical Minimalist',
    category: 'pelaminan',
    categoryLabel: 'Pelaminan',
    image: '/images/pelaminan_modern.webp',
    venue: 'Resepsi Gedung / Tenda Rumah, Ngawi',
    description: 'Kombinasi elegan antara kesederhanaan modern dan kehangatan dedaunan alami. Cocok bagi pasangan yang menginginkan tampilan bersih, modern, dan bernuansa teduh.',
    details: [
      'Panel minimalis warna sage & ivory',
      'Instalasi flora asimetris kontemporer',
      'Pencahayaan panggung lembut',
      'Pilihan backdrop 6 - 8 meter'
    ],
    isDemoConcept: true,
    conceptLabel: 'Visual Konsep'
  },
  {
    id: 6,
    title: 'Set Perlengkapan & Kursi Tiffany Mewah',
    category: 'backdrop',
    categoryLabel: 'Backdrop & Detail',
    image: '/images/perlengkapan_sewa.webp',
    venue: 'Layanan Persewaan Madiun Raya',
    description: 'Koleksi persewaan perlengkapan acara berkualitas tinggi: kursi tiffany putih mulus, standing flower besi ulir, meja VIP, karpet jalan, dan tata lampu spotlight.',
    details: [
      'Kondisi furnitur bersih & terawat',
      'Pengantaran & instalasi tim berpengalaman',
      'Tersedia kursi tiffany putih & kayu',
      'Aksesoris pelengkap lengkap'
    ],
    isDemoConcept: true,
    conceptLabel: 'Inspirasi Perlengkapan'
  },
];
