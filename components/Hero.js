import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="grid min-h-screen grid-cols-1 items-center bg-slate-900 px-20 md:grid-cols-2">
      <div className="space-y-6">
        <h1 className="text-6xl font-bold md:text-right">RCloud + Zero-Trust Kubernetes</h1>
        <h2 className="text-2xl font-semibold text-sky-200 md:text-right">
          Free, open source platform manage <code className="mx-1">kubectl</code> configuration.
        </h2>
        <p className="text-base font-light md:text-right">
          The Zero-Trust Access Service enables controlled, audited access for developers, SREs and
          automation systems to your Kubernetes infrastructure, with just-in-time service account
          creation and user-level credentials management integrated with your enterprise’s RBAC/SSO
          solution.
        </p>
        <div className="flex justify-end">
          <button className="rounded-md bg-sky-500 py-2 px-4 text-sm font-semibold text-white hover:bg-sky-700">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex justify-center md:justify-start md:px-20">
        <Image
          src="/static/images/ztka-illustration.png"
          alt="Zero-Trust Access for Kubernetes"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
