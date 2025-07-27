// API Configuration and utilities
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000',
  TIMEOUT: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '30000'),
} as const;

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ApiErrorInterface {
  message: string;
  status: number;
  details?: unknown;
}

// API utility functions
export class ApiClient {
  private baseUrl: string;
  private timeout: number;

  constructor() {
    this.baseUrl = API_CONFIG.BASE_URL;
    this.timeout = API_CONFIG.TIMEOUT;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        throw new ApiError(
          `API request failed (${response.status}): ${errorText}`,
          response.status,
          errorText
        );
      }

      // Handle different response types
      const contentType = response.headers.get('content-type');
      if (contentType?.includes('application/json')) {
        return await response.json();
      } else {
        return await response.blob() as T;
      }
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(
        error instanceof Error ? error.message : 'Network error',
        0,
        error
      );
    }
  }

  // File upload methods
  async uploadFile(
    endpoint: string,
    file: File,
    additionalData?: Record<string, string>
  ): Promise<Blob> {
    const formData = new FormData();
    formData.append('file', file);
    
    if (additionalData) {
      Object.entries(additionalData).forEach(([key, value]) => {
        formData.append(key, value);
      });
    }

    return this.request<Blob>(endpoint, {
      method: 'POST',
      body: formData,
      headers: {}, // Let browser set Content-Type for FormData
    });
  }

  async uploadMultipleFiles(
    endpoint: string,
    files: File[],
    additionalData?: Record<string, string>
  ): Promise<Blob> {
    const formData = new FormData();
    
    files.forEach((file) => {
      formData.append('files', file);
    });
    
    if (additionalData) {
      Object.entries(additionalData).forEach(([key, value]) => {
        formData.append(key, value);
      });
    }

    return this.request<Blob>(endpoint, {
      method: 'POST',
      body: formData,
      headers: {}, // Let browser set Content-Type for FormData
    });
  }

  // Specific API methods
  async pdfToWord(file: File): Promise<Blob> {
    return this.uploadFile('/api/pdf-to-word', file);
  }

  async mergePdfs(files: File[]): Promise<Blob> {
    return this.uploadMultipleFiles('/api/merge', files);
  }

  async compressPdf(file: File): Promise<Blob> {
    return this.uploadFile('/api/compress', file);
  }

  async pdfToPowerpoint(file: File): Promise<Blob> {
    return this.uploadFile('/api/pdf-to-powerpoint', file);
  }

  async pdfToExcel(file: File): Promise<Blob> {
    return this.uploadFile('/api/pdf-to-excel', file);
  }

  async wordToPdf(file: File): Promise<Blob> {
    return this.uploadFile('/api/word-to-pdf', file);
  }

  async powerpointToPdf(file: File): Promise<Blob> {
    return this.uploadFile('/api/powerpoint-to-pdf', file);
  }

  async excelToPdf(file: File): Promise<Blob> {
    return this.uploadFile('/api/excel-to-pdf', file);
  }

  async jpgToPdf(files: File[]): Promise<Blob> {
    return this.uploadMultipleFiles('/api/jpg-to-pdf', files);
  }

  async pdfToJpg(file: File): Promise<Blob> {
    return this.uploadFile('/api/pdf-to-jpg', file);
  }
}

// Custom error class
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public details?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Legacy function for backward compatibility
export const handlePdfToWord = async (selectedFile: File): Promise<void> => {
  try {
    const blob = await apiClient.pdfToWord(selectedFile);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "converted.docx";
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('PDF to Word conversion failed:', error);
    throw error;
  }
}; 