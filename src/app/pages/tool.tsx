"use client";

import { FaCloudUploadAlt } from "react-icons/fa";
import React, { useRef, useState, useEffect, useMemo } from "react";
import { apiClient, ApiError } from "../../utils/api";
import { usePathname } from "next/navigation";
import NotFound from "../components/NotFound";

interface ToolConfig {
  api: string;
  multiple: boolean;
  accept: string;
  resultName: string;
  title: string;
  desc: string;
  button: string;
}

// Map route path to API endpoint and file input config
const toolConfig: Record<string, ToolConfig> = {
  "merge-pdf": { 
    api: "merge", 
    multiple: true, 
    accept: "application/pdf", 
    resultName: "result.pdf",
    title: "Merge PDF Files",
    desc: "Combine multiple PDF files into one document",
    button: "Select PDF Files"
  },
  "compress-pdf": { 
    api: "compress", 
    multiple: false, 
    accept: "application/pdf", 
    resultName: "result.pdf",
    title: "Compress PDF",
    desc: "Reduce PDF file size while maintaining quality",
    button: "Choose PDF file"
  },
  "split-pdf": { 
    api: "split", 
    multiple: false, 
    accept: "application/pdf", 
    resultName: "split_pages.zip",
    title: "Split PDF",
    desc: "Split PDF into separate pages or sections",
    button: "Choose PDF file"
  },
  "rotate-pdf": { 
    api: "rotate", 
    multiple: false, 
    accept: "application/pdf", 
    resultName: "result.pdf",
    title: "Rotate PDF",
    desc: "Rotate PDF pages by 90, 180, or 270 degrees",
    button: "Choose PDF file"
  },
  "add-watermark": { 
    api: "watermark", 
    multiple: false, 
    accept: "application/pdf", 
    resultName: "result.pdf",
    title: "Add Watermark",
    desc: "Add text or image watermarks to your PDF documents",
    button: "Choose PDF file"
  }
};

export default function ToolPage() {
  const pathname = usePathname();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Memoize the tool config to avoid recalculation
  const currentTool = useMemo(() => {
    const path = pathname?.replace('/', '') || '';
    return toolConfig[path];
  }, [pathname]);

  // Early return for invalid tools
  if (!currentTool) {
    return <NotFound />;
  }

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    setError(null);
    setSuccess(null);
    setUploadProgress(0);

    try {
      let response;
      if (currentTool.multiple) {
        response = await apiClient.uploadMultipleFiles(`/api/${currentTool.api}`, Array.from(files));
      } else {
        response = await apiClient.uploadFile(`/api/${currentTool.api}`, files[0]);
      }
      setSuccess("File processed successfully!");
      setUploadProgress(100);
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      if (fileInputRef.current) {
        fileInputRef.current.files = files;
        handleFileSelect({ target: { files } } as React.ChangeEvent<HTMLInputElement>);
      }
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {currentTool.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentTool.desc}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md mx-auto">
          <div
            className="border-2 border-dashed border-gray-300 rounded-xl p-4 sm:p-6 text-center hover:border-primary transition-colors duration-200"
            style={{ minHeight: 0 }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <FaCloudUploadAlt className="mx-auto h-10 w-10 text-gray-400 mb-2" />
            <div className="space-y-2">
              <h3 className="text-base font-medium text-gray-900">
                {currentTool.button}
              </h3>
              <p className="text-xs text-gray-500">
                or drag and drop your files here
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept={currentTool.accept}
                multiple={currentTool.multiple}
                onChange={handleFileSelect}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="mt-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-sm"
              >
                {isUploading ? 'Processing...' : 'Choose Files'}
              </button>
            </div>
          </div>

          {isUploading && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Upload Progress</span>
                <span className="text-sm text-gray-500">{uploadProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {success && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800">{success}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 