import React, { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowUpRight, Terminal, Shield, Code2, Cpu, Github,
  Instagram, Send, Mail, Menu, X, ExternalLink, Fingerprint,
  Activity, Command, Braces, Wifi, ChevronRight
} from 'lucide-react';

const projects = [
  {
    number: '01',
    type: 'AUTOMATION / BOT',
    name: 'NEXUS BOT',
    description: 'A modular Telegram utility bot concept focused on fast workflows, media handling and useful developer tools.',
    tags: ['NODE.JS', 'TELEGRAM API', 'AUTOMATION'],
    status: 'CONCEPT BUILD',
    icon: <Command size={22} />
  },
  {
    number: '02',
    type: 'WEB EXPERIENCE',
    name: 'VOID INTERFACE',
    description: 'A minimal dark interface experiment exploring expressive motion, terminal-inspired details and responsive layouts.',
    tags: ['REACT', 'CSS', 'UI DESIGN'],
    status: 'DESIGN STUDY',
    icon: <Code2 size={22} />
  },
  {
    number: '03',
    type: 'DEVELOPER TOOL',
    name: 'REDLINE KIT',
    description: 'A collection of small utilities and scripts designed to make everyday development tasks feel effortless.',
    tags: ['JAVASCRIPT', 'TOOLS', 'OPEN SOURCE'],
    status: 'IN PROGRESS',
    icon: <Terminal size={22} />
  }
];

const skills = [
  { name: 'JavaScript', level: 'CORE', width: '82%' },
  { name: 'HTML / CSS', level: 'CORE', width: '90%' },
  { name: 'Node.js', level: 'BUILDING', width: '72%' },
  { name: 'React', level: 'BUILDING', width: '68%' },
  { name: 'Git & GitHub', level: 'WORKFLOW', width: '76%' },
  { name: 'Linux & CLI', level: 'EXPLORING', width: '62%' }
];

