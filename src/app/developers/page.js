import Image from 'next/image';
import DeveloperCard from '@/components/DeveloperCard';
import { developers } from '@/data/developers';
import styles from './page.module.css';

export default function DevelopersListing() {
  const featuredDevelopers = developers.slice(0, 3);
  const remainingDevelopers = developers.slice(3);

  return (
    <main className={styles.main}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroBackground}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="secondary-font">Trusted Developers</h1>
          <p>Partnering with Dubai's most prestigious real estate developers to bring you uncompromising quality and visionary architecture.</p>
        </div>
      </div>

      <div className="container" style={{ padding: '6rem 0' }}>
        <div className={styles.introSection}>
          <h2 className="secondary-font" style={{fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--deep-navy)'}}>Visionaries of the Skyline</h2>
          <p style={{fontSize: '1.1rem', color: 'rgba(15, 38, 69, 0.7)', maxWidth: '800px', lineHeight: '1.8'}}>We maintain direct, trusted relationships with Dubai's top tier developers. This ensures our clients receive priority access to premium inventory, preferred payment plans, and early VIP access to new launches.</p>
        </div>

        <div className={styles.featuredGrid}>
          {featuredDevelopers.map(dev => (
            <DeveloperCard key={dev.id} developer={dev} featured={true} />
          ))}
        </div>

        <div className={styles.directoryHeader}>
          <h3 className="secondary-font" style={{fontSize: '2rem', color: 'var(--deep-navy)'}}>Directory</h3>
          <p>Showing {developers.length} developer partners</p>
        </div>

        <div className={styles.grid}>
          {remainingDevelopers.map(dev => (
            <DeveloperCard key={dev.id} developer={dev} />
          ))}
        </div>
      </div>
    </main>
  );
}
