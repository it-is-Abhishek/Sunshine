import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (phase: string): NextConfig => {
  const isDevelopmentServer = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    outputFileTracingRoot: __dirname,
    distDir: isDevelopmentServer ? ".next-dev" : ".next",
  };
};

export default nextConfig;
