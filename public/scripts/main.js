/**
 * NADIA DEKORASI MADIUN - CORE LOGIC & INTERAKTIVITAS
 * Menangani navigasi, filter galeri, lightbox modal, serta generator pesan WhatsApp ketersediaan jadwal.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initSmoothScroll();
  initGalleryAndLightbox();
  initInquiryFormAndWhatsApp();
  initPackageSelectors();
  initBackToTop();
  initConceptBanner();
});

/* ==========================================================================
   1. NAVBAR SCROLL EFFECT & SPY
   ========================================================================== */
function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Scrollspy untuk link navigasi aktif
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   2. MOBILE MENU DRAWER
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const closeBtn = document.querySelector('.mobile-drawer-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });
}

/* ==========================================================================
   3. SMOOTH SCROLL DENGAN OFFSET HEADER
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================================================
   4. DATA PORTFOLIO, FILTER GALERI & LIGHTBOX MODAL
   ========================================================================== */
const galleryData = [
  {
    id: 1,
    title: 'Pelaminan Grand White & Gold Arches',
    category: 'pelaminan',
    categoryLabel: 'Pelaminan',
    image: '/assets/images/hero_pelaminan.webp',
    venue: 'Gedung Pertemuan, Madiun',
    description: 'Konsep kemewahan klasik kontemporer dengan rangkaian bunga mawar putih dan anggrek bulan mekar, backdrop geometris berbalut aksen emas champagne, serta pencahayaan warm white dramatis.',
    details: ['Lebar panggung 10 - 12 meter', 'Bunga segar & artificial premium', 'Sofa mewah pengantin ivory', 'Lentera kaca & karpet jalan permadani']
  },
  {
    id: 2,
    title: 'Dekorasi Meja Akad Nikah Sakral',
    category: 'akad',
    categoryLabel: 'Dekorasi Akad',
    image: '/assets/images/akad_nikah.webp',
    venue: 'Pendopo & Rumah Pribadi, Ponorogo',
    description: 'Suasana akad nikah yang khusyuk dan syahdu. Meja kayu solid dengan floral runner memanjang, kursi tiffany berbalut selendang sifon, dan backdrop drapery krem hangat berbingkai lengkungan bunga.',
    details: ['Set meja akad & kursi tiffany', 'Floral runner melati & baby breath', 'Backdrop tirai drape elegan', 'Standing flower & lentera lilin']
  },
  {
    id: 3,
    title: 'Backdrop Lamaran Floral Ring & Neon Sign',
    category: 'backdrop',
    categoryLabel: 'Backdrop & Lamaran',
    image: '/assets/images/backdrop_lamaran.webp',
    venue: 'Venue Indoor, Magetan',
    description: 'Backdrop lamaran atau photobooth modern dengan lingkaran floral pampas grass eksotis, sentuhan mawar dusty rose, tirai sifon lembut, dan custom neon sign nama calon mempelai.',
    details: ['Frame circular arch 2.5 meter', 'Custom neon sign akrilik nama', 'Kombinasi bunga segar & pampas', 'Peti kayu rustic & permadani vintage']
  },
  {
    id: 4,
    title: 'Intimate Garden Wedding & Pergola',
    category: 'intimate',
    categoryLabel: 'Intimate Wedding',
    image: '/assets/images/intimate_wedding.webp',
    venue: 'Outdoor Villa / Halaman Terbuka, Madiun',
    description: 'Pernikahan berkonsep intim di ruang terbuka dengan pergola kayu, untaian lampu bohlam hangat (bistro lights), dan tata meja panjang berhiaskan dedaunan eucalyptus dan mawar pastel.',
    details: ['Pergola kayu natural rustic', 'Hanging fairy lights hangat', 'Tata meja jamuan (long table)', 'Rangkaian tanaman hijau asri']
  },
  {
    id: 5,
    title: 'Pelaminan Modern Botanical Minimalist',
    category: 'pelaminan',
    categoryLabel: 'Pelaminan',
    image: '/assets/images/pelaminan_modern.webp',
    venue: 'Resepsi Gedung / Tenda Rumah, Ngawi',
    description: 'Kombinasi elegan antara kesederhanaan modern dan kehangatan dedaunan alami. Cocok bagi pasangan yang menginginkan tampilan bersih, modern, dan tidak terlalu ramai namun tetap berkelas.',
    details: ['Panel minimalis warna sage & ivory', 'Instalasi flora asimetris kontemporer', 'Pencahayaan panggung lembut', 'Pilihan backdrop 6 - 8 meter']
  },
  {
    id: 6,
    title: 'Set Perlengkapan & Kursi Tiffany Mewah',
    category: 'backdrop',
    categoryLabel: 'Peralatan & Detail',
    image: '/assets/images/perlengkapan_sewa.webp',
    venue: 'Layanan Persewaan Madiun Raya',
    description: 'Koleksi persewaan perlengkapan acara berkualitas tinggi: kursi tiffany putih mulus, standing flower besi ulir, meja VIP, karpet jalan, dan tata lampu spotlight untuk memperindah lokasi pesta.',
    details: ['Kondisi furnitur bersih & terawat', 'Pengantaran & instalasi langsung tim ahli', 'Tersedia kursi tiffany putih & kayu', 'Aksesoris pelengkap lengkap']
  }
];

