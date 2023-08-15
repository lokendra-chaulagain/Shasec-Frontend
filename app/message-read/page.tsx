"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Input, Loader, PasswordInput } from "@mantine/core";
import toast from "react-hot-toast";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [url, seturl] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const id = url.split("/")[4];

  const [message, setMessage] = useState<string>("");
  const [isPasswordRequired, setIsPasswordRequired] = useState(false);

  const getMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      let apiUrl = `${process.env.NEXT_PUBLIC_URL}/messages/${id}`;

      if (password.length >= 5) {
        apiUrl += `/${password}`;
      }

      const res = await axios.get(apiUrl);
      setMessage(res.data.data.message);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);

      if (error.response) {
        if (error.response.status === 401) {
          setIsPasswordRequired(true);

          if (error.response.data && error.response.data.message === "Password is required to access this message.") {
            setPasswordWarning(true);
          } else {
            toast.error("Unauthorized! Invalid password for this message.");
          }
        } else if (error.response.status === 404) {
          toast.error("Message not found.");
        } else {
          toast.error("An error occurred. Please try again later.");
        }
      }
    }
  };

  const [passwordWarning, setPasswordWarning] = useState<boolean>(false);
  useEffect(() => {
    if (passwordWarning) {
      const timeoutId = setTimeout(() => {
        setPasswordWarning(false);
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [passwordWarning]);

  return (
    <div className="flex justify-center px-4 mt-20  ">
      <div className="flex flex-col max-w-6xl ">
        <div className="flex text-gray-600 flex-col items-center justify-center">
          <h3 className=" text-3xl font-bold text-center "> Secure Message Retrieval</h3>
          <p className="mt-2 max-w-2xl md:text-center ">
            {" "}
            <span className=" text-yellow-600 font-semibold">Note:</span> Enter the URL and click search to retrieve your message. If encrypted, enter the password for decryption. Enjoy hassle-free access to your messages without a password if they are unencrypted.
          </p>
        </div>

        {passwordWarning && isPasswordRequired && (
          <div
            className="p-4 mt-5 text-sm text-yellow-800 rounded-lg text-center bg-yellow-100  "
            role="alert">
            <span className="font-medium">Warning alert!</span> This message is encrypted , so please enter password to decrypt it.
          </div>
        )}

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

          {isPasswordRequired && (
            <PasswordInput
              value={password}
              onChange={(e: any) => setpassword(e.target.value)}
              className="w-full"
              placeholder="Message Password"
            />
          )}
          <Button
            type="submit"
            className=" bg-blue-500 hover:bg-blue-500">
            Search
          </Button>
        </form>

        <div className="mt-10">
          {message && <p className="text-center text-gray-600 text-sm font-semibold bg-blue-100">--Start--</p>}
          {isLoading && (
            <div className="flex flex-col justify-center items-center">
              <Loader variant="bars" />
              <p className="text-center text-gray-600 text-sm font-semibold">Please Wait..</p>
            </div>
          )}
          {message && <p className="">{message}</p>}
          {message && <p className="text-center text-gray-600 text-sm font-semibold bg-blue-100">--End--</p>}
        </div>
      </div>
    </div>
  );
}
