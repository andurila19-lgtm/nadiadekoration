export interface InspirationConcept {
  id: string;
  name: string;
  tierLabel: string;
  summary: string;
  image: string;
  featured?: boolean;
  badge?: string;
  features: string[];
  ctaLabel: string;
  note: string;
}

export const inspirationConcepts: InspirationConcept[] = [
  {
    id: 'intimate-wedding',
    name: 'Intimate Wedding',
    tierLabel: 'Konsep Inspirasi 01 • Suasana Intim',
    summary: 'Rancangan inspirasi untuk perayaan skala intim, akad nikah khusyuk, atau syukuran di kediaman rumah dengan kapasitas 50–150 undangan.',
    image: '/images/intimate_wedding.webp',
    features: [
      'Pelaminan minimalis / botanical elegan (lebar 4–6 meter)',
      'Set meja & kursi akad nikah dengan sentuhan floral centerpiece',
      'Backdrop akad nikah / photo corner estetik',
      'Standing flower & welcome sign akrilik personal',
      'Tata pencahayaan warm white terarah untuk suasana syahdu',
    ],
    ctaLabel: 'Konsultasikan Kebutuhan Anda',
    note: 'Inspirasi visual fleksibel • Penyesuaian denah & kebutuhan',
  },
  {
    id: 'elegant-wedding',
    name: 'Elegant Wedding',
    tierLabel: 'Konsep Inspirasi 02 • Resepsi Menawan',
    summary: 'Rancangan inspirasi untuk perhelatan resepsi pernikahan di gedung serbaguna atau tenda rumah luas dengan komposisi panggung megah berkelas.',
    image: '/images/hero_pelaminan.webp',
    featured: true,
    badge: 'Inspirasi Favorit',
    features: [
      'Pelaminan berkelas (lebar 8–10 meter, tema Modern/Klasik/Jawa Elegan)',
      'Gate / pergola masuk dengan untaian daun & bunga mekar',
      'Lorong jalan pengantin lengkap karpet permadani & standing flower',
      'Set area meja akad nikah formal & kursi tamu tiffany',
      'Photobooth backdrop eksklusif untuk foto para tamu undangan',
      'Tata lampu panggung bertingkat & spotlight pengantin',
    ],
    ctaLabel: 'Konsultasikan Kebutuhan Anda',
    note: 'Inspirasi visual fleksibel • Penyesuaian tema & ukuran panggung',
  },
  {
    id: 'floral-signature',
    name: 'Floral Signature',
    tierLabel: 'Konsep Inspirasi 03 • Tematik Penuh Dimensi',
    summary: 'Karya visual inspiratif dengan rancangan tematik penuh dimensi bagi pasangan yang mendambakan panggung megah berdaya pikat visual luar biasa.',
    image: '/images/backdrop_lamaran.webp',
    features: [
      'Pelaminan dimensional custom penuh (lebar 10–14+ meter)',
      'Instalasi bunga melimpah (kombinasi fresh flower & premium artificial)',
      'Grand entrance tunnel / lorong megah penyambutan tamu',
      'Area akad terpisah & penataan area VIP keluarga',
      'Photobooth interaktif berkonsep tematik eksklusif',
      'Sketsa visualisasi tata letak & pendampingan konsep menyeluruh',
    ],
    ctaLabel: 'Konsultasikan Kebutuhan Anda',
    note: 'Inspirasi visual fleksibel • Survei venue & eksplorasi custom',
  },
];
