import React from 'react'
import Link from 'next/link'

export default function ReadyCta() {
  return (
    <div className="bg-slate-900 px-20 pt-20 pb-20 lg:pt-40 lg:pb-40">
      <div className="flex flex-col justify-center gap-y-6">
        <div className="text-center text-5xl font-bold">Try it yourself!</div>
        <div className="flex justify-center">
          <div className="subtitleTextWrapper text-center text-xl font-semibold text-cyan-300">
            Explore our documentation to get started with ZTKA
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          <Link href="/docs" passHref>
            <button className="w-fit rounded-md bg-green-600 py-2 px-4 text-sm font-semibold text-white hover:bg-green-700">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
