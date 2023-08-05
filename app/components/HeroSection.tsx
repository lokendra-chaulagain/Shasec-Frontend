"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className=" text-gray-600 mt-24 lg:mt-40">
      <div className="">
        <div className=" text-center">
          <h1 className=" text-3xl xl:text-5xl font-extrabold text-center">
            Understand User Flow and Increase <br /> Conversion
          </h1>

          <p className="mx-auto mt-4 max-w-xl ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded border  border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white   active:text-opacity-50 sm:w-auto"
              href="/">
              Get Started
            </Link>

            <Link
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600  active:text-opacity-50 sm:w-auto"
              href="/">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
