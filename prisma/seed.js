const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  await prisma.serviceImage.deleteMany();
  await prisma.service.deleteMany();
  await prisma.portfolio.deleteMany();
  await prisma.customer.deleteMany();

  await prisma.siteSettings.upsert({
    where: { id: 1 },
    update: {
      companyName: "Putra Comp",
      tagline: "Magnus System — Smart System, Better Business",
      heroTitle: "Bangun Digital\nBersama\nMagnus System",
      heroSubtitle: "Partner digital untuk website, aplikasi, dan sistem bisnis yang membantu Anda berkembang.",
      heroCtaText: "Mulai Konsultasi",
      heroCtaLink: "#contact-section",
      heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&h=900&fit=crop",
      primaryColor: "#0D9488",
      secondaryColor: "#F0FDFA",
      heroColor: "#F0FDFA",
      heroTextColor: "#0F172A",
      heroBgImage: null,
      heroBgOpacity: 0,
      aboutColor: "#FFFFFF",
      aboutTextColor: "#0F172A",
      aboutBgImage: null,
      aboutBgOpacity: 0,
      servicesColor: "#FFFFFF",
      servicesTextColor: "#0F172A",
      servicesBgImage: null,
      servicesBgOpacity: 0,
      portfolioColor: "#FFFFFF",
      portfolioTextColor: "#0F172A",
      portfolioBgImage: null,
      portfolioBgOpacity: 0,
      clientsColor: "#FFFFFF",
      clientsTextColor: "#0F172A",
      clientsBgImage: null,
      clientsBgOpacity: 0,
      ctaColor: "#0D9488",
      ctaTextColor: "#ffffff",
      ctaBgImage: null,
      ctaBgOpacity: 0,
      contactColor: "#FFFFFF",
      contactTextColor: "#0F172A",
      contactBgImage: null,
      contactBgOpacity: 0,
      footerColor: "#FFFFFF",
      footerTextColor: "#64748B",
      footerBgImage: null,
      footerBgOpacity: 0,
      phone: "085811470226",
      email: "padhi39@gmail.com",
      address: "Surabaya, Indonesia",
      whatsapp: "6285811470226",
      whatsappMessage: "Halo Putra Comp! Saya tertarik dengan layanan Magnus System. Bisa info lebih lanjut?",
      aboutTitle: "Magnus System",
      aboutSubtitle: "TENTANG KAMI",
      aboutDescription: "Magnus System adalah perusahaan teknologi yang berfokus pada pengembangan website, aplikasi, dan sistem bisnis yang dirancang khusus untuk membantu bisnis tumbuh lebih efisien dan modern.",
      aboutImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      servicesTitle: "Solusi Digital untuk Kebutuhan Bisnis Anda",
      servicesSubtitle: "LAYANAN KAMI",
      servicesDescription: "Dari Ide hingga Deploy, Kami siap membantu mewujudkan visi digital Anda.",
      portfolioTitle: "Beberapa Proyek Kami",
      portfolioSubtitle: "PORTFOLIO",
      portfolioDescription: "Hasil karya terbaik kami yang telah membantu klien mencapai目标 digital mereka.",
      footerDescription: "Smart System, Better Business",
      footerCopyright: "© 2025 Magnus System. All rights reserved.",
      socialInstagram: "https://instagram.com/putracomp",
      socialLinkedin: "https://linkedin.com/company/putracomp",
      socialGithub: "https://github.com/putracomp",
      socialWhatsapp: "https://wa.me/6285811470226",
      seoTitle: "Putra Comp — Magnus System | Solusi Digital Terdepan",
      seoDescription: "Magnus System adalah solusi digital terdepan untuk website, mobile app, dan sistem bisnis.",
      seoKeywords: "software house, web development, mobile app, landing page, company profile, Magnus System",
    },
    create: {
      id: 1,
      companyName: "Putra Comp",
      tagline: "Magnus System — Smart System, Better Business",
      heroTitle: "Bangun Digital\nBersama\nMagnus System",
      heroSubtitle: "Partner digital untuk website, aplikasi, dan sistem bisnis yang membantu Anda berkembang.",
      heroCtaText: "Mulai Konsultasi",
      heroCtaLink: "#contact-section",
      heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&h=900&fit=crop",
      primaryColor: "#0D9488",
      secondaryColor: "#F0FDFA",
      heroColor: "#F0FDFA",
      heroTextColor: "#0F172A",
      heroBgImage: null,
      heroBgOpacity: 0,
      aboutColor: "#FFFFFF",
      aboutTextColor: "#0F172A",
      aboutBgImage: null,
      aboutBgOpacity: 0,
      servicesColor: "#FFFFFF",
      servicesTextColor: "#0F172A",
      servicesBgImage: null,
      servicesBgOpacity: 0,
      portfolioColor: "#FFFFFF",
      portfolioTextColor: "#0F172A",
      portfolioBgImage: null,
      portfolioBgOpacity: 0,
      clientsColor: "#FFFFFF",
      clientsTextColor: "#0F172A",
      clientsBgImage: null,
      clientsBgOpacity: 0,
      ctaColor: "#0D9488",
      ctaTextColor: "#ffffff",
      ctaBgImage: null,
      ctaBgOpacity: 0,
      contactColor: "#FFFFFF",
      contactTextColor: "#0F172A",
      contactBgImage: null,
      contactBgOpacity: 0,
      footerColor: "#FFFFFF",
      footerTextColor: "#64748B",
      footerBgImage: null,
      footerBgOpacity: 0,
      phone: "085811470226",
      email: "padhi39@gmail.com",
      address: "Surabaya, Indonesia",
      whatsapp: "6285811470226",
      whatsappMessage: "Halo Putra Comp! Saya tertarik dengan layanan Magnus System. Bisa info lebih lanjut?",
      aboutTitle: "Magnus System",
      aboutSubtitle: "TENTANG KAMI",
      aboutDescription: "Magnus System adalah perusahaan teknologi yang berfokus pada pengembangan website, aplikasi, dan sistem bisnis yang dirancang khusus untuk membantu bisnis tumbuh lebih efisien dan modern.",
      aboutImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      servicesTitle: "Solusi Digital untuk Kebutuhan Bisnis Anda",
      servicesSubtitle: "LAYANAN KAMI",
      servicesDescription: "Dari Ide hingga Deploy, Kami siap membantu mewujudkan visi digital Anda.",
      portfolioTitle: "Beberapa Proyek Kami",
      portfolioSubtitle: "PORTFOLIO",
      portfolioDescription: "Hasil karya terbaik kami yang telah membantu klien mencapai目标 digital mereka.",
      footerDescription: "Smart System, Better Business",
      footerCopyright: "© 2025 Magnus System. All rights reserved.",
      socialInstagram: "https://instagram.com/putracomp",
      socialLinkedin: "https://linkedin.com/company/putracomp",
      socialGithub: "https://github.com/putracomp",
      socialWhatsapp: "https://wa.me/6285811470226",
      seoTitle: "Putra Comp — Magnus System | Solusi Digital Terdepan",
      seoDescription: "Magnus System adalah solusi digital terdepan untuk website, mobile app, dan sistem bisnis.",
      seoKeywords: "software house, web development, mobile app, landing page, company profile, Magnus System",
    },
  });

  const services = [
    { title: "Website Development", description: "Company profile, landing page, toko online, dan custom website.", icon: "🌐", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", sortOrder: 0 },
    { title: "Mobile Apps", description: "Aplikasi Android & iOS sesuai kebutuhan bisnis Anda.", icon: "📱", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop", sortOrder: 1 },
    { title: "Sistem Bisnis", description: "POS, inventory, akuntansi, ERP, dan sistem operasional lainnya.", icon: "⚙️", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", sortOrder: 2 },
    { title: "UI/UX Design", description: "Desain antarmuka yang modern, profesional, dan mudah digunakan.", icon: "🎨", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop", sortOrder: 3 },
  ];

  for (const s of services) {
    await prisma.service.create({ data: { ...s, active: true } });
  }

  const portfolios = [
    { title: "POS Restaurant", description: "Sistem Kasir & Manajemen Restoran", category: "Sistem Bisnis", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop", link: "#", sortOrder: 0 },
    { title: "Company Profile", description: "Website Perusahaan", category: "Website", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", link: "#", sortOrder: 1 },
    { title: "E-Commerce", description: "Toko Online Modern", category: "E-Commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", link: "#", sortOrder: 2 },
    { title: "Sistem Manufaktur", description: "Dashboard & Reporting", category: "Enterprise", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", link: "#", sortOrder: 3 },
  ];

  for (const p of portfolios) {
    await prisma.portfolio.create({ data: { ...p, active: true } });
  }

  const customers = [
    { name: "klapa manis",       logoUrl: null,
      navbarCaption: "Magnus System",
      navbarCaptionColor: "#0D9488",
      navbarCaptionGradient: false,
      navbarCaptionGradientTo: "#14B8A6", sortOrder: 0 },
    { name: "CV Digital Solusi",       logoUrl: null,
      navbarCaption: "Magnus System",
      navbarCaptionColor: "#0D9488",
      navbarCaptionGradient: false,
      navbarCaptionGradientTo: "#14B8A6", sortOrder: 1 },
    { name: "PT Maju Bersama",       logoUrl: null,
      navbarCaption: "Magnus System",
      navbarCaptionColor: "#0D9488",
      navbarCaptionGradient: false,
      navbarCaptionGradientTo: "#14B8A6", sortOrder: 2 },
    { name: "Surya Abadi",       logoUrl: null,
      navbarCaption: "Magnus System",
      navbarCaptionColor: "#0D9488",
      navbarCaptionGradient: false,
      navbarCaptionGradientTo: "#14B8A6", sortOrder: 3 },
    { name: "Nusantara Tech",       logoUrl: null,
      navbarCaption: "Magnus System",
      navbarCaptionColor: "#0D9488",
      navbarCaptionGradient: false,
      navbarCaptionGradientTo: "#14B8A6", sortOrder: 4 },
  ];

  for (const c of customers) {
    await prisma.customer.create({ data: { ...c, active: true } });
  }

  console.log("Seed completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
