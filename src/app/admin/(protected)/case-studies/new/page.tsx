"use client";

import { useState } from "react";
import { createCaseStudy } from "../actions";

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function NewCaseStudyPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [industry, setIndustry] = useState("");
  const [summary, setSummary] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [outcome, setOutcome] = useState("");
  const [techStack, setTechStack] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [featured, setFeatured] = useState(false);
  const [published, setPublished] = useState(false);

  const handleTitleChange = (value: string) => {
    setTitle(value);
    setSlug(generateSlug(value));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary mb-6">New Case Study</h1>

      <form action={createCaseStudy} className="max-w-2xl space-y-5">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm text-text-secondary mb-1.5">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            required
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Slug */}
        <div>
          <label htmlFor="slug" className="block text-sm text-text-secondary mb-1.5">
            Slug
          </label>
          <input
            id="slug"
            name="slug"
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors font-mono text-sm"
          />
        </div>

        {/* Industry */}
        <div>
          <label htmlFor="industry" className="block text-sm text-text-secondary mb-1.5">
            Industry
          </label>
          <input
            id="industry"
            name="industry"
            type="text"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            required
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Summary */}
        <div>
          <label htmlFor="summary" className="block text-sm text-text-secondary mb-1.5">
            Summary
          </label>
          <textarea
            id="summary"
            name="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            rows={3}
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors resize-y"
          />
        </div>

        {/* Problem */}
        <div>
          <label htmlFor="problem" className="block text-sm text-text-secondary mb-1.5">
            Problem
          </label>
          <textarea
            id="problem"
            name="problem"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            required
            rows={4}
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors resize-y"
          />
        </div>

        {/* Solution */}
        <div>
          <label htmlFor="solution" className="block text-sm text-text-secondary mb-1.5">
            Solution
          </label>
          <textarea
            id="solution"
            name="solution"
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            required
            rows={4}
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors resize-y"
          />
        </div>

        {/* Outcome */}
        <div>
          <label htmlFor="outcome" className="block text-sm text-text-secondary mb-1.5">
            Outcome
          </label>
          <textarea
            id="outcome"
            name="outcome"
            value={outcome}
            onChange={(e) => setOutcome(e.target.value)}
            required
            rows={4}
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors resize-y"
          />
        </div>

        {/* Tech Stack */}
        <div>
          <label htmlFor="techStack" className="block text-sm text-text-secondary mb-1.5">
            Tech Stack <span className="text-text-faint">(comma-separated)</span>
          </label>
          <input
            id="techStack"
            name="techStack"
            type="text"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            placeholder="React, Node.js, PostgreSQL"
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Image URL */}
        <div>
          <label htmlFor="imageUrl" className="block text-sm text-text-secondary mb-1.5">
            Image URL
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="featured"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="rounded border-border bg-surface text-accent focus:ring-accent"
            />
            <span className="text-sm text-text-secondary">Featured</span>
          </label>
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
        </div>

        {/* Submit */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="bg-accent text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Create case study
          </button>
          <a
            href="/admin/case-studies"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
