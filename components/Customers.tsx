interface Customer {
  id: number;
  name: string;
  logoUrl: string | null;
}

interface CustomersProps {
  customers: Customer[];
  sectionTitle?: string | null;
  sectionSubtitle?: string | null;
}

const defaultCustomers = [
  { id: 1, name: "PT Teknologi Nusantara", logoUrl: null },
  { id: 2, name: "CV Digital Solusi", logoUrl: null },
  { id: 3, name: "PT Maju Bersama", logoUrl: null },
  { id: 4, name: "StartupHub Indonesia", logoUrl: null },
  { id: 5, name: "PT Cloud Indonesia", logoUrl: null },
  { id: 6, name: "Digital Agency Jakarta", logoUrl: null },
  { id: 7, name: "PT Fintech Rakyat", logoUrl: null },
  { id: 8, name: "EduTech Indonesia", logoUrl: null },
];

export default function Customers({ customers, sectionTitle, sectionSubtitle }: CustomersProps) {
  const displayCustomers = customers.length > 0 ? customers : defaultCustomers;

  return (
    <section className="clients" id="clients-section">
      <h2>{sectionTitle || "Dipercaya Banyak Perusahaan"}</h2>
      <p className="clients-subtitle">
        {sectionSubtitle || "Kami bangga telah menjadi mitra digital bagi berbagai perusahaan terkemuka di Indonesia."}
      </p>
      <div className="clients-marquee">
        <div className="clients-track">
          {[...displayCustomers, ...displayCustomers].map((c, i) => (
            <div key={`${c.id}-${i}`} className="client-logo">
              {c.logoUrl ? (
                <img src={c.logoUrl} alt={c.name} />
              ) : (
                <span>{c.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
