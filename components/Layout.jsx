import { Container } from '@mui/material';
import { useEffect } from 'react';
import BlogHeader from './BlogHeader';

export default function Layout({ children }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Container maxWidth="md">
      <BlogHeader />
      {children}
    </Container>
  );
}
