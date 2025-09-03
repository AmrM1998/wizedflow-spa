// Suggested location: e.g. src/pages/WhatYouGet.tsx

import { CheckCircle } from "lucide-react";
import React from "react";

const features = [
  {
    title: "No code, no hassle",
    description: "Build, deploy, and iterate on AI workflows without writing a single line of code.",
  },
  {
    title: "Automate anything",
    description: "Connect your favorite tools and APIs, trigger actions, and orchestrate complex logic.",
  },
  {
    title: "Human-in-the-loop",
    description: "Let humans review, approve, or intervene in any step of your workflow.",
  },
  {
    title: "Real-time monitoring",
    description: "Track every run, see logs, and get notified when things need your attention.",
  },
  {
    title: "Secure & scalable",
    description: "Enterprise-grade security, privacy, and reliability built-in from day one.",
  },
];

const WhatYouGet: React.FC<{ darkMode?: boolean }> = ({ darkMode }) => (
  <section className={`py-16 ${darkMode ? "bg-gray-900" : "bg-green-50"}`}>
    <div className="max-w-4xl mx-auto px-4">
      <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${darkMode ? "text-green-100" : "text-green-900"}`}>
        What you get
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((f) => (
          <div key={f.title} className="flex items-start gap-4">
            <CheckCircle className={`mt-1 flex-shrink-0 ${darkMode ? "text-green-400" : "text-green-600"}`} size={28} />
            <div>
              <h3 className={`text-xl font-semibold mb-1 ${darkMode ? "text-green-200" : "text-green-900"}`}>{f.title}</h3>
              <p className={`${darkMode ? "text-green-100/80" : "text-green-950/80"}`}>{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouGet;