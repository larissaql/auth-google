import './styles.css'

const renderDetails = (container: HTMLElement) => {
    const userName = localStorage.getItem('userName')
    const photoProfile = localStorage.getItem('photoProfile')
    const phoneNum = localStorage.getItem('phoneNum')
    const email = localStorage.getItem('email')


    const htmlContent = `

        <div id="header">
        <img src="${photoProfile}">
        <a href="/" id="titulo">Alfa Cred</a>
        
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

        <div id="details">
            <h3>${userName}</h3>
            <img src="${photoProfile}">
            <p>Número: ${phoneNum}</p>
            <p>Email: ${email}</p>
            
        </div>
    `
container.innerHTML = htmlContent

}

export default renderDetails