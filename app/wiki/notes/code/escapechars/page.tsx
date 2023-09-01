'use client'
import Head from "next/head";
import Data from "./pageData.mdx";

import * as U from "../../../../../components/Utils";
import Link from "next/link";

import Editor from '@monaco-editor/react';

import { useState } from 'react';

function StringEscapeComponent() {
  const [inputValue, setInputValue] = useState('print("hello world")');
  const [escapedValue, setEscapedValue] = useState('print(&quot;hello world&quot;)');

  const escapeString = (str) => {
    const replacements = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&apos;',
    };

    return str.replace(/[&<>"']/g, char => replacements[char]);
  };

  const handleEditorChange = (value, event) => {
    setInputValue(value);
    // Escape the string
    const escaped = escapeString(value);
    setEscapedValue(escaped);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      <h2>Before:</h2>
      <Editor
        height="200px"
        defaultLanguage="plaintext"
        value={inputValue}
        onChange={handleEditorChange}
      />

      <h2>After:</h2>
      <Editor
        height="200px"
        defaultLanguage="plaintext"
        value={escapedValue}
      />
    </div>
  );
}


const Page = () => {
    return (
        <>
            <title>Escape characters</title>
            <div className='flex mb-8'>
                <U.WikiButton />
                <U.HomeButton />
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <StringEscapeComponent />
            </div>
        </>
    )
}

export default Page