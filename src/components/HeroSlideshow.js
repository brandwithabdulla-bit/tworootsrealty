'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './HeroSlideshow.module.css';

const slides = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2500&auto=format&fit=crop',
    alt: 'Dubai Skyline',
    position: 'center center',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=2500&auto=format&fit=crop',
    alt: 'Dubai Marina',
    position: 'center 40%',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1608889476561-6242cb816d1e?q=80&w=2500&auto=format&fit=crop',
    alt: 'Luxury Architecture',
    position: 'center center',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=2500&auto=format&fit=crop',
    alt: 'Modern Development',
    position: 'center 60%',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1578308552197-202bc85d166c?q=80&w=2500&auto=format&fit=crop',
    alt: 'Downtown Dubai',
    position: 'right center',
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);
  
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // 7s slide duration
    
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div 
      className={styles.slideshowContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div 
            key={slide.id} 
            className={`${styles.slide} ${isActive ? styles.active : ''}`}
          >
            <Image
              src={slide.url}
              alt={slide.alt}
              fill
              priority={index === 0}
              quality={90}
              className={`${styles.slideImage} ${isActive ? styles.animating : ''}`}
              style={{ objectPosition: slide.position }}
            />
          </div>
        );
      })}
      
      {/* Dark Overlays */}
      <div className={styles.leftGradient}></div>
      <div className={styles.bottomGradient}></div>
      <div className={styles.overallDarkness}></div>
      
      {/* Editorial Controls */}
      <div className={`container ${styles.controlsContainer}`}>
        <div className={styles.controlsWrapper}>
          <div className={styles.indicator}>
            <span className={styles.currentNum}>0{currentSlide + 1}</span>
            <span className={styles.divider}>/</span>
            <span className={styles.totalNum}>0{slides.length}</span>
          </div>
          
          <div className={styles.progressContainer}>
            <div 
              className={styles.progressBar} 
              style={{ 
                transform: `scaleX(${(currentSlide + 1) / slides.length})`,
                transition: 'transform 0.4s ease-out'
              }}
            ></div>
          </div>
          
          <div className={styles.arrows}>
            <button 
              onClick={prevSlide} 
              className={styles.arrowBtn}
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button 
              onClick={nextSlide} 
              className={styles.arrowBtn}
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
