import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Sparkles } from "lucide-react";
import { Container, Card, Button, Input } from "./components/UI";
import { Nav } from "./components/Nav";
import { ParticleBackground } from "./components/ParticleBackground";

type TabKey = "home" | "contact";

const Home: React.FC = () => (
  <Container className="pt-10 pb-20">
    <Card className="relative overflow-hidden">
      <div className="absolute -top-8 -right-8 opacity-20">
        <Sparkles className="h-24 w-24" />
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold tracking-tight text-green-900"
      >
        Build smarter flows with <span className="text-green-600">Wizedflow</span>
      </motion.h1>
      <p className="mt-4 text-green-950/80 leading-relaxed max-w-2xl">
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

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ name, email });
    alert("Thanks! We'll be in touch.");
  }

  return (
    <Container className="pt-10 pb-20">
      <Card>
        <h2 className="text-2xl font-bold text-green-900">Contact Us</h2>
        <p className="mt-2 text-green-950/80">We'd love to hear from you. Fill in your details and we'll get back soon.</p>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 max-w-xl">
          <Input id="name" label="Name" placeholder="Jane Doe" value={name} onChange={setName} />
          <Input id="email" type="email" label="Email" placeholder="jane@company.com" value={email} onChange={setEmail} />
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

  return (
    <div
      className="relative min-h-screen bg-white text-green-950"
      style={{ minHeight: "100vh" }} // <-- add this line
    >
      <ParticleBackground density={0.8} />
      <header className="border-b border-green-100/80 bg-white/80 backdrop-blur sticky top-0 z-10">
        <Container className="py-4">
          <Nav active={active} onChange={setActive} />
        </Container>
      </header>

      <main>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {active === "home" ? <Home /> : <Contact />}
        </motion.div>
      </main>

      <footer className="mt-auto border-t border-green-100 bg-white/80 backdrop-blur">
        <Container className="py-6 text-sm text-green-900/70 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Wizedflow. All rights reserved.</span>
          <a className="underline decoration-green-300 underline-offset-4 hover:text-green-700" href="#">
            Privacy
          </a>
        </Container>
      </footer>
    </div>
  );
};

export default App;
