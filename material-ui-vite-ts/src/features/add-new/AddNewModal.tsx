
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useBookmarksContext } from '../../BookmarksProvider';
import { FormControl, FormLabel, Input } from '@mui/material';
import { useAppStateContext } from '../../StateProvider';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

type NestedModalProps = {

}

export default function AddNewModal({ }: NestedModalProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>+ Add new bookmark</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Add a new bookmark</h2>
          {/* <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p> */}

          <NewBookmarkForm />
        </Box>
      </Modal>
    </div>
  );
}

type NewBookmarkFormProps = {
};


function NewBookmarkForm({ }: NewBookmarkFormProps) {
  const [{ path }] = useAppStateContext();
  const { addBookmark } = useBookmarksContext();
  const [url, setUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const pathLast = path.at(-1);

  return <form onSubmit={() => {
    if (pathLast) {
      const parentId = pathLast.object.id;
      const createArg: chrome.bookmarks.BookmarkCreateArg = { parentId, title, url };
      addBookmark(createArg);
    }
  }}>

    <FormControl>
      <FormLabel htmlFor='url'>for url</FormLabel>
      <Input id='url' type='url' value={url} onChange={e => setUrl(e.target.value)} />
    </FormControl>
    <FormControl>
      <FormLabel htmlFor='title'>for title</FormLabel>
      <Input id='title' type='text' value={title} onChange={e => setTitle(e.target.value)} />
    </FormControl>
    <Button type='submit'>Submit</Button>
  </form>;
}

