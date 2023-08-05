"use client";
import parse from "html-react-parser";
import axios from "axios";
import { useState } from "react";
import { Button, Input, Loader, Notification, PasswordInput } from "@mantine/core";
import toast, { Toaster } from "react-hot-toast";

export default function page() {
  const [mycontent, setmycontent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [url, seturl] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const id = url.split("/")[4];

  // const getMessage = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     setIsLoading(true);
  //     console.log(url, password);

  //     let apiUrl = `http://localhost:4000/api/messages/${id}`;
  //     if (password.length >= 5) {
  //       apiUrl += `/${password}`;
  //     }

  //     const res = await axios.get(apiUrl);
  //     console.log(res.data.message);
  //     setmycontent(res.data.content);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //   }
  // };

  const [isPasswordRequired, setIsPasswordRequired] = useState(false);
  const getMessage = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      console.log(url, password);

      let apiUrl = `http://localhost:4000/api/messages/${id}`;
      if (password.length >= 5) {
        apiUrl += `/${password}`;
      }

      const res = await axios.get(apiUrl);
      console.log(res.data.message);
      setmycontent(res.data.content);
      setIsLoading(false);
      toast.success("You can read the message now.");
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      if (error.response && error.response.status === 401) {
        setIsPasswordRequired(true);
        if (error.response.data && error.response.data.message === "Password is required to access this message.") {
          toast.error("Password is required to access this message.");
        } else {
          toast.error("Unauthorized! Invalid password for this message.");
        }
      } else if (error.response && error.response.status === 404) {
        toast.error("Message not found.");
        setIsPasswordRequired(true);
      } else {
        setIsPasswordRequired(true);
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="flex justify-center px-4 mt-20  ">
      <div className="flex flex-col max-w-6xl ">
        <div className="flex text-gray-600 flex-col items-center justify-center">
          <h3 className=" text-3xl font-bold "> Search your message from url.</h3>
          <p className="mt-2 max-w-2xl text-center ">
            {" "}
            <span className=" text-yellow-600 font-semibold">Note:</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
          </p>
        </div>

        <form
          onSubmit={getMessage}
          className="flex items-center gap-2 mt-7">
          <Input
            value={url}
            onChange={(e: any) => seturl(e.target.value)}
            required
            className="w-full"
            placeholder="Enter Your Url"
          />

          {isPasswordRequired && <PasswordInput
            value={password}
            onChange={(e: any) => setpassword(e.target.value)}
            className="w-full"
            placeholder="Message Password"
          />}
          <Button
            type="submit"
            className=" bg-blue-500 hover:bg-blue-500">
            Search
          </Button>
        </form>

        <div className="mt-10">
          {mycontent && <p className="text-center text-gray-600 text-sm font-semibold bg-blue-100">--Start--</p>}
          {isLoading && (
            <div className="flex flex-col justify-center items-center">
              <Loader variant="bars" />
              <p className="text-center text-gray-600 text-sm font-semibold">Please Wait..</p>
            </div>
          )}
          {mycontent && <p className="">{parse(mycontent)}</p>}
          {mycontent && <p className="text-center text-gray-600 text-sm font-semibold bg-blue-100">--End--</p>}
        </div>
      </div>
    </div>
  );
}
