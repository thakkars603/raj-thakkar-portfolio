import { useState, type FormEvent, type ReactNode } from "react";
import { SITE } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const TOPICS = [
  "AI governance advisory",
  "Copilot security",
  "GRC / control design",
  "Speaking / briefing",
  "Other",
] as const;

type FormState = {
  name: string;
  email: string;
  organization: string;
  topic: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  organization: "",
  topic: TOPICS[0],
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): Partial<FormState> {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email.";
    if (!form.message.trim() || form.message.trim().length < 12)
      next.message = "A short note of at least a sentence is required.";
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    const inquiry = {
      ...form,
      receivedAt: new Date().toISOString(),
    };
    try {
      const existing = JSON.parse(
        localStorage.getItem("rt-inquiries") ?? "[]",
      ) as unknown[];
      localStorage.setItem(
        "rt-inquiries",
        JSON.stringify([inquiry, ...existing].slice(0, 20)),
      );
    } catch {
      /* private-mode / quota — still show success */
    }
    setSent(true);
  }

  function mailtoHref() {
    const subject = encodeURIComponent(
      `Portfolio inquiry — ${form.topic} — ${form.name}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}\n${form.organization}`,
    );
    return `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
            04 — Correspondence
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-[-0.02em] text-fg sm:text-5xl">
            Contact
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            For AI governance, Copilot security, or GRC advisory. Notes are
            recorded on this device; use email for a guaranteed reply.
          </p>
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  className="text-fg underline-offset-4 hover:underline"
                  href={`mailto:${SITE.email}`}
                >
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                LinkedIn
              </dt>
              <dd className="mt-1">
                <a
                  className="text-fg underline-offset-4 hover:underline"
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/rajthakkar603
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                Phone
              </dt>
              <dd className="mt-1">
                <a
                  className="text-fg underline-offset-4 hover:underline"
                  href={`tel:${SITE.phone.replace(/-/g, "")}`}
                >
                  {SITE.phone}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          {sent ? (
            <div className="rounded-xl bg-surface p-8 shadow-[var(--shadow-border)]">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">
                Received
              </p>
              <h3 className="mt-3 font-display text-3xl font-medium text-fg">
                Note recorded.
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                Thank you, {form.name.split(" ")[0]}. For a faster reply, send
                the same note to {SITE.email}.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={mailtoHref()}
                  className="inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-fg transition-colors hover:bg-fg"
                >
                  Open email client
                </a>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    setSent(false);
                    setForm(empty);
                  }}
                >
                  Write another
                </Button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  error={errors.name}
                  htmlFor="contact-name"
                >
                  <Input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                  />
                </Field>
                <Field
                  label="Email"
                  error={errors.email}
                  htmlFor="contact-email"
                >
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                  />
                </Field>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field label="Organization" htmlFor="contact-org">
                  <Input
                    id="contact-org"
                    name="organization"
                    autoComplete="organization"
                    value={form.organization}
                    onChange={(e) => update("organization", e.target.value)}
                  />
                </Field>
                <Field label="Topic" htmlFor="contact-topic">
                  <select
                    id="contact-topic"
                    name="topic"
                    value={form.topic}
                    onChange={(e) => update("topic", e.target.value)}
                    className="h-11 w-full rounded-md bg-bg px-3.5 text-base text-fg shadow-[var(--shadow-border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {TOPICS.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="mt-5">
                <Field
                  label="Message"
                  error={errors.message}
                  htmlFor="contact-message"
                >
                  <Textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    placeholder="What you are working on, and how this practice might help."
                  />
                </Field>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted">
                  No account required. Messages stay on this device unless you
                  also send email.
                </p>
                <Button type="submit">Send note</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error ? (
        <p className="text-xs text-fg" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
