import React, { useEffect, useState } from 'react';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { portfolioData } from './data/portfolioData';
import { HeroScene, ProjectScene } from './components/SpatialScene';
import './App.css';

const icons = { github: FiGithub, linkedin: FiLinkedin, email: FiMail };

function SectionHeading({ eyebrow, title, count }) {
  return <div className="section-heading reveal"><div><span>{eyebrow}</span><h2>{title}</h2></div>{count && <b>{count}</b>}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    }), { threshold: 0.12 });
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const move = (event) => {
      document.documentElement.style.setProperty('--mx', `${(event.clientX / window.innerWidth - .5) * 12}deg`);
      document.documentElement.style.setProperty('--my', `${(event.clientY / window.innerHeight - .5) * -12}deg`);
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  const { person, navigation, projects, experience, skills, publications, community } = portfolioData;

  return (
    <main>
      <nav className="nav-shell">
        <a className="brand" href="#top" aria-label="Anvi Verma, home">A<span>V</span></a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navigation.map(item => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav-cta" href={`mailto:${person.email}`}>Let’s talk <FiArrowUpRight /></a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <FiX /> : <FiMenu />}</button>
      </nav>

      <header id="top" className="hero">
        <HeroScene />
        <div className="scene-vignette" />
        <div className="hero-copy">
          <div className="status-pill"><i /> NEURAL OBSERVATORY ONLINE</div>
          <p className="kicker">ANVI VERMA · AI / ML ENGINEER</p>
          <h1>Building<br /><em>intelligence</em><br />you can use.</h1>
          <p className="hero-intro">{person.intro}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">Explore my work <FiArrowUpRight /></a>
            <a className="text-button" href={person.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub / {person.githubHandle}</a>
          </div>
        </div>
        <div className="scene-readout readout-left"><span>MODEL STATE</span><b>LEARNING</b><small>Accuracy / 97.4%</small></div>
        <div className="scene-readout readout-right"><span>INPUT STREAM</span><b>VISION + LANGUAGE</b><small>24 connected nodes</small></div>
        <div className="drag-note">DRAG TO ORBIT <i>↔</i></div>
        <div className="scroll-note"><span>SCROLL TO EXPLORE</span><i /></div>
      </header>

      <section id="about" className="about-section">
        <div className="about-index">01 <span>/ 05</span></div>
        <div className="about-copy reveal">
          <p className="eyebrow">ABOUT THE HUMAN</p>
          <h2>Building at the intersection of <em>intelligence</em> and imagination.</h2>
          <p>{person.about}</p>
          <div className="metrics">{person.metrics.map(metric => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
        </div>
        <div className="about-aside reveal">
          <div className="terminal-card"><div className="terminal-top"><span /><span /><span /></div><code><b>anvi.currentFocus</b><br />[<br />&nbsp;&nbsp;“Applied AI”,<br />&nbsp;&nbsp;“Computer Vision”,<br />&nbsp;&nbsp;“Useful products”<br />]</code></div>
          <p>Based in <b>{person.location}</b><br />Open to remote collaboration</p>
        </div>
      </section>

      <section id="work" className="work-section">
        <SectionHeading eyebrow="02 — SELECTED BUILDS" title="Ideas, made tangible." count={`0${projects.length}`} />
        <div className="project-stage reveal">
          <div className={`project-visual visual-${activeProject + 1}`}><div className="visual-grid" /><span className="project-number">LIVE CASE / 0{activeProject + 1}</span><ProjectScene variant={activeProject} /><div className="project-scan"><span>{projects[activeProject].type}</span><b>ACTIVE</b></div></div>
          <article className="project-detail">
            <span>{projects[activeProject].type} · {projects[activeProject].year}</span><h3>{projects[activeProject].title}</h3><p>{projects[activeProject].description}</p>
            <div className="tag-row">{projects[activeProject].tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <a href={projects[activeProject].url} target="_blank" rel="noreferrer">View project <FiArrowUpRight /></a>
          </article>
        </div>
        <div className="project-picker">{projects.map((project, index) => <button className={activeProject === index ? 'active' : ''} onClick={() => setActiveProject(index)} key={project.title}><span>0{index + 1}</span>{project.title}</button>)}</div>
      </section>

      <section id="experience" className="experience-section">
        <SectionHeading eyebrow="03 — EXPERIENCE" title="Learning by shipping." />
        <div className="timeline-list">{experience.map((item, index) => <article className="timeline-item reveal" key={item.role}><div className="timeline-year">{item.period}</div><div><span>0{index + 1}</span><h3>{item.role}</h3><b>{item.company}</b><p>{item.description}</p></div><div className="tag-row">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>

      <section id="skills" className="skills-section">
        <div className="skill-intro reveal"><p className="eyebrow">04 — THE TOOLKIT</p><h2>Fluent in data.<br /><em>Curious by default.</em></h2><p>Technology is the medium. The outcome is the point.</p></div>
        <div className="skill-grid">{skills.map((group, index) => <article className="skill-card reveal" key={group.title}><span>0{index + 1}</span><h3>{group.title}</h3><p>{group.items.join(' · ')}</p></article>)}</div>
      </section>

      <section id="writing" className="writing-section">
        <SectionHeading eyebrow="05 — KNOWLEDGE SHARED" title="Notes from the field." />
        <div className="writing-grid">{publications.map(article => <a className="article-card reveal" href={article.url} target="_blank" rel="noreferrer" key={article.title}><span>{article.publisher} · {article.date}</span><h3>{article.title}</h3><p>{article.summary}</p><FiArrowUpRight /></a>)}</div>
        <div className="community reveal"><span>BEYOND THE SCREEN</span><p>{community}</p></div>
      </section>

      <footer><div><p>Have a difficult problem?</p><h2>Let’s make it<br /><em>beautifully simple.</em></h2><a href={`mailto:${person.email}`}>{person.email} <FiArrowUpRight /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ANVI VERMA</span><div>{person.socials.map(item => { const Icon = icons[item.icon]; return <a key={item.label} href={item.url} target="_blank" rel="noreferrer" aria-label={item.label}><Icon /> {item.label}</a>; })}</div><a href="#top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}

export default App;
