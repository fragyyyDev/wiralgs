'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';

const CustomMarkdown: React.FC<{ content: string }> = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-5" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-2xl font-semibold text-black mb-4" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="text-zinc-700 text-lg leading-relaxed mb-4" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-inside space-y-2 text-zinc-700 mb-4" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal list-inside space-y-2 text-zinc-700 mb-4" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="pl-1" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a
            className="text-primary underline hover:text-primary/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
        strong: ({ node, ...props }) => (
          <strong className="font-semibold text-black" {...props} />
        ),
        em: ({ node, ...props }) => (
          <em className="italic text-zinc-700" {...props} />
        ),
        hr: () => <hr className="my-8 border-zinc-200" />,
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-primary pl-4 italic text-zinc-600" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default CustomMarkdown;
