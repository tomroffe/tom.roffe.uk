// app/components/CopyTextInput.tsx
"use client";

import { Button, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function CopyTextInput() {
  const [text] = useState<string>("gpg -v --auto-key-locate clear,wkd,local --locate-keys tom@roffe.uk"); // Set default text
  const [_status, setStatus] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const copyTextToClipboard = async () => {
    try {
      if (!text) {
        throw new Error("Text field is empty");
      }
      // Copy text field content to clipboard
      await navigator.clipboard.writeText(text);
      setStatus("Copied to clipboard!");
      setIsSuccess(true);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      setStatus("Failed to copy to clipboard");
      setIsSuccess(false);
    }
  };

  // Reset the success state after 2 seconds
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setStatus("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <TextInput
          type="text"
          value={text}
          disabled // Disable editing
          className="w-full max-w"
        />
        <Button
          onClick={copyTextToClipboard}
          className={`w-32 text-white font-normal rounded-md text-sm px-5 py-2.5 transition-colors ${isSuccess ? "bg-green-600 hover:bg-green-700" : ""
            }`}
          type="button"
        >
          <span className="flex items-center justify-center w-full">
            {isSuccess ? "Copied" : "Copy"}
            {isSuccess ? (
              <CheckIcon className="w-4 h-4 ms-2 text-white" />
            ) : (
              <ClipboardIcon className="w-4 h-4 ms-2" />
            )}
          </span>
        </Button>
      </div>
    </div>
  );
}
