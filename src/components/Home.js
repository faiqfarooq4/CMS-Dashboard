import React, { useEffect } from 'react';
import '../assets/css/style.css';
import Footer from './Footer';

const Home = () => {
  useEffect(() => {
    const dynamicHeading = document.getElementById('dynamicHeading');
    const texts = ['Build', 'Innovate', 'Collaborate', 'Create'];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;

    const type = () => {
      const currentText = texts[index];
      if (isDeleting) {
        dynamicHeading.textContent = 'WE ' + currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 100; // Faster when deleting
      } else {
        dynamicHeading.textContent = 'WE ' + currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150; // Slower when typing
      }

      if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 1000; // Pause before starting to delete
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        typingSpeed = 500; // Pause before typing the next word
      }

      setTimeout(type, typingSpeed);
    };

    type();

    return () => {
      // Cleanup if needed, though `setTimeout` doesn't require it
    };
  }, []);

  return (
    <div id="home" className="section active">
      {/* Intro Section */}
      <section className="intro">
        <h1 id="dynamicHeading" style={{ fontSize: '3em', color: '#fff' }}>WE </h1>
        <p>Optimizing Insurance Agency Operation For Success</p>
      </section>
      {/* About Us Section */}
      <section className="about-us">
        <div className="about-content">
          <p> 
            At Swift Backoffice, we are dedicated to providing comprehensive back-office support for insurance companies. 
            Our services include policy management, claims management, certificates and renewals, CRM management, 
            and data management. With a focus on efficiency and accuracy, we help you streamline operations 
            and enhance customer satisfaction. Our mission is to empower insurance providers in the USA by delivering , efficient
            reliable and innovative BackOffice Services. 
          </p>
        </div>
        <div className="about-image"></div> {/* No img tag, handled via CSS */}          
      </section>
      {/* Blog Section */}
      <section className="blog">
        <div className="blog-content">
          <div className="blog-image"></div> {/* No img tag, handled via CSS */}
          <div className="blog-text">
            <p>
              Here at Swift Backoffice, we are committed to delivering cutting-edge back-office solutions tailored for insurance companies across the USA. Our comprehensive services—Policy Management, Claims Management, Certificates and Renewals, CRM Management, and Data Management—are crafted to optimize your operations with precision and efficiency. We focus on streamlining processes, reducing administrative burdens, and enhancing customer satisfaction, allowing you to concentrate on your core business. With our expert support, Swift Backoffice is your trusted partner in achieving operational excellence and fostering growth within the insurance industry.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="service-card">
          <h2>Policy Management</h2>
          <p>Streamline your policy processes with our efficient management tools, ensuring compliance and ease of access.</p>
      s  </div>
        <div className="service-card">
          <h2>Claims Management</h2>
          <p>Handle claims swiftly and accurately with our comprehensive claims management system.</p>
        </div>
        <div className="service-card">
          <h2>Certificates and Renewals</h2>
          <p>Manage certificates and renewals seamlessly to ensure continuous coverage and compliance.</p>
        </div>
        <div className="service-card">
          <h2>CRM Management</h2>
          <p>Enhance customer relationships with our integrated CRM solutions designed for the insurance industry.</p>
        </div>
        <div className="service-card">
          <h2>Data Management</h2>
          <p>Securely manage and analyze data to drive informed decision-making across your organization.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <div className="team-image member-1"></div>
            <h3>Muhammad Imran</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <div className="team-image member-2"></div>
            <h3>Faiq Ahmed Sheikh</h3>
            <p>Software Developer</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
