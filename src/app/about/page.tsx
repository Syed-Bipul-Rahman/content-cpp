import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Why learncpp.dev exists, and how it's structured."
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-prose px-6 py-24 prose-cpp">
      <p className="text-sm uppercase tracking-[0.2em] text-mute mb-4">About</p>
      <h1>Learn by building the things you already use.</h1>
      <p>
        Most tutorials teach syntax. Then they stop. You can recite the rules of C++ and still not
        know how to write anything real. This site is the opposite bet: learn the language only as
        far as you need, then build real systems that expose why the language is the way it is.
      </p>
      <h2>The philosophy</h2>
      <p>
        You don't understand a web server until you've written <code>accept()</code>. You don't
        understand a database until you've laid out a page. You don't understand an operating
        system until you've toggled a paging bit and watched the CPU faint. The projects on this
        site exist to put you in that chair.
      </p>
      <h2>How to use this site</h2>
      <ol>
        <li>Do <a href="/learn/cpp-fundamentals">C++ Fundamentals</a> in order. Skip nothing.</li>
        <li>Pick any Level 1–2 project. Build the minimum viable version. Ship it.</li>
        <li>Repeat. Go deeper. Level 5 is not off-limits — it just takes longer.</li>
      </ol>
      <h2>What you'll build</h2>
      <p>
        25+ projects spanning systems, networking, graphics, language implementation, and automation.
        Every one is a minimum viable version — small enough to finish, real enough to matter, clear
        enough to extend.
      </p>
    </div>
  );
}
