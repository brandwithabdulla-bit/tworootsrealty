import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import ProjectCarousel from '@/components/ProjectCarousel';
import DeveloperCard from '@/components/DeveloperCard';
import LocationCard from '@/components/LocationCard';
import ProjectSearch from '@/components/ProjectSearch';
import { projects } from '@/data/projects';
import { developers } from '@/data/developers';
import { areas } from '@/data/areas';
import styles from './page.module.css';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 6);
  const selectedOpportunities = projects.slice(0, 3);
  const topDevelopers = developers.slice(0, 6);
  const topLocations = areas.slice(0, 4);

  return (
    <main>
      {/* 01 & 02 - Cinematic Hero & Integrated Search */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2500&auto=format&fit=crop" 
            alt="Dubai Luxury Real Estate" 
            fill 
            priority
            quality={90}
            className={styles.heroImgScale}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={`container ${styles.heroContent}`}>
          <h1 className={`secondary-font ${styles.heroTitle}`}>
            Dubai Property. Global Perspective.
            <span>Personal Guidance.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Carefully selected properties, transparent advice and personalised guidance — from your first enquiry to final handover.
          </p>
          
          <div className={styles.integratedSearch}>
            {/* Server component wrapper for the interactive client search */}
            <ProjectSearch />
          </div>
        </div>
      </section>

      {/* 03 - Selected Opportunities */}
      <section className={styles.sectionLight}>
        <div className="container">
          <div className={styles.sectionHeaderFlex}>
            <div>
              <span className={styles.sectionLabel}>Curated Portfolio</span>
              <h2 className={`secondary-font ${styles.sectionTitle}`}>Selected Opportunities</h2>
            </div>
            <Button href="/projects" variant="text">View All</Button>
          </div>
          
          <div className={styles.selectedOpportunitiesGrid}>
            {selectedOpportunities.map((project, i) => (
              <div key={project.id} className={`${styles.opportunityCard} ${i === 0 ? styles.featuredOpportunity : ''}`}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 - TWO ROOTS / ONE VISION */}
      <section className={styles.storySection}>
        <div className={styles.storyImage}>
          <Image 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury Interior" 
            fill 
            className={styles.imgObjectFit}
          />
        </div>
        <div className={styles.storyContent}>
          <div className={styles.storyContentInner}>
            <span className={styles.sectionLabelDark}>Our Story</span>
            <h2 className={`secondary-font ${styles.storyTitle}`}>Two Roots.<br/>One Vision.</h2>
            <p className={styles.storyText}>
              What started as a reunion in Dubai between two friends from the same hometown became a shared vision. We built Two Roots Realty on understanding people, building trust, and creating opportunities that go beyond a single transaction.
            </p>
            <Button href="/about/our-story" variant="secondary" className={styles.storyBtn}>Read The Story</Button>
          </div>
        </div>
      </section>

      {/* 05 - WHY TWO ROOTS */}
      <section className={styles.sectionDark}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyText}>
              <span className={styles.sectionLabelDark}>Why Two Roots</span>
              <h2 className={`secondary-font ${styles.sectionTitleDark}`}>Uncompromising Quality.</h2>
              <p>We do not just list properties; we curate them. Every development we recommend is vetted for build quality, developer reputation, and long-term capital appreciation potential.</p>
            </div>
            <div className={styles.whyStats}>
              <div className={styles.whyStatBox}>
                <h3 className="secondary-font">15+</h3>
                <p>Years Collective Experience</p>
              </div>
              <div className={styles.whyStatBox}>
                <h3 className="secondary-font">AED 2B+</h3>
                <p>Real Estate Transacted</p>
              </div>
              <div className={styles.whyStatBox}>
                <h3 className="secondary-font">100%</h3>
                <p>Independent Advisory</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 - FEATURED PROJECTS */}
      <section className={styles.carouselSection}>
        <div className="container">
          <div className={styles.sectionHeaderFlex}>
            <div>
              <span className={styles.sectionLabel}>New Developments</span>
              <h2 className={`secondary-font ${styles.sectionTitle}`}>Featured Projects</h2>
            </div>
            <Button href="/projects" variant="text">View All Projects</Button>
          </div>
        </div>
        
        {/* Full width carousel with internal padding for alignment */}
        <div className={styles.carouselFullBleed}>
          <ProjectCarousel projects={featuredProjects} />
        </div>
      </section>

      {/* 07 - EXPLORE DUBAI */}
      <section className={styles.sectionLight}>
        <div className="container">
          <div className={styles.sectionHeaderFlex}>
            <div>
              <span className={styles.sectionLabel}>Communities</span>
              <h2 className={`secondary-font ${styles.sectionTitle}`}>Explore Dubai</h2>
            </div>
            <Button href="/areas" variant="text">View All Areas</Button>
          </div>
          
          <div className={styles.areaGrid}>
            {topLocations.map(location => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* 08 - TRUSTED DEVELOPERS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeaderFlex}>
            <div>
              <span className={styles.sectionLabel}>Partners</span>
              <h2 className={`secondary-font ${styles.sectionTitle}`}>Trusted Developers</h2>
            </div>
            <Button href="/developers" variant="text">View All</Button>
          </div>
          
          <div className={styles.developerGrid}>
            {topDevelopers.map(dev => (
              <DeveloperCard key={dev.id} developer={dev} />
            ))}
          </div>
        </div>
      </section>

      {/* 09 - INVESTMENT PERSPECTIVE */}
      <section className={styles.investmentSection}>
        <div className={`container ${styles.investmentContent}`}>
          <span className={styles.sectionLabelDark}>Global Appeal</span>
          <h2 className={`secondary-font ${styles.investmentTitle}`}>Invest With Perspective.</h2>
          <p className={styles.investmentText}>
            Dubai continues to offer an investor-friendly environment with strong infrastructure growth, capital appreciation potential, and transparent market regulations.
          </p>
          <div className={styles.investmentStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>0%</span>
              <span className={styles.statLabel}>Property Tax</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10 yr</span>
              <span className={styles.statLabel}>Golden Visa</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>High</span>
              <span className={styles.statLabel}>Rental Yields</span>
            </div>
          </div>
          <Button href="/investment" variant="primary">Speak to an Investment Advisor</Button>
        </div>
      </section>

      {/* 13 - FINAL CTA */}
      <section className={styles.finalCtaSection}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="secondary-font" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--deep-navy)' }}>Ready to begin?</h2>
          <p style={{ maxWidth: '500px', margin: '0 auto 2rem', color: 'rgba(15, 38, 69, 0.7)' }}>Whether you are looking for a new home or an investment opportunity, our team is ready to guide you.</p>
          <Button href="/contact" variant="primary">Request a Call Back</Button>
        </div>
      </section>
    </main>
  );
}
