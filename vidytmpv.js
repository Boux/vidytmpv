function getUrl() {
  return `bouxyt://${document.location.href}'`
}

function tryAddButton(attempts = 20, timeoutInterval = 100) {
  const menuEl = document.querySelector("#actions")
  if (!menuEl && attempts > 0) {
    setTimeout(x => { tryAddButton(attempts - 1, timeoutInterval) }, timeoutInterval)
    return
  }

  const iconUrl = "https://raw.githubusercontent.com/mpv-player/mpv/master/etc/mpv-icon.ico"

  const buttonEl = document.createElement("a")
  buttonEl.setAttribute("href", getUrl())
  buttonEl.setAttribute("style", "margin-left: 8px; cursor: pointer; user-select: none;")

  buttonEl.innerHTML = `<img src='${iconUrl}' style='height: 40px;'>`

  buttonEl.addEventListener("mouseover", e => {
    buttonEl.setAttribute("href", getUrl())
  })

  buttonEl.addEventListener("click", e => {
    document.querySelectorAll("video").forEach(v => v.pause())
  })

  menuEl.appendChild(buttonEl)
}

window.addEventListener("load", (event) => {
  tryAddButton(20, 100)
});
