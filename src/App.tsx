import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Bot, Workflow, Cpu, Facebook, Linkedin } from "lucide-react";
import { Container, Card, Button, Input } from "./components/UI";
import { Nav } from "./components/Nav";
import { ParticleBackground } from "./components/ParticleBackground";
import Typewriter from "./components/Typewriter";
import WhatYouGet from "./pages/WhatYouGet";
import { DarkModeToggle } from "./components/DarkModeToggle";
import FAQ from "./pages/FAQ";
import logo from "./images/wizedflow_icon_transparent.png";

type TabKey = "home" | "contact";

const description = `
  Unlock the power of <strong>autonomous AI</strong> with our cutting-edge <strong>agentic automation platform</strong> <br />
  where tasks <strong>think</strong>, <strong>act</strong>, and <strong>evolve</strong> on their own.<br />
  We turn <strong>complex workflows</strong> into <strong>self-driving systems</strong> that <strong>save time</strong>, <strong>cut costs</strong>, and <strong>scale effortlessly</strong>.<br />
  Welcome to the <strong>future of intelligent automation</strong>.
`;

const products = [
  {
    icon: Bot,
    title: "Pre-built AI Agents",
    description: "Deploy ready-to-use AI agents for common tasks like customer support, data entry, and social media management. Get started in minutes.",
  },
  {
    icon: Workflow,
    title: "Agentic Workflow Platform",
    description: "Our core platform for building, managing, and scaling your own complex agentic workflows with a user-friendly, no-code interface.",
  },
  {
    icon: Cpu,
    title: "Custom Enterprise Solutions",
    description: "We partner with large organizations to design and implement bespoke AI automation solutions for unique, mission-critical challenges.",
  },
];

