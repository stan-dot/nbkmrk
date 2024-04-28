import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

type GenericDialogProps = {
  buttonText: string,
  title: string;
  question?: string,
  callback: () => void,
  submitButtonLabel: string
}

export default function GenericDialog({ buttonText, title, question, callback, submitButtonLabel }: GenericDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAccept = () => {
    callback();
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false)

  }

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        {buttonText}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          {title}
        </DialogTitle>
        {question ??
          <DialogContent>
            <DialogContentText>
              {question}
            </DialogContentText>
          </DialogContent>
        }
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAccept}>{submitButtonLabel}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
