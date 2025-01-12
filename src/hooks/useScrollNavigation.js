import { useState, useEffect, useCallback } from "react";
import { scroller } from "react-scroll";

const useScrollNavigation = (sections) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [startTouchY, setStartTouchY] = useState(null);

  const scrollToSection = useCallback(
    (index) => {
      setIsScrolling(true);
      scroller.scrollTo(sections[index], {
        duration: 500,
        smooth: "easeInOutQuad",
      });
      setTimeout(() => setIsScrolling(false), 500); // Prevent overlapping scrolls
      setCurrentSectionIndex(index); // Synchronize state immediately
    },
    [sections]
  );

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling) return;

      if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        setCurrentSectionIndex((prevIndex) => prevIndex + 1);
      } else if (e.deltaY < 0 && currentSectionIndex > 0) {
        setCurrentSectionIndex((prevIndex) => prevIndex - 1);
      }
    };

    const handleTouchStart = (e) => {
      setStartTouchY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      // Prevent default browser swipe behavior
      e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      if (isScrolling || startTouchY === null) return;

      const endTouchY = e.changedTouches[0].clientY;
      const deltaY = startTouchY - endTouchY;

      if (deltaY > 50 && currentSectionIndex < sections.length - 1) {
        // Swipe up
        setCurrentSectionIndex((prevIndex) => prevIndex + 1);
      } else if (deltaY < -50 && currentSectionIndex > 0) {
        // Swipe down
        setCurrentSectionIndex((prevIndex) => prevIndex - 1);
      }

      setStartTouchY(null); // Reset touch start position
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove, { passive: false }); // passive must be false to call preventDefault
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSectionIndex, isScrolling, sections.length, startTouchY]);

  useEffect(() => {
    scrollToSection(currentSectionIndex);
  }, [currentSectionIndex, scrollToSection]);

  return {
    currentSectionIndex,
    scrollToSection,
  };
};

export default useScrollNavigation;