const Home: React.FC<{ darkMode: boolean; onContactClick: () => void }> = ({ darkMode, onContactClick }) => {
  return (
    <Container className={`pt-10 pb-20 ${darkMode ? "bg-gray-900" : ""}`}>
      <Card className={`text-center ${darkMode ? "bg-gray-800 text-white" : ""}`}>
        <h2 className={`text-2xl font-bold ${darkMode ? "text-green-200" : "text-green-900"}`}>
          Ready to Automate? Hire Your AI Agent Now!
        </h2>
        <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? "text-green-100/80" : "text-green-950/80"}`}>
          Let our team of experts build and manage a custom AI agent tailored to your specific business needs. From simple task automation to complex workflow orchestration, we've got you covered.
        </p>
        <div className="mt-6">
          <Button onClick={onContactClick} iconLeft={<MessageSquare className="h-4 w-4" />}>
            Get a Free Consultation
          </Button>
        </div>
      </Card>

      <Card className={`mt-8 text-center ${darkMode ? "bg-gray-800 text-white" : ""}`}>
        <h2 className={`text-2xl font-bold ${darkMode ? "text-green-200" : "text-green-900"}`}>
          About Us
        </h2>
        <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? "text-green-100/80" : "text-green-950/80"}`}>
          Wizedflow was founded by a team of AI enthusiasts and software engineers passionate about making advanced automation accessible to everyone. We believe in a future where intelligent agents handle the repetitive tasks, freeing up human potential for creativity and strategic thinking. Our mission is to build the most intuitive and powerful agentic automation platform on the market.
        </p>
      </Card>

      <Card className="mt-12">
        <h2 className={`text-3xl font-bold text-center mb-8 ${darkMode ? "text-green-200" : "text-green-900"}`}>
          Our Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.title}
                className={`
                  text-center transition-all duration-300 ease-in-out
                  hover:-translate-y-2 group
                  ${
                    darkMode
                      ? "bg-gray-800 text-white hover:bg-green-800/60"
                      : "hover:bg-green-600 hover:text-white"
                  }
                `}
              >
                <div className={`inline-block p-4 rounded-full mb-4 transition-colors duration-300 ${darkMode ? "bg-gray-700 group-hover:bg-green-700" : "bg-green-100 group-hover:bg-white/20"}`}>
                  <Icon size={32} className={`transition-colors duration-300 ${darkMode ? "text-green-300 group-hover:text-white" : "text-green-600 group-hover:text-white"}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className={`text-sm ${darkMode ? "text-green-100/70 group-hover:text-green-50" : "text-green-950/80 group-hover:text-green-50"}`}>
                  {product.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Card>

      <FAQ darkMode={darkMode} />

      <Card className={`mt-8 relative overflow-hidden ${darkMode ? "bg-gray-800 text-white" : ""}`}>
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
        <div className={`mt-4 leading-relaxed max-w-2xl ${darkMode ? "text-green-100/80" : "text-green-950/80"}`}>
          <Typewriter text={description} speed={24} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button iconLeft={<MessageSquare className="h-4 w-4" />} onClick={onContactClick}>Schedule a Meeting</Button>
        </div>
      </Card>
    </Container>
  );
};

const Contact: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [help, setHelp] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.2005620554", name);      // Name
    formData.append("entry.1045781291", email);     // Email
    formData.append("entry.1166974658", company);   // Company Name
    formData.append("entry.1065046570", role);      // Role in Organization
    formData.append("entry.839337160", help);      // How can we help you?

    fetch("https://docs.google.com/forms/d/e/1FAIpQLScUH82RBByGKqE99rofbfy5vJD4YZTVa1fgLv7BarOle0l8tw/formResponse", {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }).then(() => {
      alert("Thanks! We'll be in touch.");
      setName("");
      setEmail("");
      setCompany("");
      setRole("");
      setHelp("");
    });
  }

  return (
    <Container className={`pt-10 pb-20 ${darkMode ? "bg-gray-900" : ""}`}>
      <Card className={`relative overflow-hidden ${darkMode ? "bg-gray-800 text-white" : ""}`}>
        <div className="absolute -top-8 -right-8 opacity-20">
          <Sparkles className="h-24 w-24" />
        </div>
        <h2 className={`text-2xl font-bold ${darkMode ? "text-green-200" : "text-green-900"}`}>Contact Us</h2>
        <p className={`mt-2 ${darkMode ? "text-green-100/80" : "text-green-950/80"}`}>We'd love to hear from you. Fill in your details and we'll get back soon.</p>
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
  );
};

const App: React.FC = () => {
  const [active, setActive] = useState<TabKey>("home");
  const [darkMode, setDarkMode] = useState(false);

  console.log("active:", active);

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
            <div className="ml-4">
              <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
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
          {active === "home" ? 
          <>
            <Home darkMode={darkMode} onContactClick={() => setActive("contact")} />
            {/* <WhatYouGet darkMode={darkMode} /> */}
            
          </>
          : <Contact darkMode={darkMode} />}
        </motion.div>
      </main>

      <footer
        className={`mt-auto border-t border-green-100/80 backdrop-blur transition-colors duration-300 ${
          darkMode ? "bg-gray-900/80 text-green-100" : "bg-white/80 text-green-900"
        }`}
      >
        <Container className="py-6 text-sm">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="flex items-center gap-1">
                <img src={logo} alt="Wizedflow logo" className="h-6 w-6" />
                <span className={`text-xl font-bold ${darkMode ? "text-green-100" : "text-green-900"}`}>izedflow</span>
              </div>
              <span className={darkMode ? "text-green-100/70" : "text-green-950/70"}>
                © {new Date().getFullYear()} Wizedflow. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.facebook.com/profile.php?id=61580003186640"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={`transition-colors ${darkMode ? "text-green-300 hover:text-green-100" : "text-green-700 hover:text-green-900"}`}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/wizedflow/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`transition-colors ${darkMode ? "text-green-300 hover:text-green-100" : "text-green-700 hover:text-green-900"}`}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a className={`underline decoration-green-300/50 underline-offset-4 transition-colors ${darkMode ? "hover:text-green-100" : "hover:text-green-900"}`} href="#">Privacy</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default App;
