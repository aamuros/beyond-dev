"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const serviceOptions = [
  "Thesis / Capstone Project",
  "Student Portfolio Site",
  "Small Business Website",
  "Custom Web Application",
  "SaaS MVP",
  "Internal Tool / Automation",
  "API Integration",
  "Not sure yet",
];

const timelineOptions = [
  "ASAP",
  "Within 2 weeks",
  "1-2 months",
  "3-6 months",
  "Flexible",
];

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  serviceType: string;
  timeline: string;
  message: string;
  honeypot: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceType: "",
    timeline: "",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.company.trim()) newErrors.company = "Company or school is required.";
    if (!formData.serviceType) newErrors.serviceType = "Please select a service type.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (formData.honeypot) return;

    if (!validate()) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        serviceType: "",
        timeline: "",
        message: "",
        honeypot: "",
      });
    } catch {
      setStatus("error");
    }
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  const inputStyles =
    "w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors";
  const labelStyles = "block text-sm text-text-secondary mb-1.5 font-medium";

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-36">
      <Container>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight mb-4">
            Start a project
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-10">
            Tell us about your project and we&apos;ll get back to you within one
            business day.
          </p>

          {status === "success" ? (
            <div className="rounded-2xl border border-success/30 bg-success/5 p-8 text-center">
              <h3 className="text-lg font-medium text-success mb-2">
                Message sent!
              </h3>
              <p className="text-sm text-text-secondary">
                Thanks for reaching out. We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className={labelStyles}>
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputStyles}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-error">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelStyles}>
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className={inputStyles}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-error">{errors.email}</p>
                  )}
                </div>

                {/* Company / School */}
                <div>
                  <label htmlFor="company" className={labelStyles}>
                    Company or School <span className="text-accent">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company or school name"
                    className={inputStyles}
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs text-error">{errors.company}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className={labelStyles}>
                    Phone <span className="text-text-muted">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+63 9XX XXX XXXX"
                    className={inputStyles}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Service type */}
                <div>
                  <label htmlFor="serviceType" className={labelStyles}>
                    Service type <span className="text-accent">*</span>
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={inputStyles}
                  >
                    <option value="">Select...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && (
                    <p className="mt-1 text-xs text-error">
                      {errors.serviceType}
                    </p>
                  )}
                </div>

                {/* Timeline */}
                <div>
                  <label htmlFor="timeline" className={labelStyles}>
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={inputStyles}
                  >
                    <option value="">Select...</option>
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelStyles}>
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className={`${inputStyles} resize-y`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-error">{errors.message}</p>
                )}
              </div>

              {/* Error message */}
              {status === "error" && (
                <p className="text-sm text-error">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              {/* Submit */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === "submitting"}
                className="w-full md:w-auto"
              >
                {status === "submitting" ? "Sending..." : "Send message"}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
