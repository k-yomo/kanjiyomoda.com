import React from 'react';
import Image from 'next/image';
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react';
import SEOMeta from '@src/components/SEOMeta';
import TableOfContents from '@src/components/TableOfContents';
import BreadCrumbs from '@src/components/BreadCrumbs';
import CodeBlock from '@src/components/CodeBlock';

/* eslint-disable react/display-name */
const components: MDXProviderComponentsProp = {
  h2: (props) => (
    <h2
      className="mt-10 mb-4 py-2 border-b-2 border-black dark:border-white text-2xl font-bold"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-4 pl-2 border-l-4 border-black dark:border-white text-xl font-bold"
      {...props}
    />
  ),
  h4: (props) => <h4 className="mt-4 mb-2 text-lg font-bold" {...props} />,
  // ul: (props) => <List styleTyle="disc" {...props} />,
  // ol: (props) => <List as="ol" styleTyle="decimal" {...props} />,
  // li: (props) => <ListItem {...props} />,
  // hr: (props) => <Divider my={8} {...props} />,
  img: (props) => <img {...props} />,
  p: (props) => <p className="my-5" {...props} />,
  strong: (props) => <span className="font-bold" {...props} />,
  blockquote: (props) => (
    <blockquote className="pl-4 border-l-4 border-gray-200" {...props} />
  ),
  code: CodeBlock,
  inlineCode: (props) => (
    <code className="p-1 bg-gray-100 dark:bg-gray-800" {...props} />
  ),
};

/* eslint-disable react/display-name */

interface Props {
  meta: {
    title: string;
    description: string;
    topImg: { src: string };
    tags?: string[];
  };
  children: JSX.Element[];
}

const withTOC = (children: JSX.Element[]) => {
  const headings: string[] = children
    .filter((child) => child.props && child.props.originalType === 'h2')
    .map((h2) => h2.props.children);
  let index = 0;
  children = React.Children.map(children, (child) => {
    if (child.props && child.props.originalType === 'h2') {
      const id = index.toString();
      index++;
      return React.cloneElement(child, { id }, child.props.children);
    }
    return React.cloneElement(child);
  });
  const firstH2 = children.findIndex((tag) => tag.props.originalType === 'h2');
  return [
    ...children.slice(0, firstH2),
    <div key="toc" className="my-10">
      <TableOfContents headings={headings} />
    </div>,
    ...children.slice(firstH2),
  ];
};

export default function PostLayout({ meta, children }: Props) {
  return (
    <article className="max-w-[60rem] mx-auto mb-8 px-4 leading-7 break-words">
      <SEOMeta
        title={meta.title}
        description={meta.description}
        img={{ srcPath: meta.topImg.src }}
      />
      <div className="my-4">
        <BreadCrumbs title={meta.title} />
      </div>
      <img
        src={meta.topImg.src}
        alt={meta.title}
        className="w-full rounded-lg"
      />
      <h1 className="text-4xl mt-8 sm:mt-12 mb-4">{meta.title}</h1>
      {/*{meta.tags && (*/}
      {/*  <div className="my-2 space-y-2">*/}
      {/*    <h3 className="inline-block font-bold border-b-[1px] border-black">*/}
      {/*      タグ一覧*/}
      {/*    </h3>*/}
      {/*    <TagList tags={meta.tags}/>*/}
      {/*  </div>*/}
      {/*)}*/}
      <MDXProvider components={components}>{withTOC(children)}</MDXProvider>
    </article>
  );
}
