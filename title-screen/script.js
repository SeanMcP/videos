// Console Docs
console.info('Customize this title screen with search params')
console.table({
    title: 'string – Will render on page two',
    version: 'boolean – Will add a page with the browser and version',
    video: 'boolean – Will display a live video and readjust page'
})

let params = new URLSearchParams(location.search)


// Go through pages
let currentPageIndex = 0

function nextPage() {
    let pages = document.querySelectorAll('.page')
    currentPageIndex = currentPageIndex + 1 > pages.length - 1 ? 0 : currentPageIndex + 1

    pages.forEach((page, i) => {
        if (currentPageIndex === i) {
            page.removeAttribute('hidden')
        } else {
            page.hidden = 'true'
        }
    })
}

document.addEventListener('keydown', e => {
    if (e.code === 'Space') {
        e.preventDefault()
        nextPage()
    }
})

// Create title page
let titlePage = document.getElementById('title')
titlePage.textContent = params.get('title') || 'Set a title via search params'

// Create version page
if (params.get('version') === 'true') {
    let versionPage = document.createElement('section')
    versionPage.id = 'version'
    versionPage.classList.add('page')
    versionPage.hidden = true
    document.querySelector('main').appendChild(versionPage)

    let { userAgent } = navigator
    let browser, version

    if (userAgent.includes('Firefox')) {
        browser = 'Mozilla Firefox'
        version = userAgent.split('Firefox/')[1]
    } else if (userAgent.includes('Edg')) {
        browser = 'Microsoft Edge'
        version = userAgent.split('Edg/')[1]
    } else if (userAgent.includes('Chrome')) {
        browser = 'Google Chrome'
        version = userAgent.split('Chrome/')[1]
            .split(' ')[0] // Trims 'Safari/'
    }

    versionPage.textContent = `${browser} v${version}`
}

// Add video
if (params.get('video') === 'true') {
    document.body.dataset.video = 'true'
    let videoEl = document.createElement('video')
    videoEl.autoplay = true
    document.body.appendChild(videoEl)

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            videoEl.srcObject = stream
        })
        .catch(error => console.error(error))
}