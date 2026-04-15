import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-prose px-6 py-32 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-mute mb-4">404</p>
      <h1 className="text-display font-semibold tracking-tight">Segmentation fault.</h1>
      <p className="mt-6 text-mute">That page doesn't exist — or hasn't been written yet.</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium">
        Back to safety
      </Link>
    </div>
  );
}
