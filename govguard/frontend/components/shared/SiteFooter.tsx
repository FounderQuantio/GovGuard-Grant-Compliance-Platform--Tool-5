"use client";

const HOME_URL = "https://quantioglobal.net";
const FOOTER_LINKS = ["About", "Services", "Contact", "Privacy"];

function FooterLink({ label }: { label: string }) {
  const href = label === "Privacy" ? HOME_URL : `${HOME_URL}/#${label.toLowerCase()}`;
  return (
    <a
      href={href}
      style={{ fontSize: 13, color: "rgba(33,36,39,0.5)", textDecoration: "none" }}
      onMouseEnter={e => e.currentTarget.style.color = "#212427"}
      onMouseLeave={e => e.currentTarget.style.color = "rgba(33,36,39,0.5)"}
    >{label}</a>
  );
}

export default function SiteFooter() {
  return (
    <footer className="qg-sitefooter" style={{ background: "#F4F5F7", borderTop: "1px solid rgba(33,36,39,0.08)", padding: "12px 40px", flexShrink: 0 }}>
      <style>{`
        @media (max-width: 680px) {
          .qg-sitefooter { padding: 12px 20px !important; }
          .qg-sitefooter-inner { gap: 10px !important; }
          .qg-sitefooter-links { gap: 20px !important; }
          .qg-sitefooter-contact { text-align: left !important; }
        }
      `}</style>
      <div className="qg-sitefooter-inner" style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 16,
      }}>
        <a href={HOME_URL} style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <img src="/qg-logo-gold.png" alt="Quantio Global" style={{ width: 24, height: "auto" }} />
          <div style={{ fontSize: 11, fontWeight: 800, color: "#212427", letterSpacing: 2, textTransform: "uppercase" }}>Quantio Global</div>
        </a>
        <div className="qg-sitefooter-links" style={{ display: "flex", gap: 28 }}>
          {FOOTER_LINKS.map(l => <FooterLink key={l} label={l} />)}
        </div>
        <div className="qg-sitefooter-contact" style={{ textAlign: "right" }}>
          <p style={{ fontSize: 12, color: "rgba(33,36,39,0.45)", margin: 0 }}>contact@quantioglobal.net · © 2026 Quantio Global</p>
        </div>
      </div>
    </footer>
  );
}
