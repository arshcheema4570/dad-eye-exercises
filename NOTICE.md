# Notices — third-party components

Voice: the device's built-in speech (speechSynthesis, hi-IN) reads the
Hindi announcements. No third-party text-to-speech components are bundled:
the former offline voice model, its runtime and its phoneme data have been
removed, so there is nothing under `vendor/` or `models/` and no voice
download at runtime.
