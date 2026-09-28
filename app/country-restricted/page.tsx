export default function CountryRestrictedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070a0a] px-6 py-16 text-white">
      <section className="w-full max-w-2xl rounded-3xl border border-[#4C8C74]/30 bg-[#111817] px-8 py-16 text-center shadow-2xl shadow-black/30 sm:px-14">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-[#78C9A5]">
          Aussie Digital Studios
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Website not available in your country.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#AAB6B1] sm:text-lg">
          Coming Soon to your country.
        </p>
      </section>
    </main>
  );
}
