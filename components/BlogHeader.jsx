import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useRouter } from 'next/router';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function BlogHeader({ pageName }) {
  const router = useRouter();
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>Blog - Vagner Batista - {router.pathname}</Typography>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
}
