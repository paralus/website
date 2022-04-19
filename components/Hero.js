import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen px-20 grid grid-cols-1 md:grid-cols-2 items-center bg-slate-900">
      <div className="space-y-6">
        <h1 className="md:text-right text-6xl font-bold">
          RCloud + Zero-Trust Kubernetes
        </h1>
        <h2 className="md:text-right text-2xl font-semibold text-sky-200">
          Free, open source platform to manage{" "}
          <code className="mx-1">kubectl</code> configuration.
        </h2>
        <p className="md:text-right text-base font-light">
          The Zero-Trust Access Service enables controlled, audited access for
          developers, SREs and automation systems to your Kubernetes
          infrastructure. It comes with just-in-time service account creation and
          user-level credentials management that integrates with your enterprise’s
          RBAC/SSO solution.
        </p>
        <div className="flex justify-end">
          <button className="bg-sky-500 hover:bg-sky-700 text-white text-sm font-semibold py-2 px-4 rounded-md">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex md:justify-start md:px-20 justify-center">
        <Image
          src="/ztka-illustration.png"
          alt="Zero-Trust Access for Kubernetes"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
