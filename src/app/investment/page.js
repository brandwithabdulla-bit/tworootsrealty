import Image from 'next/image';
import Button from '@/components/Button';
import styles from '@/app/editorial.module.css';

export default function Investment() {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.hero}`}>
        <span className={styles.heroLabel}>Global Perspective</span>
        <h1 className={`secondary-font ${styles.heroTitle}`}>Why Invest in Dubai?</h1>
        <p className={styles.heroSubtitle}>
          A thriving global hub offering unparalleled tax advantages, high yields, and world-class infrastructure. Discover why international capital continues to flow into Dubai real estate.
        </p>
      </div>

      <div className={styles.imageBanner}>
        <Image 
          src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=2500&auto=format&fit=crop" 
          alt="Dubai Marina" 
          fill 
          style={{objectFit: 'cover'}}
        />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.section}>
          <h2 className={`secondary-font ${styles.sectionTitle}`}>The Dubai Advantage</h2>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', marginTop: '3rem'}}>
            <div>
              <h3 className={`secondary-font`} style={{fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--deep-navy)'}}>Tax-Free Environment</h3>
              <p className={styles.text}>0% income tax, 0% capital gains tax, and 0% property tax. Dubai remains one of the most tax-efficient jurisdictions in the world for real estate investors.</p>
            </div>
            
            <div>
              <h3 className={`secondary-font`} style={{fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--deep-navy)'}}>High Rental Yields</h3>
              <p className={styles.text}>Compared to London, New York, or Hong Kong, Dubai offers significantly higher gross rental yields, often ranging between 6% to 8% for long-term rentals and higher for short-term holiday homes.</p>
            </div>
            
            <div>
              <h3 className={`secondary-font`} style={{fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--deep-navy)'}}>The Golden Visa</h3>
              <p className={styles.text}>Investors purchasing property worth AED 2 million or more are eligible for the UAE's 10-year Golden Visa, securing long-term residency for themselves and their families.</p>
            </div>
          </div>
        </div>

        <div className={styles.section} style={{textAlign: 'center', marginTop: '6rem', backgroundColor: 'var(--midnight-navy)', padding: '4rem 2rem', borderRadius: 'var(--radius-md)', color: 'var(--soft-ivory)'}}>
          <h2 className={`secondary-font`} style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>Start Your Investment Journey</h2>
          <p style={{fontSize: '1.1rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem'}}>Speak directly with our founders to discuss your investment goals and receive a tailored portfolio strategy.</p>
          <Button href="/contact" variant="primary">Schedule a Consultation</Button>
        </div>
      </div>
    </main>
  );
}
