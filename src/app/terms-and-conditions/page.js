import styles from '@/app/properties/page.module.css';

export default function Terms() {
  return (
    <main className={styles.main}>
      <div className="container" style={{maxWidth: '800px', margin: '0 auto', paddingTop: '4rem'}}>
        <h1 className="secondary-font" style={{fontSize: '3rem', color: 'var(--deep-navy)', marginBottom: '2rem'}}>Terms & Conditions</h1>
        <div style={{lineHeight: 1.8, color: 'rgba(15,38,69,0.8)'}}>
          <p style={{marginBottom: '1rem'}}>Last updated: [Date]</p>
          <p style={{marginBottom: '1.5rem'}}>Please read these terms and conditions carefully before using the Two Roots Realty website.</p>
          <h3 style={{fontSize: '1.25rem', color: 'var(--deep-navy)', marginTop: '2rem', marginBottom: '1rem'}}>1. Acceptance of Terms</h3>
          <p style={{marginBottom: '1.5rem'}}>By accessing this website, we assume you accept these terms and conditions. Do not continue to use Two Roots Realty if you do not agree to take all of the terms and conditions stated on this page.</p>
          <p style={{fontStyle: 'italic', marginTop: '3rem'}}>This page is a placeholder and should be updated with official legal text.</p>
        </div>
      </div>
    </main>
  );
}
