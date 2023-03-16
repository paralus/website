import React from "react";
import { FaDownload, FaGithub } from "react-icons/fa";
import GitHubButton from "react-github-btn";

export default function Hero() {
  return (
    <div className="mt-20 md:mt-20 flex flex-col-reverse items-center justify-center gap-x-60 px-10 sm:px-20 xl:px-40">
      <div className="flex flex-col gap-y-2 xl:w-3/4 text-center">
        <div className="text-4xl sm:text-5xl font-bold my-10">
          Zero trust Kubernetes with zero friction
        </div>
        <p className="text-base leading-relaxed">
          Paralus is a free, open source tool that enables controlled, audited
          access to Kubernetes infrastructure. It comes with just-in-time
          service account creation and user-level credential management that
          integrates with your RBAC and SSO. Ships as a GUI, API, and CLI.
        </p>
        <div className="text-center justify-center flex">
          <a href="/docs" className="hover:no-underline">
            {/* <div className="text-white w-fit py-2 px-4 rounded-md bg-teal-500 hover:bg-teal-900 transition-colors duration-200 align-items-middle">
              <FaGithub className="" />
              <span className="mb-2">GitHub</span>
            </div> */}
            <GitHubButton
              href="https://github.com/paralus/paralus"
              data-color-scheme="no-preference: light_high_contrast; light: light; dark: light;"
              data-size="large"
              data-show-count="true"
              aria-label="Star Paralus"
            >
              Star
            </GitHubButton>
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 mb-10">
        <img className="w-full" src="/img/hero.svg" alt="Paralus" />
      </div>
    </div>
  );
}
