import React, { useEffect, useRef, useState } from 'react';
import './slidable.css';

const HomeSlidableSection = () => {
  const listRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for reverse
  const [isScrolling, setIsScrolling] = useState(true); // Track whether scrolling is active

  useEffect(() => {
    const list = listRef.current;
    let scrollSpeed = 2; // Scroll speed
    let scrollInterval;

    const startScrolling = () => {
      if (!isScrolling) return; // Only scroll if scrolling is active
      scrollInterval = setInterval(() => {
        if (list) {
          list.scrollLeft += scrollSpeed * scrollDirection;

          // Reverse direction at the end
          if (list.scrollLeft + list.clientWidth >= list.scrollWidth) {
            setScrollDirection(-1); // Scroll back to the left
          }
          // Reverse direction at the start
          else if (list.scrollLeft <= 0) {
            setScrollDirection(1); // Scroll forward again
          }
        }
      }, 16); // Approx 60fps for smooth scrolling
    };

    startScrolling();

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, [scrollDirection, isScrolling]); // React on direction or scroll state changes

  // Pause scrolling when left mouse button is held down
  const handleMouseDown = (e) => {
    if (e.button === 0) {
      // Only handle left mouse button (0 is the left button)
      setIsScrolling(false); // Pause scrolling
    }
  };

  // Resume scrolling when the mouse button is released
  const handleMouseUp = () => {
    setIsScrolling(true); // Resume scrolling
  };

  return (
    <div className="about-slidable-section">
      <div className="about-slidable-section-content-heading">
        <h1>Values that fuel our drive</h1>
      </div>

      <ul
        id="list"
        ref={listRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Ensure resume if the user drags the mouse out
      >
        {/* Original list items */}
        <li>
          <div className="about-slidable-section-value">
            Passion for <br />
            Solutions
          </div>
        </li>
        <li>
          <div className="about-slidable-section-value">
            Minimalist <br />
            Design
          </div>
        </li>
        <li>
          <div className="about-slidable-section-value">
            Growth <br />
            Oriented
          </div>
        </li>
        <li>
          <div className="about-slidable-section-value">
            Ruthless <br />
            Excellence
          </div>
        </li>
        <li>
          <div className="about-slidable-section-value">
            Attention <br />
            to Detail
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomeSlidableSection;
