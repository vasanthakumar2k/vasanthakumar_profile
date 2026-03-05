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
        "Tools": ["Git", "GitHub", "Postman", "Firebase", "Fastlane"]
    };

    const experiences = [
        {
            role: "React Native Developer",
            company: "Avanexa Technologies, Coimbatore",
            date: "March 2025 – Present",
            projects: [
                { name: "Albion Bank Auctions", desc: "Specialized app for bank property auctions with deep linking and third-party payment APIs." },
                { name: "Wall360 – Real Estate", desc: "Rental platform for PG, house & commercial properties with Firebase, Razorpay & Maps." },
                { name: "Cignix", desc: "Health Habit Tracker with streaks, reminders, and user engagement features." },
                { name: "Truck Taxi", desc: "Logistics booking app with map integration for route tracking and planning." },
                { name: "AATHIRAA – FinTech", desc: "UPI, Fastag, Bill Pay, Bank Transfer modules with React Navigation v6 deep linking." },
                { name: "Rudra Traders (B2B)", desc: "Built full app from scratch with custom UI. Complex payment integrations, tight deadline." }
            ]
        },
        {
            role: "React Native Developer",
            company: "AllDirectionSource Technologies, Chennai",
            date: "August 2024 – February 2025",
            projects: [
                { name: "Urja – EdTech Wellness", desc: "Children & parent wellness app with gamified learning, badges, streaks & Redux Toolkit." },
                { name: "AdsMail", desc: "Gmail-based platform for custom domain emails with Android, iOS & Web support." },
                { name: "Fettello – Healthcare", desc: "Doctor consultation app with appointment booking and pharmaceutical purchases." }
            ]
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
                            A passionate React Native developer with 1 year 7 months of experience building scalable cross-platform mobile applications. Strong foundation in Java full-stack development.
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

            {/* ─── EDUCATION ─── */}
            <section id="education" className="dark-section">
                <div className="section-inner">
                    <div className="section-label">04 – Education</div>
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
