import Link from 'next/link';
import Image from 'next/image';
import { blog } from '@/data/blog';
import styles from './page.module.css';

export default async function MediaHub({ searchParams }) {
  const resolvedParams = await searchParams;
  const categoryFilter = resolvedParams?.category?.toLowerCase();
  
  // Filter blog posts based on category
  let displayedPosts = blog;
  if (categoryFilter && categoryFilter !== 'all media') {
    displayedPosts = blog.filter(p => p.category.toLowerCase().replace(' ', '-') === categoryFilter || p.category.toLowerCase() === categoryFilter);
  }

  const featuredPost = displayedPosts[0];
  const secondaryPosts = displayedPosts.slice(1, 4);
  const remainingPosts = displayedPosts.slice(4);

  const categories = ['All Media', 'Blogs', 'Investment Insights'];

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>Media & Insights</span>
          <h1 className={`secondary-font ${styles.heroTitle}`}>Market Intelligence.</h1>
          <p className={styles.heroSubtitle}>
            Expert analysis, market trends, and investment guides from our advisory team.
          </p>
        </div>
      </div>

      <div className={styles.filterBar}>
        <div className={`container ${styles.filterContainer}`}>
          {categories.map((cat, idx) => {
            const isActive = categoryFilter ? (cat.toLowerCase().replace(' ', '-') === categoryFilter || cat.toLowerCase() === categoryFilter) : cat === 'All Media';
            const href = cat === 'All Media' ? '/insights' : `/insights?category=${cat.toLowerCase().replace(' ', '-')}`;
            return (
              <Link href={href} key={idx} className={`${styles.filterBtn} ${isActive ? styles.activeFilter : ''}`}>
                {cat}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '6rem' }}>
        {/* Featured Article */}
        {featuredPost && (
          <Link href={`/insights/${featuredPost.slug}`} className={styles.featuredArticle}>
            <div className={styles.featuredImageWrapper}>
              <Image src={featuredPost.image} alt={featuredPost.title} fill className={styles.imageScale} />
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.categoryLabel}>{featuredPost.category}</span>
              <h2 className={`secondary-font ${styles.featuredTitle}`}>{featuredPost.title}</h2>
              <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
              <div className={styles.meta}>
                <span>{featuredPost.author}</span>
                <span className={styles.metaDivider}>•</span>
                <span>{featuredPost.date}</span>
              </div>
            </div>
          </Link>
        )}

        {/* Secondary Editorial Grid */}
        <div className={styles.secondaryGrid}>
          {secondaryPosts.map(post => (
            <Link href={`/insights/${post.slug}`} key={post.id} className={styles.postCard}>
              <div className={styles.postImageWrapper}>
                <Image src={post.image} alt={post.title} fill className={styles.imageScale} />
              </div>
              <span className={styles.categoryLabel}>{post.category}</span>
              <h3 className={`secondary-font ${styles.postTitle}`}>{post.title}</h3>
            </Link>
          ))}
        </div>
        
        {/* Divider */}
        <div className={styles.sectionDivider}>
          <h3 className="secondary-font">More Stories</h3>
        </div>

        {/* Remaining Stories Grid */}
        <div className={styles.remainingGrid}>
          {remainingPosts.map(post => (
            <Link href={`/insights/${post.slug}`} key={post.id} className={styles.listCard}>
              <div className={styles.listImageWrapper}>
                <Image src={post.image} alt={post.title} fill className={styles.imageScale} />
              </div>
              <div className={styles.listContent}>
                <span className={styles.categoryLabel}>{post.category}</span>
                <h4 className={`secondary-font ${styles.listTitle}`}>{post.title}</h4>
                <div className={styles.meta}>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
