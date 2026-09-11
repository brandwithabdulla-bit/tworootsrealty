'use client';

import { useState, useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectCarousel.module.css';

export default function ProjectCarousel({ projects }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = projects.length;

  const handleScroll = () => {
    if (!trackRef.current) return;
    const scrollLeft = trackRef.current.scrollLeft;
    // Estimate item width based on the first child
    const itemWidth = trackRef.current.children[0]?.offsetWidth || 0;
    
    if (itemWidth > 0) {
      // Add a slight offset to the scroll calculation so it snaps earlier
      const newIndex = Math.round(scrollLeft / itemWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(Math.min(Math.max(newIndex, 0), totalItems - 1));
      }
    }
  };

  const scrollToIndex = (index) => {
    if (!trackRef.current) return;
    const itemWidth = trackRef.current.children[0]?.offsetWidth || 0;
    
    trackRef.current.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
  };

  const nextSlide = () => {
    if (activeIndex < totalItems - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  // Ensure scroll listener is active
  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.addEventListener('scroll', handleScroll, { passive: true });
      return () => track.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex]);

  const progressPercentage = ((activeIndex + 1) / totalItems) * 100;
  
  // Format numbers to always be 2 digits
  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <div className={styles.carouselWrapper}>
      
      {/* Horizontal Track */}
      <div 
        className={styles.carouselTrack} 
        ref={trackRef}
      >
        {projects.map((project, i) => (
          <div key={project.id} className={`${styles.carouselItem} ${i === activeIndex ? styles.activeItem : ''}`}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Navigation & Progress Area */}
      <div className={`container ${styles.navigationArea}`}>
        
        {/* Progress Indicator */}
        <div className={styles.progressContainer}>
          <div className={styles.progressNumbers}>
            <span className={styles.currentNumber}>{formatNumber(activeIndex + 1)}</span>
            <span className={styles.totalNumber}>/ {formatNumber(totalItems)}</span>
          </div>
          <div className={styles.progressBarBg}>
            <div 
              className={styles.progressBarFill} 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Next/Prev Controls */}
        <div className={styles.controls}>
          <button 
            className={styles.controlBtn} 
            onClick={prevSlide} 
            disabled={activeIndex === 0}
            aria-label="Previous Project"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <button 
            className={styles.controlBtn} 
            onClick={nextSlide} 
            disabled={activeIndex === totalItems - 1}
            aria-label="Next Project"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
