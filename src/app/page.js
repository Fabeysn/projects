"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Modal from "./Modal";

const basePath = process.env.NODE_ENV === "production" ? "/projects" : "";

const translations = {
  DE: {
    languageLabel: "Sprachauswahl",
    languageDE: "DE Deutsch",
    languageEN: "EN Englisch",
    quickAccess: "Schnellzugriff",
    imprintPrivacy: "Impressum & Datenschutz",
    contact: "Kontakt",
  },
  EN: {
    languageLabel: "Language Selection",
    languageDE: "DE German",
    languageEN: "EN English",
    quickAccess: "Quick Access",
    imprintPrivacy: "About & Privacy Policy",
    contact: "Contact",
  },
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [language, setLanguage] = useState("EN");

  const t = translations[language];

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme !== null) {
      setDarkMode(storedTheme === "true");
    }

    const storedLang = localStorage.getItem("language");
    if (storedLang) {
      setLanguage(storedLang);
    } else {
      const sysLang = navigator.language || navigator.userLanguage;
      if (sysLang.startsWith("de")) setLanguage("DE");
      else setLanguage("EN");
    }

    if (window.location.hash === "#privacy") {
      setShowModal(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <>
      {/* Body */}
      <div
        className={`min-h-screen flex flex-col transition-colors duration-300
          ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}
        `}
      >
        {/* AppBar */}
        <header
          className={`w-full flex justify-between items-center p-6
            ${darkMode ? "bg-gray-800" : "bg-blue-500"}
            text-white shadow-md
          `}
        >
          <h1 className="text-4xl font-bold">Fabeysn</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full p-2 transition hover:bg-blue-600 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 6a6 6 0 100 12 6 6 0 000-12z" />
              </svg>
            )}
          </button>
        </header>

        {/* Body Content */}
        <main className="flex-1 flex flex-col items-center justify-center p-8">
          <a
            href="https://play.google.com/store/apps/details?id=com.fabeysn.numbery"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105 group"
          >
            <div className="w-48 h-48 overflow-hidden rounded-lg shadow-md">
              <Image
                src={`${basePath}/numbery_icon.png`}
                alt="Numbery"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-3xl font-bold">Numbery</p>
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-16 mt-2"
              />
            </div>
          </a>
        </main>

        {/* Footer */}
        <footer
          className={`w-full ${darkMode ? "bg-gray-800" : "bg-black"} text-white p-12 flex flex-col gap-4`}
        >
          <div className="flex flex-wrap justify-between items-start w-full max-w-4xl mx-auto gap-4 gap-y-12">
            {/* Sprachauswahl */}
            <div className="flex flex-col items-center flex-1 min-w-[200px]">
              <span className="font-semibold mb-2 text-xl">{t.languageLabel}</span>
              <button
                onClick={() => setLanguage("DE")}
                className={`hover:underline mb-2 ${language === "DE" ? "font-semibold" : ""}`}
              >
                {t.languageDE}
              </button>
              <button
                onClick={() => setLanguage("EN")}
                className={`hover:underline ${language === "EN" ? "font-semibold" : ""}`}
              >
                {t.languageEN}
              </button>
            </div>

            {/* Schnellzugriff */}
            <div className="flex flex-col items-center flex-1 min-w-[200px]">
              <span className="font-semibold mb-2 text-xl">{t.quickAccess}</span>
              <button
                onClick={() => setShowModal(true)}
                className="hover:underline mb-2"
              >
                {t.imprintPrivacy}
              </button>
              <a
                href="mailto:contact.fabeysn@gmail.com"
                className="hover:underline"
              >
                {t.contact}
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-xs opacity-60">
            © 2025 Fabeysn
          </div>
        </footer>

        {/* Modal */}
        <Modal 
          show={showModal} 
          onClose={() => setShowModal(false)} 
          language={language}
        />
      </div>
    </>
  );
}
