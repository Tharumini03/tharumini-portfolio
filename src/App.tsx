import { useEffect, useMemo, useState } from 'react'

type Project = {
  title: string
  category: 'Research' | 'AI' | 'Data Science' | 'Systems'
  description: string
  tags: string[]
  eyebrow: string
  github?: string
  paper?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'CrisisRIG',
    category: 'Research',
    eyebrow: 'Ongoing Research · 2026–Present',
    description:
      'A reliability-aware multimodal crisis-classification system that combines social-media text and images while investigating modality weighting, cross-event generalisation, missing-modality robustness, and uncertainty calibration.',
    tags: [
      'PyTorch',
      'Multimodal AI',
      'Reliable AI',
      'Computer Vision',
      'NLP',
    ],
    featured: true,
  },

  {
    title: 'FisheriesIQ',
    category: 'Research',
    eyebrow: 'arXiv · MERCon 2026',
    description:
      'A Sri Lankan fisheries intelligence platform connecting production, market-price, and climate data for forecasting, hotspot detection, climate-lag analysis, and disruption insights.',
    tags: [
      'Time-Series Forecasting',
      'Statistical Analysis',
      'SARIMAX',
      'Climate Analytics',
      'Data Science',
    ],
    github: 'https://github.com/YohanJaya/sri-lanka-fisheries-ds-research',
    paper: 'https://arxiv.org/abs/2608.04023',
    featured: true,
  },

  {
    title: 'CSV Insight Bot',
    category: 'AI',
    eyebrow: 'Agentic Data Science Pipeline',
    description:
      'An agentic web application that automates CSV data cleaning, exploratory analysis, machine-learning model training, visualisation, insight generation, and reporting.',
    tags: ['FastAPI', 'Pandas', 'Scikit-learn', 'AI Agents'],
    github: 'https://github.com/Tharumini03/csv-insight-bot',
    featured: true,
  },

  {
    title: 'AI-Powered Shipment Automation',
    category: 'AI',
    eyebrow: 'Top 30 · HEMAS AITHON 2026',
    description:
      'An AI-assisted enterprise system that extracts structured shipment information from vendor emails and supports shipment planning through vendor scoring, ranking, and shipment grouping.',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'LLMs'],
    github: 'https://github.com/kalana03/Shipping-Automation-HEMAS',   
    featured: true,
  },

  {
    title: 'LearnMate AI',
    category: 'AI',
    eyebrow: 'Ongoing · Multi-Agent RAG Platform',
    description:
      'An AI-powered e-learning platform that transforms lecture PDFs into context-grounded summaries, quizzes, practice questions, and conversational question-answering support.',
    tags: ['React', 'FastAPI', 'MongoDB', 'RAG', 'LLMs'],
  },

  {
    title: 'Heart Disease Prediction',
    category: 'Data Science',
    eyebrow: 'Kaggle Public AUC · 0.95301',
    description:
      'A binary-classification pipeline using HistGradientBoosting, stratified validation, and cross-validation on a large structured clinical dataset.',
    tags: ['Python', 'Kaggle', 'Gradient Boosting', 'ML'],
    github: 'https://github.com/Tharumini03/heart-disease-prediction',
  },

  {
    title: 'Speech to Meaning',
    category: 'AI',
    eyebrow: 'Language Intelligence',
    description:
      'An exploration of transforming spoken input into useful semantic representations and downstream understanding.',
    tags: ['Speech', 'NLP', 'Python'],
    github: 'https://github.com/Tharumini03/Speech-to-meaning',
  },

  {
    title: 'Breast Cancer ML',
    category: 'Data Science',
    eyebrow: 'Applied Healthcare ML',
    description:
      'A machine-learning project focused on classification, evaluation, and experimentation using healthcare data.',
    tags: ['Machine Learning', 'Healthcare', 'Python'],
    github: 'https://github.com/Tharumini03/breast-cancer-ml',
  },

  {
    title: 'Nano Processor',
    category: 'Systems',
    eyebrow: 'Computer Architecture',
    description:
      'A processor-design project exploring instruction execution, digital logic, and low-level system behaviour.',
    tags: ['VHDL', 'Architecture', 'Digital Design'],
    github: 'https://github.com/Tharumini03/Nano_processor',
  },

]

