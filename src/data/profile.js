export const profile = {
  name: 'Yusuf Ahmad',
  pronouns: 'India & Ireland Onsite Experience',
  headline: 'Software Test Engineer | SDET | ISTQB CTFL',
  subheadline:
    'Immediate joiner. ISTQB CTFL certified QA Engineer focused on manual and automated testing, API validation, and CI pipelines. Ex TCSer. MSc Software Engineering from University of Limerick with First Class Honours.',
  location: 'Bengaluru, Karnataka, India',
  email: 'contact@yusufahmad.in',
  whatsapp: '+918310118398',
  linkedin: 'https://www.linkedin.com/in/yusufahmad786/',
  availability: 'Immediate joiner',
  badges: ['Manual Testing', 'Automation Testing', 'Selenium', 'Java', 'Postman', 'CI/CD', 'Cucumber BDD', 'AI in Testing'],
  quickStats: [
    { label: 'Experience', value: '5+ years', hint: 'Manual, automation, API testing, and production support.' },
    { label: 'Automation uplift', value: '40% faster', hint: 'Data driven POM frameworks and stable regression suites.' },
    { label: 'Release cycle cut', value: '25 to 7 days', hint: 'Process improvements plus tighter QA collaboration.' },
    { label: 'Time saved', value: '10 hours per week', hint: 'Python and PowerShell scripts for routine validation.' }
  ],
  about: [
    'I have always been curious about how software works behind the scenes. That curiosity pulled me into testing early and it has stayed with me through every role since.',
    'I blend careful manual coverage with automation that stays stable: Selenium WebDriver in Java, TestNG, Cucumber BDD, and CI pipelines with Jenkins and Maven. For APIs I use Postman and Rest Assured, and I validate outcomes with SQL and logs when data matters.',
    'At Capita I supported Transport for Ireland systems as an L2 escalation point and helped validate AI based Virtual Agent improvements by testing logic flows and outcomes. I also led a four person team during a Dubai rollout, hit every deadline, and earned a Best Team Award.'
  ],
  coreSkills: {
    testing: ['Manual testing', 'Regression testing', 'Smoke and sanity', 'Exploratory testing', 'UAT support', 'Defect lifecycle and triage'],
    automation: ['Selenium WebDriver', 'Java', 'TestNG', 'Cucumber BDD', 'Page Object Model', 'Data driven frameworks'],
    api: ['Postman', 'Rest Assured', 'Swagger and OpenAPI', 'JSON and XML validation'],
    cicd: ['Jenkins', 'Maven', 'Git and GitHub', 'CI pipelines for regression suites'],
    data: ['SQL validation', 'IBM DB2 and Oracle basics', 'Log analysis', 'Production support'],
    waysOfWorking: ['Agile Scrum', 'SDLC and STLC', 'Test strategy and planning', 'Stakeholder communication']
  },
  experience: [
    {
      company: 'Capita',
      logo: '/assets/capita.webp',
      role: 'Software Quality Analyst, L2 Production Support',
      dates: 'Feb 2025 to Jan 2026',
      location: 'Dublin, Ireland (Hybrid)',
      highlights: [
        'Resolved 60 to 70% of escalated production incidents without L3 involvement for Transport for Ireland systems.',
        'Used SQL to validate database integrity and pinpoint root causes of transaction failures.',
        'Created strong Jira defect reports with logs and reproduction steps to speed hotfix work.',
        'Validated AI Virtual Agent logic changes and improvements to user query resolution.'
      ],
      skills: ['Production support', 'SQL', 'Jira', 'AI virtual agent', 'Root cause analysis', 'Talkdesk', 'Test Case Creation & Execution']
    },
    {
      company: 'Everise',
      logo: '/assets/everise.webp',
      role: 'Data Quality Analyst',
      dates: 'Oct 2024 to Dec 2024',
      location: 'Limerick, Ireland (Hybrid)',
      highlights: [
        'Verified CRM data integrity using SQL and improved documentation workflows.',
        'Performed UAT on CRM workflow updates to prevent regressions.',
        'Reduced data retrieval errors by improving data consistency and process clarity.'
      ],
      skills: ['SQL', 'UAT', 'Data validation', 'Documentation']
    },
    {
      company: 'Dunnes Stores',
      logo: '/assets/dunnes.webp',
      role: 'QA Engineer, Retail Operations',
      dates: 'Nov 2023 to Oct 2024',
      location: 'County Limerick, Ireland (On-site)',
      highlights: [
        'Led functional, system, and end to end testing for POS and retail operations software.',
        'Validated data flow between POS terminals and backend systems to catch integration issues early.',
        'Partnered with cross functional teams on acceptance criteria and release readiness.'
      ],
      skills: ['System testing', 'E2E testing', 'Jira', 'Retail systems', 'Automated Testing']
    },
    {
      company: 'Tata Consultancy Services',
      logo: '/assets/tcs.webp',
      role: 'Software QA Engineer, Test Planning and Automation',
      dates: 'Jan 2019 to Aug 2022',
      location: 'New Delhi, India (Onsite)',
      highlights: [
        'Built Selenium WebDriver automation frameworks in Java using Page Object Model and data driven approaches.',
        'Automated regression suites in TestNG and integrated runs in Jenkins CI using Maven and Git.',
        'Executed API testing using Postman and Rest Assured with strong endpoint and error handling validation.',
        'Contributed to a delivery improvement initiative that reduced release timelines from 25 days to 7.'
      ],
      skills: ['Selenium', 'Java', 'TestNG', 'Cucumber', 'Postman', 'Jenkins', 'Automated Testing', 'Test Planning', 'Defect Lifecycle']
    },
    {
      company: 'Tata Consultancy Services',
      logo: '/assets/tcs.webp',
      role: 'Software Test Engineer, Manual Testing and Requirement Analysis',
      dates: 'Oct 2016 to Dec 2018',
      location: 'Pune, India (On-site)',
      highlights: [
        'Delivered system testing for an automotive ECU configuration tool across 25+ builds.',
        'Found and logged 150+ critical defects across functional, regression, and compatibility testing.',
        'Owned test plan sections and produced clear release notes and reports for stakeholders.'
      ],
      skills: ['System testing', 'Defect management', 'Documentation', 'Automotive domain']
    }
  ],
  education: [
    {
      school: 'University of Limerick',
      logo: '/assets/ul_logo.webp',
      degree: 'Master of Science in Software Engineering',
      dates: 'Sep 2022 to Jan 2024',
      location: 'Limerick, Ireland',
      highlight: 'First Class Honours (1:1)',
      details: [
        'Key modules: Software Architecture, AI in Software Testing, Go Programming (concurrency and parallelism), Software Design.',
        'Dissertation: Enhancing testing methodologies in the AI world, a QA perspective.'
      ]
    },
    {
      school: 'Integral University',
      logo: '/assets/integral_logo.webp',
      degree: 'Bachelor of Technology, Computer Science and Engineering',
      dates: 'Jun 2012 to May 2016',
      location: 'Lucknow, India',
      highlight: 'First Division with Honours',
      details: ['Strong foundation in CS fundamentals, programming, and software engineering.']
    }
  ],
  projects: [
    {
      title: 'Transport for Ireland, Production Quality and Virtual Agent',
      org: 'Capita',
      dates: 'Feb 2025 to Jan 2026',
      description:
        'Supported Transport for Ireland systems as an L2 escalation point. Investigated live incidents, validated data integrity with SQL, and improved AI based Virtual Agent flows through structured testing and A/B checks.',
      tech: ['SQL', 'Jira', 'Confluence', 'Python', 'PowerShell', 'AI virtual agent testing', 'Incident triage']
    },
    {
      title: 'Fix and Power',
      org: 'University of Limerick',
      dates: 'Oct 2022 to Dec 2022',
      description:
        'An online marketplace for repair and resale of electronic devices built in a microservices architecture as a team of three.',
      tech: ['FastAPI', 'PyTest', 'AWS', 'CI/CD', 'UML', 'Design patterns']
    },
    {
      title: 'Global Passport Seva Program',
      org: 'Tata Consultancy Services',
      dates: 'Apr 2018 to Aug 2022',
      description:
        'Program delivering passport services with streamlined processes. Contributed through testing, automation, and release support.',
      tech: ['Selenium', 'Java', 'TestNG', 'Cucumber BDD', 'Jenkins', 'Maven', 'Git']
    },
    {
      title: 'Automotive Configuration Tools',
      org: 'Nissan Motor Co. Ltd.',
      dates: 'Dec 2016 to May 2018',
      description:
        'Testing for ECU configuration tools. Supported developers with XML analysis and debugging help alongside test execution.',
      tech: ['System testing', 'TFS', 'Visual Studio', 'XML', 'Documentation']
    },
    {
      title: 'Online PGI Telemedicine Center',
      org: 'Internship Project',
      dates: 'May 2015 to Sep 2015',
      description:
        'Built a web portal enabling customers to browse medicines and place orders online.',
      tech: ['Java', 'JSP', 'Servlets', 'HTML', 'CSS']
    }
  ],
  certifications: [
    { title: 'ISTQB Certified Tester, CTFL', issuer: 'ISTQB', year: '2021' },
    { title: 'Diploma in Software Testing', issuer: 'QAI Global', year: '2016' },
    { title: 'SQL for Testers', issuer: 'LinkedIn Learning', year: '2025' },
    { title: 'Postman Essential Training', issuer: 'LinkedIn Learning', year: '2025' },
    { title: 'Test Automation Foundation Level', issuer: 'Training Certificate', year: '2017' }
  ],
  awards: [
    {
      title: 'Service and Commitment Award',
      issuer: 'Tata Consultancy Services',
      year: '2021',
      details: 'Recognized for 5 years of dedicated service.'
    },
    {
      title: 'Best Team Award',
      issuer: 'Tata Consultancy Services',
      year: '2022',
      details:
        'Awarded for successful launch and delivery support of a critical passport services rollout, including training and first call resolution.'
    },
    {
      title: 'Safety Champion Award',
      issuer: 'Tata Consultancy Services',
      year: '2021',
      details: 'Recognized for guiding associates on COVID safety and running health initiatives.'
    },
    {
      title: 'Top Performance Award',
      issuer: 'Tata Consultancy Services',
      year: '2020',
      details: 'Recognized for consistently identifying high defect counts across releases.'
    },
    {
      title: 'Learning Achievement Award',
      issuer: 'Tata Consultancy Services',
      year: '2019',
      details: 'Outstanding performance in the Metamorph program.'
    }
  ],
  recommendations: [
    {
      name: 'Sandeep Sharma',
      title: 'Project Manager, Accenture',
      quote:
        'Yusuf is professional, helpful, and positive. It was an awesome experience working with him at TCS for over three years.'
    },
    {
      name: 'Faiz Ahmed',
      title: 'Senior Test Automation Lead, Nordea Bank',
      quote:
        'Yusuf\'s multitasking ability was unlike I\'ve seen before and made an applause worthy increase in our project\'s growth level.'
    },
    {
      name: 'Pragati Dabholkar',
      title: 'Principal Engineer, Product Development',
      quote:
        'Very enthusiastic and hardworking. Always ready to learn, strong testing skills, and a great team player.'
    },
    {
      name: 'Bipin Chandra',
      title: 'Senior Automation Test Engineer, Arm',
      quote:
        'Quick learner with sharpened testing techniques and a strong team mindset. A pleasure to have in the team.'
    },
    {
      name: 'Shubham Asthana',
      title: 'Data Management and Product',
      quote:
        'Great with clients and teammates. Gets things done and keeps everyone aligned to the main goal.'
    },
    {
      name: 'Shubhangi Bharti',
      title: 'Manager, Learning and Development',
      quote:
        'A very good learner who automated numerous workflows and helped others complete tasks on time.'
    },
    {
      name: 'Swastika Saxena',
      title: 'Scrum Master, FIS',
      quote:
        'Dedicated and organised. Delivers quality work within timelines and is a commendable team player.'
    },
    {
      name: 'Shaz Alam',
      title: 'Aptitude and Career Coach',
      quote:
        'Eager to learn, positive, and supportive. Takes challenges and understands strengths and weaknesses.'
    }
  ]
}
