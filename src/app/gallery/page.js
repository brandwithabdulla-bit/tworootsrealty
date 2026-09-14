import Image from 'next/image';
import styles from './page.module.css';

// Using the same Unsplash images used throughout the site, optimized to w=1080
const galleryImages = [
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1080&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1080&auto=format&fit=crop"
];

export default function GalleryPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>Portfolio</span>
          <h1 className={`secondary-font ${styles.heroTitle}`}>Image Gallery.</h1>
          <p className={styles.heroSubtitle}>
            A curated selection of our finest properties and luxury spaces.
          </p>
        </div>
      </div>
      <div className={`container ${styles.galleryContainer}`}>
        <div className={styles.masonryGrid}>
          {galleryImages.map((src, idx) => (
            <div key={idx} className={styles.imageWrapper}>
              <Image 
                src={src} 
                alt={`Gallery Image ${idx + 1}`} 
                fill 
                className={styles.imageScale} 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
