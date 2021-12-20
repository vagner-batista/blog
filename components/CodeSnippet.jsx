import { Container } from '@mui/material';
import Prism from 'prismjs';

export default function CodeSnippet({ code }) {
  return (
    <Container maxWidth="md">
      <pre>
        <code class="language-js">
          <div
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(
                code,
                Prism.languages.javascript,
                'javascript'
              ),
            }}
          ></div>
        </code>
      </pre>
    </Container>
  );
}
