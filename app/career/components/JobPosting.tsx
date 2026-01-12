import React from "react";

const JobPosting = () => {
  return (
    <div className="relative overflow-x-hidden">
      <img
        src="/Geometric_Shape_Silver.png"
        alt="Geometric shape"
        className="absolute -top-6 -right-6 w-36 h-36 pointer-events-none"
      />
      {/* Heading */}
      <div className="my-30">
        <div className="text-center mx-20">
          <p className="text-lg text-emerald-400 mb-2 font-semibold">
            Job Opportunities
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Job Openings
          </h2>
        </div>

        {/* Job Listing cards */}
        <div className="space-y-4 max-w-5xl mx-auto my-10">
          {/* Job Card 1 */}
          <div className="bg-[#1F1F1F] bg-opacity-50 backdrop-blur border border-gray-600 rounded-xl px-6 py-3 hover:border-teal-500 transition-colors">
            <div className="flex flex-row items-center gap-6">
              <h3 className="text-lg font-medium mr-8 text-white">
                Business Development Manager
              </h3>

              <div
                className="flex-none  mx-4"
                style={{
                  width: "1px",
                  height: "56px",
                  background:
                    "linear-gradient(0deg, #704646 0%, #704646 100%), #FFF",
                }}
                aria-hidden="true"
              />

              <div className="flex-none text-gray-300 text-sm  mx-8">
                Karachi
              </div>

              <div
                className="flex-none mx-4"
                style={{
                  width: "1px",
                  height: "89px",
                  background:
                    "linear-gradient(0deg, #704646 0%, #704646 100%), #FFF",
                }}
                aria-hidden="true"
              />

              <div className="flex-none text-gray-300 text-sm mx-8">
                Full Time
              </div>

              <div
                className="flex-none mx-4"
                style={{
                  width: "1px",
                  height: "89px",
                  background:
                    "linear-gradient(0deg, #704646 0%, #704646 100%), #FFF",
                }}
                aria-hidden="true"
              />

              <div className="ml-auto">
                <button className="px-3 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-medium inline-flex items-center gap-2 whitespace-nowrap transition-colors">
                  Apply Now
                    <span className="bg-black w-8 h-8 rounded-full inline-flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 31 31"
                        fill="none"
                      >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16519 6.90314V8.69813L7.02384 8.87258C6.28819 8.93178 5.59363 9.23594 5.05121 9.73642C4.50879 10.2369 4.14985 10.9048 4.03177 11.6333C3.97952 11.9595 3.93148 12.286 3.88766 12.613C3.87783 12.6921 3.89318 12.7723 3.93153 12.8422C3.96988 12.9121 4.02928 12.9681 4.10129 13.0023L4.19863 13.0478C11.0613 16.2965 19.2791 16.2965 26.1405 13.0478L26.2378 13.0023C26.3096 12.9679 26.3688 12.9118 26.4069 12.8419C26.445 12.7721 26.4601 12.692 26.4502 12.613C26.4073 12.2858 26.3597 11.9592 26.3074 11.6333C26.1893 10.9048 25.8303 10.2369 25.2879 9.73642C24.7455 9.23594 24.0509 8.93178 23.3153 8.87258L21.1739 8.6994V6.9044C21.1741 6.37457 20.984 5.86229 20.6384 5.46072C20.2927 5.05916 19.8144 4.795 19.2905 4.71628L17.7483 4.48496C16.0386 4.22942 14.3005 4.22942 12.5908 4.48496L11.0487 4.71628C10.5249 4.79497 10.0468 5.05895 9.70117 5.46025C9.35555 5.86154 9.16537 6.37352 9.16519 6.90314ZM17.4664 6.35959C15.9436 6.13214 14.3955 6.13214 12.8727 6.35959L11.3306 6.59091C11.2557 6.60211 11.1874 6.63978 11.138 6.69707C11.0886 6.75437 11.0614 6.82749 11.0613 6.90314V8.5654C13.7979 8.40912 16.5412 8.40912 19.2778 8.5654V6.90314C19.2777 6.82749 19.2505 6.75437 19.2011 6.69707C19.1517 6.63978 19.0834 6.60211 19.0086 6.59091L17.4664 6.35959Z"
                      fill="white"
                    />
                    <path
                      d="M26.6941 15.2574C26.6916 15.2165 26.6792 15.1769 26.658 15.1419C26.6368 15.1069 26.6074 15.0775 26.5723 15.0564C26.5372 15.0352 26.4976 15.0229 26.4567 15.0205C26.4158 15.0181 26.375 15.0257 26.3377 15.0425C19.2955 18.161 11.041 18.161 3.99886 15.0425C3.96155 15.0257 3.9207 15.0181 3.87982 15.0205C3.83895 15.0229 3.79927 15.0352 3.76421 15.0564C3.72914 15.0775 3.69973 15.1069 3.67851 15.1419C3.65729 15.1769 3.6449 15.2165 3.64239 15.2574C3.51436 17.6775 3.64445 20.1043 4.03046 22.4968C4.14829 23.2256 4.50712 23.8937 5.04956 24.3945C5.59199 24.8952 6.2867 25.1995 7.02253 25.2588L9.38889 25.4484C13.2355 25.7594 17.0998 25.7594 20.9476 25.4484L23.314 25.2588C24.0498 25.1995 24.7445 24.8952 25.287 24.3945C25.8294 23.8937 26.1882 23.2256 26.3061 22.4968C26.6929 20.1014 26.8243 17.6743 26.6941 15.2587"
                      fill="white"
                    />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Job Posting Card 2 */}
          <div className="bg-[#1F1F1F] bg-opacity-50 backdrop-blur border border-gray-600 rounded-xl px-6 py-3 hover:border-teal-500 transition-colors">
            <div className="flex flex-row items-center gap-6">
              <h3 className="text-lg font-medium mr-8 text-white">
                Business Development Manager
              </h3>

              <div
                className="flex-none  mx-4"
                style={{
                  width: "1px",
                  height: "56px",
                  background:
                    "linear-gradient(0deg, #704646 0%, #704646 100%), #FFF",
                }}
                aria-hidden="true"
              />

              <div className="flex-none text-gray-300 text-sm  mx-8">
                Karachi
              </div>

              <div
                className="flex-none mx-4"
                style={{
                  width: "1px",
                  height: "89px",
                  background:
                    "linear-gradient(0deg, #704646 0%, #704646 100%), #FFF",
                }}
                aria-hidden="true"
              />

              <div className="flex-none text-gray-300 text-sm mx-8">
                Full Time
              </div>

              <div
                className="flex-none mx-4"
                style={{
                  width: "1px",
                  height: "89px",
                  background:
                    "linear-gradient(0deg, #704646 0%, #704646 100%), #FFF",
                }}
                aria-hidden="true"
              />

              <div className="ml-auto">
                <button className="px-3 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-medium inline-flex items-center gap-2 whitespace-nowrap transition-colors">
                  Apply Now
                    <span className="bg-black w-8 h-8 rounded-full inline-flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 31 31"
                        fill="none"
                      >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16519 6.90314V8.69813L7.02384 8.87258C6.28819 8.93178 5.59363 9.23594 5.05121 9.73642C4.50879 10.2369 4.14985 10.9048 4.03177 11.6333C3.97952 11.9595 3.93148 12.286 3.88766 12.613C3.87783 12.6921 3.89318 12.7723 3.93153 12.8422C3.96988 12.9121 4.02928 12.9681 4.10129 13.0023L4.19863 13.0478C11.0613 16.2965 19.2791 16.2965 26.1405 13.0478L26.2378 13.0023C26.3096 12.9679 26.3688 12.9118 26.4069 12.8419C26.445 12.7721 26.4601 12.692 26.4502 12.613C26.4073 12.2858 26.3597 11.9592 26.3074 11.6333C26.1893 10.9048 25.8303 10.2369 25.2879 9.73642C24.7455 9.23594 24.0509 8.93178 23.3153 8.87258L21.1739 8.6994V6.9044C21.1741 6.37457 20.984 5.86229 20.6384 5.46072C20.2927 5.05916 19.8144 4.795 19.2905 4.71628L17.7483 4.48496C16.0386 4.22942 14.3005 4.22942 12.5908 4.48496L11.0487 4.71628C10.5249 4.79497 10.0468 5.05895 9.70117 5.46025C9.35555 5.86154 9.16537 6.37352 9.16519 6.90314ZM17.4664 6.35959C15.9436 6.13214 14.3955 6.13214 12.8727 6.35959L11.3306 6.59091C11.2557 6.60211 11.1874 6.63978 11.138 6.69707C11.0886 6.75437 11.0614 6.82749 11.0613 6.90314V8.5654C13.7979 8.40912 16.5412 8.40912 19.2778 8.5654V6.90314C19.2777 6.82749 19.2505 6.75437 19.2011 6.69707C19.1517 6.63978 19.0834 6.60211 19.0086 6.59091L17.4664 6.35959Z"
                      fill="white"
                    />
                    <path
                      d="M26.6941 15.2574C26.6916 15.2165 26.6792 15.1769 26.658 15.1419C26.6368 15.1069 26.6074 15.0775 26.5723 15.0564C26.5372 15.0352 26.4976 15.0229 26.4567 15.0205C26.4158 15.0181 26.375 15.0257 26.3377 15.0425C19.2955 18.161 11.041 18.161 3.99886 15.0425C3.96155 15.0257 3.9207 15.0181 3.87982 15.0205C3.83895 15.0229 3.79927 15.0352 3.76421 15.0564C3.72914 15.0775 3.69973 15.1069 3.67851 15.1419C3.65729 15.1769 3.6449 15.2165 3.64239 15.2574C3.51436 17.6775 3.64445 20.1043 4.03046 22.4968C4.14829 23.2256 4.50712 23.8937 5.04956 24.3945C5.59199 24.8952 6.2867 25.1995 7.02253 25.2588L9.38889 25.4484C13.2355 25.7594 17.0998 25.7594 20.9476 25.4484L23.314 25.2588C24.0498 25.1995 24.7445 24.8952 25.287 24.3945C25.8294 23.8937 26.1882 23.2256 26.3061 22.4968C26.6929 20.1014 26.8243 17.6743 26.6941 15.2587"
                      fill="white"
                    />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Job Posting Card 3 */}

          <div className="bg-[#1F1F1F] bg-opacity-50 backdrop-blur border border-gray-600 rounded-xl px-6 py-3 hover:border-teal-500 transition-colors">
            <div className="flex flex-row items-center gap-6">
              <h3 className="text-lg font-medium mr-8 text-white">
                Business Development Manager
              </h3>

              <div
                className="flex-none  mx-4"
                style={{
                  width: "1px",
                  height: "56px",
                  background:
                    "linear-gradient(0deg, #704646 0%, #704646 100%), #FFF",
                }}
                aria-hidden="true"
              />

              <div className="flex-none text-gray-300 text-sm  mx-8">
                Karachi
              </div>

              <div
                className="flex-none mx-4"
                style={{
                  width: "1px",
                  height: "89px",
                  background:
                    "linear-gradient(0deg, #704646 0%, #704646 100%), #FFF",
                }}
                aria-hidden="true"
              />

              <div className="flex-none text-gray-300 text-sm mx-8">
                Full Time
              </div>

              <div
                className="flex-none mx-4"
                style={{
                  width: "1px",
                  height: "89px",
                  background:
                    "linear-gradient(0deg, #704646 0%, #704646 100%), #FFF",
                }}
                aria-hidden="true"
              />

              <div className="ml-auto">
                <button className="px-3 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-medium inline-flex items-center gap-2 whitespace-nowrap transition-colors">
                  Apply Now
                    <span className="bg-black w-8 h-8 rounded-full inline-flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 31 31"
                        fill="none"
                      >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16519 6.90314V8.69813L7.02384 8.87258C6.28819 8.93178 5.59363 9.23594 5.05121 9.73642C4.50879 10.2369 4.14985 10.9048 4.03177 11.6333C3.97952 11.9595 3.93148 12.286 3.88766 12.613C3.87783 12.6921 3.89318 12.7723 3.93153 12.8422C3.96988 12.9121 4.02928 12.9681 4.10129 13.0023L4.19863 13.0478C11.0613 16.2965 19.2791 16.2965 26.1405 13.0478L26.2378 13.0023C26.3096 12.9679 26.3688 12.9118 26.4069 12.8419C26.445 12.7721 26.4601 12.692 26.4502 12.613C26.4073 12.2858 26.3597 11.9592 26.3074 11.6333C26.1893 10.9048 25.8303 10.2369 25.2879 9.73642C24.7455 9.23594 24.0509 8.93178 23.3153 8.87258L21.1739 8.6994V6.9044C21.1741 6.37457 20.984 5.86229 20.6384 5.46072C20.2927 5.05916 19.8144 4.795 19.2905 4.71628L17.7483 4.48496C16.0386 4.22942 14.3005 4.22942 12.5908 4.48496L11.0487 4.71628C10.5249 4.79497 10.0468 5.05895 9.70117 5.46025C9.35555 5.86154 9.16537 6.37352 9.16519 6.90314ZM17.4664 6.35959C15.9436 6.13214 14.3955 6.13214 12.8727 6.35959L11.3306 6.59091C11.2557 6.60211 11.1874 6.63978 11.138 6.69707C11.0886 6.75437 11.0614 6.82749 11.0613 6.90314V8.5654C13.7979 8.40912 16.5412 8.40912 19.2778 8.5654V6.90314C19.2777 6.82749 19.2505 6.75437 19.2011 6.69707C19.1517 6.63978 19.0834 6.60211 19.0086 6.59091L17.4664 6.35959Z"
                      fill="white"
                    />
                    <path
                      d="M26.6941 15.2574C26.6916 15.2165 26.6792 15.1769 26.658 15.1419C26.6368 15.1069 26.6074 15.0775 26.5723 15.0564C26.5372 15.0352 26.4976 15.0229 26.4567 15.0205C26.4158 15.0181 26.375 15.0257 26.3377 15.0425C19.2955 18.161 11.041 18.161 3.99886 15.0425C3.96155 15.0257 3.9207 15.0181 3.87982 15.0205C3.83895 15.0229 3.79927 15.0352 3.76421 15.0564C3.72914 15.0775 3.69973 15.1069 3.67851 15.1419C3.65729 15.1769 3.6449 15.2165 3.64239 15.2574C3.51436 17.6775 3.64445 20.1043 4.03046 22.4968C4.14829 23.2256 4.50712 23.8937 5.04956 24.3945C5.59199 24.8952 6.2867 25.1995 7.02253 25.2588L9.38889 25.4484C13.2355 25.7594 17.0998 25.7594 20.9476 25.4484L23.314 25.2588C24.0498 25.1995 24.7445 24.8952 25.287 24.3945C25.8294 23.8937 26.1882 23.2256 26.3061 22.4968C26.6929 20.1014 26.8243 17.6743 26.6941 15.2587"
                      fill="white"
                    />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPosting;