function initGalleryAndLightbox() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.querySelector('.lightbox-modal');
  const lightboxCloseBtn = document.querySelector('.lightbox-close-btn');

  // Filter Buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filterVal === 'all' || itemCat === filterVal) {
          item.style.display = 'block';
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 50);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox Open
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const itemId = parseInt(item.getAttribute('data-id'), 10);
      const data = galleryData.find(d => d.id === itemId);
      if (data) {
        openLightbox(data);
      }
    });
  });

  // Lightbox Close Handlers - Event Delegation untuk kepastian klik tombol X dan latar belakang
  document.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('.lightbox-close-btn, #lightboxCloseBtn');
    if (closeBtn) {
      e.preventDefault();
      e.stopPropagation();
      closeLightbox();
      return;
    }

    if (e.target.classList && e.target.classList.contains('lightbox-modal') && e.target.classList.contains('active')) {
      e.preventDefault();
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });
}

function openLightbox(data) {
  const modal = document.querySelector('.lightbox-modal');
  if (!modal) return;

  const imgEl = modal.querySelector('#lightbox-img');
  const catEl = modal.querySelector('#lightbox-cat');
  const titleEl = modal.querySelector('#lightbox-title');
  const descEl = modal.querySelector('#lightbox-desc');
  const venueEl = modal.querySelector('#lightbox-venue');
  const detailsList = modal.querySelector('#lightbox-details-list');
  const waBtn = modal.querySelector('#lightbox-wa-link');

  if (imgEl) imgEl.src = data.image;
  if (imgEl) imgEl.alt = data.title;
  if (catEl) catEl.textContent = data.categoryLabel;
  if (titleEl) titleEl.textContent = data.title;
  if (descEl) descEl.textContent = data.description;
  if (venueEl) venueEl.textContent = data.venue;

  if (detailsList) {
    detailsList.innerHTML = '';
    data.details.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--gold-primary);">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        ${item}
      `;
      detailsList.appendChild(li);
    });
  }

  if (waBtn) {
    const waText = encodeURIComponent(
      `Halo Nadia Dekorasi Madiun, saya tertarik dan ingin menanyakan estimasi serta ketersediaan konsep dekorasi berikut:\n\n*${data.title}*\n(Kategori: ${data.categoryLabel})\n\nBisa dibantu informasi lebih lanjut? Terima kasih.`
    );
    waBtn.href = `https://wa.me/6282330218310?text=${waText}`;
  }

  modal.classList.add('active');
  modal.classList.remove('opacity-0', 'pointer-events-none');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.querySelector('.lightbox-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.classList.add('opacity-0', 'pointer-events-none');
  document.body.style.overflow = '';
}

/* ==========================================================================
   5. DATE INQUIRY FORM & LIVE WHATSAPP GENERATOR
   ========================================================================== */
