Custom browser extension to play youtube videos directly in MPV

# Setup

This is currently Linux only, unless you can figure out the way to execute a script through a custom URL scheme on other OSes

- cd to the repo in the terminal
- make sure the scripts are executable `chmod +x ./scripts/*`
- install the custom url scheme handler file `cp ./scripts/vidytmpv-handler.desktop ~/.local/share/applications/`
- install the mpv opener script to somewhere in your path `cp ./scripts/vidytmpv-scheme-open ~/.local/bin/`
- add this line under `[Added Associations]`: `x-scheme-handler/vidytmpv=vidytmpv-handler.desktop`
- manually install the extension (tested on brave, you may need to enable developer mode)
