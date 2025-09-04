import { useEffect } from "react";

export function Route_Tracker() {
  useEffect(() => {
    const current = window.location.pathname;

    if (current === "/") {
      sessionStorage.setItem("level1", current);
    } else if (["/about", "/services"].includes(current)) {
      sessionStorage.setItem("level2", current);
    } else if (["/terms-of-service", "/privacy-policy"].includes(current)) {
      sessionStorage.setItem("level3", current);
    }
  }, [window.location.pathname]);

  return null;
}
