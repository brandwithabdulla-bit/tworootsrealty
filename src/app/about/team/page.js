import Image from 'next/image';
import { team } from '@/data/team';
import styles from '@/app/editorial.module.css';

export default function Team() {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.hero}`}>
        <span className={styles.heroLabel}>Leadership</span>
        <h1 className={`secondary-font ${styles.heroTitle}`}>Meet the Team.</h1>
        <p className={styles.heroSubtitle}>
          Our founders bring decades of combined international experience, guiding our vision to provide unparalleled advisory services in Dubai.
        </p>
      </div>

      <div className={`container ${styles.content}`} style={{maxWidth: '1000px'}}>
        <div className={styles.teamGrid}>
          {team.map(member => (
            <div key={member.id} className={styles.teamMember}>
              <div className={styles.teamImage}>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  style={{objectFit: 'cover'}}
                />
              </div>
              <h3 className={`secondary-font ${styles.teamName}`}>{member.name}</h3>
              <span className={styles.teamRole}>{member.role}</span>
              <p className={styles.teamBio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
