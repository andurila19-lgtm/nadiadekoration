/**
 * Data profil bisnis resmi Nadia Dekorasi Madiun
 * Hanya berisi data yang sudah terverifikasi dan bebas dari fabrikasi/rekaan.
 */

export interface BusinessProfile {
  name: string;
  tagline: string;
  bio: string;
  instagramHandle: string;
  instagramUrl: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  whatsappUrl: string;
  serviceAreas: string[];
  serviceCategories: string[];
}

export const businessProfile: BusinessProfile = {
  name: "Nadia Dekorasi Madiun",
  tagline: "Wujudkan Pernikahan Impian dalam Dekorasi yang Berkesan",
  bio: "Dekorasi, dekorasi custom, persewaan perlengkapan pernikahan. Fast respon via DM/WA. Madiun, Ponorogo, Magetan, Ngawi.",
  instagramHandle: "@nadia_dekorasi.madiun",
  instagramUrl: "https://www.instagram.com/nadia_dekorasi.madiun/",
  whatsappNumber: "082330218310",
  whatsappFormatted: "0823-3021-8310",
  whatsappUrl: "https://wa.me/6282330218310",
  serviceAreas: [
    "Kota Madiun",
    "Kabupaten Madiun",
    "Ponorogo",
    "Magetan",
    "Ngawi"
  ],
  serviceCategories: [
    "Dekorasi Pelaminan",
    "Dekorasi Akad Nikah",
    "Backdrop & Dekorasi Custom",
    "Dekorasi Pernikahan Rumahan",
    "Persewaan Perlengkapan Pernikahan"
  ]
};

export const businessNavigation = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/tentang" },
  { name: "Layanan & Sewa", href: "/layanan" },
  { name: "Konsep Inspirasi", href: "/inspirasi" },
  { name: "Galeri", href: "/galeri" },
  { name: "Cek Tanggal", href: "/kontak" }
];
