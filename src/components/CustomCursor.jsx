import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      setCursorPosition({ x, y });
      setIsMouseMoving(true);

      // Stop movement detection after a short delay
      clearTimeout(window.mouseStopTimer);
      window.mouseStopTimer = setTimeout(() => setIsMouseMoving(false), 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrailingPosition((prev) => {
        // Move toward the main cursor in discrete steps
        const dx = cursorPosition.x - prev.x;
        const dy = cursorPosition.y - prev.y;

        const distance = Math.sqrt(dx * dx + dy * dy);
        const step = isMouseMoving ? 0.1 : 0.001;

        if (distance < 1) return prev; // Stop moving if very close

        return {
          x: prev.x + dx * step,
          y: prev.y + dy * step,
        };
      });
    }, 10); // Update every 10ms

    return () => clearInterval(interval);
  }, [cursorPosition, isMouseMoving]);

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
        className="custom-trail fixed z-0 h-3 w-3 rounded-full bg-secondary"
      ></div>
    </>
  );
};

export default CustomCursor;
