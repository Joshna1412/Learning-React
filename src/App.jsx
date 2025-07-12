import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import JobsPortal from './components/JobsPortal'
import JobDetailsCard from './components/jobDetailsCard'

const App = () => {
  return (
    <div className='app-container'>
      <BrowserRouter >
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobsPortal />} />
          <Route path="jobs/:id" element={<JobDetailsCard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App