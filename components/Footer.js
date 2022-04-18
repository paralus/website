import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-center lg:text-left bg-sky-300 text-sky-900">
      <div className="mx-6 px-20 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Zero-Trust Access for Kubernetes"
                width={100}
                height={100}
              />
              <a className="font-light text-4xl ml-2 text-white" href="/">
                RCloud
              </a>
            </div>
            <div className="flex items-center text-right">
              made with 💖 by folks at{" "}
              <Image
                src="/images/rafay-logo-dark.png"
                alt="Zero-Trust Access for Kubernetes"
                width={107}
                height={40}
              />
            </div>
          </div>
          <div></div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Project
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-sky-900 hover:text-sky-600">
                Documentation
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-sky-900 hover:text-sky-600">
                GitHub
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-sky-900 hover:text-sky-600">
                Press Release
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Community
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-sky-900 hover:text-sky-600">
                Join our Slack
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-sky-900 hover:text-sky-600">
                Code of Conduct
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-sky-900 hover:text-sky-600">
                Blog
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-2 bg-sky-300 text-sky-900">
        <span>© 2022 Copyright</span>
        <a
          className="mx-2 font-semibold text-sky-900"
          href="https://tailwind-elements.com/"
        >
          RCloud Authors
        </a>
      </div>
    </footer>
  );
}
