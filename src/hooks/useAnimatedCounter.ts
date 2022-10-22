import { useEffect, useState } from 'react';
import { animate, AnimationPlaybackControls } from 'framer-motion';

export const useAnimatedCounter = (
  isActive: boolean,
  maxValue: number,
  initialValue = 0,
  duration = 1,
) => {
  const [counter, setCounter] = useState(initialValue);
  const [isDone, toggleIsDone] = useState(false)
  
  useEffect(() => {
    let controls: AnimationPlaybackControls;
    if (isActive && !isDone) {
      controls = animate(initialValue, maxValue, {
        duration,
        onUpdate(value) {
          setCounter(parseInt(`${value}`));
        },
      });
      return () => {
        controls.stop()
        toggleIsDone(true);
      };
    }
    
  }, [initialValue, maxValue, duration, isActive, isDone]);

  return counter;
}