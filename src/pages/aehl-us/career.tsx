export default function USCareer() {
  const jobOpenings = [
    {
      id: "assistant-to-the-board",
      title: "Assistant to the Board",
      location: "New York, NY, USA",
      type: "Full-time",
      responsibilities: [
        "Manage the Chairman’s calendar and arrange meetings",
        "Coordinate board meetings and assist with governance tasks",
        "Arrange domestic and international travel",
        "Prepare accurate expense reports and basic documents",
        "Communicate professionally and maintain strict confidentiality",
        "Work closely with the administrative team to ensure smooth operations",
      ],
      requirements: [
        "Professional appearance, good demeanor, and strong communication skills",
        "Proactive, reliable, detail-oriented, and able to handle pressure",
        "Strong skills in Outlook, PowerPoint, Teams, and OneDrive; basic Excel required",
        "Valid driver’s license",
        "Internship experience in finance, investment, or administrative support is a plus",
        "Bachelor’s degree preferred",
        "Bilingual in Mandarin preferred",
      ],
    },
  ];

  return (
    <div id="container" className="container">
      {/* Hero */}
      <div
        className="bg-local flex w-full h-[40vh] justify-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/aehl/image/upload/v1724430441/img4.50ec3eb4_vgyxwa.png')",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Intro Section */}
      <div className="flex row flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 mt-8">
        <div className="md:w-1/2 ml-0 min-h-[400px] md:min-h-[500px]">
          <img
            className="object-contain w-full h-full"
            src="https://res.cloudinary.com/aehl/image/upload/v1770739393/Career_qvefdt.jpg"
            alt="Career at AEHL"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="mb-2 tracking-wider font-bold">Careers</h1>
          <h2 className="mb-2">Build the Future of AI Infrastructure</h2>
          <p>
            At Antelope Enterprise Holdings USA Inc, we drive the future of AI
            technology through sustainable, high-performance energy solutions.
            Our work focuses on converting natural gas into electrical energy
            with state-of-the-art gas generators that directly power data
            centers, improving efficiency and eliminating traditional energy
            losses. Through cutting-edge techniques and strategic resource
            management, we’re setting new industry benchmarks while supporting
            the growing demands of advanced computing infrastructure. Committed
            to innovation, sustainability, and operational excellence, we’re
            building the energy foundation for tomorrow’s AI systems—join us and
            help power the future.
          </p>
        </div>
      </div>

      {/* Job Openings */}
      <div className="pb-16">
        <h2 className="mb-6 font-bold tracking-wide">Open Positions</h2>

        <div className="flex flex-col space-y-6">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="border rounded-lg p-6 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-1">{job.title}</h3>

              <div className="text-sm text-gray-600 mb-4">
                {job.location} · {job.type}
              </div>

              {/* Responsibilities */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Responsibilities</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Candidate Requirements</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {job.requirements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <a
                href={`mailto:hr1@aehltd.com?subject=Application for ${encodeURIComponent(
                  job.title,
                )}`}
                className="inline-block px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition"
              >
                Email Resume & Job Title to hr1@aehltd.com
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
