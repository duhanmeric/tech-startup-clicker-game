import { useEffect, useRef } from "react";

type IntervalCallback = () => void;

function useInterval(callback: IntervalCallback, delay: number | null) {
  const savedCallback = useRef<IntervalCallback | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current !== null) {
        savedCallback.current();
      }
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
