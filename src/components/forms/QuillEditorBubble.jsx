import React, { useState } from 'react';
import dynamic from "next/dynamic";
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.bubble.css';

const QuillEditorBubble = () => {
    const [value, setValue] = useState('');
    return (
        <ReactQuill theme="bubble" value={value} onChange={setValue} />
    );
}

export default QuillEditorBubble;
