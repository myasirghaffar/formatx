// Example usage for PDF to Word conversion
const handlePdfToWord = async (selectedFile) => {
  const formData = new FormData();
  formData.append("file", selectedFile);

  const response = await fetch("http://localhost:5000/api/pdf-to-word", {
    method: "POST",
    body: formData,
  });
  
  if (!response.ok) {
    throw new Error(`API request failed: ${await response.text()}`);
  }
  
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "converted.docx";
  a.click();
  window.URL.revokeObjectURL(url);
};

export { handlePdfToWord };
