import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import UploadContent from '../components/UploadContent'
import Content from '../components/Content'
import About from '../pages/About'

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/upload' element={<UploadContent />} />
            <Route path='/viewContent' element={<Content />} />
            <Route path='/about' element={<About />} />
        </Routes>
    )
}

export default AppRoutes