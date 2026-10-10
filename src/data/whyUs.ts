export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  icon: 'Palette' | 'Home' | 'MapPin' | 'MessageCircle';
}

export const whyUsData: WhyUsItem[] = [
  {
    id: 'custom-concept',
    title: 'Konsep Personal & Fleksibel',
    description: 'Setiap rancangan disesuaikan dengan tema warna dan impian pasangan mempelai. Kami mendengarkan preferensi visual Anda secara mendalam.',
    icon: 'Palette',
  },
  {
    id: 'venue-adaptability',
    title: 'Cocok untuk Gedung Maupun Rumah',
    description: 'Penataan panggung dirancang proporsional terhadap luas ruang, baik aula gedung serbaguna maupun penataan tenda di kediaman rumah keluarga.',
    icon: 'Home',
  },
  {
    id: 'regional-coverage',
    title: 'Jangkauan Seluruh Madiun Raya',
    description: 'Kesiapan armada dan kru instalasi untuk melayani lokasi perhelatan di Kota Madiun, Kabupaten Madiun, Ponorogo, Magetan, dan Ngawi.',
    icon: 'MapPin',
  },
  {
    id: 'easy-whatsapp',
    title: 'Konsultasi Ramah & Transparan',
    description: 'Komunikasi langsung melalui WhatsApp tanpa birokrasi berbelit. Kirimkan foto referensi dekorasi impian Anda kapan saja untuk berdiskusi.',
    icon: 'MessageCircle',
  },
];
