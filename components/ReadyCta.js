import React from "react";
import Link from "next/link";

export default function ReadyCta() {
  return (
    <div className="px-20 pt-20 pb-20 bg-slate-900">
      <div className="flex flex-col justify-center gap-y-6">
        <div className="text-5xl text-center font-bold">Try ZTKA</div>
        <div className="flex justify-center">
          <div className="text-xl font-semibold text-center text-sky-200 subtitleTextWrapper">
            Our elaborate yet simple quickstart guide will help you get started with ZTKA in under 10 minutes! 
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <Link href="/docs">
            <button className="w-fit bg-sky-500 hover:bg-sky-700 text-white text-sm font-semibold py-2 px-4 rounded-md">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
