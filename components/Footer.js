import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t-2 border-slate-800 bg-slate-900 px-10 text-center text-white lg:mx-20 lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <Image
                src="/static/images/logo.png"
                alt="Zero-Trust Access for Kubernetes"
                width={100}
                height={100}
              />
              <Link href="/">
                <a className="ml-2 text-4xl font-bold text-cyan-400">ZTKA</a>
              </Link>
            </div>
            <div className="flex items-center text-right">
              made with 💖 by folks at
              <Image
                src="/static/images/rafay-logo-light.png"
                alt="Zero-Trust Access for Kubernetes"
                width={107}
                height={40}
              />
            </div>
          </div>
          <div></div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Project
            </h6>
            <p className="mb-4">
              <Link href="https://docs-rafaylabs.vercel.app/">
                <a className="text-slate-500 hover:text-sky-600">Documentation</a>
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#!">
                <a className="text-slate-500 hover:text-sky-600">GitHub</a>
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#!">
                <a className="text-slate-500 hover:text-sky-600">Press Release</a>
              </Link>
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Community
            </h6>
            <p className="mb-4">
              <Link href="#!">
                <a className="text-slate-500 hover:text-sky-600">Join our Slack</a>
              </Link>
            </p>
            <p className="mb-4">
              <Link href="/codeofconduct">
                <a className="text-slate-500 hover:text-sky-600">Code of Conduct</a>
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#!">
                <a className="text-slate-500 hover:text-sky-600">Blog</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 p-2 text-center text-cyan-400">
        <span>© 2022 Copyright</span>
        <Link href="https://rafay.co">
          <a className="mx-2 font-semibold text-cyan-400">ZTKA Authors</a>
        </Link>
      </div>
    </footer>
  )
}
