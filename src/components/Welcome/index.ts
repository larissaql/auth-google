import './styles.css'

const renderWelcomePanel = (container: HTMLElement) => {
    const userName = localStorage.getItem('userName')
    const photoProfile = localStorage.getItem('photoProfile')

    const date = new Date()
    const day = String(date.getDate())
    const month = String(date.getMonth() + 1)
    const year = date.getFullYear()
    const current = date.getHours() + ':' + date.getMinutes()

    const htmlContent = `

        <div id="header">
        <img src="${photoProfile}">
        <a href="/" id="titulo">BMS</a>
        
        <ul id="menu">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="details.html">Detalhes</a>
            </li>
            <li>
                <a href="logout.html">Sair</a>
            </li>
        </ul>
        </div>

        <div id="welcome">
            <h1>Olá, ${userName}!</h1>
            <h2>${day}/${month}/${year} - ${current}</h2>
           
        </div>
    `
container.innerHTML = htmlContent

}

export default renderWelcomePanel