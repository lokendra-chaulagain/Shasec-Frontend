"use client";
import { Anchor, Button, Checkbox, Container, Group, Paper, PasswordInput, SegmentedControl, TextInput, Title } from "@mantine/core";
import React, { useState } from "react";

export default function page() {
  const [value, setValue] = useState("login");
  console.log(value);

  return (
    <div className=" mt-52 flex justify-center items-center">
      <div className="flex flex-col">
        <SegmentedControl
          value={value}
          onChange={setValue}
          data={[
            { label: "Login", value: "login" },
            { label: "Register", value: "register" },
          ]}
        />

        {value === "login" && (
          <div className="login_container text-gray-600">
            <p className="text-center text-3xl font-bold mt-5 mb-4">Login</p>
            <Paper
              className="p-7"
              withBorder
              radius="md">
              <TextInput
                label="Email"
                placeholder="you@mantine.dev"
                required
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
              />
              <Group
                position="apart"
                mt="lg">
                <Checkbox label="Remember me" />
                <Anchor
                  component="button"
                  size="sm">
                  Forgot password?
                </Anchor>
              </Group>
              <Button
                fullWidth
                mt="xl">
                Sign in
              </Button>
            </Paper>
          </div>
        )}

        {value === "register" && (
          <div className="login_container text-gray-600">
            <p className="text-center text-3xl font-bold mt-5 mb-4">Register</p>
            <Paper
              className="p-7"
              withBorder
              radius="md">
              <TextInput
                label="Email"
                placeholder="you@mantine.dev"
                required
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
              />
              <Group
                position="apart"
                mt="lg">
                <Checkbox label="Remember me" />
                <Anchor
                  component="button"
                  size="sm">
                  Forgot password?
                </Anchor>
              </Group>
              <Button
                fullWidth
                mt="xl">
                Sign in
              </Button>
            </Paper>
          </div>
        )}
      </div>
    </div>
  );
}
