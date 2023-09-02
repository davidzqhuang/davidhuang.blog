'use client'

import Head from "next/head";
import Data from "./pageData.mdx";

import * as U from "../../../../../components/Utils";
import Link from "next/link";

import Editor from '@monaco-editor/react';

import { useState } from 'react';

function FilenameEscapeComponent() {
  const [inputValue, setInputValue] = useState('example:file?name*.txt');
  const [escapedValue, setEscapedValue] = useState('example$3Afile$3Fname$2A.txt');

  const escapeFilename = (str: string) => {
    const replacements: Record<string, string> = {
      '\\': '$5C',
      '/': '$2F',
      ':': '$3A',
      '*': '$2A',
      '?': '$3F',
      '"': '$22',
      '<': '$3C',
      '>': '$3E',
      '|': '$7C'
    };

    return str
      .replace(/^[.]/, '') // Remove starting dot
      .replace(/[\\/:"*?<>|]/g, char => replacements[char] || char) 
      .toLowerCase(); // Optional: make it lowercase
  };

  const handleEditorChange = (value: string) => {
    setInputValue(value);
    const escaped = escapeFilename(value);
    setEscapedValue(escaped);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(escapedValue);
      alert('Filename copied to clipboard!');
    } catch (err) {
      alert('Failed to copy filename to clipboard');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      <h2>Original:</h2>
      <Editor
        height="200px"
        defaultLanguage="plaintext"
        value={inputValue}
        onChange={handleEditorChange}
      />

      <h2>Filename Safe:</h2>
      <button className="border border-neutral-200 bg-neutral-100" onClick={copyToClipboard}>Click to Copy</button>
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
            <title>Filename Escape</title>
            <div className='flex mb-8'>
                <U.WikiButton />
                <U.HomeButton />
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <FilenameEscapeComponent />
            </div>
        </>
    )
}

export default Page
