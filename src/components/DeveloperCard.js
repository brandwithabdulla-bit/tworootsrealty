import Link from 'next/link';
import Image from 'next/image';
import styles from './DeveloperCard.module.css';

export default function DeveloperCard({ developer }) {
  return (
    <Link href={`/developers/${developer.slug}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={developer.logo} 
          alt={developer.name} 
          fill 
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.content}>
        <h3 className={`secondary-font ${styles.name}`}>{developer.name}</h3>
        <p className={styles.description}>{developer.description}</p>
        <span className={styles.exploreBtn}>Explore Developer</span>
      </div>
    </Link>
  );
}
