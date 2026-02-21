"use client";
import { Code2, Server, Database } from 'lucide-react';

export default function About() {
    const skills = [
        { icon: <Code2 size={24} />, name: 'Frontend', text: 'React, Next.js, CSS/Tailwind' },
        { icon: <Server size={24} />, name: 'Backend', text: 'Node.js, Express, Python' },
        { icon: <Database size={24} />, name: 'Database', text: 'PostgreSQL, MongoDB' },
        { icon: <Server size={24} />, name: 'As400', text: 'RPGLE' }
    ];

    return (
        <section id="about" className="section" style={{ background: 'var(--bg-accent)' }}>
            <div className="container about-grid">

                <div className="fade-in delay-1">
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>About Me.</h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
                        I am a passionate software engineer with a strong foundation in building scalable web applications.
                        My approach combines clean code architecture with pixel-perfect design, ensuring both performance and exceptional user experience.
                    </p>
                    <div style={{ padding: '1.5rem', background: 'var(--bg-color)', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
                        <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--text-muted)' }}>
                            "The best designs are those that feel invisible, perfectly supporting their underlying functionality."
                        </p>
                    </div>
                </div>

                <div style={{ display: 'grid', gap: '1.5rem' }} className="fade-in delay-2">
                    {skills.map((skill, index) => (
                        <div key={index} className="glass-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', padding: '1.5rem' }}>
                            <div style={{
                                padding: '1rem',
                                background: 'rgba(59, 130, 246, 0.1)',
                                color: 'var(--primary)',
                                borderRadius: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                {skill.icon}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '600' }}>{skill.name}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{skill.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <style jsx>{`
                .about-grid {
                    display: grid;
                    grid-template-columns: minmax(300px, 1fr) 1fr;
                    gap: 4rem;
                    align-items: center;
                }
                @media (max-width: 900px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                }
            `}</style>
        </section>
    );
}
