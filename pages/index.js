import React from "react";
import Head from "next/head";
import AnimatedBackground from "../components/AnimatedBackground";
import Header from "../components/Header";
import { Button } from "../components/ui/Button";
import { RevoltCard } from "../components/RevoltCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>R3volt Hub</title>
      </Head>
      <AnimatedBackground />
      <div className="relative min-h-screen px-6 py-10">
        <Header />
        <main className="space-y-12">
          <section className="text-center max-w-xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Welcome to Revolt Hub</h1>
            <p className="text-lg text-gray-300">
              Your multipurpose fintech space hub for games, social media, and more.
            </p>
            <Button variant="revolt" className="mt-6">Get Started</Button>
          </section>

          <section className="grid md:grid-cols-3 gap-6">
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

        <footer className="text-center text-gray-400 text-sm mt-20">
          &copy; {new Date().getFullYear()} Revolt Hub. All rights reserved.
        </footer>
      </div>
    </>
  );
}
