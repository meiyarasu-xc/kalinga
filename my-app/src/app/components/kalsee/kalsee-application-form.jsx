'use client';

export default function KalseeApplicationForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('KALSEE Application Form Submitted');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white/95 backdrop-blur-sm rounded-lg p-6 md:p-8 w-full max-w-md shadow-xl"
    >
        <div className="space-y-4">
          <div>
            <input
              type="text"
              id="kalsee-name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)] focus:border-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="kalsee-email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)] focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              id="kalsee-phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)] focus:border-transparent"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <select
              id="kalsee-course"
              name="course"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)] focus:border-transparent"
              required
            >
              <option value="">Select a course</option>
              <option value="btech">B.Tech</option>
              <option value="ug">Undergraduate Courses (except B.Tech)</option>
              <option value="pg">Postgraduate Courses</option>
              <option value="llm">LLM</option>
              <option value="phd">Ph.D.</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              id="kalsee-qualification"
              name="qualification"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-red)] focus:border-transparent"
              placeholder="e.g., 12th, Graduation"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--button-red)] text-white py-3 px-6 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
          >
            Submit Application
          </button>
        </div>
      </form>
  );
}

