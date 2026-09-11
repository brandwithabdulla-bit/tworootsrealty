'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const pathname = usePathname();
  
  // Only apply transparent header on homepage
  const isHomepage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navClass = `${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${!isScrolled && isHomepage ? styles.transparent : ''}`;

  return (
    <>
      <nav className={navClass}>
        <div className={`container ${styles.navContainer}`}>
          
          {/* Logo */}
          <Link href="/" className={styles.logoWrapper}>
            <Image 
              src="/logo-final-black.png" 
              alt="Two Roots Realty" 
              width={180} 
              height={45} 
              className={styles.logoImage} 
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className={styles.desktopLinks}>
            <Link href="/" className={styles.navLink}>Home</Link>
            
            <div className={styles.dropdown}>
              <span className={styles.navLink}>About ▾</span>
              <div className={styles.dropdownMenu}>
                <Link href="/about">About Us</Link>
                <Link href="/about/our-story">Our Story</Link>
                <Link href="/about/team">Founders & Team</Link>
              </div>
            </div>

            <div className={`${styles.dropdown} ${styles.megaMenuTrigger}`}>
              <span className={styles.navLink}>Projects ▾</span>
              <div className={styles.megaMenu}>
                <div className={styles.megaMenuSection}>
                  <h4>Explore</h4>
                  <Link href="/projects">All Projects</Link>
                  <Link href="/projects?filter=featured">Featured Projects</Link>
                  <Link href="/projects?filter=new">New Launches</Link>
                  <Link href="/projects?status=off-plan">Off-Plan Projects</Link>
                  <Link href="/projects?status=ready">Ready Projects</Link>
                  <Link href="/projects?filter=investment">Investment Opportunities</Link>
                </div>
                <div className={styles.megaMenuSection}>
                  <h4>Property Types</h4>
                  <Link href="/projects?type=apartments">Apartments</Link>
                  <Link href="/projects?type=villas">Villas</Link>
                  <Link href="/projects?type=townhouses">Townhouses</Link>
                  <Link href="/projects?type=penthouses">Penthouses</Link>
                  <Link href="/projects?type=branded">Branded Residences</Link>
                  <Link href="/projects?type=commercial">Commercial</Link>
                </div>
                <div className={styles.megaMenuSection}>
                  <h4>Discover</h4>
                  <Link href="/areas">Popular Locations</Link>
                  <Link href="/projects?lifestyle=waterfront">Waterfront Projects</Link>
                  <Link href="/projects?lifestyle=luxury">Luxury Projects</Link>
                  <Link href="/projects?lifestyle=high-potential">High-Potential Opportunities</Link>
                </div>
              </div>
            </div>

            <Link href="/developers" className={styles.navLink}>Developers</Link>
            
            <div className={styles.dropdown}>
              <span className={styles.navLink}>Media ▾</span>
              <div className={styles.dropdownMenu}>
                <Link href="/insights">All Media</Link>
                <Link href="/insights?category=insights">Insights</Link>
                <Link href="/insights?category=market-updates">Market Updates</Link>
                <Link href="/insights?category=guides">Real Estate Guides</Link>
                <Link href="/insights?category=investment">Investment Insights</Link>
                <Link href="/insights?category=news">News / Press</Link>
              </div>
            </div>

            <Link href="/contact" className={styles.navLink}>Contact Us</Link>
          </div>

          {/* Desktop Actions */}
          <div className={styles.desktopActions}>
            <button onClick={() => setIsCallbackOpen(true)} className={styles.primaryBtn}>Get a Call Back</button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.barOpen1 : ''}`}></span>
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.barOpen2 : ''}`}></span>
          </button>

        </div>

        {/* Mobile Menu Slide Out */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.mobileLinks}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/developers">Developers</Link>
            <Link href="/insights">Media</Link>
            <Link href="/contact">Contact Us</Link>
            <button onClick={() => { setIsMobileMenuOpen(false); setIsCallbackOpen(true); }} className={styles.mobilePrimaryBtn}>Get a Call Back</button>
          </div>
        </div>
      </nav>

      {/* Callback Modal (Simple implementation for now, ideally moved to its own component) */}
      {isCallbackOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeBtn} onClick={() => setIsCallbackOpen(false)}>×</button>
            <h3 className="secondary-font">Request a Call Back</h3>
            <p>Our advisory team will contact you shortly.</p>
            <form className={styles.callbackForm} onSubmit={(e) => { e.preventDefault(); setIsCallbackOpen(false); }}>
              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="email" placeholder="Email Address" required />
              <select required>
                <option value="">Select Requirement</option>
                <option value="buy">Buying Property</option>
                <option value="sell">Selling Property</option>
                <option value="invest">Investment Advisory</option>
                <option value="other">Other Enquiry</option>
              </select>
              <button type="submit" className={styles.submitBtn}>Submit Request</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
