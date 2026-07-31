// Mock Data structure for frontend components
export const mockData = {
  // We will populate this with the tools, services, experiences, etc.
};

// Simple fetch wrapper for API calls
export const apiClient = {
  post: async (endpoint: string, data: any) => {
    // In Phase 6, replace this with actual fetch call to Django backend
    return new Promise(resolve => setTimeout(resolve, 1500));
  }
};
