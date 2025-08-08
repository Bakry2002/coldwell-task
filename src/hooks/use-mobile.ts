import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile(breakPoint?: number) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  const mobile_breakPoint = breakPoint ? breakPoint : MOBILE_BREAKPOINT;

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${mobile_breakPoint - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < mobile_breakPoint);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < mobile_breakPoint);
    return () => mql.removeEventListener("change", onChange);
  }, [mobile_breakPoint]);

  return !!isMobile;
}
