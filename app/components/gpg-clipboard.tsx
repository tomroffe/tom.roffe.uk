"use client";

import { Button } from "flowbite-react";
import { useState, useEffect } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function GpgToClipboard() {
  const [status, setStatus] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const copyFileToClipboard = async () => {
    try {
      // Fetch the file from the public directory
      const response = await fetch("/tom.roffe.asc");
      if (!response.ok) {
        throw new Error("Failed to fetch file");
      }
      const text = await response.text();

      // Copy to clipboard
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
    <div>
      <Button
        onClick={copyFileToClipboard}
        className={`w-32 mx-2 my-2 text-white font-normal rounded-md text-sm px-5 py-2.5 transition-colors ${isSuccess ? "dark:bg-green-600 dark:hover:bg-green-700 bg-green-600 hover:bg-green-700" : ""
          }`}
        type="button"
      >
        {isSuccess ? "Copied" : "Copy"}
        {isSuccess ? (
          <CheckIcon className="w-4 h-4 ms-2 text-white" />
        ) : (
          <ClipboardIcon className="w-4 h-4 ms-2" />
        )}
      </Button>
    </div>
  );
}
