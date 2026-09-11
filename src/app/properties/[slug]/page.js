import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { properties } from '@/data/properties';
import styles from './page.module.css';

export default function PropertyDetail({ params }) {
  const property = properties.find(p => p.slug === params.slug);

  if (!property) {
    return <div className="container" style={{paddingTop: '150px'}}>Property not found</div>;
  }

  return (
    <main className={styles.main}>
      {/* 01 - Hero Image */}
      <div className={styles.hero}>
        <Image 
          src={property.images[0] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500&auto=format&fit=crop'} 
          alt={property.title} 
          fill 
          style={{objectFit: 'cover'}} 
          priority 
        />
        <div className={styles.heroOverlay}></div>
      </div>
      
      <div className="container">
        {/* Breadcrumb over hero */}
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link> &gt; <Link href="/properties">Properties</Link> &gt; <span>{property.title}</span>
        </div>
        
        <div className={styles.layout}>
          <div className={styles.content}>
            
            {/* 02 - Title & Key Specs */}
            <div className={styles.header}>
              <div className={styles.tags}>
                <span className={styles.tag}>{property.status}</span>
                <span className={styles.tagLight}>{property.propertyType}</span>
              </div>
              <h1 className={`secondary-font ${styles.title}`}>{property.title}</h1>
              <p className={styles.location}>{property.location}</p>
            </div>
            
            <div className={styles.keyFacts}>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Developer</span>
                <span className={styles.factValue}>{property.developer}</span>
              </div>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Price</span>
                <span className={styles.factValue}>{property.priceLabel}</span>
              </div>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Bedrooms</span>
                <span className={styles.factValue}>{property.bedrooms}</span>
              </div>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Area</span>
                <span className={styles.factValue}>{property.area}</span>
              </div>
            </div>
            
            {/* 03 - Image Gallery (Masonry style) */}
            {property.images.length > 1 && (
              <div className={styles.galleryGrid}>
                {property.images.slice(1, 3).map((img, index) => (
                  <div key={index} className={styles.galleryItem}>
                    <Image src={img} alt={`Gallery image ${index + 1}`} fill style={{objectFit: 'cover'}} />
                  </div>
                ))}
              </div>
            )}
            
            {/* 04 - Overview */}
            <div className={styles.section}>
              <h2 className={`secondary-font ${styles.sectionTitle}`}>Overview</h2>
              <p className={styles.description}>{property.description}</p>
            </div>
            
            {/* 05 - Amenities */}
            <div className={styles.section}>
              <h2 className={`secondary-font ${styles.sectionTitle}`}>Amenities & Features</h2>
              <ul className={styles.amenities}>
                {property.amenities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
          </div>
          
          {/* 06 - Sticky Enquiry Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.enquiryCard}>
              <h3 className={`secondary-font ${styles.enquiryTitle}`}>Register Interest</h3>
              <p className={styles.enquiryText}>Speak with our advisory team to arrange a private viewing or request floor plans.</p>
              
              <form className={styles.form}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" required />
                <Button variant="primary" style={{width: '100%', marginTop: '1rem'}}>Request Details</Button>
              </form>
              
              <div className={styles.divider}>or</div>
              
              <a 
                href={`https://wa.me/placeholder?text=Hi, I'm interested in ${property.title} (${property.slug})`} 
                className={styles.whatsappBtn}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
