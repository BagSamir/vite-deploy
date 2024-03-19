import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './state/reducer'
import { HomePage, Header } from './pages'
import './app/global.module.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/blog/*' element={<HomePage />} />
        <Route path='*' element={<h1>Not Found Page</h1>} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
