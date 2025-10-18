import { useState, useMemo } from 'react'
import { FaCalendarAlt, FaCode, FaChartBar, FaMapMarkerAlt, FaBriefcase, FaShare, FaSearch } from 'react-icons/fa'

const RemoteJobs = () => {
  const [selectedDate, setSelectedDate] = useState('all')
  const [selectedTech, setSelectedTech] = useState([])
  const [experienceRange, setExperienceRange] = useState([0, 30])
  const [selectedLocations, setSelectedLocations] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleJobs, setVisibleJobs] = useState(6)
  const [showTechModal, setShowTechModal] = useState(false)
  const [techSearchTerm, setTechSearchTerm] = useState('')
  const [locationSearchTerm, setLocationSearchTerm] = useState('')

  // Comprehensive job data with 80 jobs
  const jobs = [
    // Software Development (40 jobs)
    {
      id: 1,
      title: "Senior Full Stack Developer",
      experience: "5+ Years",
      skills: ["Node js", "Python", "REST"],
      location: "India",
      type: "Contract",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "NodeJS Engineer NestJS ExpressJ..",
      experience: "4+ Years", 
      skills: ["Nodejs", "Next/Exp..", "REST"],
      location: "Australia",
      type: "Contract",
      posted: "3 days ago"
    },
    {
      id: 3,
      title: "Salesforce Revenue Cloud Develo..",
      experience: "5+ Years",
      skills: ["Salesfor..", "CPQ/ Rev..", "OmniStud.."],
      location: "India", 
      type: "Contract",
      posted: "1 week ago"
    },
    {
      id: 4,
      title: "Senior DevOps Engineer",
      experience: "5+ Years",
      skills: ["DevOps", "Microsof..", "AirWatch.."],
      location: "Singapore",
      type: "Contract", 
      posted: "4 days ago"
    },
    {
      id: 5,
      title: "React Frontend Developer",
      experience: "3+ Years",
      skills: ["React", "JavaScript", "TypeScript"],
      location: "UAE",
      type: "Full-time",
      posted: "1 day ago"
    },
    {
      id: 6,
      title: "Python Backend Engineer",
      experience: "4+ Years", 
      skills: ["Python", "Django", "PostgreSQL"],
      location: "California",
      type: "Contract",
      posted: "5 days ago"
    },
    {
      id: 7,
      title: "Java Spring Boot Developer",
      experience: "6+ Years",
      skills: ["Java", "Spring Boot", "MySQL"],
      location: "India",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      id: 8,
      title: "Angular Frontend Developer",
      experience: "4+ Years",
      skills: ["Angular", "TypeScript", "RxJS"],
      location: "India",
      type: "Contract",
      posted: "1 week ago"
    },
    {
      id: 9,
      title: "AWS Cloud Engineer",
      experience: "5+ Years",
      skills: ["AWS", "Terraform", "Docker"],
      location: "Australia",
      type: "Full-time",
      posted: "3 days ago"
    },
    {
      id: 10,
      title: "Vue.js Developer",
      experience: "3+ Years",
      skills: ["Vue.js", "JavaScript", "CSS"],
      location: "Singapore",
      type: "Contract",
      posted: "4 days ago"
    },
    {
      id: 11,
      title: "Machine Learning Engineer",
      experience: "5+ Years",
      skills: ["Python", "TensorFlow", "PyTorch"],
      location: "UAE",
      type: "Full-time",
      posted: "1 day ago"
    },
    {
      id: 12,
      title: "Mobile App Developer",
      experience: "4+ Years",
      skills: ["React Native", "Flutter", "iOS"],
      location: "California",
      type: "Contract",
      posted: "2 days ago"
    },
    {
      id: 13,
      title: "Senior .NET Developer",
      experience: "6+ Years",
      skills: [".NET", "C#", "SQL Server"],
      location: "India",
      type: "Full-time",
      posted: "3 days ago"
    },
    {
      id: 14,
      title: "PHP Laravel Developer",
      experience: "4+ Years",
      skills: ["PHP", "Laravel", "MySQL"],
      location: "Australia",
      type: "Contract",
      posted: "5 days ago"
    },
    {
      id: 15,
      title: "Ruby on Rails Developer",
      experience: "5+ Years",
      skills: ["Ruby", "Rails", "PostgreSQL"],
      location: "India",
      type: "Full-time",
      posted: "1 week ago"
    },
    {
      id: 16,
      title: "Go Developer",
      experience: "4+ Years",
      skills: ["Go", "Docker", "Kubernetes"],
      location: "Singapore",
      type: "Contract",
      posted: "2 days ago"
    },
    {
      id: 17,
      title: "Scala Developer",
      experience: "5+ Years",
      skills: ["Scala", "Spark", "Kafka"],
      location: "UAE",
      type: "Full-time",
      posted: "4 days ago"
    },
    {
      id: 18,
      title: "Kotlin Android Developer",
      experience: "4+ Years",
      skills: ["Kotlin", "Android", "Jetpack"],
      location: "California",
      type: "Contract",
      posted: "1 day ago"
    },
    {
      id: 19,
      title: "Swift iOS Developer",
      experience: "5+ Years",
      skills: ["Swift", "iOS", "Xcode"],
      location: "India",
      type: "Full-time",
      posted: "3 days ago"
    },
    {
      id: 20,
      title: "Flutter Developer",
      experience: "3+ Years",
      skills: ["Flutter", "Dart", "Firebase"],
      location: "India",
      type: "Contract",
      posted: "6 days ago"
    },
    {
      id: 21,
      title: "WordPress Developer",
      experience: "4+ Years",
      skills: ["WordPress", "PHP", "MySQL"],
      location: "Australia",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      id: 22,
      title: "Shopify Developer",
      experience: "3+ Years",
      skills: ["Shopify", "Liquid", "JavaScript"],
      location: "Singapore",
      type: "Contract",
      posted: "5 days ago"
    },
    {
      id: 23,
      title: "Magento Developer",
      experience: "5+ Years",
      skills: ["Magento", "PHP", "MySQL"],
      location: "UAE",
      type: "Full-time",
      posted: "1 week ago"
    },
    {
      id: 24,
      title: "Drupal Developer",
      experience: "4+ Years",
      skills: ["Drupal", "PHP", "MySQL"],
      location: "India",
      type: "Contract",
      posted: "3 days ago"
    },
    {
      id: 25,
      title: "Blockchain Developer",
      experience: "5+ Years",
      skills: ["Solidity", "Web3", "Ethereum"],
      location: "California",
      type: "Full-time",
      posted: "1 day ago"
    },
    {
      id: 26,
      title: "Web3 Developer",
      experience: "4+ Years",
      skills: ["Web3", "React", "Node.js"],
      location: "India",
      type: "Contract",
      posted: "4 days ago"
    },
    {
      id: 27,
      title: "Game Developer Unity",
      experience: "5+ Years",
      skills: ["Unity", "C#", "3D Modeling"],
      location: "Australia",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      id: 28,
      title: "Unreal Engine Developer",
      experience: "4+ Years",
      skills: ["Unreal", "C++", "Blueprints"],
      location: "India",
      type: "Contract",
      posted: "6 days ago"
    },
    {
      id: 29,
      title: "AR/VR Developer",
      experience: "4+ Years",
      skills: ["Unity", "ARCore", "ARKit"],
      location: "Singapore",
      type: "Full-time",
      posted: "3 days ago"
    },
    {
      id: 30,
      title: "Embedded Systems Developer",
      experience: "6+ Years",
      skills: ["C", "C++", "Microcontrollers"],
      location: "UAE",
      type: "Contract",
      posted: "1 week ago"
    },
    {
      id: 31,
      title: "Firmware Developer",
      experience: "5+ Years",
      skills: ["C", "Assembly", "RTOS"],
      location: "India",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      id: 32,
      title: "Desktop App Developer",
      experience: "4+ Years",
      skills: ["Electron", "JavaScript", "Node.js"],
      location: "California",
      type: "Contract",
      posted: "5 days ago"
    },
    {
      id: 33,
      title: "API Developer",
      experience: "4+ Years",
      skills: ["REST", "GraphQL", "Postman"],
      location: "India",
      type: "Full-time",
      posted: "1 day ago"
    },
    {
      id: 34,
      title: "Microservices Developer",
      experience: "5+ Years",
      skills: ["Docker", "Kubernetes", "Spring"],
      location: "India",
      type: "Contract",
      posted: "4 days ago"
    },
    {
      id: 35,
      title: "Serverless Developer",
      experience: "4+ Years",
      skills: ["AWS Lambda", "Azure Functions", "Node.js"],
      location: "Australia",
      type: "Full-time",
      posted: "3 days ago"
    },
    {
      id: 36,
      title: "GraphQL Developer",
      experience: "4+ Years",
      skills: ["GraphQL", "Apollo", "React"],
      location: "Singapore",
      type: "Contract",
      posted: "2 days ago"
    },
    {
      id: 37,
      title: "WebSocket Developer",
      experience: "3+ Years",
      skills: ["WebSocket", "Socket.io", "Node.js"],
      location: "India",
      type: "Full-time",
      posted: "6 days ago"
    },
    {
      id: 38,
      title: "Real-time Systems Developer",
      experience: "5+ Years",
      skills: ["C++", "Linux", "Multithreading"],
      location: "UAE",
      type: "Contract",
      posted: "1 week ago"
    },
    {
      id: 39,
      title: "Distributed Systems Developer",
      experience: "6+ Years",
      skills: ["Go", "Kafka", "Redis"],
      location: "California",
      type: "Full-time",
      posted: "1 day ago"
    },
    {
      id: 40,
      title: "Cloud Native Developer",
      experience: "5+ Years",
      skills: ["Kubernetes", "Docker", "Helm"],
      location: "India",
      type: "Contract",
      posted: "4 days ago"
    },

    // Data & Analytics (15 jobs)
    {
      id: 41,
      title: "Data Scientist",
      experience: "5+ Years",
      skills: ["Python", "Machine Learning", "Pandas"],
      location: "Australia",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      id: 42,
      title: "Data Engineer",
      experience: "4+ Years",
      skills: ["Python", "Apache Spark", "Airflow"],
      location: "Singapore",
      type: "Contract",
      posted: "5 days ago"
    },
    {
      id: 43,
      title: "Data Analyst",
      experience: "3+ Years",
      skills: ["SQL", "Python", "Tableau"],
      location: "India",
      type: "Full-time",
      posted: "1 week ago"
    },
    {
      id: 44,
      title: "Business Intelligence Developer",
      experience: "4+ Years",
      skills: ["Power BI", "SQL", "DAX"],
      location: "UAE",
      type: "Contract",
      posted: "3 days ago"
    },
    {
      id: 45,
      title: "ETL Developer",
      experience: "5+ Years",
      skills: ["Informatica", "SQL", "Data Warehouse"],
      location: "California",
      type: "Full-time",
      posted: "1 day ago"
    },
    {
      id: 46,
      title: "Big Data Engineer",
      experience: "5+ Years",
      skills: ["Hadoop", "Spark", "Kafka"],
      location: "India",
      type: "Contract",
      posted: "4 days ago"
    },
    {
      id: 47,
      title: "MLOps Engineer",
      experience: "4+ Years",
      skills: ["MLflow", "Kubeflow", "Docker"],
      location: "Australia",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      id: 48,
      title: "Computer Vision Engineer",
      experience: "5+ Years",
      skills: ["OpenCV", "TensorFlow", "Python"],
      location: "Singapore",
      type: "Contract",
      posted: "6 days ago"
    },
    {
      id: 49,
      title: "NLP Engineer",
      experience: "4+ Years",
      skills: ["NLTK", "spaCy", "Transformers"],
      location: "India",
      type: "Full-time",
      posted: "3 days ago"
    },
    {
      id: 50,
      title: "Deep Learning Engineer",
      experience: "5+ Years",
      skills: ["PyTorch", "TensorFlow", "CUDA"],
      location: "UAE",
      type: "Contract",
      posted: "1 week ago"
    },
    {
      id: 51,
      title: "Quantitative Analyst",
      experience: "6+ Years",
      skills: ["Python", "R", "Financial Modeling"],
      location: "California",
      type: "Full-time",
      posted: "1 day ago"
    },
    {
      id: 52,
      title: "Research Scientist",
      experience: "5+ Years",
      skills: ["Python", "Research", "Publications"],
      location: "India",
      type: "Contract",
      posted: "5 days ago"
    },
    {
      id: 53,
      title: "Statistician",
      experience: "4+ Years",
      skills: ["R", "Statistics", "Hypothesis Testing"],
      location: "Australia",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      id: 54,
      title: "Analytics Engineer",
      experience: "4+ Years",
      skills: ["dbt", "SQL", "Python"],
      location: "Singapore",
      type: "Contract",
      posted: "4 days ago"
    },
    {
      id: 55,
      title: "Data Architect",
      experience: "7+ Years",
      skills: ["Data Modeling", "SQL", "Architecture"],
      location: "India",
      type: "Full-time",
      posted: "3 days ago"
    },

    // DevOps & Cloud (10 jobs)
    {
      id: 56,
      title: "Senior DevOps Engineer",
      experience: "6+ Years",
      skills: ["AWS", "Terraform", "Jenkins"],
      location: "UAE",
      type: "Full-time",
      posted: "1 day ago"
    },
    {
      id: 57,
      title: "Cloud Architect",
      experience: "7+ Years",
      skills: ["AWS", "Azure", "GCP"],
      location: "California",
      type: "Contract",
      posted: "5 days ago"
    },
    {
      id: 58,
      title: "Site Reliability Engineer",
      experience: "5+ Years",
      skills: ["Kubernetes", "Prometheus", "Grafana"],
      location: "India",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      id: 59,
      title: "Infrastructure Engineer",
      experience: "5+ Years",
      skills: ["Terraform", "Ansible", "Linux"],
      location: "Australia",
      type: "Contract",
      posted: "6 days ago"
    },
    {
      id: 60,
      title: "Security Engineer",
      experience: "5+ Years",
      skills: ["Security", "Penetration Testing", "SIEM"],
      location: "Singapore",
      type: "Full-time",
      posted: "3 days ago"
    },
    {
      id: 61,
      title: "Platform Engineer",
      experience: "5+ Years",
      skills: ["Kubernetes", "Docker", "Helm"],
      location: "India",
      type: "Contract",
      posted: "1 week ago"
    },
    {
      id: 62,
      title: "Release Engineer",
      experience: "4+ Years",
      skills: ["CI/CD", "Jenkins", "GitLab"],
      location: "UAE",
      type: "Full-time",
      posted: "4 days ago"
    },
    {
      id: 63,
      title: "Cloud Security Engineer",
      experience: "5+ Years",
      skills: ["AWS Security", "Azure Security", "CISSP"],
      location: "California",
      type: "Contract",
      posted: "2 days ago"
    },
    {
      id: 64,
      title: "Network Engineer",
      experience: "5+ Years",
      skills: ["Cisco", "Routing", "Switching"],
      location: "India",
      type: "Full-time",
      posted: "5 days ago"
    },
    {
      id: 65,
      title: "Database Administrator",
      experience: "6+ Years",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
      location: "Australia",
      type: "Contract",
      posted: "1 day ago"
    },

    // Design & UX (8 jobs)
    {
      id: 66,
      title: "UI/UX Designer",
      experience: "4+ Years",
      skills: ["Figma", "Adobe XD", "Sketch"],
      location: "Singapore",
      type: "Full-time",
      posted: "3 days ago"
    },
    {
      id: 67,
      title: "Product Designer",
      experience: "5+ Years",
      skills: ["Figma", "Prototyping", "User Research"],
      location: "India",
      type: "Contract",
      posted: "6 days ago"
    },
    {
      id: 68,
      title: "Graphic Designer",
      experience: "3+ Years",
      skills: ["Photoshop", "Illustrator", "InDesign"],
      location: "UAE",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      id: 69,
      title: "Motion Graphics Designer",
      experience: "4+ Years",
      skills: ["After Effects", "Cinema 4D", "Motion"],
      location: "California",
      type: "Contract",
      posted: "4 days ago"
    },
    {
      id: 70,
      title: "Web Designer",
      experience: "4+ Years",
      skills: ["HTML", "CSS", "JavaScript"],
      location: "India",
      type: "Full-time",
      posted: "1 week ago"
    },
    {
      id: 71,
      title: "Brand Designer",
      experience: "5+ Years",
      skills: ["Branding", "Logo Design", "Identity"],
      location: "Australia",
      type: "Contract",
      posted: "1 day ago"
    },
    {
      id: 72,
      title: "UX Researcher",
      experience: "4+ Years",
      skills: ["User Research", "Usability Testing", "Analytics"],
      location: "Singapore",
      type: "Full-time",
      posted: "5 days ago"
    },
    {
      id: 73,
      title: "Design System Designer",
      experience: "5+ Years",
      skills: ["Design Systems", "Figma", "Components"],
      location: "India",
      type: "Contract",
      posted: "3 days ago"
    },

    // Marketing & Content (7 jobs)
    {
      id: 74,
      title: "Digital Marketing Manager",
      experience: "5+ Years",
      skills: ["SEO", "SEM", "Analytics"],
      location: "UAE",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      id: 75,
      title: "Content Writer",
      experience: "3+ Years",
      skills: ["Writing", "SEO", "Content Strategy"],
      location: "California",
      type: "Contract",
      posted: "6 days ago"
    },
    {
      id: 76,
      title: "Social Media Manager",
      experience: "4+ Years",
      skills: ["Social Media", "Content Creation", "Analytics"],
      location: "India",
      type: "Full-time",
      posted: "4 days ago"
    },
    {
      id: 77,
      title: "SEO Specialist",
      experience: "4+ Years",
      skills: ["SEO", "Google Analytics", "Keyword Research"],
      location: "Australia",
      type: "Contract",
      posted: "1 week ago"
    },
    {
      id: 78,
      title: "Email Marketing Specialist",
      experience: "3+ Years",
      skills: ["Email Marketing", "Automation", "A/B Testing"],
      location: "Singapore",
      type: "Full-time",
      posted: "1 day ago"
    },
    {
      id: 79,
      title: "Growth Hacker",
      experience: "4+ Years",
      skills: ["Growth Marketing", "Analytics", "Experimentation"],
      location: "India",
      type: "Contract",
      posted: "5 days ago"
    },
    {
      id: 80,
      title: "Marketing Automation Specialist",
      experience: "4+ Years",
      skills: ["HubSpot", "Marketo", "Automation"],
      location: "UAE",
      type: "Full-time",
      posted: "3 days ago"
    }
  ]

  const technologies = [
    { name: "Python", count: 10 },
    { name: "Docker", count: 6 },
    { name: "MySQL", count: 6 },
    { name: "JavaScript", count: 5 },
    { name: "SQL", count: 5 },
    { name: "Kubernetes", count: 5 },
    { name: "PHP", count: 4 },
    { name: "Analytics", count: 4 },
    { name: "React", count: 3 },
    { name: "REST", count: 3 },
    { name: "AWS", count: 3 },
    { name: "Terraform", count: 3 },
    { name: "PostgreSQL", count: 3 },
    { name: "Kafka", count: 3 },
    { name: "Figma", count: 3 },
    { name: "SEO", count: 3 },
    { name: "C++", count: 3 },
    { name: "TypeScript", count: 2 },
    { name: "C#", count: 2 },
    { name: "Spring Boot", count: 2 },
    { name: "Flutter", count: 2 },
    { name: "Unity", count: 2 },
    { name: "Go", count: 2 },
    { name: "R", count: 2 },
    { name: "TensorFlow", count: 2 },
    { name: "C", count: 2 },
    { name: "GraphQL", count: 2 },
    { name: "Jenkins", count: 2 },
    { name: "Spark", count: 2 },
    { name: "Angular", count: 1 },
    { name: "Java", count: 1 }
  ]

  const locations = [
    { name: "India", count: 29 },
    { name: "Australia", count: 13 },
    { name: "Singapore", count: 13 },
    { name: "UAE", count: 13 },
    { name: "California", count: 12 }
  ]

  const filteredJobs = useMemo(() => {
    let filtered = jobs.filter(job => {
      const matchesSearch = !searchTerm || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesDate = selectedDate === 'all' || 
        (selectedDate === '3days' && job.posted.includes('day')) ||
        (selectedDate === 'week' && job.posted.includes('week')) ||
        (selectedDate === 'month' && job.posted.includes('month'))
      
      const matchesTech = selectedTech.length === 0 || 
        selectedTech.some(tech => job.skills.some(skill => skill.toLowerCase().includes(tech.toLowerCase())))
      
      const matchesLocation = selectedLocations.length === 0 || 
        selectedLocations.includes(job.location)
      
      // Extract years from experience string (e.g., "5+ Years" -> 5)
      const jobExperience = parseInt(job.experience.match(/\d+/)?.[0] || 0)
      const matchesExperience = jobExperience >= experienceRange[0] && jobExperience <= experienceRange[1]
      
      return matchesSearch && matchesDate && matchesTech && matchesLocation && matchesExperience
    })

    return filtered
  }, [searchTerm, selectedDate, selectedTech, selectedLocations, experienceRange])

  const handleTechToggle = (tech) => {
    setSelectedTech(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    )
  }

  const handleLocationToggle = (location) => {
    setSelectedLocations(prev => 
      prev.includes(location) 
        ? prev.filter(l => l !== location)
        : [...prev, location]
    )
  }

  const clearAllTech = () => {
    setSelectedTech([])
  }

  const filteredTechnologies = technologies.filter(tech => 
    tech.name.toLowerCase().includes(techSearchTerm.toLowerCase())
  )

  const filteredLocations = locations.filter(location => 
    location.name.toLowerCase().includes(locationSearchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 pt-[60px]">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Sort & Filter */}
          <div className="w-80 flex-shrink-0">
            <div className="p-6 sticky top-6">
              {/* Job Count */}
              <div className="text-sm text-gray-500 mb-4">{filteredJobs.length} jobs</div>
              
              {/* Main Title */}
              <h2 className="text-lg font-bold text-gray-900 mb-6">Sort & Filter</h2>
              
              {/* Date Posted */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-blue-600 mb-4 flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  Date Posted
                </h3>
                <div className="space-y-3">
                  {[
                    { value: '3days', label: 'Past 3 Days' },
                    { value: 'week', label: 'Past Week' },
                    { value: 'month', label: 'Past Month' },
                    { value: 'all', label: 'All' }
                  ].map(option => (
                    <label key={option.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="date"
                        value={option.value}
                        checked={selectedDate === option.value}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="mr-3 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-900">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Separator Line */}
              <hr className="border-gray-200 mb-6" />

              {/* Technology / Tools */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-blue-600 mb-4 flex items-center">
                  <FaCode className="mr-2" />
                  Technology / Tools
                </h3>
                <input
                  type="text"
                  placeholder="Search technologies..."
                  value={techSearchTerm}
                  onChange={(e) => setTechSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="max-h-48 overflow-y-auto space-y-3">
                  {filteredTechnologies.map(tech => (
                    <label key={tech.name} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedTech.includes(tech.name)}
                        onChange={() => handleTechToggle(tech.name)}
                        className="mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-900 flex-1">{tech.name}</span>
                      <span className="text-xs text-gray-500">({tech.count})</span>
                    </label>
                  ))}
                </div>
                <button 
                  onClick={() => setShowTechModal(true)}
                  className="text-blue-600 text-sm font-medium mt-2 hover:underline"
                >
                  SHOW MORE
                </button>
              </div>

              {/* Separator Line */}
              <hr className="border-gray-200 mb-6" />

              {/* Years of Experience */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-blue-600 mb-4 flex items-center">
                  <FaChartBar className="mr-2" />
                  Years of Experience
                </h3>
                <div className="px-2">
                  <div className="relative">
                    {/* Dual Range Slider */}
                    <div className="relative h-2 bg-gray-200 rounded-lg">
                      <div 
                        className="absolute h-2 bg-blue-600 rounded-lg"
                        style={{
                          left: `${(experienceRange[0] / 30) * 100}%`,
                          width: `${((experienceRange[1] - experienceRange[0]) / 30) * 100}%`
                        }}
                      ></div>
                      <input
                        type="range"
                        min="0"
                        max="30"
                        value={experienceRange[0]}
                        onChange={(e) => {
                          const value = parseInt(e.target.value)
                          if (value <= experienceRange[1]) {
                            setExperienceRange([value, experienceRange[1]])
                          }
                        }}
                        className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb-left"
                      />
                      <input
                        type="range"
                        min="0"
                        max="30"
                        value={experienceRange[1]}
                        onChange={(e) => {
                          const value = parseInt(e.target.value)
                          if (value >= experienceRange[0]) {
                            setExperienceRange([experienceRange[0], value])
                          }
                        }}
                        className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb-right"
                      />
                    </div>
                    
                    {/* Min/Max Input Fields */}
                    <div className="flex gap-2 mt-3">
                      <div className="flex-1">
                        <label className="block text-xs text-gray-500 mb-1">Min</label>
                        <input
                          type="number"
                          min="0"
                          max="30"
                          value={experienceRange[0]}
                          onChange={(e) => {
                            const value = parseInt(e.target.value) || 0
                            if (value <= experienceRange[1] && value >= 0) {
                              setExperienceRange([value, experienceRange[1]])
                            }
                          }}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-xs text-gray-500 mb-1">Max</label>
                        <input
                          type="number"
                          min="0"
                          max="30"
                          value={experienceRange[1]}
                          onChange={(e) => {
                            const value = parseInt(e.target.value) || 30
                            if (value >= experienceRange[0] && value <= 30) {
                              setExperienceRange([experienceRange[0], value])
                            }
                          }}
                          className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator Line */}
              <hr className="border-gray-200 mb-6" />

              {/* Locations */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-blue-600 mb-4 flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  Locations
                </h3>
                <input
                  type="text"
                  placeholder="Search locations..."
                  value={locationSearchTerm}
                  onChange={(e) => setLocationSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="space-y-3">
                  {filteredLocations.map(location => (
                    <label key={location.name} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedLocations.includes(location.name)}
                        onChange={() => handleLocationToggle(location.name)}
                        className="mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-900 flex-1">{location.name}</span>
                      <span className="text-xs text-gray-500">({location.count})</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredJobs.slice(0, visibleJobs).map(job => (
                <div key={job.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow relative">
                  {/* Share Button - Top Right */}
                  <button className="absolute top-6 right-6 text-gray-400 hover:text-gray-600">
                    <FaShare />
                  </button>
                  
                  {/* Job Title */}
                  <h3 className="text-xl font-semibold text-blue-600 mb-3 pr-8">{job.title}</h3>
                  
                  {/* Experience */}
                  <p className="text-gray-500 text-base mb-4">{job.experience}</p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map(skill => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Match Percentage */}
                  <div className="mb-4">
                    <div className="w-full h-2 bg-gray-200 rounded-full mb-2"></div>
                    <div className="text-sm text-gray-600">
                      <a href="/login" className="text-blue-600 hover:underline">Login</a>
                      {' '}or{' '}
                      <a href="/register" className="text-blue-600 hover:underline">sign up</a>
                      {' '}to know your profile Match %
                    </div>
                  </div>
                  
                  {/* Location and Type - Bottom */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-gray-700">
                      <FaMapMarkerAlt className="mr-2 text-blue-600" />
                      {job.location}, Remote
                    </span>
                    <span className="flex items-center text-blue-600 font-medium">
                      <FaBriefcase className="mr-2" />
                      {job.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            {filteredJobs.length > visibleJobs && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setVisibleJobs(prev => prev + 6)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-semibold shadow-sm"
                >
                  Show More
                </button>
              </div>
            )}

            {filteredJobs.length === 0 && (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Technology Modal */}
      {showTechModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[80vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Filter & Sort</h2>
              <button
                onClick={() => setShowTechModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {/* Technology / Tools Section */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-blue-600 mb-4 flex items-center">
                  <FaCode className="mr-2" />
                  Technology / Tools
                </h3>
                <input
                  type="text"
                  placeholder="Technology"
                  value={techSearchTerm}
                  onChange={(e) => setTechSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                {/* Technology Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {filteredTechnologies.map(tech => (
                    <label key={tech.name} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedTech.includes(tech.name)}
                        onChange={() => handleTechToggle(tech.name)}
                        className="mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-900 flex-1">{tech.name}</span>
                      <span className="text-xs text-gray-500">({tech.count})</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t bg-gray-50">
              <button
                onClick={clearAllTech}
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowTechModal(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .slider-thumb-left::-webkit-slider-thumb,
        .slider-thumb-right::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #d1d5db;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .slider-thumb-left::-moz-range-thumb,
        .slider-thumb-right::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #d1d5db;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .slider-thumb-left::-webkit-slider-track,
        .slider-thumb-right::-webkit-slider-track {
          background: transparent;
          height: 8px;
          border-radius: 4px;
        }
        
        .slider-thumb-left::-moz-range-track,
        .slider-thumb-right::-moz-range-track {
          background: transparent;
          height: 8px;
          border-radius: 4px;
          border: none;
        }
      `}</style>
    </div>
  )
}

export default RemoteJobs