import { useEffect, useState } from 'react';
import { animate } from 'framer-motion';

export const useAnimatedCounter = (
  isActive: boolean,
  maxValue: number,
  initialValue = 0,
  duration = 1,
) => {
  const [counter, setCounter] = useState(initialValue);
  const [isDone, toggleIsDone] = useState(false)
  
  useEffect(() => {
    if (isActive && !isDone) {
      animate(initialValue, maxValue, {
        duration,
        onUpdate(value) {
          setCounter(parseInt(`${value}`));
        },
      });
      return () => {
        toggleIsDone(true);
      };
    }
    
  }, [initialValue, maxValue, duration, isActive, isDone]);

  return counter;
}