import styles from '@/app/editorial.module.css';

export default function Testimonials() {
  const reviews = [
    { name: "Sarah M.", role: "UK Investor", quote: "Two Roots provided absolute clarity and transparency when buying my first off-plan property in Dubai. Highly recommended." },
    { name: "Ahmed K.", role: "Local Resident", quote: "The team understood exactly what we wanted for our family home. The process was seamless from start to finish." },
    { name: "David L.", role: "Portfolio Manager", quote: "Their data-driven approach to investment yields sets them apart from typical brokers." }
  ];

  return (
    <main className={styles.main}>
      <div className={`container ${styles.hero}`}>
        <span className={styles.heroLabel}>Client Experiences</span>
        <h1 className={`secondary-font ${styles.heroTitle}`}>What Our Clients Say.</h1>
      </div>

      <div className={`container ${styles.content}`}>
        <div style={{display: 'grid', gap: '3rem'}}>
          {reviews.map((review, index) => (
            <div key={index} style={{backgroundColor: 'white', padding: '3rem', borderRadius: '4px', boxShadow: '0 4px 20px rgba(15,38,69,0.05)'}}>
              <p className="secondary-font" style={{fontSize: '1.5rem', color: 'var(--deep-navy)', marginBottom: '1.5rem', fontStyle: 'italic'}}>"{review.quote}"</p>
              <div>
                <span style={{display: 'block', fontWeight: '600', color: 'var(--deep-navy)'}}>{review.name}</span>
                <span style={{fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--warm-sand)'}}>{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
