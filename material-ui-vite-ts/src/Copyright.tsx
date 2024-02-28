import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        NBKMRK by stan-dot
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
