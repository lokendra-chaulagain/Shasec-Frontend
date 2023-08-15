"use client";
import { Group, ActionIcon, Text } from "@mantine/core";
import Image from "next/image";
import logo from "../../public/logo.png";
import GithubIcon from "./icons/GithubIcon";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import Link from "next/link";

export function Footer() {
  return (
    <footer className=" border-t text-gray-600  py-2 mt-20">
      <div className="flex items-center justify-between h-full max-w-screen-xl mx-auto px-4  text-gray-600 md:px-8">
        <Image
          src={logo}
          className="w-24  md:w-36   "
          alt="logo"
        />

        <Text
          className="hidden sm:block"
          color="dimmed"
          size="sm">
          © 2023 lokendra chaulagain. All rights reserved.
        </Text>

        <Group
          spacing={0}
          position="right"
          noWrap>
          <Link
            target="_blank"
            href={"https://github.com/lokendra-chaulagain"}>
            <ActionIcon
              size="lg"
              className=" hover:bg-indigo-100">
              <GithubIcon />
            </ActionIcon>
          </Link>

          <Link
            target="_blank"
            href={"https://twitter.com/_lokendra55"}>
            <ActionIcon
              size="lg"
              className=" hover:bg-indigo-100">
              <TwitterIcon />
            </ActionIcon>
          </Link>

          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/lokendra-chaulagain"}>
            <ActionIcon
              size="lg"
              className=" hover:bg-indigo-100">
              <LinkedinIcon />
            </ActionIcon>
          </Link>
        </Group>
      </div>

      <Text
          className="block sm:hidden text-center mt-1"
          color="dimmed"
          size="sm">
          © 2023 lokendra chaulagain. All rights reserved.
        </Text>
    </footer>
  );
}
