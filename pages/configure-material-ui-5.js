import Prism from 'prismjs';
import { useEffect } from 'react';
import { Container } from '@mui/material';
import CodeSnippet from '../components/CodeSnippet';

export default function ConfigureMaterial() {
  const codigo = `
  const foo = "bar";
  const bar = 'foo';
  `;

  return (
    <>
      <h1>Testes com highlighter</h1>
      <CodeSnippet code={codigo} />
    </>
  );
}
