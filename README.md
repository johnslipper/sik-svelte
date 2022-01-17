# Songs I know

![Songs I know guitar logo](https://github.com/johnslipper/sik-svelte/blob/main/public/icons/icon-180x180.png?raw=true)

Created by [@johnslipper](https://twitter.com/johnslipper) to get inspiration when holding a guitar and nothing comes to mind.

Start storing your own songs on the live app at [sik.app](https://sik.app).

## Features

- Add song chords and lyrics for the songs you know
- Song artwork (via iTunes API)
- Chord search (via uberchord API)
- Chord fretboard visualisation
- Custom chord creation
- Hear the chords you add
- Custom tunings
- Capo adjustment
- Song export
- Remove your song and user data completely when you no longer want to use the app

## Screenshots

![Stored songs list alongside the album artwork](https://github.com/johnslipper/sik-svelte/blob/main/public/screenshots/sik-svelte-app-1.jpg?raw=true)
![Viewing the lyrics of a song](https://github.com/johnslipper/sik-svelte/blob/main/public/screenshots/sik-svelte-app-2.jpg?raw=true)
![Selecting a chord and hearing how it sounds](https://github.com/johnslipper/sik-svelte/blob/main/public/screenshots/sik-svelte-app-3.jpg?raw=true)

## Roadmap

- TypeScript ✅
- Switch from firebase storage to in-browser ✅
- Improve accessibility:
  - Routing ✅
  - Tabs ✅
  - Toasts ✅
  - Modals ✅
  - Dropdown ✅
  - Song editing
- Re-add offline support
- Google Drive import/export
- Lyrics API
- Lyrics font size adjust
- Lyrics auto-scrolling
- Better quality artwork API

## Development

Install the dependencies...

```bash
npm install
```

...then start the dev server

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## TypeScript

To start TypeScript checking and watch files for changes:

```bash
npm run check
```

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can then run the newly built production app:

```bash
npm run preview
```

## Deploying to the web

Currently deployed on Firebase hosting. Any PRs merged into the `main` branch within github will be automatically deployed to production.
