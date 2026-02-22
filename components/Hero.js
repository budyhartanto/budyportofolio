"use client";
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
    return (
        <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '70px' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                <div
                    className="fade-in"
                    style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: 'var(--primary)',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        marginBottom: '2rem'
                    }}
                >
                    Available for New Opportunities
                </div>

                <h1
                    className="fade-in delay-1 hero-title"
                    style={{
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        letterSpacing: '-2px'
                    }}
                >
                    Building Digital <br />
                    <span style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Experiences</span> That Matter
                </h1>

                <p
                    className="fade-in delay-2"
                    style={{
                        color: 'var(--text-muted)',
                        fontSize: '1.1rem',
                        marginBottom: '3rem',
                        lineHeight: '1.6'
                    }}
                >
                    Fullstack Developer specializing in React, Next.js, and modern backend technologies. I turn complex problems into beautiful, intuitive interfaces.
                </p>

                <div className="fade-in delay-3 hero-btns" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="#projects" className="btn btn-primary">
                        View Projects <ArrowRight size={18} />
                    </a>
                    <a href="/CV-Muhammad Budy Hartanto.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderRadius: '9999px', padding: '0.75rem 1.5rem', border: '1px solid var(--border-color)' }}>
                        <Download size={18} /> Resume
                    </a>
                </div>
            </div>

            <style jsx>{`
                .hero-title {
                    font-size: 4.5rem;
                }
                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 3rem;
                        letter-spacing: -1px;
                    }
                    .hero-btns {
                        flex-direction: column;
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
}
