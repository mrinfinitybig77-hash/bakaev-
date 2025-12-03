// src/Pages/Home/Home.jsx
import React, { useState } from 'react';
import "./home.scss";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import MyModal from "./MyModal";

import {
  Phone,
  Mail,
  Instagram,
  Send,
  Facebook,
  GraduationCap,
  Clock,
  Award
} from "lucide-react";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  return (
    <div className="wrapper-all">
      <MyModal isOpen={isOpen} onClose={onClose} />
      <Navbar setIsOpen={setIsOpen} />

      {/* Child routes render here */}
      <Outlet context={{ isOpen, setIsOpen }} />

      {/* Modern Footer */}
      <footer className="modern-footer">
        <div className="background-pattern"></div>
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Section */}
            <div className="company-section">
              <div className="company-header">
                <div className="company-logo">
                  <GraduationCap className="logo-icon" />
                </div>
                <div className="company-info">
                  <h2 className="company-name">BAKAYEV EDUCATION</h2>
                  <p className="company-tagline">Ta'lim sifatida eng yaxshisi</p>
                </div>
              </div>
              <div className="message-card">
                <div className="message-content">
                  <div className="message-icon">
                    <Award className="award-icon" />
                  </div>
                  <div className="message-text">
                    <p className="message-description">
                      <span className="message-title">
                        Biz sizga eng yaxshi natijalarqa erishishingizga yordam berishga tayyormiz.
                      </span>
                      <span className="message-subtitle">
                        Eng yuqori maqsadni qo'ying - hoziroq bepul sinov darsiga yoziling.
                      </span>
                    </p>
                    <button
                      className="cta-button"
                      onClick={() => setIsOpen(true)}
                    >
                      Yozilish...
                    </button>
                  </div>
                </div>
              </div>
              <div className="info-cards">
                <div className="info-card">
                  <Clock className="info-icon" />
                  <div className="info-label">Ish vaqti</div>
                  <div className="info-value">9:00 - 18:00</div>
                </div>
                <div className="info-card">
                  <Award className="info-icon award" />
                  <div className="info-label">Tajriba</div>
                  <div className="info-value">5+ yil</div>
                </div>
                <div className="info-card">
                  <GraduationCap className="info-icon graduation" />
                  <div className="info-label">O'quvchilar</div>
                  <div className="info-value">1000+</div>
                </div>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="contact-section">
              <div className="contact-info">
                <h3 className="section-title">
                  <Phone className="title-icon" /> Biz bilan bog'lanish
                </h3>
                <div className="contact-items">
                  <div className="contact-card">
                    <div className="contact-icon">
                      <Phone className="phone-icon" />
                    </div>
                    <div className="contact-details">
                      <div className="contact-label">Telefon raqam</div>
                      <a href="tel:+998930676146" className="contact-link">
                        +998 93 067 61 46
                      </a>
                    </div>
                  </div>
                  <div className="contact-card">
                    <div className="contact-icon">
                      <Mail className="mail-icon" />
                    </div>
                    <div className="contact-details">
                      <div className="contact-label">Email manzil</div>
                      <a
                        href="mailto:bakayeveducation@gmail.com"
                        className="contact-link email"
                      >
                        bakayeveducation@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-media">
                <h3 className="section-title">
                  <Instagram className="title-icon" /> Ijtimoiy tarmoqlar
                </h3>
                <div className="social-items">
                  <a href="#" className="social-item instagram">
                    <Instagram className="instagram-icon" /> @bakayev_education
                  </a>
                  <a href="#" className="social-item telegram">
                    <Send className="telegram-icon" /> @bakayev_edu
                  </a>
                  <a href="#" className="social-item facebook">
                    <Facebook className="facebook-icon" /> Bakayev Education
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="bottom-container">
            <div className="copyright">
              © 2025 BAKAYEV EDUCATION
            </div>
            <div className="developer-credit">
              Developed by Web Developer
            </div>
          </div>
        </div>
        <div className="bottom-gradient"></div>
      </footer>
    </div>
  );
}

export default Home;
