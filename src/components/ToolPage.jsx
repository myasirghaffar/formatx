import { FaCloudUploadAlt } from "react-icons/fa";
import React, { useRef, useState } from "react";

// Map route path to API endpoint and file input config
const toolConfig = {
  "merge-pdf": { api: "merge", multiple: true, accept: "application/pdf", resultName: "result.pdf" },
  "compress-pdf": { api: "compress", multiple: false, accept: "application/pdf", resultName: "result.pdf" },
  "pdf-to-word": { api: "pdf-to-word", multiple: false, accept: "application/pdf", resultName: "converted.docx" },
  "pdf-to-powerpoint": { api: "pdf-to-powerpoint", multiple: false, accept: "application/pdf", resultName: "converted.pptx" },
  "pdf-to-excel": { api: "pdf-to-excel", multiple: false, accept: "application/pdf", resultName: "converted.xlsx" },
  "word-to-pdf": { api: "word-to-pdf", multiple: false, accept: ".doc,.docx", resultName: "converted.pdf" },
  "powerpoint-to-pdf": { api: "powerpoint-to-pdf", multiple: false, accept: ".ppt,.pptx", resultName: "converted.pdf" },
  "excel-to-pdf": { api: "excel-to-pdf", multiple: false, accept: ".xls,.xlsx", resultName: "converted.pdf" },
  "jpg-to-pdf": { api: "jpg-to-pdf", multiple: true, accept: "image/*", resultName: "converted.pdf" },
  "pdf-to-jpg": { api: "pdf-to-jpg", multiple: false, accept: "application/pdf", resultName: "converted.jpg" },
};

const ToolPage = ({ title, desc, button }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const fileRef = useRef();

  // Get current tool from window.location.pathname
  const path = window.location.pathname.replace(/^\//, "");
  const config = toolConfig[path] || {};

  const handleUpload = async () => {
    setError("");
    setDownloadUrl("");
    const files = Array.from(fileRef.current.files);
    if (!files.length) {
      setError("Please select file(s)");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      
      // Handle single file upload for most conversions
      if (config.multiple) {
        files.forEach(file => formData.append('files', file));
      } else {
        formData.append('file', files[0]);
      }
      
      const apiUrl = `http://localhost:5000/api/${config.api}`;
      console.log('Making request to:', apiUrl);
      console.log('File being uploaded:', files[0]?.name);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData
      });
      
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`API request failed (${response.status}): ${errorText}`);
      }
      
      const blob = await response.blob();
      console.log('Blob received:', blob.size, 'bytes');
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (e) {
      console.error('Upload error:', e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!downloadUrl) return;
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = config.resultName || 'result.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(downloadUrl);
    setDownloadUrl("");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] bg-[#f7f6fb] py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">{title}</h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl">{desc}</p>
      <div className="flex flex-col items-center bg-white px-6 py-16 rounded-lg shadow w-full max-w-md">
        <input
          type="file"
          ref={fileRef}
          multiple={!!config.multiple}
          accept={config.accept}
          className="mb-4 hidden"
          onChange={async () => {
            setError("");
            await handleUpload();
          }}
        />
        <button
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded transition-all mb-2"
          onClick={() => fileRef.current && fileRef.current.click()}
          disabled={loading}
        >
          <FaCloudUploadAlt /> {button}
        </button>
        {downloadUrl && (
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded transition-all mt-2"
            onClick={handleDownload}
          >
            Download Result
          </button>
        )}
        {loading && <div className="mt-4 text-primary">Processing...</div>}
        {error && <div className="mt-4 text-red-500">{error}</div>}
      </div>
    </main>
  );
};

export default ToolPage; 