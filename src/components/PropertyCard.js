import Link from 'next/link';
import Image from 'next/image';
import styles from './PropertyCard.module.css';

export default function PropertyCard({ property }) {
  // Use the first image if array, or placeholder
  const imageUrl = property.images && property.images.length > 0 ? property.images[0] : 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500&auto=format&fit=crop';

  return (
    <div className={styles.card}>
      <Link href={`/properties/${property.slug}`} className={styles.imageWrapper}>
        <Image 
          src={imageUrl} 
          alt={property.title} 
          fill 
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={styles.tags}>
          <span className={styles.statusTag}>{property.status}</span>
        </div>
        <div className={styles.priceOverlay}>
          <span className={styles.price}>{property.priceLabel}</span>
        </div>
      </Link>

      <div className={styles.content}>
        <div className={styles.headerInfo}>
          <p className={styles.developer}>{property.developer}</p>
          <Link href={`/properties/${property.slug}`}>
            <h3 className={`secondary-font ${styles.title}`}>{property.title}</h3>
          </Link>
          <p className={styles.location}>{property.location}</p>
        </div>

        <div className={styles.specs}>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Beds</span>
            <span className={styles.specValue}>{property.bedrooms}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Baths</span>
            <span className={styles.specValue}>{property.bathrooms}</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specLabel}>Area</span>
            <span className={styles.specValue}>{property.area}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
