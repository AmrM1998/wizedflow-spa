import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Sparkles } from "lucide-react";
import { Container, Card, Button, Input } from "./components/UI";
import { Nav } from "./components/Nav";
import { ParticleBackground } from "./components/ParticleBackground";
import Typewriter from "./components/Typewriter";
import WhatYouGet from "./pages/WhatYouGet";

type TabKey = "home" | "contact";

const description = `
  Unlock the power of <strong>autonomous AI</strong> with our cutting-edge <strong>agentic automation platform</strong> <br />
  where tasks <strong>think</strong>, <strong>act</strong>, and <strong>evolve</strong> on their own.<br />
  We turn <strong>complex workflows</strong> into <strong>self-driving automations</strong> that reduce toil, cut costs, and <strong>scale effortlessly</strong>.<br />
  Welcome to the <strong>future of intelligent automation</strong>.
`;

const Home: React.FC<{ darkMode: boolean; onGetStarted?: () => void }> = ({ darkMode, onGetStarted }) => {
  return (
    <section className="py-8 md:py-14">
      <Container>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`text-3xl md:text-5xl font-extrabold tracking-tight ${darkMode ? "text-green-50" : "text-green-900"}`}
            >
              Build AI workflows without code
            </motion.h1>
            <p className={`mt-3 md:mt-4 text-base md:text-lg ${darkMode ? "text-green-100/80" : "text-green-900/80"}`}>
              Visually design, automate, and deploy AI flows in minutes.
            </p>
          </div>

          {/* Full-width Typewriter with fixed height — unchanged */}
          <div className="col-span-2 w-full mt-4 min-h-[80px] md:min-h-[100px]">
            <Typewriter
              text={description}
              speed={18}
              className={`w-full ${darkMode ? "text-green-100" : "text-gray-800"}`}
            />
          </div>

          <div className="mt-5 flex gap-3 col-span-2">
            <Button onClick={onGetStarted}>
              <span className="inline-flex items-center gap-2"><Sparkles size={18}/> Get Started</span>
            </Button>
            <Button variant="ghost" onClick={onGetStarted}>
              <span className="inline-flex items-center gap-2"><MessageSquare size={18}/> Talk to Sales</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Contact: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [help, setHelp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.2005620554", name);
    formData.append("entry.1045781291", email);
    formData.append("entry.1166974658", company);
    formData.append("entry.1065046570", role);
    formData.append("entry.839337160", help);

    fetch("https://docs.google.com/forms/d/e/1FAIpQLScUH82RBByGKqE99rofbfy5vJD4YZTVa1fgLv7BarOle0l8tw/formResponse", {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }).then(() => {
      alert("Thanks! We'll be in touch.");
      setName(""); setEmail(""); setCompany(""); setRole(""); setHelp("");
    });
  };

  return (
    <section id="panel-contact" className="py-10 md:py-16">
      <Container>
        <Card className={darkMode ? "bg-gray-800 text-white" : ""}>
          <h2 className={`text-2xl font-bold ${darkMode ? "text-green-50" : "text-green-900"}`}>Contact Us</h2>
          <p className={`mt-2 ${darkMode ? "text-green-100/80" : "text-green-950/80"}`}>
            We'd love to hear from you. Fill in your details and we'll get back soon.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 max-w-xl">
            <Input id="name" label="Name" placeholder="Jane Doe" value={name} onChange={setName} darkMode={darkMode} required />
            <Input id="email" type="email" label="Email" placeholder="jane@company.com" value={email} onChange={setEmail} darkMode={darkMode} required />
            <Input id="company" label="Company Name" placeholder="Your Company" value={company} onChange={setCompany} darkMode={darkMode} required />
            <Input id="role" label="What is your role in the organization?" placeholder="e.g. Product Manager" value={role} onChange={setRole} darkMode={darkMode} required />
            <Input id="help" label="How can we help you?" placeholder="Describe your needs..." value={help} onChange={setHelp} darkMode={darkMode} required />
            <div className="pt-2">
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </Card>
      </Container>
    </section>
  );
};

const App: React.FC = () => {
  const [tab, setTab] = useState<TabKey>("home");
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen relative ${darkMode ? "bg-green-950" : "bg-green-50"}`}>
      <style>{`
        .switch { position: relative; display: inline-block; width: 50px; height: 28px; }
        .switch input { display: none; }
        .slider { position: absolute; cursor: pointer; top:0; left:0; right:0; bottom:0; background-color:#ccc; transition:.4s; border-radius:34px; }
        .slider:before { position:absolute; content:""; height:22px; width:22px; left:3px; bottom:3px; background:white; transition:.4s; border-radius:50%; }
        input:checked + .slider { background-color:#4ade80; }
        input:checked + .slider:before { transform: translateX(22px); }
      `}</style>

      <ParticleBackground className="pointer-events-none" density={0.9} darkMode={darkMode} />

      <header className="relative z-10 py-6">
        <Container className="flex items-center justify-between">
          <Nav active={tab} onChange={setTab} darkMode={darkMode}>
            <div className="ml-2">
              <label className="switch" aria-hidden>
                <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(v => !v)} />
                <span className="slider" />
              </label>
            </div>
          </Nav>
        </Container>
      </header>

      <main className="relative z-10">
        {tab === "home" ? 
          <Home darkMode={darkMode} onGetStarted={() => setTab("contact")} /> 
          : <Contact darkMode={darkMode} />}
        {tab === "home" && <WhatYouGet darkMode={darkMode} />}
      </main>

      <footer className="relative z-10 py-10">
        <Container className={`flex items-center justify-between ${darkMode ? "text-green-100/70" : "text-green-900/70"}`}>
          <span>© {new Date().getFullYear()} Wizedflow. All rights reserved.</span>
          <a className="underline decoration-green-300 underline-offset-4 hover:text-green-700" href="#">Privacy</a>
        </Container>
      </footer>
    </div>
  );
};

export default App;
