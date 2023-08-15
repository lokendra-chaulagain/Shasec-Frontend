"use client";
import { ActionIcon, Button, CopyButton, Input, Loader, PasswordInput, Switch, Textarea, Tooltip } from "@mantine/core";
import { useState } from "react";
import axios from "axios";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import { toast } from "react-hot-toast";
import { messageRepository } from "../repository";
var generator = require("generate-password");

export default function Page() {
  const [isPasswordProtectionVisible, setIsPasswordProtectionVisible] = useState(false);
  const showPasswordProtection = () => {
    setIsPasswordProtectionVisible(!isPasswordProtectionVisible);
  };

  const [isExpirationDateVisible, setIsExpirationDateVisible] = useState(false);
  const showExpirationDate = () => {
    setIsExpirationDateVisible(!isExpirationDateVisible);
  };

  const [message, setMessage] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [expirationDate, setexpirationDate] = useState<string>("");

  const [isLoading, setisLoading] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState<string>("");

  const createMessage = async () => {
    try {
      setisLoading(true);

      const res = await messageRepository.create({
        message,
        password,
        expirationDate,
      });
      if (res) {
        setGeneratedUrl(`http://localhost:4000/secret-message/${res.data.id}`);
        setisLoading(false);
        setpassword("");
        setexpirationDate("");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      setisLoading(false);
      toast.error("Something went wrong");
    }
  };
  console.log(generatedUrl);

  const generateRandomPassword = () => {
    var password = generator.generate({
      length: 30,
      numbers: true,
    });
    setpassword(password);
  };

  return (
    <div className="flex justify-center px-4 mt-20  ">
      <div className="flex flex-col gap-4 max-w-6xl ">
        <div className="flex text-gray-600 flex-col items-center justify-center">
          <h3 className=" text-3xl font-bold ">Creating Secure Messages</h3>
          <p className="mt-2 max-w-2xl text-center ">Compose your confidential message and choose to encrypt it with a password. Set the expiration date or use the default 3-day auto-delete feature for enhanced privacy.</p>
        </div>

        <div>
          <div className="flex items-center gap-1 text-base font-medium">
            <span className=" text-base font-medium text-gray-600 ">Your message </span>
            <span className="text-red-500 ">*</span>
          </div>
          <Textarea
            className="text-gray-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            minRows={4}
            maxRows={10}
          />
        </div>

        <div className="">
          <div className="flex items-center gap-5">
            <span className=" text-base font-medium text-gray-600 ">Password Protection (Optional) :</span>
            <Switch onClick={showPasswordProtection} />
          </div>
          {password && password.length < 5 && <span className="transition-opacity text-xs text-red-400 font-bold">At least 5 chatacters required *</span>}
          <div className={`flex gap-2 items-center mt-2 transition-opacity  ${isPasswordProtectionVisible ? "opacity-100 max-h-full" : "opacity-0 max-h-0 overflow-hidden"}`}>
            <div className="w-full">
              <PasswordInput
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="w-full"
                placeholder="Password"
              />
            </div>

            <Button
              onClick={generateRandomPassword}
              type="button"
              className=" bg-blue-500 hover:bg-blue-500">
              Autogenerate
            </Button>

            {password && password.length >= 5 && (
              <CopyButton
                value={password}
                timeout={2000}>
                {({ copied, copy }) => (
                  <Tooltip
                    label={copied ? "Copied" : "Copy"}
                    withArrow
                    position="right">
                    <ActionIcon
                      color={copied ? "teal" : "gray"}
                      onClick={copy}>
                      {copied ? <IconCheck size="5rem" /> : <IconCopy size="5rem" />}
                    </ActionIcon>
                  </Tooltip>
                )}
              </CopyButton>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-5">
            <span className=" text-base font-medium text-gray-600 ">Expiration Date (Optional) :</span>
            <Switch onClick={showExpirationDate} />
          </div>

          <div className={`flex items-center mt-2 transition-opacity ${isExpirationDateVisible ? "opacity-100 max-h-full" : "opacity-0 max-h-0 overflow-hidden"}`}>
            <Input
              value={expirationDate}
              onChange={(e) => setexpirationDate(e.target.value)}
              type="datetime-local"
              className="w-full"
              placeholder="Expiration Date"
            />
          </div>
        </div>

        <div className="flex justify-end">
          {message && message.length >= 1 ? (
            <Button
              disabled={isLoading}
              onClick={createMessage}
              type="button"
              className=" bg-blue-500 hover:bg-blue-500">
              {isLoading ? "Creating ..." : " Create Message"}
            </Button>
          ) : (
            <Button
              disabled
              type="button"
              className=" bg-blue-500 hover:bg-blue-500">
              Create Message
            </Button>
          )}
        </div>

        {generatedUrl && <span className=" text-xs font-bold text-green-500">Congratulation , Now you can share this link.</span>}

        {generatedUrl && (
          <div className="flex items-center gap-2">
            <Input
              readOnly
              value={generatedUrl}
              className="w-full text-gray-600 placeholder-gray-600"
              placeholder={isLoading ? "Generating Url ..." : "Your Url"}
            />
            <CopyButton
              value={generatedUrl}
              timeout={2000}>
              {({ copied, copy }) => (
                <Tooltip
                  label={copied ? "Copied" : "Copy"}
                  withArrow
                  position="right">
                  <ActionIcon
                    color={copied ? "teal" : "gray"}
                    onClick={copy}>
                    {copied ? <IconCheck size="2.5rem" /> : <IconCopy size="2.5rem" />}
                  </ActionIcon>
                </Tooltip>
              )}
            </CopyButton>
          </div>
        )}

        {isLoading && (
          <div className="flex flex-col justify-center items-center">
            <Loader
              size="sm"
              variant="bars"
            />
            <span className=" text-xs font-bold text-gray-500">Generating link please wait ..</span>
          </div>
        )}
      </div>
    </div>
  );
}
