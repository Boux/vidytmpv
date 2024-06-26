const iconSrc = "https://raw.githubusercontent.com/mpv-player/mpv/master/etc/mpv-icon.ico"

function getUrl(url = document.location.href) {
  return `vidytmpv://${url}'`
}

function createButton(url = getUrl(), classname) {
  const buttonEl = document.createElement("a")
  buttonEl.setAttribute("href", url)

  if (classname)
    buttonEl.classList.add(classname)

  buttonEl.innerHTML = `<img src='${iconSrc}'>`
  return buttonEl
}

function tryAddDescriptionButton(attempts = 20, timeoutInterval = 100) {
  const menuEl = document.querySelector("#actions")
  if (!menuEl && attempts > 0) {
    setTimeout(x => { tryAddDescriptionButton(attempts - 1, timeoutInterval) }, timeoutInterval)
    return
  }

  const buttonEl = createButton(getUrl(), "vidytmpv-description-button")

  buttonEl.addEventListener("mouseenter", e => {
    buttonEl.setAttribute("href", getUrl())
  })

  buttonEl.addEventListener("click", e => {
    document.querySelectorAll("video").forEach(v => v.pause())
  })

  menuEl.appendChild(buttonEl)
}

function getVideoHrefForElem(el) {
  return el?.querySelector(".yt-simple-endpoint")?.href
}

function addThumbnailButtons() {
  const thumbnails = document.querySelectorAll("ytd-thumbnail")

  thumbnails.forEach(el => {
    if (el?._vidytmpvButtonEl) return

    const url = getVideoHrefForElem(el)
    if(!url) return

    const buttonEl = createButton(getUrl(url), "vidytmpv-thumbnail-button")

    // refresh button url when hovering it (it can sometimes be the wrong url when the layout of the page changes)
    buttonEl.addEventListener("mouseenter", e => {
      const parentEl = buttonEl.closest("ytd-thumbnail")
      const refreshedUrl = getVideoHrefForElem(parentEl)
      if(!refreshedUrl) return

      buttonEl.setAttribute("href", getUrl(refreshedUrl))
    })

    buttonEl.addEventListener("click", e => {
      e.stopPropagation()
    })

    el._vidytmpvButtonEl = buttonEl
    el.appendChild(buttonEl)
  })

}

window.addEventListener("load", (event) => {
  tryAddDescriptionButton(20, 100)

  setInterval(x => {
    addThumbnailButtons()
  }, 500)
});
