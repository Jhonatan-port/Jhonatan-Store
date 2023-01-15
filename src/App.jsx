import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './Layout/Container'
import Navbar from './Layout/Navbar'
import Home from './Pages/Home'

function App() {

    return (
        <Router>
            <Navbar />
            <Container>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                </Routes>
            </Container>
        </Router>
    )
}

export default App
