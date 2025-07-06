import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Landing.css';

function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar transparency
      setIsScrolled(window.scrollY > 50);

      // Handle section animations
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          section.classList.add('show-animate');
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing">
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav__logo">
          <img src="/assets/logo.png" alt="logo" className="logo-image" />
        </div>
        <ul className="nav__links">
          {['home', 'features', 'about', 'pricing'].map((section) => (
            <li key={section}>
              <button 
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <div className="nav__buttons">
          <Link to="/login" className="btn btn-login">Login</Link>
          <Link to="/register" className="btn btn-register">Register</Link>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            Transform Your Gym Management with
            <span className="highlight"> Smart Solutions</span>
          </h1>
          <p className="hero__subtitle">
            Streamline operations, enhance member experience, and grow your fitness business
            with our comprehensive gym management platform.
          </p>
          <div className="hero__cta">
            <Link to="/register" className="btn btn-primary">Start Free Trial</Link>
            <button className="btn btn-secondary" onClick={() => scrollToSection('features')}>
              Learn More
            </button>
          </div>
          <div className="hero__stats">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Active Gyms</p>
            </div>
            <div className="stat-item">
              <h3>50K+</h3>
              <p>Members Managed</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
        <div className="hero__image">
          <img src="/assets/hero-dashboard.png" alt="Dashboard Preview" />
        </div>
      </section>

      <section id="features" className="features">
        <h2>Powerful Features for Modern Gyms</h2>
        <div className="features__grid">
          {[
            {
              icon: 'fa-users',
              title: 'Member Management',
              description: 'Efficiently manage memberships, profiles, and payments in one place'
            },
            {
              icon: 'fa-chart-line',
              title: 'Real-time Analytics',
              description: 'Track attendance, revenue, and member engagement with detailed insights'
            },
            {
              icon: 'fa-mobile-alt',
              title: 'Mobile Access',
              description: 'Manage your gym on the go with our responsive mobile interface'
            },
            {
              icon: 'fa-heart',
              title: 'Health Monitoring',
              description: 'Track member health metrics and progress with advanced monitoring'
            },
            {
              icon: 'fa-calendar-check',
              title: 'Attendance Tracking',
              description: 'Automated check-ins and attendance management system'
            },
            {
              icon: 'fa-wind',
              title: 'Atmosphere Control',
              description: 'Monitor and maintain optimal gym environment conditions'
            }
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <i className={`fas ${feature.icon}`}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div className="about__content">
          <h2>Why Choose Our Platform?</h2>
          <div className="about__grid">
            <div className="about__item">
              <i className="fas fa-rocket"></i>
              <h3>Boost Efficiency</h3>
              <p>Automate routine tasks and focus on growing your business</p>
            </div>
            <div className="about__item">
              <i className="fas fa-shield-alt"></i>
              <h3>Secure & Reliable</h3>
              <p>Enterprise-grade security for your data and operations</p>
            </div>
            <div className="about__item">
              <i className="fas fa-headset"></i>
              <h3>24/7 Support</h3>
              <p>Expert support team always ready to help you succeed</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Simple, Transparent Pricing</h2>
        <div className="pricing__grid">
          {[
            {
              plan: 'Starter',
              price: '₹999/mo',
              features: ['Member Management', 'Basic Analytics', 'Email Support']
            },
            {
              plan: 'Professional',
              price: '₹1,999/mo',
              features: ['Everything in Starter', 'Advanced Analytics', 'Priority Support', 'Health Monitoring']
            },
            {
              plan: 'Enterprise',
              price: '₹3,999/mo',
              features: ['Everything in Professional', 'Custom Features', '24/7 Support', 'API Access']
            }
          ].map((tier, index) => (
            <div key={index} className={`pricing-card ${index === 1 ? 'popular' : ''}`}>
              {index === 1 && <span className="popular-badge">Most Popular</span>}
              <h3>{tier.plan}</h3>
              <div className="price">{tier.price}</div>
              <ul>
                {tier.features.map((feature, i) => (
                  <li key={i}><i className="fas fa-check"></i> {feature}</li>
                ))}
              </ul>
              <Link to="/register" className="btn btn-primary">Get Started</Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer__content">
          <div className="footer__brand">
            <img src="/assets/logo.png" alt="logo" className="footer-logo" />
            <p>Empowering gyms with smart management solutions</p>
          </div>
          <div className="footer__links">
            <div className="footer__group">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <Link to="/register">Sign Up</Link>
            </div>
            <div className="footer__group">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
              <a href="/privacy">Privacy Policy</a>
            </div>
            <div className="footer__group">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2024 GymBuddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing; 