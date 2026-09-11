import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { developers } from '@/data/developers';
import { projects } from '@/data/projects';
import { areas } from '@/data/areas';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import LocationCard from '@/components/LocationCard';
import styles from './page.module.css';

export function generateStaticParams() {
  return developers.map((dev) => ({
    slug: dev.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const developer = developers.find((d) => d.slug === resolvedParams.slug);
  if (!developer) return { title: 'Developer Not Found' };
  return {
    title: `${developer.name} | Top Dubai Developers | Two Roots Realty`,
    description: developer.shortDescription,
  };
}

export default async function DeveloperDetailPage({ params }) {
  const resolvedParams = await params;
  const developer = developers.find((d) => d.slug === resolvedParams.slug);

  if (!developer) {
    notFound();
  }

  // 04 - Cross-linking: Find Projects by this developer
  const developerProjects = projects.filter(p => p.developerSlug === developer.slug);
  
  // 05 - Cross-linking: Find Communities (Areas) where this developer has projects
  const communitySlugs = [...new Set(developerProjects.map(p => p.areaSlug))];
  const developerCommunities = areas.filter(a => communitySlugs.includes(a.slug));

  return (
    <main className={styles.main}>
      {/* 01 - Developer Hero */}
      <section className={styles.heroSection}>
        <Image 
          src={developer.heroImage} 
          alt={developer.name} 
          fill 
          priority 
          className={styles.heroImage} 
          unoptimized
        />
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.logoWrapper}>
            <Image src={developer.logo} alt={developer.name} fill className={styles.devLogo} unoptimized />
          </div>
          <h1 className={`secondary-font ${styles.title}`}>{developer.name}</h1>
          <p className={styles.subtitle}>Transforming the Dubai Skyline</p>
          
          <div className={styles.heroActions}>
            <Button href="#portfolio" variant="primary">View Projects</Button>
            <Button href="/contact" variant="secondary" style={{backgroundColor: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.3)'}}>Contact Advisor</Button>
          </div>
        </div>
      </section>

      <div className="container">
        {/* 03 - Snapshot Grid */}
        <section className={styles.snapshotGrid}>
          <div className={styles.snapshotItem}>
            <div className={styles.snapLabel}>Established</div>
            <div className={styles.snapValue}>{developer.established}</div>
          </div>
          <div className={styles.snapshotItem}>
            <div className={styles.snapLabel}>Headquarters</div>
            <div className={styles.snapValue}>{developer.headquarters}</div>
          </div>
          <div className={styles.snapshotItem}>
            <div className={styles.snapLabel}>Total Projects</div>
            <div className={styles.snapValue}>{developerProjects.length}+</div>
          </div>
        </section>

        {/* 02 - About */}
        <section className={styles.section}>
          <div className={styles.twoColumn}>
            <div className={styles.colLeft}>
              <span className={styles.eyebrow}>THE DEVELOPER</span>
              <h2 className={`secondary-font ${styles.sectionTitle}`}>About<br/>{developer.name}</h2>
            </div>
            <div className={styles.colRight}>
              <p className={styles.description}>{developer.description}</p>
            </div>
          </div>
        </section>

        {/* 07 & 08 - Strengths & Investment Perspective */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.twoColumn}>
            <div>
              <h3 className={`secondary-font ${styles.subHeading}`}>Why Consider {developer.name}?</h3>
              <ul className={styles.list}>
                {developer.strengths?.map((strength, i) => (
                  <li key={i}>{strength}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={`secondary-font ${styles.subHeading}`}>Investment Perspective</h3>
              <ul className={styles.list}>
                {developer.investmentHighlights?.map((hl, i) => (
                  <li key={i}>{hl}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 04 - Project Portfolio */}
        {developerProjects.length > 0 && (
          <section id="portfolio" className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3 className={`secondary-font ${styles.subHeading}`}>Project Portfolio</h3>
            </div>
            <div className={styles.projectGrid}>
              {developerProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </section>
        )}

        {/* 05 - Communities */}
        {developerCommunities.length > 0 && (
          <section className={`${styles.section} ${styles.sectionAlt}`}>
            <h3 className={`secondary-font ${styles.subHeading}`}>Key Communities</h3>
            <div className={styles.relatedAreaGrid}>
              {developerCommunities.map(loc => (
                <LocationCard key={loc.id} location={loc} />
              ))}
            </div>
          </section>
        )}

        {/* 06 - Property Types */}
        {developer.propertyTypes && developer.propertyTypes.length > 0 && (
          <section className={styles.section}>
            <h3 className={`secondary-font ${styles.subHeading}`}>Property Types Offered</h3>
            <div className={styles.propertyTypesGrid}>
              {developer.propertyTypes.map((type, i) => (
                <div key={i} className={styles.propTypeCard}>
                  {type}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 10 - FAQ */}
        {developer.faqs && developer.faqs.length > 0 && (
          <section className={`${styles.section} ${styles.sectionAlt}`}>
            <h3 className={`secondary-font ${styles.subHeading}`}>Frequently Asked Questions</h3>
            <div className={styles.faqList}>
              {developer.faqs.map((faq, i) => (
                <div key={i} className={styles.faqItem}>
                  <h4 className={styles.faqQuestion}>{faq.question}</h4>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* 11 - Final CTA */}
      <section className={styles.finalCta}>
        <div className={`container ${styles.finalCtaContent}`}>
          <h2 className={`secondary-font ${styles.finalCtaTitle}`}>Explore {developer.name} Projects</h2>
          <p className={styles.finalCtaDesc}>Compare available projects, locations and payment plans with a Two Roots advisor.</p>
          <div className={styles.finalCtaActions}>
            <Button href="#portfolio" variant="primary">View Projects</Button>
            <Button href="https://wa.me/971500000000" variant="secondary" style={{backgroundColor: '#25D366', color: 'white', borderColor: '#25D366'}}>WhatsApp</Button>
            <Button href="/contact" variant="secondary" style={{backgroundColor: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.3)'}}>Get a Call Back</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
