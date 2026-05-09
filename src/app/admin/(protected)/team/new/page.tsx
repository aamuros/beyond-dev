"use client";

import { useState } from "react";
import { createTeamMember } from "../actions";

export default function NewTeamMemberPage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [order, setOrder] = useState(0);

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary mb-6">New Team Member</h1>

      <form action={createTeamMember} className="max-w-2xl space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block text-sm text-text-secondary mb-1.5">
            Role
          </label>
          <input
            id="role"
            name="role"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Bio */}
        <div>
          <label htmlFor="bio" className="block text-sm text-text-secondary mb-1.5">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
            rows={4}
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors resize-y"
          />
        </div>

        {/* Avatar URL */}
        <div>
          <label htmlFor="avatarUrl" className="block text-sm text-text-secondary mb-1.5">
            Avatar URL
          </label>
          <input
            id="avatarUrl"
            name="avatarUrl"
            type="url"
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Order */}
        <div>
          <label htmlFor="order" className="block text-sm text-text-secondary mb-1.5">
            Display Order
          </label>
          <input
            id="order"
            name="order"
            type="number"
            value={order}
            onChange={(e) => setOrder(parseInt(e.target.value) || 0)}
            className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-text-primary placeholder-text-faint focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Submit */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="bg-accent text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Add team member
          </button>
          <a
            href="/admin/team"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
