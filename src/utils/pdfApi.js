// Utility function to interact with PDF API endpoints
export async function uploadPDF(api, files) {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file)); // For merge, or single file for compress/convert
    const response = await fetch(`http://localhost:5000/api/pdf/${api}`, {
        method: 'POST',
        body: formData
    });
    if (!response.ok) {
        throw new Error('API request failed');
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = api === 'convert' ? 'result.docx' : 'result.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
} 