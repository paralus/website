import React from "react";

export default function Cta() {
  return (
    <div
      style={{ minHeight: "300px" }}
      className="bg-teal-500 py-20 px-2 sm:px-10 space-y-10 text-white text-center"
    >
      <h1 className="text-5xl">Get started </h1>
      <p className="text-base leading-relaxed">
        Installing Paralus in your Kubernetes environment takes less than
        brewing a cup of coffee.
      </p>
      <div className="text-center justify-center flex">
        <a href="/docs" className="hover:no-underline">
          <div className="text-teal-500 w-fit py-2 px-16 rounded-md bg-white hover:bg-teal-800 hover:text-white transition-colors duration-200">
            <span>Install</span>
          </div>
        </a>
      </div>
    </div>
  );
}
