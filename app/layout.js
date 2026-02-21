import './globals.css';

export const metadata = {
  title: 'Fullstack Developer Portfolio',
  description: 'A premium space showcasing my projects and skills.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
