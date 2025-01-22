import { useState, useEffect, useCallback } from "react";
import { scroller } from "react-scroll";

const useScrollNavigation = (sections) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = useCallback(
    (index) => {
      setIsScrolling(true);
      scroller.scrollTo(sections[index], {
        duration: 500,
        smooth: "easeInOutQuad",
      });
      setCurrentSectionIndex(index);
      setTimeout(() => setIsScrolling(false), 500); // Prevent overlapping scrolls
    },
    [sections]
  );

  useEffect(() => {
    let lastScrollTime = 0; // Track the last scroll event timestamp

    const handleWheel = (e) => {
      const now = Date.now();

      if (isScrolling || now - lastScrollTime < 500) return;
      lastScrollTime = now;

      if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        setCurrentSectionIndex((prevIndex) => prevIndex + 1);
      } else if (e.deltaY < 0 && currentSectionIndex > 0) {
        setCurrentSectionIndex((prevIndex) => prevIndex - 1);
      }
    };

    let startTouchY = null;

    const handleTouchStart = (e) => {
      startTouchY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const now = Date.now();

      if (isScrolling || now - lastScrollTime < 500 || startTouchY === null)
        return;
      lastScrollTime = now;

      const endTouchY = e.changedTouches[0].clientY;
      const deltaY = startTouchY - endTouchY;

      if (deltaY > 50 && currentSectionIndex < sections.length - 1) {
        // Swipe up
        setCurrentSectionIndex((prevIndex) => prevIndex + 1);
      } else if (deltaY < -50 && currentSectionIndex > 0) {
        // Swipe down
        setCurrentSectionIndex((prevIndex) => prevIndex - 1);
      }

      startTouchY = null; // Reset touch start position
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSectionIndex, isScrolling, sections.length]);

  useEffect(() => {
    scrollToSection(currentSectionIndex);
  }, [currentSectionIndex, scrollToSection]);

  return {
    currentSectionIndex,
    scrollToSection,
  };
};

export default useScrollNavigation;
