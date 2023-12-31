"use client";
import { Loader } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import { messageRepository } from "../repository";

export default function HeroSection() {
  const [msgCount, setmsgCount] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);

  const getTotalMessageCount = async () => {
    try {
      setIsLoading(true);
      const res = await messageRepository.count();
      res && setmsgCount(res.data.count);
      res && setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTotalMessageCount();
  }, []);

  return (
    <section className="flex h-screen justify-center items-center px-4 text-gray-600 mt-1 sm-mt-0">
      <div className=" max-w-6xl ">
        <div className=" text-center">
          <h1
            className=" text-3xl xl:text-5xl font-extrabold text-center hidden md:block"
            style={{ lineHeight: "75px" }}>
            Secure Message Sharing Made Easy <br /> Protect, Share, and Forget!
          </h1>
          <h1
            className=" text-3xl xl:text-5xl font-extrabold text-center block md:hidden"
            style={{ lineHeight: "50px" }}>
            Secure Message Sharing Made Easy <br /> Protect, Share, and Forget!
          </h1>

          <p className="mx-auto mt-4 max-w-xl ">"Securely encrypt and share secret messages with auto-delete feature using unique URLs and password protection."</p>

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
              <dt className="order-last text-xs font-medium ">Secret Messages Created Till Now</dt>
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
