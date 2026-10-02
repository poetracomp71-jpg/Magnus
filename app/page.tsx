import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Keunggulan from "@/components/Keunggulan";
import ProsesKerja from "@/components/ProsesKerja";
import Clients from "@/components/Clients";
import Cta from "@/components/Cta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionBg from "@/components/SectionBg";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [settings, services, portfolio, customers] = await Promise.all([
    prisma.siteSettings.findUnique({ where: { id: 1 } }).catch(() => null),
    prisma.service.findMany({ where: { active: true }, orderBy: { sortOrder: "asc" } }).catch(() => []),
    prisma.portfolio.findMany({ where: { active: true }, orderBy: { sortOrder: "asc" } }).catch(() => []),
    prisma.customer.findMany({ where: { active: true }, orderBy: { sortOrder: "asc" } }).catch(() => []),
  ]);

  const isHero = settings?.heroActive !== false;
  const isAbout = settings?.aboutActive !== false;
  const isServices = settings?.servicesActive !== false;
  const isPortfolio = settings?.portfolioActive !== false;
  const isCustomers = settings?.customersActive !== false;
  const isCta = settings?.ctaActive !== false;
  const isContact = settings?.contactActive !== false;
  const isFooter = settings?.footerActive !== false;

  return (
    <div className="site-shell">
      <Navbar
        logoUrl={settings?.logoUrl}
        navbarCaption={settings?.navbarCaption}
        navbarCaptionColor={settings?.navbarCaptionColor}
        navbarCaptionGradient={settings?.navbarCaptionGradient}
        navbarCaptionGradientTo={settings?.navbarCaptionGradientTo}
      />
      <main>
        {isHero && (
          <ScrollReveal animation="fade-in" duration={800}>
            <SectionBg bgColor={settings?.heroColor} bgImage={settings?.heroBgImage} bgOpacity={settings?.heroBgOpacity} textColor={settings?.heroTextColor}>
              <Hero
                title={settings?.heroTitle}
                subtitle={settings?.heroSubtitle}
                ctaText={settings?.heroCtaText}
                ctaLink={settings?.heroCtaLink}
                image={settings?.heroImage}
              />
            </SectionBg>
          </ScrollReveal>
        )}

        {isAbout && (
          <ScrollReveal animation="fade-up" delay={100}>
            <SectionBg bgColor={settings?.aboutColor} bgImage={settings?.aboutBgImage} bgOpacity={settings?.aboutBgOpacity} textColor={settings?.aboutTextColor}>
              <About
                title={settings?.aboutTitle}
                subtitle={settings?.aboutSubtitle}
                description={settings?.aboutDescription}
                image={settings?.aboutImage}
              />
            </SectionBg>
          </ScrollReveal>
        )}

        {isServices && (
          <ScrollReveal animation="zoom-in" delay={100}>
            <SectionBg bgColor={settings?.servicesColor} bgImage={settings?.servicesBgImage} bgOpacity={settings?.servicesBgOpacity} textColor={settings?.servicesTextColor}>
              <Services
                services={services}
                sectionTitle={settings?.servicesTitle}
                sectionSubtitle={settings?.servicesSubtitle}
                sectionDescription={settings?.servicesDescription}
              />
            </SectionBg>
          </ScrollReveal>
        )}

        {isPortfolio && (
          <ScrollReveal animation="fade-up" delay={100}>
            <SectionBg bgColor={settings?.portfolioColor} bgImage={settings?.portfolioBgImage} bgOpacity={settings?.portfolioBgOpacity} textColor={settings?.portfolioTextColor}>
              <Portfolio
                items={portfolio}
                sectionTitle={settings?.portfolioTitle}
                sectionSubtitle={settings?.portfolioSubtitle}
                sectionDescription={settings?.portfolioDescription}
              />
            </SectionBg>
          </ScrollReveal>
        )}

        <ScrollReveal animation="fade-left" delay={50}>
          <Keunggulan />
        </ScrollReveal>

        <ScrollReveal animation="zoom-in" delay={50}>
          <ProsesKerja />
        </ScrollReveal>

        {isCustomers && (
          <ScrollReveal animation="fade-right" delay={100}>
            <SectionBg bgColor={settings?.clientsColor} bgImage={settings?.clientsBgImage} bgOpacity={settings?.clientsBgOpacity} textColor={settings?.clientsTextColor}>
              <Clients
                customers={customers}
                sectionTitle={null}
                sectionSubtitle={null}
              />
            </SectionBg>
          </ScrollReveal>
        )}

        {isCta && (
          <ScrollReveal animation="zoom-in" delay={50}>
            <Cta
              title={settings?.ctaTitle}
              subtitle={settings?.ctaSubtitle}
              buttonText={settings?.ctaButtonText}
              buttonLink={settings?.ctaButtonLink}
              bgColor={settings?.ctaColor}
              textColor={settings?.ctaTextColor}
              gradient={settings?.ctaGradient}
              gradientTo={settings?.ctaGradientTo}
              titleFont={settings?.ctaTitleFont}
              subtitleFont={settings?.ctaSubtitleFont}
              bgImage={settings?.ctaBgImage}
              bgOpacity={settings?.ctaBgOpacity}
            />
          </ScrollReveal>
        )}

        {isContact && (
          <ScrollReveal animation="fade-up" delay={100}>
            <SectionBg bgColor={settings?.contactColor} bgImage={settings?.contactBgImage} bgOpacity={settings?.contactBgOpacity} textColor={settings?.contactTextColor}>
              <Contact
                phone={settings?.phone}
                email={settings?.email}
                address={settings?.address}
                whatsapp={settings?.whatsapp}
                badge={settings?.contactBadge}
                title={settings?.contactTitle}
                subtitle={settings?.contactSubtitle}
                infoColor={settings?.contactInfoColor}
              />
            </SectionBg>
          </ScrollReveal>
        )}
      </main>
      {isFooter && (
        <Footer
          companyName={settings?.companyName}
          description={settings?.footerDescription}
          copyright={settings?.footerCopyright}
          socialInstagram={settings?.socialInstagram}
          socialLinkedin={settings?.socialLinkedin}
          socialGithub={settings?.socialGithub}
          socialWhatsapp={settings?.socialWhatsapp}
          logoUrl={settings?.logoUrl}
        />
      )}
    </div>
  );
}
