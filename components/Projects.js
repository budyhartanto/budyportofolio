import { projects } from '../data/projects';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
    return (
        <section id="projects" className="section container">
            <h2 className="section-title fade-in delay-1">Featured Projects.</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem'
            }}>
                {projects.map((project, index) => (
                    <div key={project.id} className="glass-card fade-in delay-2" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                            />
                        </div>

                        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                                {project.techStack.map((tech, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.75rem',
                                        padding: '0.3rem 0.8rem',
                                        background: 'var(--bg-accent)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '9999px',
                                        color: 'var(--text-main)'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a href={project.link} className="btn btn-outline" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', width: '100%' }}>
                                View Project <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
