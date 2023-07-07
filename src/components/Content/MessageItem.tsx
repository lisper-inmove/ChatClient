import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from '../../css/Message.module.css';
import { randomColor } from '../../utils/common';

import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import 'github-markdown-css/github-markdown.css'
import { CodeProps } from "react-markdown/lib/ast-to-react";
import CopyBtn from './CopyBtn'

interface MessageProps {
  content: string;
  sender: string;
  index: number;
}

const MessageItem: React.FC<MessageProps> = ({ sender, content, index }) => {

  const avatarColor = randomColor(sender);
  const avatarLetter = sender.charAt(0);
  
  const shareStyle = {
    borderTopLeftRadius: '30px',
  };

  const evenMessage = {
    ...shareStyle,
    backgroundColor: '#333333',
  };

  const oddMessage = {
    ...shareStyle,
    backgroundColor: '#2f332a',
  };

  const avatarStyle = {
    backgroundColor: avatarColor,
    marginTop: '-20px',
    marginLeft: '5px',
  };

  const contentStyle = {

  };

  return (
    <div className={styles.messageContainer}
      style={index % 2 === 0 ? evenMessage : oddMessage}
    >
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}
          style={ avatarStyle }
        >
          {avatarLetter.toUpperCase()}
        </div>
      </div>
      <div className={ styles.messageContent }
        style={ contentStyle }>
        <div className={ `${styles.markdownBody} preview markdown-body` }>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className={styles.reactMarkDown}
            components={{
              pre({ node, ...props }) { return <pre {...props} /> },
              code({ node, inline, className, children, style, ...props }: CodeProps) {
                const match = /language-(\w+)/.exec(className || '')

                return !inline && match ? (
                  <CopyBtn codeText={String(children)}>
                    <SyntaxHighlighter
                      style={prism}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  </CopyBtn>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {content}
        </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
