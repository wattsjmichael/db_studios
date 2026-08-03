import React from 'react';

const devlogs = [
  {
    date: 'Development update 01',
    title: 'Project Redbox enters development',
    excerpt: 'Meet the project, the team, and the ideas guiding the first playable build.',
  },
  {
    date: 'Development update 02',
    title: 'Building the browser demo',
    excerpt: 'A look at how the core loop is being condensed into a fast, accessible web preview.',
  },
  {
    date: 'Development update 03',
    title: 'The road to Steam',
    excerpt: 'What we are polishing now and what players can expect from upcoming updates.',
  },
];

export default function DevlogList() {
  return (
    <div className="row g-4">
      {devlogs.map((post) => (
        <div className="col-md-4" key={post.title}>
          <article className="redbox-card h-100">
            <p className="redbox-kicker mb-2">{post.date}</p>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <span className="redbox-text-link" aria-label={`${post.title} coming soon`}>
              Full devlog coming soon
            </span>
          </article>
        </div>
      ))}
    </div>
  );
}
