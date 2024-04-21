import { ButtonGroup, Container, Grid, Typography } from '@mui/material';
import { Bounce, ToastContainer } from 'react-toastify';
import { BookmarksProvider } from './BookmarksProvider';
import { MainTable } from './MainTable';
import { AppStateProvider } from './StateProvider';
import AddNewModal from './features/add-new/AddNewModal';
import SearchAppBar from './features/search/SearchAppBar';
import FileSystemNavigator from './features/side-panel/FileSystemNavigator';

export default function App() {

  return <Container maxWidth="xl">
    <BookmarksProvider>
      <AppStateProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchAppBar />
            <ButtonGroup>
              <AddNewModal parentId={'test'} />
            </ButtonGroup>
          </Grid>
          <Grid item xs={2}>
            <FileSystemNavigator />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
              data
            </Typography>
            <MainTable />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <ToastContainer />
      </AppStateProvider>
    </BookmarksProvider>
  </Container >
}

