'use client';

import { useState, useMemo } from 'react';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import ProjectSearch from '@/components/ProjectSearch';
import { projects } from '@/data/projects';
import styles from './page.module.css'; 

export default function ProjectsListing() {
  const [filters, setFilters] = useState({});

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      let matches = true;
      
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        matches = matches && (
          project.name.toLowerCase().includes(searchLower) ||
          project.developer.toLowerCase().includes(searchLower) ||
          project.location.toLowerCase().includes(searchLower)
        );
      }
      
      if (filters.type) {
        matches = matches && project.type.toLowerCase().includes(filters.type.toLowerCase());
      }
      
      // Simple bedroom match logic
      if (filters.bedrooms) {
        if (filters.bedrooms === 'Studio') {
          matches = matches && project.specs.beds.toLowerCase().includes('studio');
        } else if (filters.bedrooms.includes('+')) {
          const num = parseInt(filters.bedrooms);
          const projectBeds = parseInt(project.specs.beds);
          matches = matches && (projectBeds >= num);
        } else {
          matches = matches && project.specs.beds.includes(filters.bedrooms[0]);
        }
      }
      
      if (filters.handover) {
        matches = matches && project.handover.includes(filters.handover.replace('+', ''));
      }
      
      if (filters.status) {
        matches = matches && project.status.toLowerCase() === filters.status.toLowerCase();
      }
      
      return matches;
    });
  }, [filters]);

  return (
    <main className={styles.main}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroBackground}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="secondary-font">Discover Exceptional Projects</h1>
          <p>Explore off-plan launches, branded residences, and luxury developments.</p>
        </div>
      </div>
      
      <div className={styles.searchSection}>
        <div className="container">
          <ProjectSearch onFilterChange={setFilters} />
        </div>
      </div>

      <div className="container" style={{ padding: '4rem 0 8rem' }}>
        <div className={styles.resultsHeader}>
          <h2>Showing <strong>{filteredProjects.length}</strong> premium projects</h2>
          <div className={styles.sorting}>
            <select>
              <option>Sort by: Recommended</option>
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
              <option>Handover: Soonest</option>
            </select>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className={styles.grid}>
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h3>No projects found</h3>
            <p>We couldn't find any projects matching your exact criteria.</p>
            <button onClick={() => setFilters({})} className={styles.clearBtn}>Clear all filters</button>
          </div>
        )}
      </div>
    </main>
  );
}
