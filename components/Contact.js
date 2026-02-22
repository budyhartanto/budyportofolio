'use client';
import { Send, MessageCircle } from 'lucide-react';

export default function Contact() {
    const phoneNumber = '6285157738703'; // Ganti dengan nomor WhatsApp Anda (Gunakan kode negara, misal 62 untuk Indonesia)
    const defaultMessage = 'Halo Hartanto, saya tertarik untuk bekerja sama dengan Anda. Berikut detail project saya: ';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

    return (
        <section id="contact" className="section container fade-in delay-2">
            <div className="glass-card" style={{ maxWidth: '700px', margin: '0 auto', borderTop: '4px solid #25D366', textAlign: 'center', padding: '4rem 2rem' }}>
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(37, 211, 102, 0.1)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                    <MessageCircle size={48} color="#25D366" />
                </div>

                <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem', background: 'white', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Let's Discuss.
                </h2>

                <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '500px', margin: '0 auto 3rem auto' }}>
                    Prefer to chat directly? Click the button below to connect with me via WhatsApp. I’m always open to discussing new collaboration opportunities.
                </p>

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                        background: '#25D366',
                        color: 'white',
                        fontSize: '1.1rem',
                        padding: '1rem 2rem',
                        boxShadow: '0 4px 14px 0 rgba(37, 211, 102, 0.39)',
                        display: 'inline-flex',
                        gap: '0.75rem'
                    }}
                >
                    Chat via WhatsApp <Send size={20} />
                </a>
            </div>
        </section>
    );
}
