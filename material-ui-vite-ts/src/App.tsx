import { ButtonGroup, Container, Grid, Typography } from '@mui/material';
import { Bounce, ToastContainer } from 'react-toastify';
import { BookmarksProvider } from './BookmarksProvider';
import { MainTable } from './MainTable';
import { AppStateProvider } from './StateProvider';
import AddNewBookmarkModal from './features/add-new/AddNewBookmarkModal';
import SearchAppBar from './features/search/SearchAppBar';
import FileSystemNavigator from './features/side-panel/FileSystemNavigator';
import 'react-toastify/dist/ReactToastify.css';
import { ClipboardProvider } from './features/clipboard/ClipboardProvider';


export default function App() {

  return <Container maxWidth="xl">
    <AppStateProvider>
      <BookmarksProvider>
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
        <ClipboardProvider>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SearchAppBar />
              <ButtonGroup>
                <AddNewBookmarkModal />
              </ButtonGroup>
            </Grid>
            <Grid item xs={2}>
              <FileSystemNavigator />
            </Grid>
            <Grid item xs={8}>
              {/* <Typography variant="h4" component="h1" sx={{ mb: 2 }}> </Typography> */}
              <MainTable />
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </ClipboardProvider>
        <ToastContainer />
      </BookmarksProvider>
    </AppStateProvider>
  </Container >
}

