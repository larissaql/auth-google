import renderDetails from './components/Details'
import './styles.css'

const app = <HTMLDivElement>document.getElementById('app')
const token = localStorage.getItem('token')

if(token){
    renderDetails(app)
} else {
  location.href = 'details.html'
}
