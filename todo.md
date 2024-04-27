

# MVP features = all features of the nromal version

- [x] add tests https://vitest.dev/guide/

- [x] alerts
- [ ] change the path as the user clicks through IDs https://medium.com/swlh/lets-code-a-client-side-router-for-your-no-framework-spa-19da93105e10

- [x] all locally, with a mock object loaded from a data file - not that good
- [x] imperatively change state of the path https://chat.openai.com/c/e1039576-0fdd-47f1-914a-3f26d199253a
- [x] read in the bookmarks here for reading the local bookmarks page https://chat.openai.com/c/97a64375-10c0-4310-8b2d-bf1f1e1558ff
- [x] search results table
- [x] bug - when in search mode should reset the url prior to creating new stuff. in chrome it's just disabled
- [x] update path on click - just get the path from all that before and read it in - ask chat for the best data structure - nah, just hard code it. if speed is a factor, then catch it from the users
- [x] join context menus into one or make it otherwise sensible
- [x] update the display when onclick the main one
- [ ] create a node

- [ ] delete a node with context menu
- [ ] use optimistic updates
- [ ] corner menu 
  - [ ] exports

## bugs
- [ ] on double click a folder navigation changed
- [ ] add new node error

- [ ] open based on title - also need to add ID into the path, like in the original

## cut and paste
- [ ] context menu features

- [ ] clipboard facade
  - [ ] cut to clipboard - with json serialize
  - [ ] drag and drop contents
  - [ ] copy bookmark to Uri - just using json

## more features

- [ ] remove empty children
- [ ] filter
- [ ] path
- [ ] settings menu - another dialog with saved cookies
- [ ] remove context tracing links
https://gitlab.com/ClearURLs/rules/-/raw/master/data.min.json
https://github.com/ClearURLs/Addon

## not needed
- [ ] https://www.willtaylor.blog/client-side-routing-in-vanilla-js/
- [ ] add a 'useSearch' hook that just returns the necessary nodecs - not needed
- [ ] make some properties async
