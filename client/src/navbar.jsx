import React from 'react'

const Navbar = () => {
  return (
    <nav className="border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                d="M12 4L13.9 8.1L18 10L13.9 11.9L12 16L10.1 11.9L6 10L10.1 8.1L12 4Z"
                fill="currentColor"
              />
              <path
                d="M4 12H9M15 12H20M12 15V20M12 4V9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-800 sm:text-xl">
            MediCare
          </span>
        </a>

        <div className="ml-auto flex items-center gap-3 sm:gap-4">
          <div className="w-44 sm:w-64 md:w-80">
            <label htmlFor="hospital-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M20 20L16.65 16.65"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <input
                id="hospital-search"
                type="text"
                placeholder="Search hospitals, doctors, services..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
              />
            </div>
          </div>

          <button
            type="button"
            aria-label="User profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-emerald-300 hover:text-emerald-700"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.8" />
              <path
                d="M5 19C5.8 16.2 8.5 14.5 12 14.5C15.5 14.5 18.2 16.2 19 19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar