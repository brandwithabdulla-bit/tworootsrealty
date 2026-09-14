'use client';

import { useState, useMemo, Suspense, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSearchParams } from 'next/navigation';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import ProjectSearch from '@/components/ProjectSearch';
import { projects } from '@/data/projects';
import styles from './page.module.css'; 

function ProjectsContent() {
  const searchParams = useSearchParams();
  const [isSearching, setIsSearching] = useState(false);
  const [displayProjects, setDisplayProjects] = useState([]);
  
  const initialFilters = useMemo(() => {
    const params = {};
    if (searchParams) {
      searchParams.forEach((value, key) => {
        params[key] = value;
      });
    }
    return params;
  }, [searchParams]);

  const [filters, setFilters] = useState(initialFilters);

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
        matches = matches && !!project.propertyTypes?.some(pt => pt.toLowerCase().includes(filters.type.toLowerCase()));
      }
      
      // Simple bedroom match logic
      if (filters.bedrooms) {
        const beds = filters.bedrooms.toLowerCase().replace(' beds', '').replace('studio', '0');
        const projectBeds = project.bedrooms.match(/\d+/g);
        
        if (projectBeds && projectBeds.length > 0) {
          if (beds.includes('+')) {
            const minBeds = parseInt(beds);
            matches = matches && parseInt(projectBeds[projectBeds.length - 1]) >= minBeds;
          } else {
            const targetBeds = parseInt(beds);
            const hasMatch = projectBeds.some(b => parseInt(b) === targetBeds);
            matches = matches && hasMatch;
          }
        }
      }
      if (filters.price) {
        const priceMatch = project.startingPrice.match(/[\d.]+/);
        if (priceMatch) {
          const price = parseFloat(priceMatch[0]);
          if (filters.price === 'under-1m') matches = matches && price < 1;
          else if (filters.price === '1m-3m') matches = matches && price >= 1 && price <= 3;
          else if (filters.price === '3m-5m') matches = matches && price > 3 && price <= 5;
          else if (filters.price === 'over-5m') matches = matches && price > 5;
        }
      }
      if (filters.handover) {
        matches = matches && project.handover.includes(filters.handover);
      }
      
      if (filters.status) {
        matches = matches && project.status.toLowerCase() === filters.status.toLowerCase();
      }
      
      return matches;
    });
  }, [filters]);

  useEffect(() => {
    setIsSearching(true);
    // Increased delay to give the premium full-screen loader time to display nicely
    const timer = setTimeout(() => {
      setDisplayProjects(filteredProjects);
      setIsSearching(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, [filteredProjects]);

  return (
    <main className={styles.main}>
      {isSearching && typeof document !== 'undefined' && createPortal(
        <div className={styles.fullScreenLoader}>
          <div className={styles.loaderContent}>
            <h2 className={`secondary-font ${styles.loaderText}`}>Looking for the best projects...</h2>
            <div className={styles.loaderLineContainer}>
              <div className={styles.loaderLine}></div>
            </div>
          </div>
        </div>,
        document.body
      )}
      <div className={styles.heroWrapper}>
        <div className={styles.heroBackground}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="secondary-font">Discover Exceptional Projects</h1>
          <p>Explore off-plan launches, branded residences, and luxury developments.</p>
        </div>
      </div>
      
      <div className={styles.searchSection}>
        <div className="container">
          <ProjectSearch onFilterChange={setFilters} initialFilters={initialFilters} />
        </div>
      </div>

      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '8rem' }}>
        <div className={styles.resultsHeader}>
          <h2>Showing <strong>{displayProjects.length}</strong> premium projects</h2>
          <div className={styles.sorting}>
            <select>
              <option>Sort by: Recommended</option>
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
              <option>Handover: Soonest</option>
            </select>
          </div>
        </div>

        {displayProjects.length > 0 ? (
          <div className={styles.grid}>
            {displayProjects.map(project => (
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

export default function ProjectsListing() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading projects...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
