## About vidytmpv

Custom browser extension to play youtube videos directly in MPV

## Setup

This is currently Linux only, unless you can figure out the way to execute a script through a custom URL scheme on other OSes

Dependencies: `pipe-viewer`, `mpv`, `zsh`

- cd to the repo in the terminal
- make sure the scripts are executable `chmod +x ./scripts/*`
- install the custom url scheme handler file `cp ./scripts/vidytmpv-handler.desktop ~/.local/share/applications/`
- install the mpv opener script to somewhere in your path `cp ./scripts/vidytmpv-scheme-open ~/.local/bin/`, this script uses zsh, but you can change it to bash if you don't have zsh installed
- add this line under `[Added Associations]`: `x-scheme-handler/vidytmpv=vidytmpv-handler.desktop` in `~/.config/mimeapps.list` or your distro's equivalent
- manually install the extension (tested on brave, you may need to enable developer mode)

Here it is in action, adds buttons on every thumbnail, and in the video description.

https://github.com/Boux/vidytmpv/assets/2771413/5b9f444b-b004-4453-acda-cc5569ac8750

