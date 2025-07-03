import React from "react";
import Header from "../components/Header";
import RevoltCard from "../components/RevoltCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles.hero}>
          <h1>Welcome to Revolt Hub</h1>
          <p>Your multipurpose fintech space hub for games, social media, and more.</p>
          <button
            className={styles.ctaButton}
            onClick={() => alert("Get Started clicked!")}
          >
            Get Started
          </button>
        </section>

        <section className={styles.features}>
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

        <footer className={styles.footer}>
          &copy; {new Date().getFullYear()} Revolt Hub. All rights reserved.
        </footer>
      </main>
    </>
  );
              }
