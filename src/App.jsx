import { Header } from './components/header'
import { Main } from './components/Main'
import './styles/global.scss'

export function App() {
  // throw new Error('Well, algo deu ruim!')
  return (
    <>
      <Header />
      <Main />  
    </>
  )
}