function SectionLabel({ index, children }) {
  return <div className="section-label"><span>{index}</span><i />{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [terminalText, setTerminalText] = useState('');
  const [terminalDone, setTerminalDone] = useState(false);
  const terminalLine = 'whoami: curious mind. builder by instinct. always exploring.';

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let i = 0;
    const type = setInterval(() => {
      i += 1;
      setTerminalText(terminalLine.slice(0, i));
      if (i >= terminalLine.length) {
        clearInterval(type);
        setTerminalDone(true);
      }
    }, 34);
    return () => clearInterval(type);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const localTime = new Intl.DateTimeFormat('en', {
    timeZone: 'Asia/Colombo', hour: '2-digit', minute: '2-digit', hour12: false
  }).format(time);

  return (
    <div className="site-shell">
      <div className="noise" />
      <div className="grid-bg" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">C<span>B</span></span>
          <span className="brand-name">CHUCKY<span>BEA</span><small>PERSONAL DIGITAL SPACE</small></span>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {['home', 'about', 'skills', 'projects', 'contact'].map((item, i) =>
            <a key={item} href={`#${item}`} onClick={closeMenu}><span>0{i + 1}</span>{item.toUpperCase()}</a>
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>LET'S TALK <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> SYSTEM ONLINE <span className="eyebrow-line" /> DIGITAL IDENTITY / 001</div>
            <p className="hero-kicker">NOT HERE TO FIT IN.</p>
            <h1>CHUCKY<br /><span className="outline-text">BEA</span><span className="hero-period">.</span></h1>
            <div className="hero-bottom">
              <div className="hero-intro">
                <span className="red-slash">//</span>
                <p>Exploring technology.<br />Building things that matter.<br /><strong>Thinking beyond the interface.</strong></p>
              </div>
              <a className="round-link" href="#about" aria-label="Scroll to about"><ArrowDown size={20} /></a>
            </div>
            <div className="hero-meta">
              <span><b>AGE</b> 18+</span><span><b>MODE</b> CREATIVE / TECH</span><span><b>STATUS</b> <i className="status-dot" /> AVAILABLE</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract cybernetic portrait illustration">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="art-cross cross-a" /><div className="art-cross cross-b" />
            <div className="art-core">
              <div className="core-top">CB // 001</div>
              <Fingerprint className="fingerprint" strokeWidth={0.8} />
              <div className="core-scan" />
              <div className="core-bottom"><span>IDENTITY VERIFIED</span><span>0xCB_</span></div>
            </div>
            <div className="art-coordinate coord-a">06° 58' N<br />79° 54' E</div>
            <div className="art-coordinate coord-b">FIG. 001<br />THE UNKNOWN</div>
            <div className="art-side-label">INDEPENDENT DIGITAL CREATOR</div>
            <div className="art-index">C / B</div>
          </div>
          <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><div /></div>
        </section>

        <section className="ticker" aria-label="Interests">
          <div className="ticker-track">
            {Array.from({length: 2}).map((_, i) => <div className="ticker-group" key={i}>
              {['CODE', 'CREATE', 'EXPLORE', 'REPEAT', 'TECHNOLOGY', 'DIGITAL CRAFT'].map(word =>
                <span key={word}>{word}<b>✳</b></span>)}
            </div>)}
          </div>
        </section>

        <section className="about section-wrap section-space" id="about">
          <SectionLabel index="01">THE PERSON BEHIND THE SCREEN</SectionLabel>
          <div className="about-grid">
            <div className="about-heading"><h2>MORE THAN<br />A <span>USERNAME.</span></h2><div className="about-stamp"><span>EST.</span><b>CB</b><span>ALWAYS EVOLVING</span></div></div>
            <div className="about-content">
              <p className="lead">I'm <strong>CHUCKY BEA</strong> — an independent digital creator with a curious mind and a serious interest in technology.</p>
              <p>I enjoy exploring how things work, experimenting with code, building useful digital experiences and learning something new with every project. My approach is simple: stay curious, keep creating, and never stop improving.</p>
              <div className="terminal-card">
                <div className="terminal-head"><span><i /> <i /> <i /></span><b><Terminal size={13} /> identity.sh</b><span>● LIVE</span></div>
                <div className="terminal-body"><span className="terminal-prompt">chucky@bea:~$</span> {terminalText}<span className={terminalDone ? 'cursor hidden' : 'cursor'}>▋</span></div>
              </div>
              <div className="about-facts">
                <div><span>01 / MINDSET</span><b>ALWAYS LEARNING</b></div>
                <div><span>02 / INTEREST</span><b>TECH & DIGITAL</b></div>
                <div><span>03 / APPROACH</span><b>BUILD. TEST. REPEAT.</b></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-space" id="skills">
          <SectionLabel index="02">THE CURRENT LOADOUT</SectionLabel>
          <div className="section-heading-row"><h2>TOOLS OF<br /><span>THE TRADE.</span></h2><p>Skills are not a finish line.<br />They're a work in progress.</p></div>
          <div className="skills-layout">
            <div className="skills-list">
              {skills.map((skill, i) => <div className="skill-row" key={skill.name}>
                <div className="skill-info"><span className="skill-index">0{i+1}</span><b>{skill.name}</b><span className="skill-level">{skill.level}</span></div>
                <div className="skill-track"><span style={{width: skill.width}} /></div>
              </div>)}
            </div>
            <div className="skills-aside">
              <div className="aside-icon"><Cpu size={30} /></div>
              <span className="micro-label">CURRENT FOCUS</span>
              <h3>LEARNING<br /><em>BY DOING.</em></h3>
              <p>From frontend interfaces to backend logic, I like understanding the full picture — one experiment at a time.</p>
              <div className="focus-tags"><span><Braces size={13}/> DEVELOPMENT</span><span><Shield size={13}/> CYBERSECURITY BASICS</span><span><Wifi size={13}/> NETWORKING</span></div>
            </div>
          </div>
        </section>

        <section className="projects section-wrap section-space" id="projects">
          <SectionLabel index="03">SELECTED EXPERIMENTS</SectionLabel>
          <div className="section-heading-row"><h2>BUILT IN<br /><span>THE LAB.</span></h2><p>A few concepts and experiments.<br />More is always in the pipeline.</p></div>
          <div className="project-list">
            {projects.map(project => <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-icon">{project.icon}</div>
              <div className="project-main"><span className="micro-label">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              <div className="project-end"><span className="project-status"><i />{project.status}</span><span className="project-arrow"><ArrowUpRight size={20}/></span></div>
            </article>)}
          </div>
          <p className="project-note"><span>NOTE //</span> Project entries above are portfolio concepts. Replace them with live project links as your work ships.</p>
        </section>

        <section className="manifesto section-space">
          <div className="manifesto-inner section-wrap">
            <span className="micro-label">A PERSONAL OPERATING PRINCIPLE</span>
            <h2>STAY CURIOUS.<br /><span>STAY DANGEROUS.</span><br />STAY CREATIVE.</h2>
            <div className="manifesto-bottom"><span>NO SHORTCUTS. JUST PROGRESS.</span><Activity size={18}/><span>END OF TRANSMISSION_</span></div>
          </div>
        </section>

        <section className="contact section-wrap section-space" id="contact">
          <SectionLabel index="04">OPEN CHANNEL</SectionLabel>
          <div className="contact-grid">
            <div><h2>HAVE A<br /><span>GOOD IDEA?</span></h2><p>Let's connect, exchange ideas or build something interesting together.</p></div>
            <div className="contact-panel">
              <span className="micro-label">ESTABLISH CONNECTION</span>
              <a href="mailto:hello@chuckybea.dev" className="contact-link"><span><Mail size={18}/> EMAIL</span><b>hello@chuckybea.dev</b><ArrowUpRight size={18}/></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact-link"><span><Github size={18}/> GITHUB</span><b>Explore repositories</b><ArrowUpRight size={18}/></a>
              <a href="https://t.me/" target="_blank" rel="noreferrer" className="contact-link"><span><Send size={18}/> TELEGRAM</span><b>Send a message</b><ArrowUpRight size={18}/></a>
              <div className="contact-disclaimer">Replace the placeholder contact details and social URLs with your real accounts before publishing.</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="footer-brand" href="#home">CB<span>.</span></a>
        <div className="footer-center"><span>CHUCKY BEA © {new Date().getFullYear()}</span><span>DESIGNED IN THE DARK. BUILT FOR THE LIGHT.</span></div>
        <div className="footer-right"><span><i className="status-dot"/> ALL SYSTEMS NOMINAL</span><b>LK / {localTime}</b><a href="#home" aria-label="Back to top"><ArrowUpRight size={17}/></a></div>
      </footer>
    </div>
  );
}

export default App;
