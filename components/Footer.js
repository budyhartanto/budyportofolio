export default function Footer() {
    return (
        <footer style={{
            padding: '2rem 0',
            textAlign: 'center',
            borderTop: '1px solid var(--border-color)',
            marginTop: '4rem',
            background: 'rgba(3, 7, 18, 0.8)'
        }}>
            <div className="container">
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Muhammad Hartanto.
                </p>
            </div>
        </footer>
    );
}
