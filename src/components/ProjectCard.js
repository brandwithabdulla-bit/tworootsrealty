import Link from 'next/link';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const imageUrl = project.images && project.images.length > 0 ? project.images[0] : 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500&auto=format&fit=crop';

  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={imageUrl} 
          alt={project.title} 
          fill 
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          unoptimized
        />
        <div className={styles.overlay}></div>
        <div className={styles.tags}>
          {project.luxury && <span className={styles.tagLuxury}>Luxury</span>}
          <span className={styles.tagStatus}>{project.status}</span>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.headerInfo}>
          <span className={styles.tagStatus}>{project.status}</span>
          <h3 className={`secondary-font ${styles.title}`}>{project.title}</h3>
          <p className={styles.location}>{project.location}</p>
        </div>
        
        <div className={styles.bottomInfo}>
          <p className={styles.propertyType}>{project.type}</p>
          <div className={styles.priceBox}>
            <span className={styles.priceLabel}>Starting from</span>
            <span className={styles.priceValue}>{project.startingPrice}</span>
          </div>
          <div className={styles.handoverBox}>
            <span className={styles.priceLabel}>Handover</span>
            <span className={styles.handoverValue}>{project.handover}</span>
          </div>
          <span className={styles.exploreBtn}>View Project</span>
        </div>
      </div>
    </Link>
  );
}
