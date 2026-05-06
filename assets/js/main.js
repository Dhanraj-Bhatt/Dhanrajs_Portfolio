/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')
const projectsContainer = document.getElementById('projects')

// Edit this list to change the My Work section on the homepage.
// To reorder projects: move an object up or down in this array.
// To add a new project: copy one object, then update title/subtitle/image/link.
const projectsData = [
    {
        title: 'Fire Safty Training',
        subtitle: 'VR training with Sensors and IoT',
        image: './Project-pages/01_FireSaftyTraining/img/FireSaftyTrainingLogo.png',
        alt: 'Fire Safty Training logo',
        link: './FireSaftyTraining.html',
    },
    {
        title: 'Music Museum Application',
        subtitle: 'Projection & Tablets via UDP',
        image: './Project-pages/02_MusicMuseumApplication/img/MusicMuseumApplicationLogo.png',
        alt: 'Music Museum Application logo',
        link: './MusicMuseumApplication.html',
    },
    {
        title: 'Indian Railways Training',
        subtitle: 'VR training',
        image: './Project-pages/03_IndianRailwaysTraining/img/IndianRailwaysTrainingLogo.png',
        alt: 'Indian Railways Training logo',
        link: './IndianRailwaysTraining.html',
    },
    {
        title: 'AR Interaction',
        subtitle: 'Sensor base interaction',
        image: './Project-pages/05_GSEM_AR_Interaction/img/GSEM_AR_InteractionLogo.png',
        alt: 'AR Interaction logo',
        link: './GSEM_AR_Interaction.html',
    },
    {
        title: 'Step Vision',
        subtitle: 'Sensor base interaction',
        image: './Project-pages/04_IREDA_StepVision_Gandhinagar/img/IREDA_Logo.webp',
        alt: 'IREDA Logo',
        imageClass: 'projects__img--step-vision',
        link: './IREDA-StepVision.html',
    },
    {
        title: 'Hand Gesture Interaction',
        subtitle: 'Sensor base interaction',
        image: './Project-pages/06_Hand_Gesture/img/hand_gestures_logo.webp',
        alt: 'Hand Gesture Interaction logo',
        link: './Hand_Gesture.html',
    },
    {
        title: 'IOT Video Player',
        subtitle: 'IoT base interaction',
        image: './Project-pages/07_IOT_Video_Player/img/Iot_Video_Player_logo.webp',
        alt: 'IOT Video Player logo',
        link: './IOT_Video_Player.html',
    },
    {
        title: 'VR DOJO Demo For Schaeffler',
        subtitle: 'VR Application',
        image: './Project-pages/08_schaeffler/img/schaeffler_logo2.webp',
        alt: 'Schaeffler logo',
        link: './schaeffler.html',
    },
    {
        title: 'Gyanothon',
        subtitle: 'IoT Game',
        image: './Project-pages/09_jainEvent/gyanothon/img/gyanothon_logo21.webp',
        alt: 'Gyanothon logo',
        link: './gyanothon.html',
    },
    {
        title: '2nd Asia Pacific Ministerial Conference on Civil Aviation',
        subtitle: 'PC Application',
        image: './Project-pages/10_CivilAviation2024_Dehli/img/CivilAviation2024_Dehli_logo.webp',
        alt: 'Civil Aviation 2024 logo',
        imageClass: 'projects__img--civil-aviation',
        link: './Civil-Aviation-2024.html',
    },
    {
        title: '3D Book',
        subtitle: 'PC Application',
        image: './Project-pages/11_ADC_Bank_Gandhinagar/img/ADC_Bank_Logo.webp',
        alt: 'ADC Bank Logo',
        link: './ADC-Bank.html',
    },
    {
        title: 'Lakshy Link Up',
        subtitle: 'PC Game',
        image: './Project-pages/09_jainEvent/match_the_following/img/match_the_following_logo2.webp',
        alt: 'Lakshy Link Up logo',
        link: './match-the-following.html',
    },
    {
        title: 'Maze Game',
        subtitle: 'PC Joystick Game',
        image: './Project-pages/09_jainEvent/mazegame/img/maze_logo2.webp',
        alt: 'Maze Game logo',
        link: './mazegame.html',
    },
    {
        title: 'Memory Manthan',
        subtitle: 'PC Game',
        image: './Project-pages/09_jainEvent/memory_manthan/img/memory_manthan_logo2.webp',
        alt: 'Memory Manthan logo',
        link: './memory-manthan.html',
    },
    {
        title: 'Moksh Matrix',
        subtitle: 'PC Game',
        image: './Project-pages/09_jainEvent/moksh-matrix/img/Moksh_Matrix_logo2.webp',
        alt: 'Moksh Matrix logo',
        link: './moksh-matrix.html',
    },
    {
        title: 'Products Showcase for HK BIO Science',
        subtitle: 'PC & VR Application',
        image: './Project-pages/12_HK_BIO_Science/img/HK_BIO_Science_logo.webp',
        alt: 'HK BIO Science logo',
        link: './HK-BIO-Science.html',
    },
]

