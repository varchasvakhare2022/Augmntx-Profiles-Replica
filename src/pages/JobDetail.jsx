import { useParams, Link, useNavigate } from 'react-router-dom'
import { FaMapMarkerAlt, FaBriefcase, FaShare, FaArrowLeft, FaPaperPlane } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const JobDetail = () => {
  const { jobId } = useParams()
  const navigate = useNavigate()
  const [job, setJob] = useState(null)

  // Job data (same as RemoteJobs.jsx)
  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      experience: "5+ Years",
      skills: ["Node js", "Python", "REST"],
      location: "India",
      type: "Contract",
      posted: "2 days ago",
      uniqueId: "AX271CJ7593",
      interviewRounds: 3,
      validThrough: "30th March 2026",
      description: `What you'll do

Collaborate closely with the SRE team to address and remedy incoming issues, develop incremental features and functionality, and help maintain our technology stack for the products that we deliver across both frontend and backend technologies

Work with our Product and Delivery Managers to regularly refine the definition of the work in the product backlog

Own the application by diagnosing and resolving defects and coordinating testing with various contributors

Maintain and update technical documentation to reflect the current state of the application as new features are added

Apply your passion for keeping current with the latest tools and methodologies and sharing that knowledge with the team

Desired Skills and Experience

Experience building full-stack applications

Experience using frameworks and AI services to power real-life products (ie: Google Cloud AI, Azure AI, IBM Watson, GPT, Dialogflow, Claude, LangChain)

Experience implementing ML algorithms with common frameworks in end-to-end applications (ie. TensorFlow, Synaptic, ML5.js, Spark ML)

Experience in an agency setting`
    },
    {
      id: 2,
      title: "NodeJS Engineer NestJS ExpressJ..",
      experience: "4+ Years",
      skills: ["Nodejs", "Next/Exp..", "REST"],
      location: "Australia",
      type: "Contract",
      posted: "3 days ago",
      uniqueId: "AX382HK9234",
      interviewRounds: 2,
      validThrough: "15th April 2026",
      description: `What you'll do

Build scalable backend services using Node.js, NestJS, and Express
Design and implement RESTful APIs
Work with databases (MongoDB, PostgreSQL)
Collaborate with frontend teams
Write clean, maintainable code

Required Skills

4+ years of Node.js experience
Strong knowledge of NestJS and Express
RESTful API design
Database management
Microservices architecture`
    },
    {
      id: 3,
      title: "Salesforce Revenue Cloud Develo..",
      experience: "5+ Years",
      skills: ["Salesfor..", "CPQ/ Rev..", "OmniStud.."],
      location: "India",
      type: "Contract",
      posted: "1 week ago",
      uniqueId: "AX293SK5671",
      interviewRounds: 3,
      validThrough: "20th May 2026",
      description: `What you'll do

Implement Salesforce Revenue Cloud solutions
Configure CPQ (Configure, Price, Quote)
Develop custom Salesforce applications
Work with OmniStudio components
Integrate with external systems

Required Skills

5+ years Salesforce experience
Revenue Cloud certification
CPQ expertise
Apex and Lightning development`
    }
  ]

  useEffect(() => {
    // Find job by ID
    const foundJob = jobs.find(j => j.id === parseInt(jobId))
    if (foundJob) {
      setJob(foundJob)
    } else {
      // If job not found, redirect to remote jobs
      navigate('/remote-jobs')
    }
  }, [jobId, navigate])

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 pt-[60px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-[60px]">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <Link to="/" className="text-blue-600 hover:underline flex items-center gap-1">
            <FaArrowLeft size={12} />
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link to="/remote-jobs" className="text-blue-600 hover:underline">Jobs</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{job.uniqueId}</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 relative">
          {/* Share Button - Top Right */}
          <button className="absolute top-6 right-6 text-blue-600 border border-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors">
            <FaShare size={18} />
          </button>

          {/* Job Title - Centered */}
          <h1 className="text-center text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            {job.title}
          </h1>

          {/* Job Meta Info - Centered */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-gray-500 mb-12 text-sm">
            <div className="flex items-center gap-2">
              <FaBriefcase className="text-gray-400" size={14} />
              <span>{job.type}</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-gray-400" size={14} />
              <span>{job.location}</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">🏢</span>
              <span>Remote</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">⏱️</span>
              <span>{job.experience}</span>
            </div>
          </div>

          {/* Mandatory Technical Skills and Apply Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Mandatory Technical Skills:</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Apply and Match Section */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full border-8 border-gray-300 mb-2 mx-auto"></div>
                <p className="text-sm text-gray-600 font-medium">Match %</p>
                <p className="text-xs text-gray-500">unavailable</p>
              </div>
              <Link
                to="/login"
                className="bg-[#5271FF] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2 whitespace-nowrap text-base"
              >
                Apply
                <FaPaperPlane className="text-sm" />
              </Link>
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Job Description</h2>
            <div className="text-gray-600 whitespace-pre-line leading-relaxed text-base">
              {job.description}
            </div>
          </div>

          {/* Job ID */}
          <div className="mb-8 text-gray-700 font-semibold">
            {job.uniqueId}
          </div>

          {/* Interview Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 py-6 border-t border-gray-200">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Interview Rounds:</h3>
              <p className="text-gray-600">{job.interviewRounds}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Valid Through:</h3>
              <p className="text-gray-600">{job.validThrough}</p>
            </div>
          </div>

          {/* Bottom Apply Section */}
          <div className="flex items-start gap-8 pt-6">
            <Link
              to="/login"
              className="bg-[#5271FF] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2 text-base"
            >
              Apply
              <FaPaperPlane className="text-sm" />
            </Link>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-8 border-gray-300 mb-2 mx-auto"></div>
              <p className="text-sm text-gray-600 font-medium">Match %</p>
              <p className="text-xs text-gray-500">unavailable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetail

