import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import styles from '@/app/editorial.module.css';

export default function OurStory() {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.hero}`}>
        <span className={styles.heroLabel}>Our Heritage</span>
        <h1 className={`secondary-font ${styles.heroTitle}`}>Two Roots.<br />One Vision.</h1>
      </div>

      <div className={`container ${styles.splitSection}`}>
        <div className={styles.splitImage}>
          <Image 
            src="https://images.unsplash.com/photo-1541888049191-236b2f67de44?q=80&w=1500&auto=format&fit=crop" 
            alt="Founders" 
            fill 
            style={{objectFit: 'cover'}}
          />
        </div>
        <div className={styles.splitContent}>
          <h2 className={`secondary-font ${styles.sectionTitle}`}>A Shared Journey</h2>
          <p className={styles.text}>
            The story of Two Roots Realty begins with two childhood friends from Kerala, India. Though their careers took them across the world—from the corporate sectors of the UK to the dynamic markets of Qatar and the UAE—their shared vision remained constant.
          </p>
          <p className={styles.text}>
            Sunand and Ashmid reunited in Dubai, bringing with them a wealth of international experience. They recognized a gap in the local market: a lack of genuinely bespoke, relationship-driven advisory that could cater to sophisticated global investors.
          </p>
          <p className={styles.text}>
            Combining Sunand's extensive background in luxury sales with Ashmid's deep understanding of international business dynamics, Two Roots Realty was born. Today, it stands as a testament to their enduring friendship and their commitment to elevating the real estate experience in Dubai.
          </p>
          <div style={{marginTop: '2rem'}}>
            <Button href="/about/team" variant="secondary">Meet The Founders</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
