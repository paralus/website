import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import { FaSlack, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  const { footer } = useThemeConfig();

  if (!footer) {
    return null;
  }

  const { copyright, links, logo, style } = footer;
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 text-white px-10 py-8"
      style={{ backgroundColor: "#030E1C" }}
    >
      <div className="space-y-3">
        <div className="flex justify-center md:justify-start">
          <img className="w-40" src="/img/logo-white.png" alt="Paralus" />
        </div>
      </div>
      <div>
        <div className="flex flex-row justify-center md:justify-end items-start gap-x-3 md:gap-x-16 font-light">
          <div>
            <a
              href="/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-300 hover:no-underline"
            >
              Documentation
            </a>
          </div>
          <div>
            <a
              href="https://github.com/paralus/paralus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-300 hover:no-underline"
            >
              GitHub
            </a>
          </div>
          <div>
            <a
              href="/blog"
              className="text-white hover:text-green-300 hover:no-underline"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="https://join.slack.com/t/paralus/shared_invite/zt-1a9x6y729-ySmAq~I3tjclEG7nDoXB0A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-300 hover:no-underline"
            >
              Slack
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-row justify-center md:justify-end items-start gap-x-4 font-light"></div>
      </div>
    </div>
  );
}

export default React.memo(Footer);
