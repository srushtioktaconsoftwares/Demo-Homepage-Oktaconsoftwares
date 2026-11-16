
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <div className="brand">
          <span className="brand-symbol">G</span>
          <span>Great.<br />Learning</span>
        </div>

        <button className="explore-menu">
          Explore Programs
          <span className="explore-arrow"></span>
        </button>

        <div className="search-box">
          <span>⌕</span>
          <input placeholder='Try "Agentic AI"' />
        </div>

        <nav className="nav-links">
          <a href="#career">Career Support</a>
          <a href="#stories">Success Stories</a>
          <a href="#enterprise">Enterprise</a>
          <a href="#more">
            More <span className="nav-arrow"></span>
          </a>
        </nav>

        <button className="login-button">LOGIN</button>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>
            13 Years of Accelerating
            <br />
            Career Growth
          </h1>

          <p className="hero-description">
            Trusted by 15 million professionals to build industry-
            relevant and future-ready skills.
          </p>

          <h3>4/5 alumni landed their dream roles*</h3>

          <a href="#programs" className="primary-button">
            EXPLORE PROGRAMS <span>→</span>
          </a>

          <div className="ratings">
            <span>⭐ 4.6 <small>Google</small></span>
            <span>⭐ 4.89 <small>COURSE REPORT</small></span>
            <span>⭐ 4.97 <small>switchup</small></span>
            <span>⭐ 4.7 <small>CAREER KARMA</small></span>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/greatlearning-hero.png"
            alt="Professional educator holding a tablet"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
        <button className="carousel-arrow left-arrow">←</button>
        <button className="carousel-arrow right-arrow">→</button>
      </section>
      
      <section className="program-discovery" id="programs">

        <aside className="domain-panel">
          <p className="eyebrow">FIND YOUR IDEAL</p>
          <h2>Programs from the world’s best universities</h2>

          <div className="domain-list">
        {[
          ["Popular Courses", "🔥"],
          ["AI & Machine Learning", "🤖"],
          ["Agentic AI", "▣"],
          ["Generative AI", "♟"],
          ["Leadership Programs", "▢"],
          ["Software & Tech", "💻"],
          ["Data Science & Analytics", "◉"],
          ["Management", "▢"],
          ["Doctorate", "🎓"],
          ["Degrees", "▤"],
          ["Cloud Computing", "☁"],
          ["Masters", "▣"],
          ["Healthcare", "✚"]
        ].map(([name, icon]) => (
          <a
            href="#popular-courses"
            key={name}
          >
            <span>{icon}</span>
            {name}
            <b>›</b>
          </a>
        ))}
      </div>
        </aside>

        <div className="popular-panel" id="popular-courses">
          <h3 className="popular-title">POPULAR COURSES</h3>

          <div className="program-grid">

            <article className="program-card">
              <div className="course-image">
                <Image src="/programs/iit-bombay.jpg" alt="IIT Bombay campus" fill />
              </div>
              <div className="course-info">
                <p className="university-name">IIT BOMBAY</p>
                <h4>e-Postgraduate Diploma (ePGD) in Artificial Intelligence and Data Science</h4>
                <p className="duration">18 months · Online</p>
                <span className="course-badge">IIT BOMBAY FACULTY</span>
                <a href="#popular-courses">View Program</a>
              </div>
            </article>

            <article className="program-card">
              <div className="course-image">
                <Image src="/programs/mccombs.jpg" alt="University of Texas campus" fill />
              </div>
              <div className="course-info">
                <p className="university-name">MCCOMBS SCHOOL OF BUSINESS AT THE UNIVERSITY OF TEXAS</p>
                <h4>PG Program in Artificial Intelligence & Machine Learning</h4>
                <p className="duration">12 Months · Online</p>
                <span className="course-badge">#1 RANKED AI PROGRAM</span>
                <a href="#popular-courses">View Program</a>
              </div>
            </article>

            <article className="program-card">
              <div className="course-image">
                <Image src="/programs/microsoft.jpg" alt="Microsoft technology workspace" fill />
              </div>
              <div className="course-info">
                <p className="university-name">MICROSOFT</p>
                <h4>Microsoft Agentic AI for Practitioners</h4>
                <p className="duration">5 Months · Mentored</p>
                <a href="#popular-courses">View Program</a>
              </div>
            </article>

            <article className="program-card">
              <div className="course-image">
                <Image src="/programs/mccombs-data-science.jpg" alt="McCombs School of Business" fill />
              </div>
              <div className="course-info">
                <p className="university-name">MCCOMBS SCHOOL OF BUSINESS AT THE UNIVERSITY OF TEXAS</p>
                <h4>Post Graduate Program in Data Science with Generative AI</h4>
                <p className="duration">12 months · Online</p>
                <span className="course-badge">DEDICATED CAREER SUPPORT</span>
                <a href="#popular-courses">View Program</a>
              </div>
            </article>

            <article className="program-card">
              <div className="course-image">
                <Image src="/programs/iit-leadership.jpg" alt="IIT Bombay campus" fill />
              </div>
              <div className="course-info">
                <p className="university-name">IIT BOMBAY</p>
                <h4>Certificate in Leadership with AI</h4>
                <p className="duration">5 months · Online</p>
                <a href="#popular-courses">View Program</a>
              </div>
            </article>

            <article className="program-card">
              <div className="course-image">
                <Image src="/programs/mccombs-leaders.jpg" alt="University of Texas campus" fill />
              </div>
              <div className="course-info">
                <p className="university-name">MCCOMBS SCHOOL OF BUSINESS AT THE UNIVERSITY OF TEXAS</p>
                <h4>Post Graduate Program in AI and Agentic AI for Leaders</h4>
                <p className="duration">16 Weeks · Online · weekend</p>
                <span className="course-badge">NO PROGRAMMING EXP REQUIRED</span>
                <a href="#popular-courses">View Program</a>
              </div>
            </article>

            <article className="program-card">
              <div className="course-image">
                <Image src="/programs/johns-hopkins.jpg" alt="Technology workspace" fill />
              </div>
              <div className="course-info">
                <p className="university-name">JOHNS HOPKINS UNIVERSITY</p>
                <h4>Certificate Program in Agentic AI</h4>
                <p className="duration">14 Weeks · Online</p>
                <a href="#popular-courses">View Program</a>
              </div>
            </article>

            <article className="program-card">
              <div className="course-image">
                <Image src="/programs/walsh-college.jpg" alt="University campus" fill />
              </div>
              <div className="course-info">
                <p className="university-name">WALSH COLLEGE</p>
                <h4>Doctor Of Business Administration in Artificial Intelligence and Machine Learning</h4>
                <p className="duration">3 Years · Online</p>
                <span className="course-badge">TOP 10 BEST ONLINE DBA DEGREE</span>
                <a href="#popular-courses">View Program</a>
              </div>
            </article>

            <article className="program-card">
              <div className="course-image">
                <Image src="/programs/iit-bombay.jpg" alt="IIT Bombay campus" fill />
              </div>
              <div className="course-info">
                <p className="university-name">IIT BOMBAY</p>
                <h4>Certificate in Agentic AI</h4>
                <p className="duration">5 months · Online</p>
                <a href="#popular-courses">View Program</a>
              </div>
            </article>

          </div>
        </div>
      </section>



    </main>
  );
}
