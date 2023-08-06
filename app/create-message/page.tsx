"use client";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { ActionIcon, Button, CopyButton, Input, Loader, PasswordInput, Switch, Tooltip } from "@mantine/core";
import { useState } from "react";
import axios from "axios";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import { toast } from "react-hot-toast";
var generator = require("generate-password");

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

  const [editorContentLength, setEditorContentLength] = useState<number>(0);
  const handleTextChange = (value: any) => {
    setEditorContent(value);
    setEditorContentLength(value.length);
  };

  const allInputData = {
    content: editorContent,
    password,
    expirationDate,
  };

  const [isLoading, setisLoading] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState<string>("");
  const createMessage = async () => {
    try {
      setisLoading(true);
      const res = await axios.post("http://localhost:4000/api/messages", allInputData);
      console.log(res);
      setGeneratedUrl(`http://localhost:4000/secret-message/${res.data.id}`);
      setisLoading(false);
      setEditorContent("");
      setpassword("");
      setexpirationDate("");
      toast.success("Secret message has been created");
    } catch (error) {
      console.log(error);
      setisLoading(false);
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

        <div className="flex items-center justify-between">
          {editorContentLength < 20 && <span className=" text-xs text-red-400 font-bold ">At lest 20 letter required *</span>}
          <span className=" text-xs text-gray-500 font-bold ">Word Count : {editorContentLength}</span>
        </div>

        <div className="">
          <div className="flex items-center gap-5">
            <span className=" text-base font-medium text-gray-600 ">Password Protection (Optional) :</span>
            <Switch onClick={showPasswordProtection} />
          </div>

          {isPasswordProtectionVisible && (
            <div className=" flex items-center gap-2 mt-2 ">
              <div className="w-full">
                <PasswordInput
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  className="w-full"
                  placeholder="Password"
                />
                {password && password.length < 5 && <span className=" text-xs text-red-400 font-bold ">At lest 5 letter required *</span>}
              </div>

              <div>
                <Button
                  onClick={generateRandomPassword}
                  type="button"
                  className=" bg-blue-500 hover:bg-blue-500">
                  Autogenerate
                </Button>
                {password && password.length < 5 && <span className=" text-xs text-transparent ">1</span>}
              </div>
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
            disabled={isLoading || !editorContent || editorContentLength < 20}
            onClick={createMessage}
            type="button"
            className=" bg-blue-500 hover:bg-blue-500">
            {isLoading ? "Creating ..." : " Create Message"}
          </Button>
        </div>

        {generatedUrl && editorContentLength < 20 && <span className=" text-xs font-bold text-green-500">Congratulation , Now you can share this link.</span>}

        {generatedUrl && editorContentLength < 20 && (
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
