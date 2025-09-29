"use client";
import { useState } from "react";

interface LanguageSwitcherProps {
  onChange: (lang: string) => void;
}

export default function LanguageSwitcher({ onChange }: LanguageSwitcherProps) {
  const [lang, setLang] = useState("en");
  
  const languages = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "fr", label: "FR" },
    { code: "de", label: "DE" }
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex gap-2 bg-black/80 backdrop-blur-sm rounded-lg p-2 border border-orange-500/30">
        {languages.map((language) => (
          <button
            key={language.code}
            className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 ${
              lang === language.code
                ? "bg-orange-500 text-black"
                : "text-orange-500 hover:bg-orange-500/20"
            }`}
            onClick={() => {
              setLang(language.code);
              onChange(language.code);
            }}
          >
            {language.label}
          </button>
        ))}
      </div>
    </div>
  );
}