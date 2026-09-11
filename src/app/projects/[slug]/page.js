import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { developers } from '@/data/developers';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.name} | Dubai Property | Two Roots Realty`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const developer = developers.find((d) => d.slug === project.developerSlug);
  const similarProjects = projects.filter((p) => p.areaSlug === project.areaSlug && p.slug !== project.slug).slice(0, 3);

  return (
    <main className={styles.main}>
      {/* 01 - Cinematic Hero */}
      <section className={styles.heroSection}>
        <Image 
          src={project.heroImage} 
          alt={project.name} 
          fill 
          priority 
          className={styles.heroImage} 
          unoptimized
        />
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.statusBadge}>{project.status}</div>
          <h1 className={`secondary-font ${styles.projectTitle}`}>{project.name}</h1>
          <p className={styles.projectLocation}>{project.location}</p>
          
          <div className={styles.heroActions}>
            <Button href="/contact" variant="primary">Enquire Now</Button>
            <Link href="https://wa.me/971500000000" target="_blank" className={styles.whatsappLink}>WhatsApp</Link>
          </div>

          <div className={styles.infoStrip}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{project.priceLabel}</span>
              <span className={styles.infoValue}>{project.startingPrice}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Handover</span>
              <span className={styles.infoValue}>{project.handover}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Bedrooms</span>
              <span className={styles.infoValue}>{project.bedrooms}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Payment Plan</span>
              <span className={styles.infoValue}>{project.paymentPlan}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA (Mobile Bottom / Desktop Side) */}
      <div className={styles.stickyCTA}>
        <div className={styles.stickyContent}>
          <div>
            <div className={styles.stickyTitle}>{project.name}</div>
            <div className={styles.stickyPrice}>{project.startingPrice}</div>
          </div>
          <div className={styles.stickyActions}>
            <Button href="/contact" variant="primary" className={styles.stickyBtn}>Enquire</Button>
            <Link href="https://wa.me/971500000000" target="_blank" className={styles.stickyBtnWa}>WhatsApp</Link>
          </div>
        </div>
      </div>

      <div className="container">
        {/* 02 - Project Snapshot */}
        <section className={styles.snapshotGrid}>
          <div className={styles.snapshotItem}>
            <div className={styles.snapLabel}>Developer</div>
            <div className={styles.snapValue}>{project.developer}</div>
          </div>
          <div className={styles.snapshotItem}>
            <div className={styles.snapLabel}>Location</div>
            <div className={styles.snapValue}>{project.location}</div>
          </div>
          <div className={styles.snapshotItem}>
            <div className={styles.snapLabel}>Type</div>
            <div className={styles.snapValue}>{project.propertyTypes?.join(', ')}</div>
          </div>
          <div className={styles.snapshotItem}>
            <div className={styles.snapLabel}>Area From</div>
            <div className={styles.snapValue}>{project.areaFrom}</div>
          </div>
        </section>

        {/* 03 - Introduction */}
        <section className={styles.section}>
          <div className={styles.twoColumn}>
            <div className={styles.colLeft}>
              <span className={styles.eyebrow}>THE PROJECT</span>
              <h2 className={`secondary-font ${styles.sectionTitle}`}>About<br/>{project.name}</h2>
            </div>
            <div className={styles.colRight}>
              <p className={styles.description}>{project.description}</p>
            </div>
          </div>
        </section>

        {/* 04 & 07 - Highlights & Amenities */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <h3 className={`secondary-font ${styles.subHeading}`}>Project Highlights & Amenities</h3>
          <div className={styles.highlightsGrid}>
            {project.highlights?.map((hl, i) => (
              <div key={i} className={styles.highlightCard}>
                <div className={styles.hlNumber}>0{i + 1}</div>
                <div className={styles.hlTitle}>{hl}</div>
              </div>
            ))}
          </div>
          <div className={styles.amenitiesList}>
            {project.amenities?.map((am, i) => (
              <div key={i} className={styles.amenityItem}>✓ {am}</div>
            ))}
          </div>
        </section>

        {/* 05 - Gallery (Simplified for now) */}
        {project.gallery && project.gallery.length > 0 && (
          <section className={styles.section}>
            <h3 className={`secondary-font ${styles.subHeading}`}>Gallery</h3>
            <div className={styles.galleryGrid}>
              {project.gallery.slice(0, 3).map((img, i) => (
                <div key={i} className={styles.galleryImgWrapper}>
                  <Image src={img} alt={`Gallery ${i}`} fill className={styles.galleryImg} unoptimized />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 06 - Floor Plans */}
        {project.floorPlans && project.floorPlans.length > 0 && (
          <section className={styles.section}>
            <h3 className={`secondary-font ${styles.subHeading}`}>Property Types</h3>
            <div className={styles.floorPlanGrid}>
              {project.floorPlans.map((fp, i) => (
                <div key={i} className={styles.floorPlanCard}>
                  <div className={styles.fpInfo}>
                    <h4>{fp.type}</h4>
                    <p>Area: {fp.area}</p>
                    <p>Price: {fp.price}</p>
                  </div>
                  <div className={styles.fpImage}>
                    <Image src={fp.image} alt={fp.type} fill className={styles.imgCover} unoptimized />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 08 - Payment Plan */}
        {project.paymentPlanDetails && (
          <section className={`${styles.section} ${styles.sectionAlt}`}>
            <h3 className={`secondary-font ${styles.subHeading}`}>Payment Plan</h3>
            <div className={styles.paymentTimeline}>
              {project.paymentPlanDetails.map((pp, i) => (
                <div key={i} className={styles.paymentNode}>
                  <div className={`secondary-font ${styles.paymentPercent}`}>{pp.percentage}</div>
                  <div className={styles.paymentMilestone}>{pp.milestone}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 09 & 10 - Location & Investment */}
        <section className={styles.section}>
          <div className={styles.twoColumn}>
            <div className={styles.colLeft}>
              <h3 className={`secondary-font ${styles.subHeading}`}>Location Advantages</h3>
              <ul className={styles.list}>
                {project.locationAdvantages?.map((adv, i) => <li key={i}>{adv}</li>)}
              </ul>
              <h3 className={`secondary-font ${styles.subHeading}`} style={{marginTop: '2rem'}}>Nearby Places</h3>
              <ul className={styles.list}>
                {project.nearbyPlaces?.map((place, i) => <li key={i}><strong>{place.place}</strong> — {place.time}</li>)}
              </ul>
            </div>
            <div className={styles.colRight}>
              <h3 className={`secondary-font ${styles.subHeading}`}>Investment Perspective</h3>
              <ul className={styles.list}>
                {project.investmentPoints?.map((ip, i) => <li key={i}>{ip}</li>)}
              </ul>
              <div style={{marginTop: '2rem'}}>
                <Button href="/contact" variant="secondary">Speak to an Investment Advisor</Button>
              </div>
            </div>
          </div>
        </section>

        {/* 11 - Developer Profile */}
        {developer && (
          <section className={styles.developerSection}>
            <div className={styles.devCard}>
              <div className={styles.devContent}>
                <span className={styles.eyebrow}>THE DEVELOPER</span>
                <h3 className={`secondary-font ${styles.devTitle}`}>{developer.name}</h3>
                <p className={styles.devDesc}>{developer.shortDescription}</p>
                <Link href={`/developers/${developer.slug}`} className={styles.devLink}>View Developer Profile →</Link>
              </div>
              <div className={styles.devLogo}>
                <Image src={developer.logo} alt={developer.name} fill className={styles.imgCover} />
              </div>
            </div>
          </section>
        )}

        {/* 12 - FAQ */}
        {project.faqs && project.faqs.length > 0 && (
          <section className={styles.section}>
            <h3 className={`secondary-font ${styles.subHeading}`}>Frequently Asked Questions</h3>
            <div className={styles.faqList}>
              {project.faqs.map((faq, i) => (
                <div key={i} className={styles.faqItem}>
                  <h4 className={styles.faqQuestion}>{faq.question}</h4>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 14 - Similar Projects */}
        {similarProjects.length > 0 && (
          <section className={styles.section}>
            <h3 className={`secondary-font ${styles.subHeading}`}>You May Also Consider</h3>
            <div className={styles.similarGrid}>
              {similarProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* 15 - Final Enquiry */}
      <section className={styles.finalCta}>
        <div className={`container ${styles.finalCtaContent}`}>
          <h2 className={`secondary-font ${styles.finalCtaTitle}`}>Interested in {project.name}?</h2>
          <p className={styles.finalCtaDesc}>Speak with a Two Roots property advisor for availability, payment plans and personalised guidance.</p>
          <div className={styles.finalCtaActions}>
            <Button href="/contact" variant="primary">Enquire Now</Button>
            <Button href="https://wa.me/971500000000" variant="secondary" style={{backgroundColor: '#25D366', color: 'white', borderColor: '#25D366'}}>WhatsApp</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
