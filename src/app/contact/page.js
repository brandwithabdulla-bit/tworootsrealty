import Image from 'next/image';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2500&auto=format&fit=crop" 
            alt="Dubai Skyline" 
            fill 
            style={{objectFit: 'cover'}}
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroLabel}>Private Advisory</span>
          <h1 className={`secondary-font ${styles.heroTitle}`}>Connect With Us.</h1>
          <p className={styles.heroSubtitle}>
            Whether you are looking to acquire a new home or seeking strategic investment advice, our specialized team is ready to assist you.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '6rem 0' }}>
        <div className={styles.layout}>
          
          <div className={styles.contactInfo}>
            <h2 className={`secondary-font ${styles.sectionTitle}`}>Global Reach.<br/>Local Expertise.</h2>
            <p className={styles.description}>
              We operate discreetly and professionally to serve high-net-worth individuals, family offices, and institutional investors worldwide.
            </p>
            
            <div className={styles.infoGrid}>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Headquarters</span>
                <p className={styles.infoValue}>Opus Tower, Business Bay<br/>Dubai, United Arab Emirates</p>
              </div>
              
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Direct Enquiries</span>
                <p className={styles.infoValue}>
                  <a href="tel:+971500000000">+971 50 000 0000</a><br/>
                  <a href="mailto:advisory@tworootsrealty.com">advisory@tworoots.ae</a>
                </p>
              </div>
              
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Hours of Operation</span>
                <p className={styles.infoValue}>Monday — Friday<br/>9:00 AM — 6:00 PM (GST)</p>
              </div>
            </div>
            
            <div className={styles.whatsappAction}>
              <p>For immediate assistance outside of operating hours:</p>
              <a href="https://wa.me/971500000000" target="_blank" rel="noreferrer" className={styles.whatsappBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Connect on WhatsApp
              </a>
            </div>
          </div>

          <div className={styles.formContainer}>
            <div className={styles.formBox}>
              <h3 className="secondary-font">Register Your Interest</h3>
              <p>Complete the form below and an advisor will contact you shortly.</p>
              
              <form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>First Name*</label>
                    <input type="text" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Last Name*</label>
                    <input type="text" required />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Email Address*</label>
                    <input type="email" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Phone Number*</label>
                    <input type="tel" required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Area of Interest</label>
                  <select defaultValue="">
                    <option value="" disabled>Select an option</option>
                    <option value="buy">Buying a Property</option>
                    <option value="sell">Selling a Property</option>
                    <option value="invest">Investment Advisory</option>
                    <option value="other">General Enquiry</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label>Message</label>
                  <textarea rows="4" placeholder="How can we assist you?"></textarea>
                </div>
                
                <Button variant="primary" style={{width: '100%', marginTop: '1rem'}}>Submit Enquiry</Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
