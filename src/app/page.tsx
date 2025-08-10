import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const CoworkerAccuracy = dynamic(() => import("@/components/CoworkerAccuracy"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 pt-24 md:pt-28 pb-20 text-center min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-neutral-900">
          AI Intelligence for Law Firms
        </h1>
        <p className="mx-auto mt-6 max-w-4xl text-lg sm:text-xl text-neutral-700">
          Law firms use our platform to expedite M&A due diligence workflows. We
          pull, source, and flag relevant information for your final review.
        </p>
        <div className="mt-10">
          <Link
            href="/demo"
            className="inline-flex items-center rounded-md bg-neutral-900 px-8 py-4 text-white text-base font-medium hover:bg-neutral-800"
          >
            Request Demo
          </Link>
        </div>
        {/* Testimonials removed per request */}
      </section>

      

      {/* Removed due diligence demo section per request */}

      {/* Accuracy section: replace with coworker-provided page */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-12">
        <CoworkerAccuracy />
      </section>

      {/* Security Section */}
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-24">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-neutral-900">Security</h3>
          <p className="mt-3 text-neutral-700">
            Protected by FTA, a cybersecurity company in business since 1982.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-neutral-300 p-10 min-h-56 flex flex-col items-center justify-center text-center">
            <div className="text-xl font-semibold text-neutral-900">Secure Locktight Database</div>
            <p className="mt-3 text-neutral-700 text-base">
              Uses best practices to ensure proprietary data is 100% protected from hackers.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-300 p-10 min-h-56 flex flex-col items-center justify-center text-center">
            <div className="text-xl font-semibold text-neutral-900">Locked down backend protected by FTA</div>
            <p className="mt-3 text-neutral-700 text-base">
              Using firewalls and advanced technology to make sure nobody can enter through the backdoor of our systems.
            </p>
          </div>
          <div className="rounded-xl border border-neutral-300 p-10 min-h-56 flex flex-col items-center justify-center text-center">
            <div className="text-xl font-semibold text-neutral-900">Open Source Model / On‑Prem deployment</div>
            <p className="mt-3 text-neutral-700 text-base">Further consultation required.</p>
          </div>
        </div>
      </section>

      {/* Features Section (image left, text right) moved below Accuracy */}
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch md:min-h-[28rem]">
        <div className="h-full rounded-lg border border-neutral-300 overflow-hidden relative">
          <Image
            src="/accept-docs.png"
            alt="Example of due diligence checklist showing document analysis"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="flex flex-col justify-between self-stretch h-full">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-neutral-900">
              We accept any document type
            </h3>
            <p className="text-lg text-neutral-700">
              Our platform can digest any document type —handwritten notes,
              century-old contracts, ZIP files, PDFs, spreadsheets, and more.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-neutral-900">
              We accept your checklist in any format
            </h3>
            <p className="text-lg text-neutral-700">
              We accept your checklist in any format—just like you’d hand it to
              a paralegal or associate. Our system reads, separates, and
              organizes every task with 100% accuracy, ready for instant
              execution.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
