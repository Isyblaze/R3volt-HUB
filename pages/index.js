import React from "react";
import Header from "../components/Header";
import { Button } from "../components/ui/Button";
import { RevoltCard } from "../components/RevoltCard";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6 space-y-6">
        <section>
          <h1 className="text-3xl font-bold">Enter the Revolt Hub</h1>
          <p className="text-gray-600 mt-2">
            Your multipurpose space hub for games, social media, and more.
          </p>
          <Button variant="revolt" className="mt-4" onClick={() => alert("Let’s Go!")}>
            Take a seat
          </Button>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mt-10">
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

      <footer className="text-center text-gray-400 text-sm mt-10">
        &copy; {new Date().getFullYear()} Revolt Hub. All rights reserved.
      </footer>
    </div>
  );
              }
