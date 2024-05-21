import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import './index.css';

const App = () =>  {
  
  return (
    <div className='flex flex-col items-center justify-start w-screen h-screen'>
      <Header text='Groceries List' />
      <Content person='Tom' />
      <Footer/>
    </div>
  )
}

export default App
