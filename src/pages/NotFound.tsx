import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="min-h-[70vh] flex items-center justify-center px-4">
    <div className="text-center">
      <p className="section-kicker justify-center">404</p>
      <h1 className="mb-4 text-5xl text-primary">Page not found</h1>
      <p className="mb-6 text-muted-foreground">This page may have moved or no longer exists.</p>
      <Link to="/" className="hero-primary-action">Return to home</Link>
    </div>
  </main>
);

export default NotFound;
