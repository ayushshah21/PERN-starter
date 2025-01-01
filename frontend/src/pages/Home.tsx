import { Link } from "react-router-dom";
import { ArrowRight, Database, Server, Layout, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <div className="text-center sm:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">Your Ultimate</span>
                <span className="block text-blue-600 mt-2">
                  PERN Stack Solution
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl">
                Start building scalable applications with PostgreSQL, Express,
                React, and Node.js. Everything you need to create modern web
                applications.
              </p>
              <div className="mt-10">
                <Link
                  to="/login"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Get started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Everything you need to build
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A complete solution for your next web application project.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              <span className="block">Ready to dive in?</span>
              <span className="block mt-2">Start building today.</span>
            </h2>
            <p className="mt-4 text-xl leading-6 text-blue-100">
              Join thousands of developers already using our platform.
            </p>
            <div className="mt-10">
              <Link
                to="/login"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                Get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    name: "PostgreSQL Database",
    description:
      "Powerful relational database for robust data storage and management.",
    icon: <Database className="w-6 h-6 text-blue-600" />,
  },
  {
    name: "Express Backend",
    description: "Fast, unopinionated web framework for Node.js.",
    icon: <Server className="w-6 h-6 text-blue-600" />,
  },
  {
    name: "React Frontend",
    description: "Modern UI library for building interactive user interfaces.",
    icon: <Layout className="w-6 h-6 text-blue-600" />,
  },
  {
    name: "Node.js Runtime",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
    icon: <Terminal className="w-6 h-6 text-blue-600" />,
  },
];

