import React from "react";

export default function Feature({
  description,
  image,
  title,
  bullets,
  reverse = false,
}) {
  if (!image) {
    return (
      <div className="space-y-6">
        <div className="text-center text-3xl font-semibold">{title}</div>
        <div className="flex justify-center">
          <p
            style={{ maxWidth: "510px" }}
            className="text-center text-base font-light"
          >
            {description}
          </p>
        </div>
        <div className="flex justify-center">
          <ul
            role="list"
            className="list-disc gap-2 pl-5 text-base font-semibold marker:text-teal-400"
          >
            {bullets.map((bullet, index) => (
              <li key={index} className="list-none flex items-center">
                <span className="inline-block h-15 w-15 flex basis-1/6">
                  <img src="/img/checkmark.svg" />
                </span>
                <span className="flex basis-5/6">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        reverse
          ? "lg:flex-row-reverse lg:justify-center lg:gap-32 flex flex-col items-center pt-20"
          : "lg:flex-row lg:justify-center lg:gap-32 flex flex-col items-center pt-20"
      }
    >
      <div
        className="space-y-6 pb-5 lg:w-1/2 lg:pb-0 "
        style={{ maxWidth: "510px" }}
      >
        <div className="text-center text-3xl font-semibold lg:text-left">
          {title}
        </div>
        <p className="text-center text-base font-light lg:text-left">
          {description}
        </p>
        <ul
          role="list"
          className="list-disc gap-2 pl-5 text-base font-semibold marker:text-teal-400"
        >
          {bullets.map((bullet, index) => (
            <li key={index} className="list-none flex items-center">
              <span className="inline-block h-15 w-15 flex basis-1/6">
                <img src="/img/checkmark.svg" />
              </span>
              <span className="flex basis-5/6">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      <img
        src={`/img/${image}`}
        alt="home screen"
        height={400}
        width={600}
        objectFit="contain"
      />
    </div>
  );
}
