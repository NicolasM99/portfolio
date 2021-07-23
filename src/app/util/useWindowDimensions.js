import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  const sizeRef = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  };
  let bsSize;
  if (width >= sizeRef.xl) {
    bsSize = "xl";
  } else if (width >= sizeRef.lg && width < sizeRef.xl) {
    bsSize = "lg";
  } else if (width >= sizeRef.md && width < sizeRef.lg) {
    bsSize = "md";
  } else if (width >= sizeRef.sm && width < sizeRef.md) {
    bsSize = "sm";
  } else if (width < sizeRef.sm) {
    bsSize = "xs";
  }
  return {
    width,
    height,
    bsSize,
    sizeRef,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize, { passive: true });
  }, []);

  return windowDimensions;
}
