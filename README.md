# schiffbruch-js

Javascript port of my C++ game "Schiffbruch" from 1999. 

Main goal is to make it runnable in web browsers without affecting the original old-school style and game-play. This will not be a "Schiffbruch 2"!

You can play the latest experimental version <a href="https://dplate.github.io/schiffbruch-js/">here</a> (please note that a saved game will probably not work with future versions of the game).

## Tasks

- [X] Migrate C++ code to syntax-correct JS code
- [X] Convert BMP files to PNG
- [X] Convert WAV files to MP3
- [X] Convert image handling from DirectDraw surfaces to JS canvases
- [X] Basic integration of async input events instead of DirectInput
- [X] Make game playable
- [X] Use CSS for special effects (fade-in/out)
- [X] Migrate DirectSound to JS AudioContext
- [X] Save game into LocalStorage instead of file system
- [X] Add start screen
- [X] Publish first version to Github
- [ ] Refactor code (split single-file code and translate to English)
- [ ] Support screens larger than 800x600, but keep pixel perfect images
- [ ] Make game touch device compatible
- [ ] Support screens smaller than 800x600 (make menus responsive)
