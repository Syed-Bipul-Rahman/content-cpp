import type { Track } from "./site";

export const tracks: Track[] = [
  {
    slug: "cpp-fundamentals",
    title: "C++ Fundamentals",
    tagline: "From zero. Syntax, memory, types, templates, the STL — everything the projects need.",
    kind: "foundation",
    difficulty: 1,
    hours: 65,
    lessons: [
      { slug: "01-hello-world", title: "Hello, World — and what actually happens", minutes: 15 },
      { slug: "02-toolchain", title: "Your toolchain: compiler, linker, build system", minutes: 20 },
      { slug: "03-types-and-variables", title: "Types, variables, and the stack", minutes: 25 },
      { slug: "04-control-flow", title: "Control flow: if, loops, switch", minutes: 20 },
      { slug: "05-functions", title: "Functions, references, overloading", minutes: 25 },
      { slug: "06-pointers-and-memory", title: "Pointers, heap, and the lifetime model", minutes: 40 },
      { slug: "07-arrays-and-strings", title: "Arrays, C-strings, std::string", minutes: 25 },
      { slug: "08-structs-and-classes", title: "Structs, classes, and encapsulation", minutes: 30 },
      { slug: "09-oop", title: "Inheritance, polymorphism, and virtual", minutes: 40 },
      { slug: "10-raii-and-ownership", title: "RAII, ownership, and why C++ is different", minutes: 35 },
      { slug: "11-smart-pointers", title: "unique_ptr, shared_ptr, weak_ptr", minutes: 30 },
      { slug: "12-move-semantics", title: "Move semantics and rvalue references", minutes: 40 },
      { slug: "13-templates", title: "Templates: generic programming from scratch", minutes: 45 },
      { slug: "14-stl-containers", title: "STL containers: vector, map, unordered_map, set", minutes: 40 },
      { slug: "15-stl-algorithms", title: "STL algorithms and iterators", minutes: 35 },
      { slug: "16-lambdas", title: "Lambdas, std::function, and closures", minutes: 25 },
      { slug: "17-error-handling", title: "Exceptions, std::expected, and error design", minutes: 30 },
      { slug: "18-concurrency", title: "Threads, mutexes, atomics, and memory order", minutes: 50 },
      { slug: "19-filesystem-and-io", title: "Files, streams, and <filesystem>", minutes: 25 },
      { slug: "20-networking-basics", title: "Sockets, TCP, UDP — the raw API", minutes: 45 },
      { slug: "21-testing-and-tooling", title: "Testing, sanitizers, profilers, debuggers", minutes: 35 }
    ]
  },
  projectTrack("webserver", "Build Your Own Web Server", "A real HTTP/1.1 server — sockets, parsing, routing, keep-alive, static files.", 4, 18),
  projectTrack("shell", "Build Your Own Shell", "A POSIX shell: fork/exec, pipes, redirection, job control, built-ins.", 3, 14),
  projectTrack("grep", "Build Your Own grep", "Pattern matching, NFA/DFA regex engine, streaming file I/O.", 2, 8),
  projectTrack("regex-engine", "Build Your Own Regex Engine", "Parse regex → NFA → DFA — with backreferences and Unicode.", 4, 16),
  projectTrack("database", "Build Your Own Database", "A from-scratch relational DB: pager, B-tree, SQL parser, WAL.", 5, 40),
  projectTrack("redis", "Build Your Own Redis", "TCP server, RESP protocol, hash tables, expiry, persistence, replication.", 4, 22),
  projectTrack("language", "Build Your Own Programming Language", "Lexer, parser, AST, bytecode VM, GC — a working toy language.", 5, 40),
  projectTrack("compiler", "Build Your Own Compiler", "Frontend → IR → x86-64 codegen. Compile a real subset to machine code.", 5, 50),
  projectTrack("git", "Build Your Own Git", "Content-addressable storage, trees, commits, diff, merge, remotes.", 3, 20),
  projectTrack("text-editor", "Build Your Own Text Editor", "A modal terminal editor in the kilo tradition — with undo, syntax, search.", 3, 14),
  projectTrack("3d-renderer", "Build Your Own 3D Renderer", "Software rasterizer → OpenGL pipeline → basic ray tracer.", 4, 30),
  projectTrack("physics-engine", "Build Your Own Physics Engine", "Rigid bodies, collision detection, constraint solver, integration.", 4, 28),
  projectTrack("ar", "Build Your Own Augmented Reality", "Camera feed, marker tracking, pose estimation, overlay rendering.", 5, 26),
  projectTrack("os", "Build Your Own Operating System", "Bootloader, kernel, paging, scheduler, filesystem, shell — x86-64 from scratch.", 5, 80),
  projectTrack("emulator", "Build Your Own Emulator / VM", "CHIP-8 → NES → a tiny JIT. Fetch-decode-execute and beyond.", 4, 25),
  projectTrack("bittorrent", "Build Your Own BitTorrent Client", "Bencoding, tracker protocol, peer handshake, piece selection.", 4, 18),
  projectTrack("blockchain", "Build Your Own Blockchain", "Hashing, Merkle trees, PoW, P2P gossip, UTXO — a working coin.", 4, 24),
  projectTrack("search-engine", "Build Your Own Search Engine", "Inverted index, tokenization, TF-IDF, BM25, query parser.", 4, 20),
  projectTrack("web-search-engine", "Build Your Own Web Search Engine", "Crawler, robots.txt, deduplication, PageRank, ranked retrieval.", 5, 30),
  projectTrack("cli-tool", "Build Your Own CLI Tool", "Argument parsing, subcommands, config, distribution — production-grade.", 2, 8),
  projectTrack("irc-bot", "Build Your Own IRC Bot", "IRC protocol, event loop, plugin architecture.", 2, 6),
  projectTrack("discord-bot", "Build Your Own Discord Bot", "Gateway WebSocket, REST, slash commands, voice basics.", 3, 10),
  projectTrack("telegram-bot", "Build Your Own Telegram Bot", "Bot API, long polling vs webhooks, inline keyboards.", 2, 6),
  projectTrack("twitter-bot", "Build Your Own Twitter/X Bot", "OAuth 2.0, streaming API, rate limits, content policies.", 3, 8),
  projectTrack("messenger-bot", "Build Your Own FB Messenger AI Bot", "Graph API, webhooks, NLP integration.", 3, 8),
  projectTrack("reddit-bot", "Build Your Own Reddit Bot", "OAuth, listings, streams, moderation actions.", 2, 6),
  projectTrack("crypto-trading-bot", "Build Your Own Crypto Trading Bot", "Exchange APIs, order books, strategy backtesting, risk management.", 4, 20)
];