function initInquiryFormAndWhatsApp() {
  const form = document.getElementById('inquiryForm');
  const nameInput = document.getElementById('clientName');
  const phoneInput = document.getElementById('clientPhone');
  const dateInput = document.getElementById('eventDate');
  const locationInput = document.getElementById('eventLocation');
  const decorTypeInput = document.getElementById('decorType');
  const notesInput = document.getElementById('clientNotes');

  const previewBubble = document.getElementById('waBubblePreview');
  const previewTime = document.getElementById('waBubbleTime');
  const submitBtn = document.getElementById('submitInquiryBtn');

  // Set minimum date input to tomorrow
  if (dateInput) {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  // Update current time in WhatsApp preview
  if (previewTime) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    previewTime.textContent = `${hours}:${minutes}`;
  }

  // Format tanggal ke Bahasa Indonesia (contoh: 24 Oktober 2026)
  function formatIndonesianDate(dateStr) {
    if (!dateStr) return '(Belum ditentukan)';
    try {
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        const year = parts[0];
        const monthIndex = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[2], 10);
        const months = [
          'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
          'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];
        return `${day} ${months[monthIndex]} ${year}`;
      }
      return dateStr;
    } catch (e) {
      return dateStr;
    }
  }

  // Function to build WhatsApp message text
  function generateMessageText() {
    const name = nameInput?.value.trim() || '[Nama Calon Pengantin]';
    const dateVal = dateInput?.value || '';
    const dateFormatted = dateVal ? formatIndonesianDate(dateVal) : '[Pilih Tanggal Acara]';
    const location = locationInput?.value || '[Pilih Lokasi Acara]';
    const decorType = decorTypeInput?.value || '[Pilih Paket / Layanan]';
    const phone = phoneInput?.value.trim() || '';
    const notes = notesInput?.value.trim() || '-';

    return `Halo Nadia Dekorasi Madiun,

Saya ingin menanyakan ketersediaan tanggal dan konsultasi dekorasi pernikahan dengan rincian berikut:

• Nama Calon Mempelai: ${name}
• Tanggal Acara: ${dateFormatted}
• Lokasi / Kota Acara: ${location}
• Layanan yang Diminati: ${decorType}${phone ? `\n• Kontak Pemohon: ${phone}` : ''}
• Catatan Tambahan: ${notes}

Mohon informasi ketersediaan jadwal serta langkah konsultasi selanjutnya. Terima kasih!`;
  }

  // Update preview in real-time
  function updatePreview() {
    if (previewBubble) {
      previewBubble.textContent = generateMessageText();
    }
  }

  // Listen to input changes
  [nameInput, phoneInput, dateInput, locationInput, decorTypeInput, notesInput].forEach(elem => {
    if (elem) {
      elem.addEventListener('input', updatePreview);
      elem.addEventListener('change', updatePreview);
    }
  });

  // Initial update
  updatePreview();

  // Form submit handler
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple validation
      const name = nameInput?.value.trim();
      const date = dateInput?.value;
      const location = locationInput?.value;
      const decorType = decorTypeInput?.value;

      if (!name) {
        alert('Mohon masukkan Nama Lengkap Calon Mempelai.');
        nameInput.focus();
        return;
      }
      if (!date) {
        alert('Mohon pilih Tanggal Rencana Acara Anda.');
        dateInput.focus();
        return;
      }
      if (!location) {
        alert('Mohon pilih Lokasi / Kota Penyelenggaraan Acara.');
        locationInput.focus();
        return;
      }
      if (!decorType) {
        alert('Mohon pilih Tipe Dekorasi atau Layanan yang diminati.');
        decorTypeInput.focus();
        return;
      }

      const message = generateMessageText();
      const waUrl = `https://wa.me/6282330218310?text=${encodeURIComponent(message)}`;

      // Buka WhatsApp di tab baru
      window.open(waUrl, '_blank');
    });
  }
}

/* ==========================================================================
   6. PACKAGE CARDS QUICK SELECTOR (MULTI-PAGE AWARE)
   ========================================================================== */
function initPackageSelectors() {
  const packageButtons = document.querySelectorAll('.btn-select-package');
  const decorTypeInput = document.getElementById('decorType');
  const inquirySection = document.getElementById('konsultasi');

  // Check if a package was passed via URL parameter (e.g. from /inspirasi)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const pkgParam = urlParams.get('package');
    if (pkgParam && decorTypeInput) {
      decorTypeInput.value = pkgParam;
      decorTypeInput.dispatchEvent(new Event('change'));
    }
  } catch (err) {
    // Ignore URL parse error
  }

  packageButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const packageName = btn.getAttribute('data-package');
      if (!packageName) return;

      if (inquirySection) {
        if (decorTypeInput) {
          decorTypeInput.value = packageName;
          decorTypeInput.dispatchEvent(new Event('change'));
        }

        const headerOffset = 90;
        const elementPosition = inquirySection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Highlight input field momentarily
        if (decorTypeInput) {
          setTimeout(() => {
            decorTypeInput.focus();
            decorTypeInput.style.borderColor = 'var(--gold-primary)';
            decorTypeInput.style.boxShadow = '0 0 0 4px var(--gold-glow)';
            setTimeout(() => {
              decorTypeInput.style.borderColor = '';
              decorTypeInput.style.boxShadow = '';
            }, 1800);
          }, 600);
        }
      } else {
        // Multi-page navigation to /kontak
        window.location.href = `/kontak?package=${encodeURIComponent(packageName)}`;
      }
    });
  });
}

/* ==========================================================================
   7. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const bttBtn = document.querySelector('.back-to-top');
  if (!bttBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      bttBtn.classList.add('visible');
    } else {
      bttBtn.classList.remove('visible');
    }
  }, { passive: true });

  bttBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   8. PRATINJAU KONSEP BANNER DISMISS
   ========================================================================== */
function initConceptBanner() {
  const banner = document.querySelector('#conceptBanner, .concept-preview-banner');
  if (banner) {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.banner-close-btn')) {
        banner.style.display = 'none';
      }
    });
  }
}
