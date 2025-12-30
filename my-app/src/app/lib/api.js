// API utility functions
import { getApiUrl, API_CONFIG } from '../config/api';

/**
 * Fetches complete course details from the API
 * @param {number|string} courseId - The course ID or slug
 * @returns {Promise<Object>} Course data
 */
export async function fetchCourseCompleteDetail(courseIdOrSlug) {
  try {
    // Try with ID/slug first
    let url = getApiUrl(API_CONFIG.courses.completeDetail(courseIdOrSlug));
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    // If 500 error, the endpoint might not exist or course ID is invalid
    if (!response.ok) {
      if (response.status === 500) {
        console.warn(`Course endpoint returned 500 for ${courseIdOrSlug}. This might be a backend issue or the course might not exist.`);
        // Try to get more details from the error response
        try {
          const errorData = await response.text();
          console.error('API Error Response:', errorData);
        } catch (e) {
          // Ignore parsing errors
        }
      }
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching course details for ${courseIdOrSlug}:`, error);
    throw error;
  }
}

/**
 * Fetches complete department details from the API
 * @param {number} departmentId - The department ID
 * @returns {Promise<Object>} Department data
 */
export async function fetchDepartmentCompleteDetail(departmentId) {
  try {
    const url = getApiUrl(API_CONFIG.departments.completeDetail(departmentId));
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Cache control for client-side fetching
      cache: 'no-store', // Always fetch fresh data, or use 'default' for browser caching
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching department details:', error);
    throw error;
  }
}

/**
 * Helper function to extract results from API response (handles paginated and direct array responses)
 * @param {Object|Array} data - API response data
 * @returns {Array} Array of items
 */
function extractResults(data) {
  if (Array.isArray(data)) {
    return data;
  }
  if (data && Array.isArray(data.results)) {
    return data.results;
  }
  if (data && data.data && Array.isArray(data.data)) {
    return data.data;
  }
  return [];
}

/**
 * Fetches all departments from the API
 * @returns {Promise<Array>} Array of department objects
 */
export async function fetchAllDepartments() {
  try {
    const url = getApiUrl(API_CONFIG.departments.list());
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return extractResults(data);
  } catch (error) {
    console.error('Error fetching all departments:', error);
    throw error;
  }
}

/**
 * Fetches all department courses (optimized endpoint)
 * @returns {Promise<Array>} Array of course objects with department info
 */
export async function fetchAllDepartmentCourses() {
  try {
    const url = getApiUrl(API_CONFIG.departmentCourses.list());
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return extractResults(data);
  } catch (error) {
    console.error('Error fetching all department courses:', error);
    throw error;
  }
}

/**
 * Fetches all courses from the API
 * @returns {Promise<Array>} Array of course objects
 */
export async function fetchAllCourses() {
  try {
    const url = getApiUrl(API_CONFIG.courses.list());
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return extractResults(data);
  } catch (error) {
    console.error('Error fetching all courses:', error);
    throw error;
  }
}

/**
 * Fetches courses for a department from the API
 * @param {string|number} slugOrId - The department slug or ID
 * @returns {Promise<Array>} Array of course objects
 */
export async function fetchDepartmentCourses(slugOrId) {
  try {
    const url = getApiUrl(API_CONFIG.departments.courses(slugOrId));
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return extractResults(data);
  } catch (error) {
    console.error('Error fetching department courses:', error);
    throw error;
  }
}

/**
 * Helper function to parse HTML content to plain text paragraphs
 * @param {string} htmlContent - HTML string from API
 * @returns {string[]} Array of paragraph strings
 */
export function parseHtmlToParagraphs(htmlContent) {
  if (!htmlContent) return [];
  
  // Remove HTML tags and split by paragraph breaks
  const text = htmlContent
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
  
  // Split by newlines and filter out empty strings
  return text
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);
}

/**
 * Helper function to convert HTML content to plain text (single string)
 * @param {string} htmlContent - HTML string from API
 * @returns {string} Plain text string
 */
export function parseHtmlToText(htmlContent) {
  if (!htmlContent) return '';
  
  // Remove HTML tags and decode entities
  const text = htmlContent
    .replace(/<[^>]*>/g, '') // Remove all HTML tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();
  
  return text;
}

/**
 * Helper function to parse HTML list items into an array of HTML strings
 * Extracts content from <li> tags, preserving HTML inside
 * @param {string} htmlContent - HTML string containing <ul> or <ol> with <li> items
 * @returns {string[]} Array of HTML strings (one per list item)
 */
export function parseHtmlListItems(htmlContent) {
  if (!htmlContent) return [];
  
  // Match all <li>...</li> tags and extract their inner content
  const liMatches = htmlContent.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
  
  if (!liMatches) return [];
  
  return liMatches.map(li => {
    // Extract the inner content of the <li> tag
    const innerMatch = li.match(/<li[^>]*>([\s\S]*?)<\/li>/i);
    if (innerMatch && innerMatch[1]) {
      // Clean up whitespace but preserve HTML structure
      return innerMatch[1].trim();
    }
    return '';
  }).filter(item => item.length > 0);
}

/**
 * Fetches course counts for all departments
 * @returns {Promise<Array>} Array of department objects with course_count
 */
export async function fetchDepartmentCourseCounts() {
  try {
    const url = getApiUrl(API_CONFIG.departments.courseCounts());
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return extractResults(data);
  } catch (error) {
    console.error('Error fetching department course counts:', error);
    throw error;
  }
}

/**
 * Fetches all departments and courses filtered by program type and/or department
 * @param {string|null} programType - Program type filter (ug, pg, phd, diploma) or null for all
 * @param {string|null} department - Department slug or ID filter or null for all
 * @returns {Promise<Object>} Object with departments and courses arrays
 */
export async function fetchAllDepartmentsCourses(programType = null, department = null) {
  try {
    const url = getApiUrl(API_CONFIG.departments.allDepartmentsCourses(programType, department));
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching all departments courses${programType ? ` for ${programType}` : ''}${department ? ` in ${department}` : ''}:`, error);
    throw error;
  }
}

