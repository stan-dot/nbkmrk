
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useAppStateContext } from '../../StateProvider';
import { NewBookmarkForm } from './NewBookmarkForm';

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

type NestedModalProps = {}

export default function AddNewBookmarkModal({ }: NestedModalProps) {

  const [{ searchParams }] = useAppStateContext();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button disabled={searchParams.size !== 0} onClick={handleOpen}>+ Add new bookmark</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Add a new bookmark</h2>
          <NewBookmarkForm />
        </Box>
      </Modal>
    </div>
  );
}


