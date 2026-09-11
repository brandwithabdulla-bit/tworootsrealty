import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { areas } from '@/data/areas';
import { projects } from '@/data/projects';
import { developers } from '@/data/developers';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import DeveloperCard from '@/components/DeveloperCard';
import LocationCard from '@/components/LocationCard';
import styles from './page.module.css';

export function generateStaticParams() {
  return areas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const area = areas.find((a) => a.slug === resolvedParams.slug);
  if (!area) return { title: 'Area Not Found' };
  return {
    title: `${area.name} Dubai Properties & Projects | Two Roots Realty`,
    description: area.introduction,
  };
}

export default async function AreaDetailPage({ params }) {
  const resolvedParams = await params;
  const area = areas.find((a) => a.slug === resolvedParams.slug);

  if (!area) {
    notFound();
  }

  // 05 - Cross-linking: Find Projects in this area
  const areaProjects = projects.filter(p => p.areaSlug === area.slug);
  
  // 06 - Cross-linking: Find Developers with projects in this area
  const areaDeveloperSlugs = [...new Set(areaProjects.map(p => p.developerSlug))];
  const areaDevelopers = developers.filter(d => areaDeveloperSlugs.includes(d.slug));

  // 11 - Related Areas
  const relatedAreas = areas.filter(a => a.slug !== area.slug).slice(0, 3);

  return (
    <main className={styles.main}>
      {/* 01 - Area Hero */}
      <section className={styles.heroSection}>
        <Image 
          src={area.heroImage} 
          alt={area.name} 
          fill 
          priority 
          className={styles.heroImage} 
          unoptimized
        />
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.eyebrowWhite}>EXPLORE</span>
          <h1 className={`secondary-font ${styles.title}`}>{area.name}</h1>
          <p className={styles.subtitle}>{area.emirate}, UAE</p>
          
          <div className={styles.heroActions}>
            <Button href="#projects" variant="primary">Explore Projects</Button>
            <Button href="/contact" variant="secondary" style={{backgroundColor: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.3)'}}>Speak to an Advisor</Button>
          </div>
        </div>
      </section>

      <div className="container">
        {/* 02 - Area Overview */}
        <section className={styles.section}>
          <div className={styles.twoColumn}>
            <div className={styles.colLeft}>
              <span className={styles.eyebrow}>ABOUT</span>
              <h2 className={`secondary-font ${styles.sectionTitle}`}>{area.name}</h2>
            </div>
            <div className={styles.colRight}>
              <p className={styles.description}>{area.overview}</p>
            </div>
          </div>
        </section>

        {/* 03 & 04 - Why Live Here & Property Market */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.twoColumn}>
            <div>
              <h3 className={`secondary-font ${styles.subHeading}`}>Why Live & Invest Here</h3>
              <div className={styles.highlightsGrid}>
                {area.investmentHighlights?.map((hl, i) => (
                  <div key={i} className={styles.highlightCard}>
                    <div className={styles.hlNumber}>0{i + 1}</div>
                    <div className={styles.hlTitle}>{hl}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className={`secondary-font ${styles.subHeading}`}>Property Market</h3>
              <div className={styles.marketCard}>
                <div className={styles.marketRow}>
                  <span>Average Starting Price</span>
                  <strong>{area.averagePrice}</strong>
                </div>
                <div className={styles.marketRow}>
                  <span>Property Types</span>
                  <strong>{area.propertyTypes?.join(', ')}</strong>
                </div>
                <div className={styles.marketRow}>
                  <span>Lifestyle</span>
                  <strong>{area.lifestyle}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 - Featured Projects in this Area */}
        {areaProjects.length > 0 && (
          <section id="projects" className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3 className={`secondary-font ${styles.subHeading}`}>Projects in {area.name}</h3>
            </div>
            <div className={styles.projectGrid}>
              {areaProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </section>
        )}

        {/* 06 - Developers in this Area */}
        {areaDevelopers.length > 0 && (
          <section className={`${styles.section} ${styles.sectionAlt}`}>
            <h3 className={`secondary-font ${styles.subHeading}`}>Active Developers</h3>
            <div className={styles.developerGrid}>
              {areaDevelopers.map((dev) => (
                <DeveloperCard key={dev.id} developer={dev} />
              ))}
            </div>
          </section>
        )}

        {/* 08 - Connectivity */}
        {area.connectivity && area.connectivity.length > 0 && (
          <section className={styles.section}>
            <h3 className={`secondary-font ${styles.subHeading}`}>Connectivity</h3>
            <div className={styles.connectivityGrid}>
              {area.connectivity.map((conn, i) => (
                <div key={i} className={styles.connCard}>
                  <div className={styles.connTime}>{conn.time}</div>
                  <div className={styles.connPlace}>{conn.place}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 09 - Area Gallery */}
        {area.gallery && area.gallery.length > 0 && (
          <section className={styles.section}>
            <h3 className={`secondary-font ${styles.subHeading}`}>Gallery</h3>
            <div className={styles.galleryGrid}>
              {area.gallery.slice(0, 3).map((img, i) => (
                <div key={i} className={styles.galleryImgWrapper}>
                  <Image src={img} alt={`Gallery ${i}`} fill className={styles.galleryImg} unoptimized />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 10 - FAQ */}
        {area.faqs && area.faqs.length > 0 && (
          <section className={`${styles.section} ${styles.sectionAlt}`}>
            <h3 className={`secondary-font ${styles.subHeading}`}>Frequently Asked Questions</h3>
            <div className={styles.faqList}>
              {area.faqs.map((faq, i) => (
                <div key={i} className={styles.faqItem}>
                  <h4 className={styles.faqQuestion}>{faq.question}</h4>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 11 - Explore Other Areas */}
        {relatedAreas.length > 0 && (
          <section className={styles.section}>
            <h3 className={`secondary-font ${styles.subHeading}`}>Explore Other Areas</h3>
            <div className={styles.relatedAreaGrid}>
              {relatedAreas.map(loc => (
                <LocationCard key={loc.id} location={loc} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* 12 - Area CTA */}
      <section className={styles.finalCta}>
        <div className={`container ${styles.finalCtaContent}`}>
          <h2 className={`secondary-font ${styles.finalCtaTitle}`}>Explore Property Opportunities in {area.name}</h2>
          <div className={styles.finalCtaActions}>
            <Button href="#projects" variant="primary">View Projects</Button>
            <Button href="/contact" variant="secondary" style={{backgroundColor: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.3)'}}>Talk to an Advisor</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
