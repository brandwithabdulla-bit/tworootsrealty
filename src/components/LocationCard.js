import Link from 'next/link';
import Image from 'next/image';
import styles from './LocationCard.module.css';

export default function LocationCard({ location }) {
  return (
    <Link href={`/areas/${location.slug}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={location.heroImage || location.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2500&auto=format&fit=crop'} 
          alt={location.name} 
          fill 
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={`secondary-font ${styles.name}`}>{location.name}</h3>
        </div>
        <p className={styles.description}>{location.description}</p>
        <span className={styles.exploreBtn}>Explore Area</span>
      </div>
    </Link>
  );
}
