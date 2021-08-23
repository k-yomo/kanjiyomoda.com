import React from 'react';
import Link from 'next/link';

interface Props {
  tags: string[];
}

export default function TagList({ tags }: Props) {
  return (
    <div className="space-x-2">
      {tags.map((tag) => (
        <Link key={tag} href="#">
          <a className="inline-block px-2 py-1 border-[1px] border-primary-500 rounded-lg text-sm">
            {tag}
          </a>
        </Link>
      ))}
    </div>
  );
}
