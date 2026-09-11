import Link from 'next/link';
import Image from 'next/image';
import { areas } from '@/data/areas';
import styles from '@/app/properties/page.module.css';
import LocationCard from '@/components/LocationCard';

export default function AreasPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className="container">
          <SectionHeader 
            title="Discover Dubai" 
            subtitle="Popular Areas & Communities"
          />
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          {locations.map(loc => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      </div>
    </main>
  );
}