/**
 * Fetches departments and courses from the combined endpoint
 * @returns {Promise<Object>} Object with departments, courses, and metadata
 */
export async function fetchDepartmentsCourses() {
  try {
    const url = getApiUrl(API_CONFIG.departmentCourses.departmentsCourses());
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching departments and courses:', error);
    throw error;
  }
}

/**
 * Updates the course count for a department
 * @param {number} departmentId - The department ID
 * @param {number} courseCount - The course count to update
 * @returns {Promise<Object>} API response
 */
export async function updateDepartmentCourseCount(departmentId, courseCount) {
  try {
    const url = getApiUrl(API_CONFIG.departments.updateCourseCount());
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        department_id: departmentId,
        course_count: courseCount,
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error updating course count for department ${departmentId}:`, error);
    throw error;
  }
}

/**
 * Fetches all course-about data (handles pagination)
 * @returns {Promise<Array>} Array of course-about objects
 */
export async function fetchAllCourseAbout() {
  try {
    let allResults = [];
    let nextUrl = getApiUrl(API_CONFIG.courses.about());
    let pageCount = 0;
    const maxPages = 100; // Safety limit to prevent infinite loops
    
    while (nextUrl && pageCount < maxPages) {
      try {
        // Handle both absolute and relative URLs
        const fetchUrl = nextUrl.startsWith('http') ? nextUrl : getApiUrl(nextUrl);
        
        const response = await fetch(fetchUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-store',
        });

        if (!response.ok) {
          // If it's a 404 or 500 on subsequent pages, return what we have
          if (pageCount > 0 && (response.status === 404 || response.status === 500)) {
            console.warn(`Stopped pagination at page ${pageCount + 1} due to ${response.status}`);
            break;
          }
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        // Extract results from paginated response
        if (data.results && Array.isArray(data.results)) {
          allResults = allResults.concat(data.results);
        }
        
        // Check if there's a next page
        nextUrl = data.next ? data.next : null;
        pageCount++;
      } catch (fetchError) {
        // If it's the first page, throw the error
        if (pageCount === 0) {
          // Provide more helpful error message
          if (fetchError.message === 'Failed to fetch' || fetchError.name === 'TypeError') {
            throw new Error(`Network error: Unable to fetch course-about data. This might be due to CORS issues or network connectivity. Original error: ${fetchError.message}`);
          }
          throw fetchError;
        }
        // If it's a subsequent page, log warning and return what we have
        console.warn(`Error fetching page ${pageCount + 1} of course-about data:`, fetchError);
        break;
      }
    }

    return allResults;
  } catch (error) {
    console.error('Error fetching course-about data:', error);
    throw error;
  }
}