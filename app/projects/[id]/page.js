import { projects } from '../../../data/projects';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default async function ProjectDetail({ params }) {
    const { id } = await params;
    const project = projects.find(p => p.id.toString() === id);

    if (!project) {
        return (
            <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Navbar />
                <section className="section container" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }} className="fade-in">
                        <h1 className="section-title" style={{ marginBottom: '1rem', fontSize: '2rem' }}>Project not found</h1>
                        <Link href="/" className="btn btn-primary">
                            Go Back Home
                        </Link>
                    </div>
                </section>
                <Footer />
            </main>
        );
    }

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            <section className="section container" style={{ flex: 1, paddingTop: '120px' }}>
                <Link href="/#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '3rem', transition: 'color 0.3s ease', fontWeight: '500' }}>
                    <ArrowLeft size={20} /> Back to Projects
                </Link>

                <div className="fade-in delay-1">
                    <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>{project.title}</h1>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
                        {project.techStack.map((tech, i) => (
                            <span key={i} style={{
                                fontSize: '0.9rem',
                                padding: '0.5rem 1.2rem',
                                background: 'var(--bg-accent)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '9999px',
                                color: 'var(--text-main)',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="glass-card" style={{ padding: '0', overflow: 'hidden', marginBottom: '4rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.15)' }}>
                        <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative' }}>
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem' }}>About this project</h2>
                        <div style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '3rem' }}>
                            <p style={{ marginBottom: '1.5rem' }}>{project.description}</p>
                            <p>
                                This project demonstrates my ability to build complex, responsive applications with a focus on user experience and clean code architecture. It involves integrating various technologies to deliver a robust solution that meets modern web standards and aesthetic expectations.
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                                Live Demo <ExternalLink size={20} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                                Source Code <Github size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
