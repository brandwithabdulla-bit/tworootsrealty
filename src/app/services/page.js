import Image from 'next/image';
import Button from '@/components/Button';
import styles from '@/app/editorial.module.css';

export default function Services() {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.hero}`}>
        <span className={styles.heroLabel}>What We Do</span>
        <h1 className={`secondary-font ${styles.heroTitle}`}>Comprehensive Real Estate Advisory.</h1>
        <p className={styles.heroSubtitle}>
          From securing your first luxury residence in Dubai to managing an extensive investment portfolio, our services are designed to offer end-to-end support.
        </p>
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.splitSection}>
          <div className={styles.splitContent}>
            <h2 className={`secondary-font ${styles.sectionTitle}`}>Property Acquisition</h2>
            <p className={styles.text}>
              Navigating Dubai's vast property market requires insight and access. We specialize in sourcing off-market luxury homes, securing early access to highly anticipated off-plan launches, and guiding you through the secondary market.
            </p>
            <p className={styles.text}>
              Our advisory process begins with understanding your lifestyle requirements and investment goals, ensuring every property we present aligns perfectly with your vision.
            </p>
          </div>
          <div className={styles.splitImage}>
            <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1500&auto=format&fit=crop" alt="Property Acquisition" fill style={{objectFit: 'cover'}} />
          </div>
        </div>

        <div className={styles.splitSection}>
          <div className={styles.splitImage}>
            <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1500&auto=format&fit=crop" alt="Investment Strategy" fill style={{objectFit: 'cover'}} />
          </div>
          <div className={styles.splitContent}>
            <h2 className={`secondary-font ${styles.sectionTitle}`}>Investment Strategy</h2>
            <p className={styles.text}>
              Dubai offers some of the highest rental yields and capital appreciation rates globally. We help investors build robust portfolios by analyzing market trends, developer track records, and upcoming infrastructure projects.
            </p>
            <p className={styles.text}>
              Whether you are looking for short-term holiday home yields or long-term capital growth, our data-driven approach ensures your capital is deployed effectively.
            </p>
            <div style={{marginTop: '2rem'}}>
              <Button href="/investment" variant="secondary">View Investment Guide</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
