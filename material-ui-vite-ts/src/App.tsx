import { Button, ButtonGroup, Container, Grid, Typography } from '@mui/material';
import SearchAppBar from './features/search/SearchAppBar';
import FileSystemNavigator from './features/side-panel/FileSystemNavigator';
import { useEffect, useState } from 'react';
import { BookmarksProvider } from './BookmarksProvider';
import NestedModal from './features/settings/NestedModal';
import AddNewModal from './features/add-new/AddNewModal';
import { MainTable } from './MainTable';
import RowContextMenu from './features/RowContextMenu';
import { Bounce, ToastContainer } from 'react-toastify';

function changePathWithoutReload(newPath: string): void {
  window.history.pushState({}, '', newPath);
}

export default function App() {

  const [params, setParams] = useState<URLSearchParams>(new URLSearchParams(window.location.search))
  const [readPath, setReadPath] = useState<string>("")

  console.log('search params: ', params);
  useEffect(() => {
    const path = window.location.pathname;
    console.log('pathname: ', path)
    setReadPath(path)
    changePathWithoutReload(path);
    const urlSearchString = window.location.search;
    const p = new URLSearchParams(urlSearchString);
    console.log('search params: ', p);
    setParams(p);
  }, []);

  return <Container maxWidth="xl">
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchAppBar />
          <div id="pathBar">
            {readPath}
          </div>
          <ButtonGroup>
            <NestedModal />
            <AddNewModal parentId={'test'} />
          </ButtonGroup>
        </Grid>
        <Grid item xs={2}>
          <FileSystemNavigator />
        </Grid>
        <Grid item xs={8}>
          {params === undefined ?

            <>
              <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                Bookmarks data grid
              </Typography>
              <MainTable />
            </>
            :
            <>
              <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                Bookmarks search grid
              </Typography>
              <MainTable />
            </>

          }
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <ToastContainer />
    </BookmarksProvider>
  </Container>
}

