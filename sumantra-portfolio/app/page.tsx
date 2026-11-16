import { ArrowDownRight, ArrowUpRight, Asterisk, Check, Code2, FileCheck2, Figma, Menu, MoveUpRight, Package, Sparkles, Workflow, Clock3, ScanSearch } from 'lucide-react';

const projects = [
  {
    number: '01', name: 'ShipVision', type: 'AI · LOGISTICS · PRODUCT DESIGN',
    description: 'An AI-powered courier concept where customers upload item photos from multiple angles, receive an estimated weight and get a transparent, destination-aware shipping quotation.',
    tags: ['Python', 'AI image workflow', 'Shipping rules', 'Web app'],
    className: 'ship', label: 'LOGISTICS, REIMAGINED', href: 'https://shipvision.netlify.app/',
    note: 'Live independent demo'
  },
  {
    number: '02', name: 'Rotterdam Dockers', type: 'SPORTS · CUSTOM CMS · WEB',
    description: 'Lead UX/UI design and AI-assisted web design and development for the official Rotterdam Dockers website, a team in the European T20 Premier League (ETPL). The platform brings together team and player profiles, fixtures, news, tickets, merchandise and fan engagement.',
    tags: ['Lead UX/UI', 'AI-assisted design', 'Custom CMS', 'Frontend development'],
    className: 'dockers', label: 'PORT OF CHAMPIONS', href: 'https://rotterdamdockers.cricket/',
    note: 'Lead UX/UI Designer · Live website'
  },
  {
    number: '03', name: 'KGC — Knowledge Group, Dubai', type: 'EDTECH · UX/UI · WEB DEVELOPMENT',
    description: 'Designed and developed a comprehensive online education platform for professional training, certifications, digital learning and corporate solutions, with a focus on modern UX, course management, engagement and conversion.',
    tags: ['UX/UI design', 'Education platform', 'Course journeys', 'Frontend development'],
    className: 'kgc', label: 'LEARNING, CONNECTED', href: 'https://www.kgc.com/en',
    note: 'UX/UI Designer · Online education ecosystem'
  },
  {
    number: '04', name: 'DirectAxis Financial Services', type: 'FINANCIAL SERVICES · UX/UI · FRONTEND',
    description: 'Created the user journey from the initial design stage in Adobe XD and Photoshop through to frontend development, using AI-assisted support in the design-to-build workflow.',
    tags: ['UX/UI design', 'Adobe XD', 'Photoshop', 'User journey', 'Frontend development'],
    className: 'directaxis', label: 'DESIGN TO DIGITAL JOURNEY', href: 'https://www.linkedin.com/in/sumantra1981/details/projects/edit/forms/1384772107/',
    note: 'Oct 2019 – Jun 2021 · UX/UI Designer'
  },
  {
    number: '05', name: 'AI Personal Loan', type: 'FINTECH · AI · APPLICATION WORKFLOW',
    description: 'A personal loan application concept using AI-assisted checks for applicant details and supporting documents, with human review for flagged cases.',
    tags: ['Python', 'FinTech UX', 'Document checks', 'Admin review'],
    className: 'loan', label: 'A CLEARER WAY TO APPLY', href: '',
    note: 'Local development demo · Not publicly hosted'
  },
  {
    number: '06', name: 'DocTrust', type: 'AI · DOCUMENT VERIFICATION',
    description: 'An AI-assisted document review demo combining image metadata analysis, OCR text checks and additional validation signals to flag possible inconsistencies.',
    tags: ['Python', 'OCR', 'Metadata analysis', 'Document validation'],
    className: 'verify', label: 'TRUST, BUILT INTO THE FLOW', href: 'https://doctrust26.netlify.app/',
    note: 'Live independent demo'
  }
];

