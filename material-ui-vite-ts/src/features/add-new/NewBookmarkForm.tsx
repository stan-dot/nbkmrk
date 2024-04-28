import Button from '@mui/material/Button';
import { useState } from 'react';
import { useBookmarksContext } from '../../BookmarksProvider';
import { FormControl, FormLabel, Input } from '@mui/material';
import { useAppStateContext } from '../../StateProvider';

type NewBookmarkFormProps = {};
export function NewBookmarkForm({ }: NewBookmarkFormProps) {
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
