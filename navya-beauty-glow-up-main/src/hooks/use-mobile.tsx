import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Initial check
    checkMobile();

    // Media query fallback support
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Fallback for older WebView compatibility
    if (mql.addEventListener) {
      mql.addEventListener("change", checkMobile);
    } else if (mql.addListener) {
      mql.addListener(checkMobile);
    }

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", checkMobile);
      } else if (mql.removeListener) {
        mql.removeListener(checkMobile);
      }
    };
  }, []);

  return isMobile;
}
