import React from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "../components/UI";

const faqs = [
  {
    question: "What is an agentic workflow?",
    answer:
      "An agentic workflow is a series of tasks automated by an AI agent. The agent can reason, plan, and execute tasks autonomously to achieve a goal, learning and adapting as it goes.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "Not at all! Our platform features a user-friendly, no-code interface that allows you to build, manage, and scale complex agentic workflows using a drag-and-drop visual editor.",
  },
  {
    question: "What kind of tasks can I automate?",
    answer:
      "You can automate a wide range of tasks, from simple data entry and customer support responses to complex processes like market research, lead generation, and multi-step data analysis.",
  },
  {
    question: "How does Wizedflow ensure the security of my data?",
    answer:
      "We take security very seriously. Our platform is built with enterprise-grade security features, including data encryption at rest and in transit, role-based access control, and regular security audits.",
  },
];

const FAQ: React.FC<{ darkMode?: boolean }> = ({ darkMode }) => (
  <Card className={`mt-8 ${darkMode ? "bg-gray-800 text-white" : ""}`}>
    <h2 className={`text-3xl font-bold text-center mb-8 ${darkMode ? "text-green-200" : "text-green-900"}`}>
      Frequently Asked Questions
    </h2>
    <div className="w-4/5 mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <details key={index} className={`p-4 rounded-lg group faq-details ${darkMode ? "bg-gray-700/50" : "bg-green-50/50"}`}>
          <summary className={`flex justify-between items-center font-semibold cursor-pointer ${darkMode ? "text-green-300" : "text-green-800"}`}>
            {faq.question}
            <ChevronDown className="h-5 w-5 transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className={`mt-2 ${darkMode ? "text-green-100/80" : "text-green-950/80"}`}>{faq.answer}</p>
        </details>
      ))}
    </div>
  </Card>
);

export default FAQ;
