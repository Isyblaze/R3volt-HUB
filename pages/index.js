import React from "react";
import Header from "../components/Header";
import { Button } from "../components/ui/Button";
import { RevoltCard } from "../components/RevoltCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6">
      <Header />
      <main className="max-w-5xl mx-auto py-16 space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Welcome to R3volt Hub
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Your futuristic fintech hub for games, social, and secure digital services.
          </p>
          <Button variant="revolt" size="lg" onClick={() => alert("Let’s Go!")}>
            Get Started
          </Button>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <RevoltCard
            title="Fintech Made Simple"
            description="Access all your financial tools in one seamless platform."
            href="#"
          />
          <RevoltCard
            title="Social & Gaming"
            description="Connect with your community and enjoy your favorite games."
            href="#"
          />
          <RevoltCard
            title="Secure & Reliable"
            description="We prioritize your data privacy and platform security."
            href="#"
          />
        </section>
      </main>

      <footer className="text-center text-sm text-gray-400 py-8">
        &copy; {new Date().getFullYear()} Revolt Hub. All rights reserved.
      </footer>
    </div>
  );
}