// Builds the zig-zag timeline cards from the projectsData array.
const renderProjects = () => {
    if (!projectsContainer) return

    const markup = projectsData.map((project, index) => {
        const isCardLeft = index % 2 === 0
        const layoutClass = isCardLeft ? 'projects__timeline-item--card-left' : 'projects__timeline-item--card-right'
        const imageClasses = ['projects__img']

        if (project.imageClass) {
            imageClasses.push(project.imageClass)
        }

        const cardMarkup = `
            <div class="projects__timeline-card-wrap">
                <div class="projects__card">
                    <img src="${project.image}" alt="${project.alt}" class="${imageClasses.join(' ')}" loading="lazy">
                    <div class="projects__modal">
                        <div>
                            <span class="projects__subtitle">${project.subtitle}</span>
                            <h3 class="projects__title">${project.title}</h3>
                            <a href="${project.link}" class="projects__button button button__small">
                                <i class="ri-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `

        const textMarkup = `
            <div class="projects__timeline-text">
                <span class="projects__subtitle">${project.subtitle}</span>
                <h3 class="projects__title">${project.title}</h3>
            </div>
        `

        return `
            <article class="projects__timeline-item ${layoutClass}">
                ${isCardLeft ? cardMarkup : textMarkup}
                <div class="projects__timeline-center" aria-hidden="true">
                    <span class="projects__timeline-line"></span>
                    <span class="projects__timeline-node"></span>
                </div>
                ${isCardLeft ? textMarkup : cardMarkup}
            </article>
        `
    }).join('')

    projectsContainer.innerHTML = markup
}

renderProjects()

// Always open the homepage from the top after refresh.
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
}

window.addEventListener('load', () => {
    window.scrollTo(0, 0)
})

const navigateWithTransition = (url) => {
    if (!url || document.body.classList.contains('page-is-transitioning')) return

    document.body.classList.add('page-is-transitioning')
    window.setTimeout(() => {
        window.location.href = url
    }, 180)
}

// Handles My Work / Skills tab switching.
document.addEventListener('click', (event) => {
    const link = event.target.closest('a')

    if (!link) return
    if (link.hasAttribute('download')) return
    if (link.target && link.target !== '_self') return

    const href = link.getAttribute('href')
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return

    const url = new URL(link.href, window.location.href)
    if (url.origin !== window.location.origin) return

    event.preventDefault()
    navigateWithTransition(url.href)
})

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => {
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t => {
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Saved theme values from localStorage.
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// Default theme behavior:
// - If there is a saved theme in localStorage, it will be applied on load.
// - If you want light theme as default, keep body without "dark-theme" in HTML/CSS.
// - If you want dark theme as default, add the "dark-theme" class by default in the page setup.
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Theme toggle button.
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 500})
sr.reveal(`.profile__profession`, {delay: 600})
sr.reveal(`.profile__social`, {delay: 700})
sr.reveal(`.profile__info-group`, {interval:100, delay: 700})
sr.reveal(`.profile__buttons`, {delay: 800})
sr.reveal(`.filters__content`, {delay: 900})
sr.reveal(`.filters`, {delay: 1000})

/*=============== MAKE PROJECTS CLICKABLE ===============*/
// Makes the full project card clickable, not only the small link icon.
const projectCards = document.querySelectorAll('.projects__card')

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const link = card.querySelector('.projects__button').getAttribute('href')
        navigateWithTransition(link)
    })
})
