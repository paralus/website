import React, { useState } from 'react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="fixed z-10 w-full bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              <Image
                src="/static/images/logo.png"
                alt="Zero-Trust Access for Kubernetes"
                width={40}
                height={40}
              />
              <Link href="/">
                <a className="ml-2 text-xl font-light">RCloud</a>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link scroll={true} href="/#features">
                  <a className="text-sm font-medium text-white hover:text-sky-300">Features</a>
                </Link>

                <Link href="https://docs-rafaylabs.vercel.app/">
                  <a className="text-sm font-medium text-white hover:text-sky-300">Documentation</a>
                </Link>
                <Link href="/blog">
                  <a className="text-sm font-medium text-white hover:text-sky-300">Blog</a>
                </Link>
                <Link href="#">
                  <a className="text-sm font-medium text-white hover:text-sky-300">
                    <FaGithub className="mr-1 mb-1 inline" />
                    GitHub
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <Link href="#">
              <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Features
              </a>
            </Link>

            <Link href="https://docs-rafaylabs.vercel.app/">
              <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Documentation
              </a>
            </Link>
            <Link href="#">
              <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                GitHub
              </a>
            </Link>

            <Link href="#">
              <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Blog
              </a>
            </Link>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Join our Slack
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
