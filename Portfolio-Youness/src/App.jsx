import Header from './Components/1-Header/Header'
import Hero from './Components/2-Hero/Hero'
import Main from './Components/3-Main/Main'
import Contact from './Components/4-Contact/Contact'
import Footer from './Components/5-Footer/Footer'

function App() {

  return (
    <div className='containner'>
   <Header/>
   <div className='divider'/>
     <Hero/>
   <div className='divider'/>
    <Main/>
   <div className='divider'/>
    <Contact/>
   <div className='divider'/>
   <Footer/>
    </div>
  )
}

export default App
 