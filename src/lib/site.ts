export const site = {
  name: "learncpp.dev",
  title: "Learn C++ — From Zero to Building Your Own OS",
  description:
    "The most comprehensive, free C++ curriculum on the web. Master the language, then build your own web server, database, shell, operating system, compiler, 3D renderer, and more — from scratch.",
  url: "https://learncpp.dev",
  author: "learncpp.dev",
  locale: "en_US",
  twitter: "@learncpp"
};

export type Track = {
  slug: string;
  title: string;
  tagline: string;
  kind: "foundation" | "project";
  difficulty: 1 | 2 | 3 | 4 | 5;
  hours: number;
  lessons: { slug: string; title: string; minutes: number }[];
};
