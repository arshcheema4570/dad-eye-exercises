# Dad’s Eye Comfort Routine

A gentle, timed eye-comfort routine PWA for personal and family use. It guides the user through seven short activities with rest breaks.

**Try it:** [Open Eye Comfort](https://arshcheema4570.github.io/dad-eye-exercises/)

## Features

- Seven guided activities with Punjabi and English labels and instructions.
- Exercise timer, rest intervals, start/pause, previous/next, reset, and voice controls.
- Offline Hindi voice (Kokoro-82M, voice `hf_alpha`) that works without internet after the first use, with the device's built-in speech as fallback.
- Installable PWA with an offline app shell and embedded illustrations.
- No account required; voice is the offline Kokoro Hindi voice by default, falling back to the device's built-in speech if Kokoro cannot load.

## Use and install

Open the deployed link in a modern browser. On a supported phone, use **Install app** or **Add to Home Screen** to install it. After the first successful visit, the app shell is available offline. The Hindi voice downloads ~137 MB of model files on first use (in the background, after starting an exercise or turning Voice on) and then works offline; it needs a modern browser with WebAssembly and roughly 1 GB of free tab memory while speaking.

For local testing, serve the repository root over HTTP, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Medical note

This is a general comfort routine, not medical treatment. Eye exercises do not correct near-sightedness and do not replace prescribed glasses, contact lenses, or an eye examination. Stop if there is pain, dizziness, flashing lights, new floaters, double vision, or a sudden change in vision, and seek appropriate medical care.

## License

The HTML, CSS, and JavaScript code is licensed under the [MIT License](LICENSE). The father-avatar illustrations and reference family photograph are personal visual assets and are not covered by that license. Do not reuse them without written permission from Arsh Cheema and the person represented.
