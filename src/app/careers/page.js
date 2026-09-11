import Button from '@/components/Button';
import styles from '@/app/properties/page.module.css';

export default function Careers() {
  return (
    <main className={styles.main}>
      <div className="container" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center', paddingTop: '4rem', marginBottom: '5rem'}}>
        <h1 className="secondary-font" style={{fontSize: '3.5rem', color: 'var(--deep-navy)', marginBottom: '1.5rem'}}>Careers at Two Roots Realty</h1>
        <p style={{fontSize: '1.2rem', color: 'rgba(15, 38, 69, 0.8)', lineHeight: 1.8}}>
          Join a growing, internationally connected real estate advisory firm in Dubai.
        </p>
      </div>

      <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
        <h2 className="secondary-font" style={{fontSize: '2rem', color: 'var(--deep-navy)', marginBottom: '2rem'}}>Open Positions</h2>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <div style={{padding: '2rem', backgroundColor: 'var(--white)', border: '1px solid rgba(15,38,69,0.1)', borderRadius: 'var(--radius-md)'}}>
            <h3 style={{fontSize: '1.25rem', color: 'var(--deep-navy)', marginBottom: '0.5rem'}}>Senior Real Estate Advisor</h3>
            <p style={{color: 'rgba(15,38,69,0.6)', fontSize: '0.9rem', marginBottom: '1rem'}}>Dubai, UAE • Full Time</p>
            <p style={{color: 'rgba(15,38,69,0.8)', marginBottom: '1.5rem'}}>Looking for experienced professionals with a strong track record in Dubai luxury real estate sales and investment advisory.</p>
            <Button variant="secondary">Apply Now</Button>
          </div>
          
          <div style={{padding: '2rem', backgroundColor: 'var(--white)', border: '1px solid rgba(15,38,69,0.1)', borderRadius: 'var(--radius-md)'}}>
            <h3 style={{fontSize: '1.25rem', color: 'var(--deep-navy)', marginBottom: '0.5rem'}}>Property Consultant (Off-Plan)</h3>
            <p style={{color: 'rgba(15,38,69,0.6)', fontSize: '0.9rem', marginBottom: '1rem'}}>Dubai, UAE • Full Time</p>
            <p style={{color: 'rgba(15,38,69,0.8)', marginBottom: '1.5rem'}}>Seeking driven individuals with excellent networking skills to join our primary market team.</p>
            <Button variant="secondary">Apply Now</Button>
          </div>
        </div>
        
        <div style={{marginTop: '4rem', padding: '3rem', backgroundColor: 'var(--soft-ivory)', border: '1px solid rgba(15,38,69,0.1)', borderRadius: 'var(--radius-md)', textAlign: 'center'}}>
          <h2 className="secondary-font" style={{fontSize: '2rem', color: 'var(--deep-navy)', marginBottom: '1rem'}}>General Application</h2>
          <p style={{color: 'rgba(15,38,69,0.8)', marginBottom: '2rem'}}>Don't see a role that fits? We are always looking for exceptional talent to join our team.</p>
          <Button href="/contact" variant="primary">Send Your CV</Button>
        </div>
      </div>
    </main>
  );
}
