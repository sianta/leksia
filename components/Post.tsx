import React from 'react';
import ReactMarkdown from 'react-markdown';

export function PostBody({ content }: { content: string }) {
    return (
        <ReactMarkdown>
            {content}
        </ReactMarkdown>

    )
}
