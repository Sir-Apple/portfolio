import React, { useRef } from 'react';
import ScrollBar from 'react-smooth-scrollbar';

export default function SmoothScrollbar({ children }) {
  const ref = useRef(null);
  return (
    <ScrollBar ref={ref} damping=".09">
      {children}
    </ScrollBar>
  );
}
