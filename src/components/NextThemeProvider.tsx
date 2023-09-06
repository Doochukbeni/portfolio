"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const NextThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return <ThemeProvider attribute="class">{children} </ThemeProvider>;
};

export default NextThemeProvider;
