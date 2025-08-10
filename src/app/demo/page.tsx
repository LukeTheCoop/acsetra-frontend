export default function DemoPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
        Request a Demo
      </h1>
      <p className="mt-3 text-neutral-600">
        Tell us a bit about your firm and the workflows you want to accelerate.
        We will reach out promptly to schedule a tailored demonstration.
      </p>

      <form className="mt-8 grid grid-cols-1 gap-4">
        <input
          className="w-full rounded-md border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-500"
          placeholder="Full name"
          type="text"
          name="name"
        />
        <input
          className="w-full rounded-md border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-500"
          placeholder="Work email"
          type="email"
          name="email"
        />
        <input
          className="w-full rounded-md border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-500"
          placeholder="Firm / Company"
          type="text"
          name="company"
        />
        <textarea
          className="w-full rounded-md border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-500 min-h-32"
          placeholder="What would you like to see in the demo?"
          name="message"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-white text-sm font-medium hover:bg-neutral-800"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}


