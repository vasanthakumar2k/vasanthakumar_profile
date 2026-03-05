import React from 'react';
import './ProfileContent.css';
import vasanImg from '../assets/vasan.png';

const ProfileContent = () => {
    const skills = {
        "Mobile Dev": ["React Native", "Expo & CLI", "Android", "iOS"],
        "Frontend": ["JavaScript", "TypeScript", "HTML", "CSS", "Bootstrap"],
        "State & Nav": ["Redux Toolkit", "Context API", "React Navigation v6"],
        "Backend": ["Java 8", "Spring Boot", "RESTful APIs", "Hibernate"],
        "Database": ["Oracle", "MySQL"],
        "Tools": ["Git", "GitHub", "Postman", "Firebase"]
    };

    const experiences = [
        {
            role: "React Native Developer",
            company: "Avanexa Technologies",
            date: "March 2025 – Present",
            projects: [
                { name: "Athlex (B2B Wholesale)", desc: "Built full app from scratch with custom UI. Handled complex payment integrations and tight deadlines." },
                { name: "Albion Bank Auctions", desc: "Specialized app for bank property auctions, integrating deep linking and third-party payment APIs." },
                { name: "Wall360 – Real Estate", desc: "Rental platform for PG, house & commercial properties with Firebase, Razorpay & Google Maps." },
                { name: "Cignix – Health Tracker", desc: "Habit tracker focused on user engagement, streaks, and reminders." },
                { name: "Truck Taxi", desc: "Logistics solution with map integration for location tracking and route planning." },
                { name: "AATHIRAA – FinTech", desc: "Utility app with UPI, Fastag, Bill Pay, and Bank Transfer modules using React Navigation v6." }
            ]
        },
        {
            role: "React Native Developer",
            company: "AllDirectionSource Technologies Private Limited",
            date: "August 2024 – February 2025",
            projects: [
                { name: "Urja – EdTech Wellness", desc: "Interactive wellness app for children & parents with gamified learning, progress tracking, and Redux Toolkit." },
                { name: "AdsMail", desc: "Gmail-based platform for custom domain emails with Android, iOS, Web, and Admin panels." },
                { name: "Fettello – Healthcare", desc: "Doctor consultation app with appointment booking and online medical services." }
            ]
        }
    ];

    const certifications = [
        {
            course: "Java Fullstack Development",
            institute: "QSpiders Velachery"
        }
    ];

    return (
        <div className="portfolio-wrapper">
            {/* ─── HERO SECTION ─── */}
            <section id="about" className="hero-split">
                <div className="hero-left">
                    <img src={vasanImg} alt="Vasanthakumar" className="profile-img" />
                    <div className="profile-img-glow"></div>
                </div>

                <div className="hero-right">
                    <div className="hero-content">
                        <div className="hero-line"></div>
                        <h1 className="hero-title">
                            My<br />Portfolio
                        </h1>
                        <p className="hero-desc">
                            A passionate React Native developer with 2 years of experience building scalable cross-platform mobile applications. Strong foundation in Java full-stack development.
                        </p>
                        <div className="hero-cta">
                            <a href="#experience" className="btn-primary">Explore Now</a>
                            <a href="mailto:2002vasanthakumar@gmail.com" className="btn-play">
                                <span className="play-circle">✉</span>
                                <span>Contact Me</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── EXPERIENCE ─── */}
            <section id="experience" className="dark-section">
                <div className="section-inner">
                    <div className="section-label">02 – Experience</div>
                    <h2 className="section-heading">Work History</h2>
                    {experiences.map((exp, i) => (
                        <div key={i} className="exp-block">
                            <div className="exp-meta">
                                <span className="exp-date">{exp.date}</span>
                                <span className="exp-company">{exp.company}</span>
                            </div>
                            <h3 className="exp-role">{exp.role}</h3>
                            <div className="proj-grid">
                                {exp.projects.map((p, j) => (
                                    <div key={j} className="proj-card">
                                        <div className="proj-dot"></div>
                                        <div>
                                            <h4>{p.name}</h4>
                                            <p>{p.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── SKILLS ─── */}
            <section id="skills" className="dark-section alt-bg">
                <div className="section-inner">
                    <div className="section-label">03 – Skills</div>
                    <h2 className="section-heading">Tech Stack</h2>
                    <div className="skills-grid">
                        {Object.entries(skills).map(([cat, items]) => (
                            <div key={cat} className="skill-group">
                                <h3 className="skill-cat">{cat}</h3>
                                <div className="skill-tags">
                                    {items.map(s => <span key={s} className="tag">{s}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CERTIFICATIONS ─── */}
            <section id="certifications" className="dark-section">
                <div className="section-inner">
                    <div className="section-label">04 – Certifications</div>
                    <h2 className="section-heading">Professional Training</h2>
                    <div className="edu-row">
                        {certifications.map((cert, i) => (
                            <div key={i} className="edu-card">
                                <span className="edu-year">Certification</span>
                                <h3>{cert.course}</h3>
                                <p>{cert.institute}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── EDUCATION ─── */}
            <section id="education" className="dark-section alt-bg">
                <div className="section-inner">
                    <div className="section-label">05 – Education</div>
                    <h2 className="section-heading">Academic Background</h2>
                    <div className="edu-row">
                        <div className="edu-card">
                            <span className="edu-year">2023</span>
                            <h3>B.E., Mechanical Engineering</h3>
                            <p>Anna University Regional Campus, Madurai</p>
                            <span className="edu-cgpa">CGPA: 7.8</span>
                        </div>
                        <div className="edu-card">
                            <span className="edu-year">2019</span>
                            <h3>HSC</h3>
                            <p>SVB Matriculation Higher Secondary School</p>
                            <span className="edu-cgpa">Percentage: 74%</span>
                        </div>
                        <div className="edu-card">
                            <span className="edu-year">2017</span>
                            <h3>SSLC</h3>
                            <p>Raja Vignesh Higher Secondary School</p>
                            <span className="edu-cgpa">Percentage: 92%</span>
                        </div>
                    </div>

                    {/* Contact Footer */}
                    <div className="contact-footer">
                        <div className="contact-line"></div>
                        <div className="contact-info">
                            <span>Coimbatore</span>
                            <span>+91 8925208494</span>
                            <span>2002vasanthakumar@gmail.com</span>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProfileContent;
