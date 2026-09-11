import styles from '@/app/properties/page.module.css';

export default function CookiePolicy() {
  return (
    <main className={styles.main}>
      <div className="container" style={{maxWidth: '800px', margin: '0 auto', paddingTop: '4rem'}}>
        <h1 className="secondary-font" style={{fontSize: '3rem', color: 'var(--deep-navy)', marginBottom: '2rem'}}>Cookie Policy</h1>
        <div style={{lineHeight: 1.8, color: 'rgba(15,38,69,0.8)'}}>
          <p style={{marginBottom: '1rem'}}>Last updated: [Date]</p>
          <p style={{marginBottom: '1.5rem'}}>This Cookie Policy explains what cookies are and how we use them on the Two Roots Realty website.</p>
          <h3 style={{fontSize: '1.25rem', color: 'var(--deep-navy)', marginTop: '2rem', marginBottom: '1rem'}}>What are Cookies?</h3>
          <p style={{marginBottom: '1.5rem'}}>Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser.</p>
          <p style={{fontStyle: 'italic', marginTop: '3rem'}}>This page is a placeholder and should be updated with official legal text.</p>
        </div>
      </div>
    </main>
  );
}
