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
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
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
