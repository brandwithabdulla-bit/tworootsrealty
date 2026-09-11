import Image from 'next/image';
import Link from 'next/link';
import { blog } from '@/data/blog';
import styles from '@/app/editorial.module.css';

export default function InsightDetail({ params }) {
  const post = blog.find(p => p.slug === params.slug);

  if (!post) {
    return <div className="container" style={{paddingTop: '150px'}}>Article not found</div>;
  }

  return (
    <main className={styles.main}>
      <div className={`container ${styles.hero}`} style={{paddingBottom: '2rem'}}>
        <div style={{marginBottom: '2rem'}}>
          <Link href="/insights" style={{fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--warm-sand)', fontWeight: '600'}}>
            &larr; Back to Insights
          </Link>
        </div>
        <span className={styles.heroLabel}>{post.category}</span>
        <h1 className={`secondary-font ${styles.heroTitle}`} style={{fontSize: '3rem', maxWidth: '800px', margin: '0 auto 2rem'}}>{post.title}</h1>
        <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.9rem', color: 'rgba(15, 38, 69, 0.6)'}}>
          <span>By {post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>

      <div className={styles.imageBanner} style={{marginBottom: '4rem'}}>
        <Image 
          src={post.image || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500&auto=format&fit=crop'} 
          alt={post.title} 
          fill 
          style={{objectFit: 'cover'}} 
        />
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.section}>
          <p className={styles.text} style={{fontSize: '1.25rem', fontWeight: '500', color: 'var(--deep-navy)'}}>
            {post.excerpt}
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className={styles.textHighlight}>
            "The Dubai real estate market continues to mature, offering sophisticated investors unparalleled opportunities for wealth preservation."
          </div>
          <p className={styles.text}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </main>
  );
}
