import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import React from "react";

const config: DocsThemeConfig = {
  logo: () => (
    <>
      <span>Sign Platform</span>
    </>
  ),
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system',
  },
  project: {
    link: "https://github.com/mersel-dss/mersel-dss-docs",
  },
  docsRepositoryBase: "https://github.com/mersel-dss/mersel-dss-docs",
  footer: {
    content: () => (
      <span>
        Türkiye e-imza topluluğuna katkınız için teşekkürler! 🇹🇷
      </span>
    ),
  },
  head: () => {
    const config = useConfig();
    return (
      <>
        <title>
          {"Mersel DSS > "}
          {config.title}
        </title>
        <link rel="manifest" href="/favicon/site.webmanifest" />
        {/* ICONS */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        {[16, 32].map((size) => (
          <link
            key={size}
            rel="icon"
            type="image/png"
            sizes={`${size}x${size}`}
            href={`/favicon/favicon-${size}x${size}.png`}
          />
        ))}
        <meta name="og:type" content="object" />
        <meta name="og:site_name" content="Mersel DSS Docs" />
        <meta name="og:url" content="https://dss.mersel.dev" />
      </>
    );
  },
};

export default config;
