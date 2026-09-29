export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', gap: '1rem' }}>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  );
}