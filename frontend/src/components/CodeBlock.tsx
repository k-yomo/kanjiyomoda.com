import React, { ComponentType } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

const CodeBlock: ComponentType<any> = ({ children, className, filepath }) => {
  const language = className.replace(/language-/, '');
  return (
    <div>
      {filepath && (
        <div className="py-2 px-[20px] bg-[#2a2734] border-b-[1px] border-gray-600 text-white">
          {filepath}
        </div>
      )}
      <Highlight {...defaultProps} code={children.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className + ' overflow-x-scroll p-5'}
            style={{ ...style }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
