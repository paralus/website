import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="grid min-h-screen grid-cols-1 items-center bg-slate-900 px-20 md:grid-cols-2">
      <div className="space-y-6">
        <h1 className="text-6xl font-bold md:text-right">
          Zero-Trust Kubernetes with Zero Friction
        </h1>
        <h2 className="text-2xl font-semibold text-cyan-300 md:text-right">
          Free, open source platform manage <code className="mx-1">kubectl</code> configuration
        </h2>
        <p className="text-base font-light md:text-right">
          Engineers want simple access to infrastructure. Devops want security and auditability. The
          Zero-Trust Access Service enables both. Centralized auth, powerful credentials management,
          and seamless integration with existing RBAC/SSO solutions are closer than you think.
        </p>
        <div className="flex justify-end">
          <button className="rounded-md bg-green-600 py-2 px-4 text-sm font-semibold text-white hover:bg-green-700">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex justify-center md:justify-start md:px-20">
        <Image
          src="/static/images/snowboarder.png"
          alt="Zero-Trust Access for Kubernetes"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
