import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Moon, Sun } from "lucide-react";
import { Container, Card, Button, Input } from "./components/UI";
import { Nav } from "./components/Nav";
import { ParticleBackground } from "./components/ParticleBackground";

type TabKey = "home" | "contact";

const Home: React.FC<{ darkMode: boolean }> = ({ darkMode }) => (
  <Container className={`pt-10 pb-20 ${darkMode ? "bg-gray-900" : ""}`}>
    <Card className={`relative overflow-hidden ${darkMode ? "bg-gray-800 text-white" : ""}`}>
      <div className="absolute -top-8 -right-8 opacity-20">
        <Sparkles className="h-24 w-24" />
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-extrabold tracking-tight ${darkMode ? "text-green-200" : "text-green-900"}`}
      >
        Build smarter flows with <span className={darkMode ? "text-green-400" : "text-green-600"}>Wizedflow</span>
      </motion.h1>
      <p className={`mt-4 leading-relaxed max-w-2xl ${darkMode ? "text-green-100/80" : "text-green-950/80"}`}>
        A sleek, minimal Single Page Application scaffold inspired by modern AI landing pages.
        Clean structure, reusable components, and a calming green-on-white aesthetic.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button iconLeft={<MessageSquare className="h-4 w-4" />}>Get Started</Button>
        <Button variant="ghost">Learn More</Button>
      </div>
    </Card>
  </Container>
);

const Contact: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Thanks! We'll be in touch.");
  }

  return (
    <Container className={`pt-10 pb-20 ${darkMode ? "bg-gray-900" : ""}`}>
      <Card className={darkMode ? "bg-gray-800 text-white" : ""}>
        <h2 className={`text-2xl font-bold ${darkMode ? "text-green-200" : "text-green-900"}`}>Contact Us</h2>
        <p className={`mt-2 ${darkMode ? "text-green-100/80" : "text-green-950/80"}`}>We'd love to hear from you. Fill in your details and we'll get back soon.</p>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 max-w-xl">
          <Input id="name" label="Name" placeholder="Jane Doe" value={name} onChange={setName} darkMode={darkMode} />
          <Input id="email" type="email" label="Email" placeholder="jane@company.com" value={email} onChange={setEmail} darkMode={darkMode} />
          <div className="pt-2">
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </Card>
    </Container>
  );
};

const App: React.FC = () => {
  const [active, setActive] = useState<TabKey>("home");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-green-950"
      }`}
      style={{ minHeight: "100vh" }}
    >
      <ParticleBackground density={0.8} darkMode={darkMode} />
      <header
        className={`border-b border-green-100/80 sticky top-0 z-10 transition-colors duration-300 ${
          darkMode ? "bg-gray-900/80 backdrop-blur text-white" : "bg-white/80 backdrop-blur text-green-950"
        }`}
      >
        <Container className="py-4 flex items-center justify-between">
          <Nav active={active} onChange={setActive} darkMode={darkMode}>
            <button
              onClick={() => setDarkMode((d) => !d)}
              className={`ml-4 px-3 py-1 rounded transition flex items-center gap-2
                ${darkMode
                  ? "bg-green-700 text-green-100 hover:bg-green-800"
                  : "bg-green-200 text-green-900 hover:bg-green-300"
                }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </Nav>
        </Container>
      </header>

      <main>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {active === "home" ? <Home darkMode={darkMode} /> : <Contact darkMode={darkMode} />}
        </motion.div>
      </main>

      <footer
        className={`mt-auto border-t border-green-100 backdrop-blur transition-colors duration-300 ${
          darkMode ? "bg-gray-900/80 text-green-100" : "bg-white/80 text-green-900"
        }`}
      >
        <Container className="py-6 text-sm flex items-center justify-between">
          <span>© {new Date().getFullYear()} Wizedflow. All rights reserved.</span>
          <a
            className="underline decoration-green-300 underline-offset-4 hover:text-green-700"
            href="#"
          >
            Privacy
          </a>
        </Container>
      </footer>
    </div>
  );
};

export default App;
