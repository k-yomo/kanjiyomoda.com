import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/solid';

interface Props {
  headings: string[];
}

export default function TableOfContents({ headings }: Props) {
  const listItems = headings.map((heading, i) => (
    <li key={heading}>
      <Link href={`#${i}`}>
        <a className="flex items-center space-x-2">
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          <span className="inline-block text-text-primary dark:text-text-primary-dark">
            {heading}
          </span>
        </a>
      </Link>
    </li>
  ));
  return (
    <div className="py-4 space-y-2">
      <div className="font-bold">- 目次</div>
      <ul className="space-y-2">{listItems}</ul>
    </div>
  );
}
