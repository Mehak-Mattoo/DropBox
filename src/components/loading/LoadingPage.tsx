// components/LoadingPage.tsx
"use client";
import React, { useEffect, useState } from "react";
import LoadingAnimation from "./LoadingAnimation";

interface LoadingPageProps {
  children: React.ReactNode;
  minimumLoadingTime?: number; // in milliseconds
  color?: string;
  backgroundColor?: string;
  logoSrc?: string;
}

const LoadingPage: React.FC<LoadingPageProps> = ({
  children,
  minimumLoadingTime = 2000,
  color = "#0066ff",
  backgroundColor = "#f5f5f5",
  logoSrc,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, minimumLoadingTime);

    return () => clearTimeout(timer);
  }, [minimumLoadingTime]);

  if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: backgroundColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <LoadingAnimation iconSrc={logoSrc} color={color} size={200} />
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingPage;