const skills = [
  [
    'AI & Data',
    'Python, PyTorch, Scikit-learn, Pandas, NumPy, Multimodal Learning, Computer Vision, NLP, LLMs',
  ],
  [
    'Machine Learning',
    'Feature engineering, cross-validation, model evaluation, error analysis, EDA, uncertainty calibration',
  ],
  [
    'Engineering',
    'React, TypeScript, FastAPI, REST APIs, PostgreSQL, MongoDB, Docker, Git, CI/CD',
  ],
  [
    'Research',
    'Literature review, experimental design, statistical analysis, forecasting, reproducible workflows, scientific writing',
  ],
]

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [filter, setFilter] = useState<'All' | Project['category']>('All')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [filter])

  const filteredProjects = useMemo(
    () => (filter === 'All' ? projects : projects.filter(project => project.category === filter)),
    [filter],
  )

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Tharumini Gamage home">
          <span className="brand-mark">TG</span>
          <span>Tharumini Gamage</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? '☼' : '◐'}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy reveal">
            <p className="kicker"><span className="status-dot" /> Open to research opportunities</p>
            <h1>I build intelligent systems that make complex data useful.</h1>
            <p className="hero-lead">
              I’m Tharumini, a Computer Science and Engineering undergraduate
              at the University of Moratuwa, specializing in Data Science and
              Engineering. I’m interested in reliable AI, multimodal learning,
              data-centric machine learning, forecasting, and intelligent
              systems built around real-world problems.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore my work <ArrowIcon /></a>
              <a className="button secondary" href="https://www.linkedin.com/in/tharumini-gamage-0885ab34a/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            </div>
            <div className="hero-metrics" aria-label="Portfolio highlights">
              <div><strong>01</strong><span>Accepted research paper</span></div>
              <div><strong>10+</strong><span>Public repositories</span></div>
              <div><strong>Top 30</strong><span>HEMAS AITHON 2026</span></div>
            </div>
          </div>

          <div className="hero-visual reveal" aria-label="Research and engineering profile card">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="profile-card glass-card">
              <div className="profile-topline">
                <span>RESEARCH / ENGINEERING</span>
                <span>2026</span>
              </div>
              <img src="/tharumini-profile.jpg" alt="Tharumini Gamage" />
              <div className="profile-title">
                <p>Current focus</p>
                <h2>Reliable AI systems that understand data, uncertainty and the real world.</h2>
              </div>
              <div className="signal-grid">
                <div className="signal-grid">
                  <span>ML</span>
                  <span>CV</span>
                  <span>NLP</span>
                  <span>MULTIMODAL</span>
                  <span>FORECASTING</span>
                  <span>RELIABLE AI</span>
                </div>
              </div>
            </div>
            <div className="floating-note note-one">MERCon ’26 · Presenter</div>
            <div className="floating-note note-two">UoM · CSE</div>
          </div>
        </section>

        <section className="ticker" aria-label="Areas of interest">
          <div>
            RELIABLE AI · MULTIMODAL LEARNING · MACHINE LEARNING ·
            DATA SCIENCE · COMPUTER VISION · NLP · FORECASTING ·
            UNCERTAINTY CALIBRATION · INTELLIGENT SYSTEMS ·
          </div>       
        </section>

        <section className="section-pad work-section" id="work">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">Research & Selected Work</p>
              <h2>Research ideas.<br />Built into real systems.</h2>
            </div>
            <p>My work spans reliable AI, multimodal learning, forecasting, data science, and intelligent software systems—from research questions to working implementations.</p>
          </div>

          <div className="feature-grid">
            {projects.filter(project => project.featured).map((project, index) => (
              <article className={`project-card feature-card feature-${index + 1} reveal`} key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>}
                  {project.paper && (<a href={project.paper} target="_blank" rel="noreferrer">Paper <ArrowIcon /></a>)}
                  {!project.github && <span>Case study coming soon</span>}
                </div>
              </article>
            ))}
          </div>

          <div className="archive-heading reveal">
            <div>
              <p className="eyebrow">Project archive</p>
              <h3>More things I’ve explored</h3>
            </div>
            <div className="filters" aria-label="Filter projects">
              {(['All', 'Research', 'AI', 'Data Science', 'Systems'] as const).map(item => (
                <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>
              ))}
            </div>
          </div>

          <div className="archive-grid">
            {filteredProjects.map(project => (
              <article className="archive-card reveal" key={project.title}>
                <div className="archive-top"><span>{project.category}</span><span>↗</span></div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="tag-row compact">{project.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div>
                {project.github ? <a className="card-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`} /> : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad about-section" id="about">
          <div className="about-panel reveal">
            <div>
              <p className="eyebrow">About me</p>
              <h2>Curious enough to ask why. Practical enough to build the answer.</h2>
            </div>
            <div className="about-copy">
              <p>
                I enjoy taking an idea, understanding it deeply, trying different approaches, and gradually turning it into a working system.
                I’m especially drawn to work that connects research with engineering—not only building intelligent systems, but also understanding how they behave and how they can become more reliable.
              </p>
              <p>
                Alongside technical work, Toastmasters has shaped how I communicate, collaborate, and present ideas. I value thoughtful teamwork, clear explanations, and technology with meaningful real-world value.
              </p>
              <a href="https://github.com/Tharumini03" target="_blank" rel="noreferrer">Visit my GitHub profile <ArrowIcon /></a>
            </div>
          </div>

          <div className="skills-grid reveal">
            {skills.map(([title, text]) => (
              <div className="skill-block" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-pad journey-section" id="journey">
          <div className="section-heading reveal">
            <div><p className="eyebrow">Journey</p><h2>Learning in public,<br />one meaningful problem at a time.</h2></div>
            <p>A concise timeline of the experiences currently shaping me as an engineer and researcher.</p>
          </div>
          <div className="timeline reveal">
            <div className="timeline-item">
              <span>2026</span><div><h3>Research paper accepted at MERCon 2026</h3><p>Co-authored “Monsoon Mayhem to Market Waves: Forecasting Fisheries Resilience in Sri Lanka” and serving as the presenting author.</p>
              <a href="https://arxiv.org/abs/2608.04023" target="_blank" rel="noreferrer" className="text-link"> Read on arXiv ↗ </a> </div>           
            </div>
            <div className="timeline-item">
              <span>2026—</span><div><h3>CrisisRIG · Multimodal Reliable AI Research</h3><p> Researching reliability-aware multimodal crisis classification
                across text and images, including modality reliability,
                cross-event generalisation, missing modalities, and
                uncertainty calibration.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span>2026</span><div><h3>Top 30  HEMAS AITHON</h3><p>uilt an AI-powered shipment automation system for extracting information from vendor emails and supporting shipment-planning decisions, reaching the Top 30 MVP stage.</p></div>
            </div>
            <div className="timeline-item">
              <span>2026</span><div><h3>AWS Academy credentials</h3><p>Completed Cloud Foundations and Microservices & CI/CD Pipeline Builder training.</p></div>
            </div>
            <div className="timeline-item">
              <span>2024—28</span><div><h3>BSc Engineering · University of Moratuwa</h3><p>Computer Science and Engineering, specializing in Data Science and Engineering.</p></div>
            </div>
            <div className="timeline-item">
              <span>2023—</span><div><h3>Toastmasters leadership</h3><p>Developing communication, public speaking, teamwork, and organizational leadership.</p></div>
            </div>
          </div>
        </section>

        <section className="section-pad contact-section" id="contact">
          <div className="contact-card reveal">
            <p className="eyebrow">Let’s connect</p>
            <h2>Interested in AI research, meaningful software, or a collaboration?</h2>
            <p>I’m open to research internships, project collaborations, and conversations with people building thoughtful technology.</p>
            <div className="hero-actions">
              <a className="button primary" href="https://www.linkedin.com/in/tharumini-gamage-0885ab34a/" target="_blank" rel="noreferrer">Message me on LinkedIn <ArrowIcon /></a>
              <a className="button secondary" href="https://github.com/Tharumini03" target="_blank" rel="noreferrer">Explore GitHub <ArrowIcon /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Tharumini Gamage</span>
        <span>Designed around research, clarity, and useful technology.</span>
      </footer>
    </div>
  )
}

export default App
