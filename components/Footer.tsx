interface FooterProps {
  companyName?: string | null;
  description?: string | null;
  copyright?: string | null;
  socialInstagram?: string | null;
  socialLinkedin?: string | null;
  socialGithub?: string | null;
  socialWhatsapp?: string | null;
  bgColor?: string | null;
  textColor?: string | null;
  accentColor?: string | null;
  logoUrl?: string | null;
}

function WhatsAppIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>;
}

function InstagramIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;
}

function LinkedInIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
}

function GitHubIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>;
}

function YouTubeIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>;
}

function TikTokIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>;
}

function ScrollUpIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>;
}

export default function Footer({
  companyName, description, copyright, socialInstagram, socialLinkedin, socialGithub, socialWhatsapp,
  bgColor, textColor, accentColor, logoUrl,
}: FooterProps) {
  const name = companyName || "Putra Comp";

  return (
    <>
      <footer className="footer">
        <div className="footer-brand">
          <div className="brand" style={{ marginBottom: "12px" }}>
            {logoUrl ? (
              <img src={logoUrl} alt="Logo" style={{ height: "36px", objectFit: "contain" }} />
            ) : (
              <>
                <div className="brand-icon">M</div>
                <div>
                  MAGNUS<br />
                  <span>SYSTEM</span>
                </div>
              </>
            )}
          </div>
          <p>{description || "Smart System, Better Business"}</p>
          <div className="footer-social">
            {socialWhatsapp && <a href={socialWhatsapp} target="_blank" rel="noopener noreferrer" title="WhatsApp"><WhatsAppIcon /></a>}
            {socialInstagram && <a href={socialInstagram} target="_blank" rel="noopener noreferrer" title="Instagram"><InstagramIcon /></a>}
            {socialLinkedin && <a href={socialLinkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"><LinkedInIcon /></a>}
            {socialGithub && <a href={socialGithub} target="_blank" rel="noopener noreferrer" title="GitHub"><GitHubIcon /></a>}
            {!socialWhatsapp && !socialInstagram && !socialLinkedin && !socialGithub && (
              <>
                <a href="#" title="WhatsApp"><WhatsAppIcon /></a>
                <a href="#" title="Instagram"><InstagramIcon /></a>
                <a href="#" title="LinkedIn"><LinkedInIcon /></a>
                <a href="#" title="YouTube"><YouTubeIcon /></a>
                <a href="#" title="TikTok"><TikTokIcon /></a>
              </>
            )}
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Layanan</div>
          <a href="#services-section">Website Development</a>
          <a href="#services-section">Mobile Apps</a>
          <a href="#services-section">Sistem Bisnis</a>
          <a href="#services-section">UI/UX Design</a>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Perusahaan</div>
          <a href="#about-section">Tentang Kami</a>
          <a href="#portfolio-section">Portfolio</a>
          <a href="#clients-section">Klien</a>
          <a href="#contact-section">Kontak</a>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Ikuti Kami</div>
          <a href={socialInstagram || "#"} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={socialLinkedin || "#"} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={socialGithub || "#"} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#">YouTube</a>
        </div>
        <a href="#hero" className="scroll-up-btn" style={{
          position: "fixed", bottom: "24px", right: "24px", width: "44px", height: "44px",
          background: "#0D9488", color: "white", borderRadius: "50%", display: "grid",
          placeItems: "center", boxShadow: "0 4px 12px rgba(13,148,136,0.3)", zIndex: 50,
        }}><ScrollUpIcon /></a>
      </footer>
      <div className="footer-bottom">
        <span>{copyright || `© ${new Date().getFullYear()} ${name}. All rights reserved.`}</span>
        <div className="footer-bottom-links">
          <a href="#">Kebijakan Privasi</a>
          <span style={{ color: "#CBD5E1" }}>|</span>
          <a href="#">Syarat & Ketentuan</a>
        </div>
      </div>
    </>
  );
}
