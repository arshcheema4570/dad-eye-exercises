# Notices — third-party components

Voice: offline Kokoro-82M Hindi text-to-speech, voice `hf_alpha` (female).
All TTS files are vendored under `vendor/` and `models/` and load from the
same origin — no network fetch to Hugging Face, jsDelivr, or any other host
at runtime. The device's native speech is the fallback if Kokoro fails.

| Component | License | Source |
|---|---|---|
| Kokoro-82M model weights, voice `.bin` files, tokenizer/config (`models/Kokoro-82M-v1.0-ONNX/`) | Apache-2.0 | `onnx-community/Kokoro-82M-v1.0-ONNX` (hexgrad/Kokoro-82M) |
| kokoro-js (patched) + Transformers.js 3.5.1, bundled in `vendor/kokoro/kokoro-hindi.web.js` | Apache-2.0 | hexgrad/kokoro, @huggingface/transformers |
| onnxruntime-web (bundled JS; `vendor/ort/ort-wasm-simd-threaded.jsep.wasm`) | MIT | Microsoft / ONNX Runtime |
| eSpeak-NG (`vendor/espeak-ng/espeak-ng.js` + `espeak-ng.wasm`) | GPL-3.0-or-later | `espeak-ng@1.0.2`, used as-is |

eSpeak-NG GPL-3.0: the full license text ships as
`vendor/espeak-ng/LICENSE-espeak-ng`. Corresponding source:
<https://github.com/espeak-ng/espeak-ng> and the JS wrapper build
<https://github.com/ianmarmour/espeak-ng.js>.
