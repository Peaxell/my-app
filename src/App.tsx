import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";



const WHATSAPP_NUMBER = "2348169765345";
const WA_MESSAGE = encodeURIComponent(
  "Hello SmartReports by Kenort! I need help writing or fixing my report or proposal."
);
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MESSAGE}`;

const BANNER_URL =
   "/pics.jpg"
export default function App() {
  return (
    <div className="site">
      {/* Header / Hero */}
      <header
        className="hero"
        style={{ backgroundImage: `url(${BANNER_URL})` }}
        aria-label="Study banner with books and laptop"
      >
        <div className="overlay" />
        <div className="hero-inner">
          <div className="hero-text">
            {/* Logo */}
            <div className="logo" aria-label="SmartReports Logo">
            <i className="fas fa-book-open logo-icon"></i>
            <span className="brand-text">StR</span>
        </div>


            <h1 className="brand">SmartReports by Kenort</h1>
            <p className="tagline">
              Need a full report or proposal written from scratch?{" "}
              <strong>
                We research, write, and polish your project fast and
                professionally.
              </strong>
            </p>
            <div className="hero-ctas">
              <a
                className="btn primary"
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Write My Report
              </a>
              <a
                className="btn ghost"
                href="mailto:smartreportsbykenort@gmail.com"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Sections */}
      <main className="container">
        {/* Services Section */}
        <section id="services" className="section cards">
          <h2>Our Services</h2>
          <div className="card-grid">
            <article className="card">
              <h3>Full Report Writing from Scratch</h3>
              <p>
                Share your topic or area of interest, we handle research,
                structure, and writing to deliver a full, submission-ready
                report or proposal.
              </p>
            </article>

            <article className="card">
              <h3>Proposal & Abstract Development</h3>
              <p>
                We craft professional, clear, and concise proposals and abstracts
                that meet institutional or supervisor requirements.
              </p>
            </article>

            <article className="card">
              <h3>Report Editing & Improvement</h3>
              <p>
                Already have a draft? We refine language, structure, and clarity,
                 fixing organization, grammar, and formatting issues.
              </p>
            </article>

            <article className="card">
              <h3>Research & Literature Review</h3>
              <p>
                We find, analyze, and summarize academic sources into a coherent
                and properly referenced literature review section.
              </p>
            </article>

            <article className="card">
              <h3>Data Analysis & Presentation</h3>
              <p>
                We assist with interpreting your data, designing charts, and
                presenting results clearly in your report’s analysis chapter.
              </p>
            </article>

            <article className="card">
              <h3>Rewriting & Formatting Assistance</h3>
              <p>
                Transform messy, AI-generated, or unstructured drafts into
                polished, human-reviewed documents that meet academic standards.
              </p>
            </article>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how" className="section how">
          <h2>How It Works</h2>
          <ol className="steps">
            <li>
              <strong>Share your topic or files:</strong> Message us on WhatsApp
              or email with your topic, research area, or existing draft.
            </li>
            <li>
              <strong>We research, write, or edit:</strong> Our team prepares a
              detailed, organized report draft from scratch or by improving
              what you already have.
            </li>
            <li>
              <strong>Get your draft in 24 hours:</strong> We deliver your first
              version within 24 hours for review and feedback.
            </li>
            <li>
              <strong>Revise & finalize:</strong> Request edits, add feedback,
              and receive your final, submission-ready report or proposal.
            </li>
          </ol>
        </section>

        {/* Why Choose Us Section */}
        <section id="why" className="section why">
          <h2>Why Choose SmartReports?</h2>
          <ul>
            <li>We write from scratch, original, research-based, and clear</li>
            <li>Fast delivery with a 24-hour first-draft guarantee</li>
            <li>Every report reviewed by humans, not just AI</li>
            <li>Affordable, confidential, and student-friendly</li>
          </ul>
        </section>

        {/* CTA Section */}
        <section id="cta" className="section final-cta">
          <h2>Ready to Get Started?</h2>
          <p>
            Whether you need a full report written from scratch or just need to
            fix and improve what you already have — we’ll make it submission
            ready.
          </p>
          <a
            className="btn primary large"
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Write My Report Now
          </a>
          <p className="muted">
            WhatsApp: +234 816 976 5345 • Email:
            smartreportsbykenort@gmail.com
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} SmartReports by Kenort — Professional,
          AI-assisted, human-reviewed report writing service.
        </p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
