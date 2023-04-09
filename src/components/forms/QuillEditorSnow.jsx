import React, { useState } from 'react';
import dynamic from "next/dynamic";
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css';
const QuillEditorSnow = () => {
    const [value, setValue] = useState('');
    return (
        <ReactQuill theme="snow" value={value} onChange={setValue} />
    );
}

export default  QuillEditorSnow;
