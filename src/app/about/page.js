import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import styles from '@/app/editorial.module.css';

export default function About() {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.hero}`}>
        <span className={styles.heroLabel}>Who We Are</span>
        <h1 className={`secondary-font ${styles.heroTitle}`}>Elevating Real Estate Advisory in Dubai.</h1>
        <p className={styles.heroSubtitle}>
          We are an international team of specialists, bridging the gap between global investors and Dubai's premier properties.
        </p>
      </div>

      <div className={styles.imageBanner}>
        <Image 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2500&auto=format&fit=crop" 
          alt="Dubai Skyline" 
          fill 
          style={{objectFit: 'cover'}}
        />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.section}>
          <h2 className={`secondary-font ${styles.sectionTitle}`}>Our Philosophy</h2>
          <p className={styles.text}>
            Two Roots Realty was founded on a simple premise: real estate advisory should be personal, transparent, and enduring. In a fast-paced market like Dubai, clients often find themselves treated as mere transactions. We exist to change that narrative.
          </p>
          <div className={styles.textHighlight}>
            "We do not just sell properties; we curate portfolios and build relationships that last generations."
          </div>
          <p className={styles.text}>
            Our name, "Two Roots," reflects our foundation. We plant one root deeply into the local Dubai market—understanding every neighborhood, developer, and legal nuance. We plant the second root globally, ensuring we understand the international standards and diverse needs of our clients from the UK, Europe, and Asia.
          </p>
        </div>

        <div className={styles.section} style={{textAlign: 'center', marginTop: '4rem'}}>
          <Button href="/about/our-story" variant="secondary" style={{marginRight: '1rem'}}>Read Our Story</Button>
          <Button href="/about/team" variant="primary">Meet The Team</Button>
        </div>
      </div>
    </main>
  );
}
