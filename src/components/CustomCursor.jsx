import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
  const [orbitAngle, setOrbitAngle] = useState(0);
  const [orbitPosition, setOrbitPosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  // Mouse move listener
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      setCursorPosition({ x, y });
      setIsMouseMoving(true);

      // Stop movement detection after a short delay
      clearTimeout(window.mouseStopTimer);
      window.mouseStopTimer = setTimeout(() => setIsMouseMoving(false), 60);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Trailing element position
  useEffect(() => {
    const interval = setInterval(() => {
      setTrailingPosition((prev) => {
        // Move toward the main cursor in discrete steps
        const dx = cursorPosition.x - prev.x;
        const dy = cursorPosition.y - prev.y;

        const distance = Math.sqrt(dx * dx + dy * dy);
        const step = isMouseMoving ? 0.1 : 0.03;

        if (distance < 1) return prev; // Stop moving if very close

        return {
          x: prev.x + dx * step,
          y: prev.y + dy * step,
        };
      });
    }, 10); // Update every 10ms

    return () => clearInterval(interval);
  }, [cursorPosition, isMouseMoving]);

  // Orbital element position
  useEffect(() => {
    const orbitRadius = 25;

    const orbitInterval = setInterval(() => {
      if (isMouseMoving) {
        setOrbitAngle((prevAngle) => (prevAngle - 2) % 360);
      } else {
        setOrbitAngle((prevAngle) => (prevAngle + 0.5) % 360);
      }
      setOrbitPosition({
        x: orbitRadius * Math.cos((orbitAngle * Math.PI) / 180),
        y: orbitRadius * Math.sin((orbitAngle * Math.PI) / 180),
      });
    }, 10);

    return () => clearInterval(orbitInterval);
  }, [isMouseMoving, orbitAngle]);

  return (
    <>
      {/* Main Cursor */}
      <div
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: "translate(-50%, -50%)",
        }}
        className="custom-cursor fixed z-[1000] h-6 w-6 rounded-full"
      />
      {/* Trailing Circle */}
      <div
        style={{
          left: trailingPosition.x,
          top: trailingPosition.y,
          transform: "translate(-50%, -50%)",
        }}
        className="custom-trail-container fixed z-0 h-3 w-3 rounded-full bg-secondary flex justify-center items-center"
      >
        {/* Orbital Circle */}
        <div
          style={{
            left: orbitPosition.x,
            top: orbitPosition.y,
          }}
          className="absolute z-0 h-2 w-2 translate-y-1/3 translate-x-1/3 rounded-full bg-lightMedium"
        >
          {/* Secondary Orbital Circle */}
          <div className="animate-orbit-inverse secondary-orbit absolute z-0 h-1 w-1 rounded-full bg-primary"></div>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
