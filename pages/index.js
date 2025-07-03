import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-2xl font-semibold">Welcome to R3volt Hub</h2>
        <p className="mt-2 text-gray-700">
          This is the landing page for your multipurpose fintech platform.
        </p>
      </main>
    </div>
  );
}
// pages/index.js
import styles from '../styles/Home.module.css';

export default function Home() {
return (
<main className={styles.container}>
<section className={styles.hero}>
<h1>Welcome to Revolt Hub</h1>
<p>Your multipurpose fintech space hub for games, social media, and more.</p>
<button className={styles.ctaButton} onClick={() => alert('Get Started clicked!')}>
Get Started
</button>
</section>

<section className={styles.features}>  
    <div className={styles.featureCard}>  
      <h3>Fintech Made Simple</h3>  
      <p>Access all your financial tools in one seamless platform.</p>  
    </div>  
    <div className={styles.featureCard}>  
      <h3>Social & Gaming</h3>  
      <p>Connect with your community and enjoy your favorite games.</p>  
    </div>  
    <div className={styles.featureCard}>  
      <h3>Secure & Reliable</h3>  
      <p>We prioritize your data privacy and platform security.</p>  
    </div>  
  </section>  

  <footer className={styles.footer}>  
    &copy; {new Date().getFullYear()} Revolt Hub. All rights reserved.  
  </footer>  
</main>

);
  }
  
