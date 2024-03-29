
# MVP features
- [ ] MVP = all features of the nromal version

- [x] add tests https://vitest.dev/guide/
- [ ] change the path as the user clicks through IDs https://medium.com/swlh/lets-code-a-client-side-router-for-your-no-framework-spa-19da93105e10

- [ ] https://www.willtaylor.blog/client-side-routing-in-vanilla-js/
- [ ] add a 'useSearch' hook that just returns the necessary nodes
- [ ] search results table
- [ ] create a node
- [ ] imperatively change state of the path https://chat.openai.com/c/e1039576-0fdd-47f1-914a-3f26d199253a
`
function changePathWithoutReload(newPath) {
  window.history.pushState({}, '', newPath);
}

// Call this function with the new path
changePathWithoutReload('/new-path');
`
- [ ] delete a node
- [ ] use optimistic updates
- [ ] all locally, with a mock object loaded from a data file
- [ ] alerts
- [ ] corner menu 
  - [ ] exports

- [ ] make some properties async

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


