"use client";
import { Loader } from "@mantine/core";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [msgCount, setmsgCount] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);

  const getTotalMessageCount = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("http://localhost:4000/api/messages/count");
      setmsgCount(res.data.count);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTotalMessageCount();
  }, []);

  return (
    <section className="flex h-screen justify-center items-center px-4 text-gray-600 ">
      <div className=" max-w-6xl ">
        <div className=" text-center">
          <h1 className=" text-3xl xl:text-5xl font-extrabold text-center">
            Understand User Flow and Increase <br /> Conversion
          </h1>

          <p className="mx-auto mt-4 max-w-xl ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded border  border-blue-500 bg-blue-500 px-12 py-3 text-sm font-medium text-white   active:text-opacity-50 sm:w-auto"
              href="/create-message ">
              Create Message
            </Link>

            <Link
              className="block w-full rounded border border-blue-500 px-12 py-3 text-sm font-medium text-blue-600  active:text-opacity-50 sm:w-auto"
              href="/message-read">
              View Message
            </Link>
          </div>

          <div className="flex justify-center gap-5">
            <div className="flex flex-col  py-8 text-center">
              <dt className="order-last text-xs font-medium ">Message Created Till Now</dt>
              {msgCount ? (
                <dd className=" text-sm font-bold text-blue-500 ">{msgCount}</dd>
              ) : (
                <div className="flex justify-center">
                  <Loader
                    size="xs"
                    variant="bars"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