function projectTrack(
  slug: string,
  title: string,
  tagline: string,
  difficulty: 1 | 2 | 3 | 4 | 5,
  hours: number
): Track {
  return {
    slug,
    title,
    tagline,
    kind: "project",
    difficulty,
    hours,
    lessons: [
      { slug: "00-overview", title: "Overview & what you'll build", minutes: 10 },
      { slug: "01-prerequisites", title: "Prerequisites & mental model", minutes: 15 },
      { slug: "02-scaffold", title: "Project scaffold & build setup", minutes: 20 },
      { slug: "03-core", title: "Core mechanic — minimum viable version", minutes: 60 },
      { slug: "04-extend", title: "Extending the core", minutes: 60 },
      { slug: "05-ship", title: "Polish, testing, and shipping", minutes: 30 }
    ]
  };
}

export function getTrack(slug: string) {
  return tracks.find((t) => t.slug === slug);
}

export function getLesson(trackSlug: string, lessonSlug: string) {
  const track = getTrack(trackSlug);
  if (!track) return null;
  const index = track.lessons.findIndex((l) => l.slug === lessonSlug);
  if (index === -1) return null;
  return {
    track,
    lesson: track.lessons[index],
    prev: track.lessons[index - 1] ?? null,
    next: track.lessons[index + 1] ?? null,
    index
  };
}

export const foundations = tracks.filter((t) => t.kind === "foundation");
export const projects = tracks.filter((t) => t.kind === "project");
