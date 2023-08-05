"use client";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { ActionIcon, Button, CopyButton, Input, PasswordInput, Switch, Tooltip } from "@mantine/core";
import { useState } from "react";
import axios from "axios";
import { IconCopy, IconCheck } from "@tabler/icons-react";

export default function page() {
  const [isPasswordProtectionVisible, setIsPasswordProtectionVisible] = useState(false);
  const showPasswordProtection = () => {
    setIsPasswordProtectionVisible(!isPasswordProtectionVisible);
  };

  const [isExpirationDateVisible, setIsExpirationDateVisible] = useState(false);
  const showExpirationDate = () => {
    setIsExpirationDateVisible(!isExpirationDateVisible);
  };

  const [isVisibleCountVisible, setIsVisibleCountVisible] = useState(false);
  const showVisibleCount = () => {
    setIsVisibleCountVisible(!isVisibleCountVisible);
  };

  const [editorContent, setEditorContent] = useState<any>();
  const [password, setpassword] = useState<string | undefined>(undefined);
  const [expirationDate, setexpirationDate] = useState<string | undefined>(undefined);

  const handleTextChange = (value: any) => {
    setEditorContent(value);
  };

  const allInputData = {
    content: editorContent,
    password,
    expirationDate,
  };
  console.log(allInputData);

  const createMessage = async () => {
    const res = await axios.post("http://localhost:4000/api/messages", allInputData);
    console.log(res);
  };
 

  return (
    <div className="flex justify-center px-4 mt-20  ">
      <div className="flex flex-col gap-4 max-w-6xl ">
        <div className="flex text-gray-600 flex-col items-center justify-center">
          <h3 className=" text-3xl font-bold ">Build the future with us</h3>
          <p className="mt-2 max-w-2xl text-center ">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.</p>
        </div>

        <div
          className=""
          style={{ height: "60vh", padding: "0px" }}>
          <ReactQuill
            className="text-gray-600 sds "
            style={{ height: "55vh" }}
            value={editorContent}
            onChange={handleTextChange}
            modules={page.modules}
            formats={page.formats}
            placeholder="Write description"
          />
        </div>

        <div className="">
          <div className="flex items-center gap-5">
            <span className=" text-base font-medium text-gray-600 ">Password Protection (Optional) :</span>
            <Switch onClick={showPasswordProtection} />
          </div>

          {isPasswordProtectionVisible && (
            <div className=" flex items-center mt-2 ">
              <PasswordInput
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="w-full"
                placeholder="Password"
              />
              <Button className=" bg-blue-500 hover:bg-blue-500">Autogenerate</Button>
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center gap-5">
            <span className=" text-base font-medium text-gray-600 ">Expiration Date (Optional) :</span>
            <Switch onClick={showExpirationDate} />
          </div>

          {isExpirationDateVisible && (
            <div className=" flex items-center mt-2 ">
              <Input
                value={expirationDate}
                onChange={(e) => setexpirationDate(e.target.value)}
                type="datetime-local"
                className="w-full"
                placeholder="Expiration Date"
              />
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <Button
            disabled={editorContent === undefined}
            onClick={createMessage}
            type="button"
            className=" bg-blue-500 hover:bg-blue-500">
            Create Message
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Input
          readOnly
            value="https://mantine.dev"
            className="w-full text-gray-600 placeholder-gray-600"
            placeholder="Your Url"
          />
          <CopyButton
            value="https://mantine.dev"
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
      </div>
    </div>
  );
}

// Quill modules to attach to editor
page.modules = {
  toolbar: [[{ header: "1" }, { header: "2" }, { font: [] }], [{ size: [] }], ["bold", "italic", "underline", "blockquote"], [{ list: "ordered" }, { list: "bullet" }]],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

/// Quill editor formats
page.formats = ["header", "font", "size", "bold", "italic", "underline", "blockquote", "list", "bullet"];
