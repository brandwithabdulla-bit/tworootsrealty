import Link from 'next/link';
import styles from './SectionHeader.module.css';

export default function SectionHeader({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink,
  align = 'left' // left, center
}) {
  return (
    <div className={`${styles.header} ${styles[align]}`}>
      <div className={styles.textContainer}>
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        <h2 className={`secondary-font ${styles.title}`}>{title}</h2>
      </div>
      
      {ctaText && ctaLink && (
        <Link href={ctaLink} className={styles.cta}>
          {ctaText} &rarr;
        </Link>
      )}
    </div>
  );
}
