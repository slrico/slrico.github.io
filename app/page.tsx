export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
              Computational Linguistics • NLP • Academic Research
            </p>

            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Research in language, AI, and academic communication.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              I study multilingual NLP, German language processing, and AI-supported academic
              workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#publications"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                View Publications
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-4 leading-7 text-slate-600">
              I focus on computational linguistics, data analysis, and practical AI methods for
              research and writing.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Main Focus</p>
                <p className="mt-1 font-medium">Multilingual NLP</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Academic Area</p>
                <p className="mt-1 font-medium">Language Research</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Tools</p>
                <p className="mt-1 font-medium">Python, LaTeX, Git</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Language</p>
                <p className="mt-1 font-medium">German & English</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="publications" className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <h2 className="text-3xl font-semibold">Selected Work</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Publication</p>
            <h3 className="mt-3 text-xl font-semibold">Multilingual NLP Research</h3>
            <p className="mt-3 text-slate-600">A short summary of one academic paper or study.</p>
          </article>
          <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Project</p>
            <h3 className="mt-3 text-xl font-semibold">German Grammar Analysis</h3>
            <p className="mt-3 text-slate-600">A short summary of a research or coding project.</p>
          </article>
          <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Work</p>
            <h3 className="mt-3 text-xl font-semibold">Academic Writing Tools</h3>
            <p className="mt-3 text-slate-600">A short summary of an AI or workflow project.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-8 py-12 text-white">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Add your email, CV, or research profile links here.
          </p>
          <div className="mt-8">
            <a
              href="mailto:your.email@example.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}