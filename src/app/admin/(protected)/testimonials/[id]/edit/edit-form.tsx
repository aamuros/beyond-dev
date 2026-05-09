"use client";

import { useState } from "react";
import { updateTestimonial } from "../../actions";

interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  company: string;
  published: boolean;
}

export function EditTestimonialForm({ testimonial }: { testimonial: Testimonial }) {
  const [quote, setQuote] = useState(testimonial.quote);
  const [authorName, setAuthorName] = useState(testimonial.authorName);
  const [authorRole, setAuthorRole] = useState(testimonial.authorRole);
  const [company, setCompany] = useState(testimonial.company);
  const [published, setPublished] = useState(testimonial.published);

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary mb-6">Edit Testimonial</h1>

      <form action={updateTestimonial} className="max-w-2xl space-y-5">
        <input type="hidden" name="id" value={testimonial.id} />

        {/* Quote */}
        <div>
          <label htmlFor="quote" className="block text-sm text-text-secondary mb-1.5">
            Quote
          </label>
          <textarea
            id="quote"
            name="quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            required
            rows={4}
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors resize-y"
          />
        </div>

        {/* Author Name */}
        <div>
          <label htmlFor="authorName" className="block text-sm text-text-secondary mb-1.5">
            Author Name
          </label>
          <input
            id="authorName"
            name="authorName"
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Author Role */}
        <div>
          <label htmlFor="authorRole" className="block text-sm text-text-secondary mb-1.5">
            Author Role
          </label>
          <input
            id="authorRole"
            name="authorRole"
            type="text"
            value={authorRole}
            onChange={(e) => setAuthorRole(e.target.value)}
            required
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm text-text-secondary mb-1.5">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Published */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="published"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="rounded border-border bg-surface text-accent focus:ring-accent"
          />
          <span className="text-sm text-text-secondary">Published</span>
        </label>

        {/* Submit */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="bg-accent text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Save changes
          </button>
          <a
            href="/admin/testimonials"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
