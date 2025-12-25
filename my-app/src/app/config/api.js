// Global API Configuration
export const API_CONFIG = {
  baseURL: 'https://kalinga.dupebox.com/api',
  
  // Course endpoints
  courses: {
    list: () => `/courses/`,
    completeDetail: (courseId) => `/courses/${courseId}/complete-detail/`,
  },
  
  // Department endpoints
  departments: {
    list: () => `/departments/`,
    completeDetail: (departmentId) => `/departments/${departmentId}/complete-detail/`,
    courses: (slugOrId) => `/departments/${slugOrId}/courses/`,
  },
  
  // Optimized endpoints
  departmentCourses: {
    list: () => `/department-courses/`,
  },
  
  // Add other API endpoints here as needed
};

// Helper function to build full API URL
export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.baseURL}${endpoint}`;
};
