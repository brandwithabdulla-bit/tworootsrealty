'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRouter, usePathname } from 'next/navigation';
import { projects } from '@/data/projects';
import styles from './ProjectSearch.module.css';

export default function ProjectSearch({ onFilterChange, initialFilters = {} }) {
  const router = useRouter();
  const pathname = usePathname();

  const [filters, setFilters] = useState({
    search: '',
    type: '',
    bedrooms: '',
    price: '',
    handover: '',
    developer: '',
    status: '',
    ...initialFilters
  });

  const [activeChips, setActiveChips] = useState(
    Object.entries(initialFilters).filter(([_, v]) => v).map(([k, v]) => ({ key: k, label: v }))
  );

  const handleFilterChange = (key, value, label) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    if (value) {
      // Add or update chip
      const existingChipIndex = activeChips.findIndex(c => c.key === key);
      const newChips = [...activeChips];
      if (existingChipIndex >= 0) {
        newChips[existingChipIndex] = { key, label };
      } else {
        newChips.push({ key, label });
      }
      setActiveChips(newChips);
    } else {
      // Remove chip
      setActiveChips(activeChips.filter(c => c.key !== key));
    }
    
    if (onFilterChange) onFilterChange(newFilters);
  };

  const removeChip = (key) => {
    handleFilterChange(key, '', '');
  };

  const clearAll = () => {
    const clearedFilters = {
      search: '', type: '', bedrooms: '', price: '', handover: '', developer: '', status: ''
    };
    setFilters(clearedFilters);
    setActiveChips([]);
    if (onFilterChange) onFilterChange(clearedFilters);
  };

  const [isNavigating, setIsNavigating] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleSearchClick = () => {
    setNoResults(false);
    
    // Check if the current filters yield any results
    const hasResults = projects.some(project => {
      let matches = true;
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const searchMatch = 
          project.name.toLowerCase().includes(searchLower) ||
          project.location.toLowerCase().includes(searchLower) ||
          project.developer.toLowerCase().includes(searchLower);
        matches = matches && searchMatch;
      }
      if (filters.type) {
        const typeMatch = project.propertyTypes.some(type => 
          type.toLowerCase().includes(filters.type.toLowerCase())
        );
        matches = matches && typeMatch;
      }
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

    if (!hasResults) {
      setNoResults(true);
      // Auto-hide the message after 3 seconds
      setTimeout(() => setNoResults(false), 3000);
      return; // Do not navigate
    }

    setIsNavigating(true);
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });
    
    if (pathname === '/projects') {
      router.push(`/projects?${params.toString()}`);
      if (onFilterChange) onFilterChange(filters);
      setTimeout(() => setIsNavigating(false), 300);
    } else {
      // From home page, delay navigation so the user actually sees the loading animation briefly
      setTimeout(() => {
        router.push(`/projects?${params.toString()}`);
      }, 300);
    }
  };

  // Dynamically generate dropdown options from the actual data
  const propertyTypes = Array.from(new Set(projects.flatMap(p => p.propertyTypes))).filter(Boolean).sort();
  const handovers = Array.from(new Set(projects.map(p => {
    const match = p.handover.match(/\d{4}/);
    return match ? match[0] : null;
  }))).filter(Boolean).sort();
  const statuses = Array.from(new Set(projects.map(p => p.status))).filter(Boolean).sort();
  
  const bedrooms = ['Studio', '1', '2', '3', '4', '5+'];

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <div className={styles.searchInputWrapper}>
          <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Search location, community or project" 
            className={styles.searchInput}
            value={filters.search}
            onChange={(e) => setFilters({...filters, search: e.target.value})}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearchClick();
            }}
          />
        </div>
      </div>

      <div className={styles.filterRow}>
        <select 
          className={styles.filterSelect} 
          value={filters.type}
          onChange={(e) => handleFilterChange('type', e.target.value, e.target.options[e.target.selectedIndex].text)}
        >
          <option value="">Property Type</option>
          {propertyTypes.map(t => <option key={t} value={t.toLowerCase()}>{t}</option>)}
        </select>

        <select 
          className={styles.filterSelect}
          value={filters.bedrooms}
          onChange={(e) => handleFilterChange('bedrooms', e.target.value, e.target.options[e.target.selectedIndex].text !== 'Bedrooms' ? e.target.options[e.target.selectedIndex].text + ' Beds' : '')}
        >
          <option value="">Bedrooms</option>
          {bedrooms.map(b => <option key={b} value={b}>{b}</option>)}
        </select>

        <select 
          className={styles.filterSelect}
          value={filters.price}
          onChange={(e) => handleFilterChange('price', e.target.value, e.target.options[e.target.selectedIndex].text)}
        >
          <option value="">Price Range</option>
          <option value="under-1m">Under AED 1M</option>
          <option value="1m-3m">AED 1M - 3M</option>
          <option value="3m-5m">AED 3M - 5M</option>
          <option value="over-5m">Over AED 5M</option>
        </select>

        <select 
          className={styles.filterSelect}
          value={filters.handover}
          onChange={(e) => handleFilterChange('handover', e.target.value, e.target.options[e.target.selectedIndex].text)}
        >
          <option value="">Handover</option>
          {handovers.map(h => <option key={h} value={h}>{h}</option>)}
        </select>

        <select 
          className={styles.filterSelect}
          value={filters.status}
          onChange={(e) => handleFilterChange('status', e.target.value, e.target.options[e.target.selectedIndex].text)}
        >
          <option value="">Status</option>
          {statuses.map(s => <option key={s} value={s.toLowerCase()}>{s}</option>)}
        </select>
        
        <button onClick={handleSearchClick} className={styles.searchBtn} disabled={isNavigating}>
          {isNavigating ? 'SEARCHING...' : 'SEARCH'}
        </button>
      </div>

      {noResults && (
        <div className={styles.noResultsMessage}>
          No projects available matching your criteria. Try adjusting your search.
        </div>
      )}

      {activeChips.length > 0 && (
        <div className={styles.activeFilters}>
          {activeChips.map(chip => chip.key !== 'search' && (
            <span key={chip.key} className={styles.chip}>
              {chip.label}
              <button onClick={() => removeChip(chip.key)} className={styles.removeChip}>×</button>
            </span>
          ))}
          <button onClick={clearAll} className={styles.clearBtn}>Clear All</button>
        </div>
      )}

      {isNavigating && typeof document !== 'undefined' && createPortal(
        <div className={styles.fullScreenLoader}>
          <div className={styles.loaderContent}>
            <h2 className={styles.loaderText}>Looking for the best projects...</h2>
            <div className={styles.loaderLineContainer}>
              <div className={styles.loaderLine}></div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
