"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt-br" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  "pt-br": {
    // Header
    "header.greeting": "Olá, eu sou Kauã Simplício! 🌐✨",
    "header.role": "Desenvolvedor",

    // About
    "about.title": "Conheça",
    "about.title.highlight": "mais sobre mim",
    "about.intro":
      "Sou um Desenvolvedor Front-End com experiência prática na construção de interfaces web modernas, responsivas e focadas no usuário.",
    "about.tech":
      "Trabalho principalmente com JavaScript, React, Next.js e Tailwind CSS, criando aplicações que equilibram código limpo, performance e boa experiência do usuário.",
    "about.experience":
      "Tenho experiência prática desenvolvendo projetos do mundo real, traduzindo designs do Figma em interfaces funcionais e bem estruturadas, e mantendo bases de código front-end escaláveis.",
    "about.motivation":
      "Sou motivado pelo aprendizado contínuo, gosto de entender o raciocínio por trás das soluções e busco escrever código claro, sustentável e escalável.",
    "about.cta": "Vamos conversar",

    // Skills
    "skills.title": "Minha",
    "skills.title.highlight": "stack tecnológica",

    // Projects
    "projects.title": "Confira meus",
    "projects.title.highlight": "projetos",
    "projects.viewCode": "Ver código",
    "projects.viewLive": "Ver ao vivo",
    "projects.webDev": "Desenvolvimento",

    // Individual Projects
    "project.bewear.title": "Bewear | E-commerce",
    "project.bewear.description":
      "Aplicação fullstack construída com Next.js, TypeScript, Tailwind CSS, Drizzle ORM e Neon (PostgreSQL), desenvolvida durante um bootcamp.",

    "project.weather.title": "Projeto Weather",
    "project.weather.description":
      "Aplicação web usando uma API externa de clima para buscar e exibir informações meteorológicas em tempo real com uma interface limpa e responsiva.",

    "project.detroid.title": "Detroid | E-commerce",
    "project.detroid.description":
      "Aplicação web de e-commerce usando React + TypeScript, estilizada com Tailwind CSS e shadcn/ui, com backend em Java Spring Boot, Docker e integração de pagamento Stripe.",

    // Contact
    "contact.title": "Entre em",
    "contact.title.highlight": "contato",
  },
  en: {
    // Header
    "header.greeting": "Hey, I'm Kauã Simplício! 🌐✨",
    "header.role": "Developer",

    // About
    "about.title": "Get to know",
    "about.title.highlight": "me",
    "about.intro":
      "I am a Front-End Developer with hands-on experience building modern, responsive, and user-focused web interfaces.",
    "about.tech":
      "I work mainly with JavaScript, React, Next.js, and Tailwind CSS, creating applications that balance clean code, performance, and good user experience.",
    "about.experience":
      "I have practical experience developing real-world projects, translating Figma designs into functional, well-structured interfaces, and maintaining scalable front-end codebases.",
    "about.motivation":
      "I am driven by continuous learning, enjoy understanding the reasoning behind solutions, and aim to write clear, maintainable, and scalable code.",
    "about.cta": "Let's talk",

    // Skills
    "skills.title": "My",
    "skills.title.highlight": "tech stack",

    // Projects
    "projects.title": "Check out my",
    "projects.title.highlight": "projects",
    "projects.viewCode": "View code",
    "projects.viewLive": "View live",
    "projects.webDev": "Development",

    // Individual Projects
    "project.bewear.title": "Bewear | E-commerce",
    "project.bewear.description":
      "Fullstack application built with Next.js, TypeScript, Tailwind CSS, Drizzle ORM and Neon (PostgreSQL), developed during a bootcamp.",

    "project.weather.title": "Weather Project",
    "project.weather.description":
      "Web application using an external weather API to fetch and display real-time weather information with a clean, responsive UI.",

    "project.detroid.title": "Detroid | E-commerce",
    "project.detroid.description":
      "E-commerce web app using React + TypeScript, styled with Tailwind CSS and shadcn/ui, with a Java Spring Boot backend, Docker and Stripe payment integration.",

    // Contact
    "contact.title": "Contact",
    "contact.title.highlight": "me",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
