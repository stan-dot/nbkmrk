import { Box, Container, Stack, Typography } from '@mui/material';
import { Copyright } from './Copyright';
import ProTip from './ProTip';
import FileSystemNavigator from './components/FileSystemNavigator';
import SearchAppBar from './components/Search';

export default function App() {
  return <Container maxWidth="sm">
    <SearchAppBar />
    <Stack direction='row'>

      <FileSystemNavigator />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Vite.js example in TypeScript
        </Typography>
      </Box>
    </Stack>
    <footer>
      <ProTip />
      <Copyright />
    </footer>
  </Container>
}