const services = [
  { icon: Figma, n: '01', title: 'Product design & UX', text: 'Clear journeys, thoughtful interfaces and design systems that make complex products feel simple.' },
  { icon: Code2, n: '02', title: 'Frontend engineering', text: 'Responsive, accessible and high-performing experiences built with React, Next.js and Tailwind CSS.' },
  { icon: Sparkles, n: '03', title: 'AI-powered applications', text: 'Practical AI experiences, workflow concepts and MVPs shaped around real business problems.' },
  { icon: Workflow, n: '04', title: 'Design-to-build partnership', text: 'A single partner across discovery, interface design, implementation and iteration.' }
];

const capabilities = ['UX/UI & visual design', 'Information architecture', 'User flows & wireframes', 'Figma & Figma Make AI', 'HTML5, CSS3 & JavaScript', 'jQuery & Bootstrap 3/4/5', 'WordPress & Drupal (Twig)', 'Responsive design & JSON/CMS', 'WCAG 2.0 accessibility', 'Git, Jira & Azure', 'Generative AI & prompt design', 'React, Next.js & Tailwind CSS'];

export default function Home() {
  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <header className="nav wrap">
        <a className="brand" href="#top" aria-label="Sumantra Kundu home"><span className="brand-mark">SK<span>.</span></span><span className="brand-name">SUMANTRA KUNDU</span></a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a><a href="#ai-lab">AI lab</a><a href="#services">Expertise</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15}/></a>
        <a className="mobile-menu" href="#contact" aria-label="Go to contact"><Menu size={21}/></a>
      </header>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR SELECT FREELANCE & REMOTE CONTRACTS</div>
          <h1>I design the<br/>experience. <span className="lime">I build</span><br/><span className="outline-word">the product.</span></h1>
          <p className="hero-intro">I’m Sumantra — a Lead Web Designer and Lead UX/UI Designer with <strong>18+ years of digital experience</strong> and 6 years specialising in UX/UI, combining user-centred design, frontend development and practical AI-assisted workflows.</p>
          <div className="hero-actions"><a className="button button-lime" href="#work">Explore selected work <ArrowUpRight size={17}/></a><a className="text-link" href="#about">More about me <ArrowDownRight size={16}/></a></div>
          <div className="hero-meta"><span>BASED IN INDIA</span><i/> <span>WORKING WORLDWIDE</span><i/> <span>REMOTE · FLEXIBLE</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract graphic representing design and engineering">
          <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-grid"/>
          <div className="art-core"><span className="core-top">DESIGN × ENGINEERING</span><span className="core-symbol">S<span>K</span></span><span className="core-bottom">THOUGHTFUL BY DESIGN.</span></div>
          <div className="float-card card-a"><span className="mini-label">EXPERIENCE</span><strong>18<span>+</span></strong><small>YEARS IN DIGITAL</small></div>
          <div className="float-card card-b"><span className="mini-icon"><Asterisk size={16}/></span><strong>From idea<br/>to interface.</strong><small>DESIGN · BUILD · ITERATE</small></div>
          <div className="art-index">FIG. 01 — THE PRACTICE</div>
        </div>
        <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/></a>
      </section>

      <section className="proof-strip"><div className="wrap proof-inner"><div><strong>18<span>+</span></strong><small>YEARS EXPERIENCE</small></div><div><strong>02</strong><small>DISCIPLINES, ONE MINDSET</small></div><div><strong>03</strong><small>INDEPENDENT AI DEMOS</small></div><div><strong>∞</strong><small>CURIOSITY TO KEEP BUILDING</small></div></div></section>

      <section className="section wrap" id="work">
        <div className="section-head"><div><div className="eyebrow">01 / SELECTED WORK</div><h2>Ideas made <span className="serif-italic">real.</span></h2></div><p>Selected client work and independent product concepts across sport, education, financial services, logistics and fintech.</p></div>
        <div className="project-grid">
          {projects.map((p) => <article className={`project-card ${p.className}`} key={p.number}>
            <div className="project-visual">
              <div className="visual-top"><span>{p.number} / CASE STUDY</span><span>{p.type}</span></div>
              {p.className === 'ship' && <div className="mock-window ship-window"><div className="mock-nav"><b>ship<span>vision</span></b><span>TRACK&nbsp;&nbsp; SERVICES&nbsp;&nbsp; SIGN IN</span></div><div className="ship-layout"><div><small>MOVE SMARTER</small><h3>Every shipment.<br/><em>In sight.</em></h3><p>One clear view from pickup to delivery.</p><span className="mock-pill">Get a shipping estimate ↗</span></div><div className="ship-graphic"><div className="route route-one"/><div className="route route-two"/><div className="parcel">▧</div><span className="pin pin-one">●</span><span className="pin pin-two">●</span><span className="map-label label-one">PICKUP</span><span className="map-label label-two">DELIVERY</span></div></div></div>}
              {p.className === 'dockers' && <div className="dockers-window"><div className="dockers-title">ROTTERDAM<br/><span>DOCKERS</span></div><div className="dockers-sub">PORT OF CHAMPIONS</div><div className="dockers-ball">✳</div><div className="dockers-bottom">CRICKET CLUB · ROTTERDAM</div></div>}
              {p.className === 'kgc' && <div className="kgc-window"><div className="kgc-top"><b>knowledge<span>group</span></b><span>LEARN&nbsp;&nbsp; TRAINING&nbsp;&nbsp; CORPORATE</span></div><div className="kgc-content"><small>LEARNING THAT MOVES YOU FORWARD</small><h3>Knowledge<br/><i>for what’s next.</i></h3><p>Professional learning. Real-world impact.</p><div className="kgc-course-row"><span>01&nbsp; PROFESSIONAL CERTIFICATIONS</span><span>02&nbsp; DIGITAL LEARNING</span><span>03&nbsp; CORPORATE SOLUTIONS</span></div></div><div className="kgc-orb"/></div>}
              {p.className === 'directaxis' && <div className="directaxis-window"><div className="da-top"><b>direct<span>axis</span></b><span>PERSONAL FINANCE&nbsp;&nbsp; SUPPORT</span></div><div className="da-content"><small>A JOURNEY BUILT AROUND YOU</small><h3>Move forward<br/><i>with confidence.</i></h3><div className="da-steps"><span>01&nbsp; YOUR DETAILS</span><span>02&nbsp; YOUR NEEDS</span><span>03&nbsp; NEXT STEPS</span></div><div className="da-cta">Explore your options&nbsp; ↗</div></div><div className="da-ring"/></div>}
              {p.className === 'loan' && <div className="loan-window"><div className="loan-brand">flow<span>.</span>finance</div><div className="loan-copy"><small>YOUR NEXT CHAPTER STARTS HERE</small><h3>A loan journey<br/>that moves <i>with you.</i></h3><div className="loan-progress"><span/><span/><span/><span/><span/></div><div className="loan-button">Start your application&nbsp; ↗</div></div><div className="loan-side"><span>01 / IDENTITY</span><b>✓</b><span>02 / INCOME</span><b>···</b><span>03 / REVIEW</span></div></div>}
              {p.className === 'verify' && <div className="verify-window"><div className="verify-head"><span>DOCTRUST / WORKSPACE</span><span>● SECURE FLOW</span></div><div className="verify-title">A clearer view<br/>of every <i>document.</i></div><div className="doc-stack"><div className="doc doc-back"><span>INCOME STATEMENT</span><b>▤</b></div><div className="doc doc-mid"><span>PROOF OF ADDRESS</span><b>▤</b></div><div className="doc doc-front"><span>IDENTITY DOCUMENT</span><b>✓</b><small>READY FOR REVIEW</small></div></div></div>}
              <div className="visual-caption">{p.label}</div>
            </div>
            <div className="project-info"><div><span className="project-note">{p.note}</span><h3>{p.name}</h3><p>{p.description}</p><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div>{p.href ? <a className="project-link" href={p.href} target="_blank" rel="noreferrer" aria-label={`Visit ${p.name}`}><ArrowUpRight size={21}/></a> : <span className="project-request">DEMO ON REQUEST</span>}</div>
          </article>)}
        </div>
        <div className="client-work-strip"><span>OTHER CLIENT & PRODUCT EXPERIENCE</span><div><b>Wysely</b><b>Kudough</b><b>Mitsubishi Europe</b><b>TMW Spiders</b><b>TMW Portal</b><b>IIMC</b><b>TravelApp</b><b>Sanlam</b></div></div><div className="work-foot"><span>MORE WORK & DETAILS AVAILABLE ON REQUEST</span><a href="#contact">Discuss a project <ArrowUpRight size={15}/></a></div>
      </section>

      <section className="ai-lab-section" id="ai-lab">
        <div className="wrap ai-lab-wrap">
          <div className="section-head ai-lab-heading">
            <div><div className="eyebrow">02 / INDEPENDENT AI BUILDS</div><h2>Ideas I wanted<br/><span className="serif-italic">to put to work.</span></h2></div>
            <p>Alongside client and company work, I have created three AI-powered application demos from my own ideas, using Python to support the AI workflows. They are exploratory concepts today — and a starting point for tailored solutions when a client problem calls for them.</p>
          </div>
          <div className="ai-intro-note"><span className="ai-note-icon"><Sparkles size={18}/></span><p><strong>Built from curiosity. Shaped for real business problems.</strong><br/>These are independent demo projects, not finished commercial products. I would be happy to adapt the concepts, workflows and interfaces to suit a client's requirements.</p><span className="ai-note-index">AI / 03</span></div>
          <div className="ai-detail-grid">
            <article className="ai-detail-card ai-ship-detail">
              <div className="ai-detail-top"><span>01 — LOGISTICS & SHIPPING</span><span className="ai-live"><i/> LIVE DEMO</span></div>
              <div className="ai-detail-icon"><Package size={23}/></div>
              <h3>ShipVision</h3>
              <p className="ai-detail-lead">AI-powered courier & shipping application</p>
              <p className="ai-detail-body">A DTDC-style courier experience designed to make shipping estimates easier to understand, from item details to a country-aware quotation.</p>
              <ul><li>Upload multiple photos of an item from different angles.</li><li>AI analyses the item images to estimate its weight.</li><li>Enter pickup and delivery addresses to calculate an estimated courier charge.</li><li>Pricing considers weight, package dimensions, destination country, shipping rates and applicable rules.</li><li>Shows a transparent cost breakdown, including shipping, taxes, fuel surcharges, customs duties where applicable and other fees.</li></ul>
              <div className="ai-techline"><span>PYTHON</span><span>AI IMAGE WORKFLOW</span><span>SHIPPING LOGIC</span></div>
              <a className="ai-visit" href="https://shipvision.netlify.app/" target="_blank" rel="noreferrer">Explore live demo <ArrowUpRight size={16}/></a>
            </article>
            <article className="ai-detail-card ai-doc-detail">
              <div className="ai-detail-top"><span>02 — TRUST & VERIFICATION</span><span className="ai-live"><i/> LIVE DEMO</span></div>
              <div className="ai-detail-icon"><FileCheck2 size={23}/></div>
              <h3>DocTrust</h3>
              <p className="ai-detail-lead">AI-powered document verification</p>
              <p className="ai-detail-body">A document analysis concept that helps identify files that may need closer inspection by looking for signs of manipulation or inconsistent information.</p>
              <ul><li>Upload documents for automated analysis.</li><li>Inspect available image metadata for useful signals.</li><li>Use OCR-based text extraction and verification.</li><li>Combine multiple validation techniques to identify possible manipulation, mismatches or inconsistencies.</li><li>Surface potential concerns for further human review rather than treating an AI result as a definitive authenticity decision.</li></ul>
              <div className="ai-techline"><span>PYTHON</span><span>OCR</span><span>METADATA ANALYSIS</span></div>
              <a className="ai-visit" href="https://doctrust26.netlify.app/" target="_blank" rel="noreferrer">Explore live demo <ArrowUpRight size={16}/></a>
            </article>
            <article className="ai-detail-card ai-loan-detail">
              <div className="ai-detail-top"><span>03 — FINTECH & LENDING</span><span className="ai-local"><i/> LOCAL DEMO</span></div>
              <div className="ai-detail-icon"><Clock3 size={23}/></div>
              <h3>AI Personal Loan</h3>
              <p className="ai-detail-lead">AI-assisted personal loan application</p>
              <p className="ai-detail-body">A lending journey concept exploring how AI could help verify applicant details and supporting documents, while keeping human oversight in the decision process.</p>
              <ul><li>Collect applicant details and supporting documents.</li><li>Use AI-assisted checks across identity and submitted information.</li><li>Analyse documents such as proof of address, payslips and bank statements.</li><li>Target a one-hour journey for eligible applicants, subject to verification, lender rules and final approval.</li><li>Route rejected or flagged applications to an administrator for manual review before a final decision.</li></ul>
              <div className="ai-techline"><span>PYTHON</span><span>FINTECH WORKFLOW</span><span>HUMAN REVIEW</span></div>
              <span className="ai-private-note"><ScanSearch size={15}/> Currently running locally on my computer — demo available on request.</span>
            </article>
          </div>
          <div className="ai-collab-banner"><div><span className="eyebrow">HAVE A CHALLENGE IN MIND?</span><h3>Let's explore what AI<br/><em>could make possible.</em></h3></div><div><p>If you have a new project idea or a client requirement where AI could help, I'd love to discuss it and explore a customised solution together.</p><a className="button button-lime" href="#contact">Start a conversation <ArrowUpRight size={17}/></a></div></div>
        </div>
      </section>

      <section className="services-section" id="services"><div className="wrap section"><div className="section-head"><div><div className="eyebrow">03 / WHAT I BRING</div><h2>One partner.<br/><span className="serif-italic">Connected thinking.</span></h2></div><p>Good digital work happens when the experience and the engineering are considered together — not handed off as separate problems.</p></div><div className="service-grid">{services.map(s=><article className="service-card" key={s.n}><div className="service-top"><span>{s.n}</span><s.icon size={23} strokeWidth={1.4}/></div><h3>{s.title}</h3><p>{s.text}</p><span className="service-arrow"><ArrowUpRight size={17}/></span></article>)}</div></div></section>

      <section className="section wrap about-section" id="about"><div className="about-left"><div className="eyebrow">04 / A LITTLE ABOUT ME</div><h2>Curious by nature.<br/><span className="serif-italic">Practical by design.</span></h2><div className="about-stamp"><span>DESIGN</span><Asterisk size={22}/><span>ENGINEER</span></div></div><div className="about-copy"><p className="about-lead">I’m a UI/UX and frontend professional who enjoys taking a product from the first sketch to a working experience — and exploring where practical AI can make that experience smarter.</p><p>Over 18 years, I’ve worked across web design, UX/UI, visual direction, frontend development, optimisation and team leadership. I joined L&amp;G Consultancy in October 2019 and currently lead web and UX/UI design initiatives, collaborating with clients, developers and stakeholders to deliver accessible, responsive digital experiences.</p><p>Previously, I spent more than 11 years at Web Spiders, progressing to Team Lead and managing design delivery, project priorities, stakeholder communication and team mentoring. My featured work includes Rotterdam Dockers, Wysely and KGC, alongside projects for Kudough, Directaxis, Mitsubishi Europe, TMW Spiders, TMW Portal, IIMC, TravelApp and Sanlam. I have also created three independent AI-powered demo applications from my own ideas: ShipVision, DocTrust and an AI-assisted personal loan journey. I use AI tools to accelerate exploration and prototyping while keeping design judgement and delivery human-led.</p><p className="about-credentials"><strong>Education</strong> — Master of Arts, Madurai Kamaraj University (2017–2019); Diploma in Multimedia &amp; Animation, Jadavpur University, Cad Centre (2004–2005). <strong>Certifications</strong> — Upwork Design Certification (2017); User Interface Design Certification (2015). <strong>Languages</strong> — English, Hindi and Bengali.</p><div className="about-facts"><div><span>01</span><b>Design-minded<br/>engineering</b></div><div><span>02</span><b>End-to-end<br/>ownership</b></div><div><span>03</span><b>Always learning<br/>and evolving</b></div></div></div></section>

      <section className="cap-section"><div className="wrap cap-inner"><div><div className="eyebrow">05 / TOOLKIT & CAPABILITIES</div><h2>Craft meets<br/><span className="serif-italic">technology.</span></h2></div><div className="cap-list">{capabilities.map((c,i)=><div className="cap-item" key={c}><span>0{i+1}</span>{c}<Check size={15}/></div>)}</div><p className="cap-disclaimer">My toolkit evolves with the problem. These are areas I work with or am actively building deeper expertise in — not a claim that every project uses every tool.</p></div></section>

      <section className="section wrap collaboration"><div className="eyebrow">06 / HOW WE CAN WORK TOGETHER</div><div className="collab-grid"><h2>Good work starts<br/>with a <span className="serif-italic">conversation.</span></h2><div className="collab-copy"><p>I’m open to collaborating with international agencies, founders and product teams who need an experienced design-and-build partner.</p><div className="availability-list"><div><Check size={15}/> Part-time remote collaboration</div><div><Check size={15}/> Full-time contract opportunities</div><div><Check size={15}/> Project-based design & development</div><div><Check size={15}/> Ongoing frontend / product support</div></div><a className="button button-lime" href="#contact">Discuss a project <ArrowUpRight size={17}/></a></div></div></section>

      <section className="contact-section" id="contact"><div className="wrap contact-wrap"><div className="eyebrow">07 / HAVE A GOOD ONE IN MIND?</div><h2>Let’s make<br/><span className="serif-italic">it happen.</span></h2><p>Have a product to shape, a frontend challenge to solve or a client requirement where a customised AI solution could help? I’d love to hear about it and explore the possibilities together.</p><a className="contact-email" href="mailto:sumantrakundu@gmail.com">sumantrakundu@gmail.com <MoveUpRight size={22}/></a><div className="contact-methods"><a href="https://wa.me/919836042181" target="_blank" rel="noreferrer"><span>WHATSAPP</span><strong>+91 9836042181</strong><ArrowUpRight size={15}/></a><div className="contact-method-static"><span>MICROSOFT TEAMS</span><strong>sumantra.kundu</strong></div><a href="https://www.linkedin.com/in/sumantra1981/" target="_blank" rel="noreferrer"><span>LINKEDIN</span><strong>Connect with me</strong><ArrowUpRight size={15}/></a></div><div className="contact-bottom"><span>AVAILABLE FOR INTERNATIONAL REMOTE WORK</span><div className="social-links"><a href="https://www.linkedin.com/in/sumantra1981/" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={13}/></a><a href="https://github.com/sumantrakundu" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={13}/></a></div></div></div></section>

      <footer className="footer wrap"><a className="brand" href="#top"><span className="brand-mark">SK<span>.</span></span><span className="brand-name">SUMANTRA KUNDU</span></a><span>DESIGNED WITH INTENT. BUILT WITH CURIOSITY.</span><a href="#top">BACK TO TOP ↑</a><span>© {new Date().getFullYear()} SUMANTRA KUNDU</span></footer>
    </main>
  );
}
