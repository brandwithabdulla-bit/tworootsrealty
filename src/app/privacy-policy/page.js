import styles from '@/app/editorial.module.css';

export default function PrivacyPolicy() {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.hero}`} style={{paddingBottom: '2rem'}}>
        <h1 className={`secondary-font ${styles.heroTitle}`} style={{fontSize: '3rem'}}>Privacy Policy</h1>
        <p>Last updated: September 2026</p>
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.section}>
          <p className={styles.text}>This Privacy Policy describes how Two Roots Realty ("we", "us", or "our") collects, uses, and shares your personal information when you visit or interact with our website.</p>
          <h2 className={`secondary-font ${styles.sectionTitle}`} style={{fontSize: '2rem', marginTop: '2rem'}}>Information We Collect</h2>
          <p className={styles.text}>We collect information you provide directly to us when you fill out forms, request information, or contact our advisory team.</p>
          <h2 className={`secondary-font ${styles.sectionTitle}`} style={{fontSize: '2rem', marginTop: '2rem'}}>How We Use Your Information</h2>
          <p className={styles.text}>We use the information we collect to communicate with you, provide our real estate advisory services, and improve our website experience.</p>
        </div>
      </div>
    </main>
  );
}
