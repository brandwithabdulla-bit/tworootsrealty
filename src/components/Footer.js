import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        
        <div className={styles.topSection}>
          <div className={styles.brandSection}>
            <Image 
              src="/logo-final-black.png" 
              alt="Two Roots Realty" 
              width={180} 
              height={45} 
              className={styles.logoImage} 
            />
            <p className={styles.tagline}>Dubai Property. Global Perspective.</p>
          </div>
          
          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Company</h4>
              <Link href="/about">About Us</Link>
              <Link href="/about/our-story">Our Story</Link>
              <Link href="/about/team">Team</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/contact">Contact</Link>
            </div>
            
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Services</h4>
              <Link href="/properties">Properties</Link>
              <Link href="/projects">New Projects</Link>
              <Link href="/investment">Investment Advisory</Link>
              <Link href="/services">Our Services</Link>
            </div>
            
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Connect</h4>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://wa.me/placeholder" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Two Roots Realty. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
