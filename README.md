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

- Improve accessibility:
  - Routing ✅
  - Tabs ✅
  - Toasts
  - Dropdown
  - Modals
  - Song editing
- Lyrics API
- Lyrics font size adjust
- Lyrics auto-scrolling
- Better quality artwork API
- Custom tuning chord audio
- Instrument presets (variable strings)?
- Flexible theming?
- Locally stored songs option over firebase (if demand)?

## Development

Install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`.

## Service worker

When run in production mode a workbox service worker is installed that caches all app assets using a "stale while revalidate" strategy (see `rollup.config.js` `generateSW` function for further information).

## Deploying to the web

Currently deployed on Firebase hosting. Any PRs merged into the `main` branch within github will be automatically deployed to production.
