import React, { useEffect, useState } from "react";
import { CheckCircle, X, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/gallery.css";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";

const images = [img1, img2, img3, img4];

const features = [
  {
    title: "No code, no hassle",
    description:
      "Build, deploy, and iterate on AI workflows without writing a single line of code.",
  },
  {
    title: "Automate anything",
    description:
      "Connect your favorite tools and APIs, trigger actions, and orchestrate complex logic.",
  },
  {
    title: "Human-in-the-loop",
    description:
      "Let humans review, approve, or intervene in any step of your workflow.",
  },
  {
    title: "Real-time monitoring",
    description:
      "Track every run, see logs, and get notified when things need your attention.",
  },
  {
    title: "Secure & scalable",
    description:
      "Enterprise-grade security, privacy, and reliability built-in from day one.",
  },
];

const WhatYouGet = ({ darkMode = false }: { darkMode?: boolean }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<number | null>(null);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((p) => (p + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation for zoomed image
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (zoomedImage === null) return;
      if (e.key === "Escape") setZoomedImage(null);
      if (e.key === "ArrowRight") navigateZoom(1);
      if (e.key === "ArrowLeft") navigateZoom(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [zoomedImage]);

  const navigateZoom = (delta: number) => {
    if (zoomedImage === null) return;
    const total = images.length;
    setZoomedImage((zoomedImage + delta + total) % total);
  };

  // Determine class for carousel
  const getClass = (i: number) => {
    const total = images.length;
    if (i === activeIndex) return "coverflow__image active";
    if (i === (activeIndex - 1 + total) % total) return "coverflow__image prev1";
    if (i === (activeIndex - 2 + total) % total) return "coverflow__image prev2";
    if (i === (activeIndex + 1) % total) return "coverflow__image next1";
    if (i === (activeIndex + 2) % total) return "coverflow__image next2";
    return "coverflow__image hidden";
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-16 transition-colors duration-500 bg-transparent">
      <div className="max-w-6xl w-full px-4">
        {/* Heading */}
        <h2
          className={`text-3xl md:text-5xl font-bold mb-6 text-center ${
            darkMode ? "text-green-100" : "text-green-900"
          }`}
        >
          What You Get
        </h2>

        {/* Intro text */}
        <p
          className={`max-w-3xl mx-auto text-center mb-10 px-4 ${
            darkMode ? "text-green-200/90" : "text-gray-700"
          }`}
        >
          Unlock the tools, knowledge, and guidance you need to move forward
          confidently. From practical resources to hands-on support, everything
          here is designed to help you take the next step with clarity.
        </p>

        {/* Coverflow gallery */}
        <div className="coverflow w-full mx-auto mb-12" aria-hidden>
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              loading="lazy"
              decoding="async"
              className={getClass(i)}
              onClick={() => setZoomedImage(i)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>

        {/* Feature grid */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <CheckCircle
                  className={`mt-1 flex-shrink-0 ${
                    darkMode ? "text-green-400" : "text-green-600"
                  }`}
                  size={28}
                />
                <div>
                  <h3
                    className={`text-xl font-semibold mb-1 ${
                      darkMode ? "text-green-200" : "text-green-900"
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p
                    className={`${
                      darkMode ? "text-green-100/80" : "text-green-950/80"
                    }`}
                  >
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Zoomed image overlay */}
      <AnimatePresence>
        {zoomedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
          >
            <motion.img
              key={zoomedImage}
              src={images[zoomedImage]}
              alt={`Zoomed ${zoomedImage + 1}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-h-[90%] max-w-[90%] rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl p-2 bg-black/50 rounded-full hover:bg-black/70"
              onClick={() => setZoomedImage(null)}
            >
              <X />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2 bg-black/50 rounded-full hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation();
                navigateZoom(-1);
              }}
            >
              <ArrowLeft />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2 bg-black/50 rounded-full hover:bg-black/70"
              onClick={(e) => {
                e.stopPropagation();
                navigateZoom(1);
              }}
            >
              <ArrowRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhatYouGet;
