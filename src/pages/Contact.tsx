
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
