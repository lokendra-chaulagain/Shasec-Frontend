"use client";

import MessageTextEditor from "../components/MessageTextEditor";

import { Button, Checkbox, Input, Tooltip } from "@mantine/core";

import { IconDatabase } from "@tabler/icons-react";

export default function page() {
  return (
    <div className="flex justify-center px-4">
      <div className="flex flex-col max-w-6xl ">
        <MessageTextEditor />

        <div className="flex items-center gap-3 text-gray-600">
          <span className=" text-base font-medium ">Validation key required :</span>
          <Checkbox label="I agree to sell my privacy" />
          <Input placeholder="Secret Key" />
          <Button
            leftIcon={<IconDatabase />}
            radius="xs"
            size="xs"
            className=" bg-blue-600 hover:bg-blue-600">
            Autogenerate Secure Password
          </Button>
        </div>
      </div>
    </div>
  );
}
