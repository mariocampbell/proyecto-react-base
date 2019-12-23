import React from 'react'
import ButtonMain from '../00-atoms/Button--main.jsx'

const Home = (props) => {
    return (
        <main className='container mx-auto pt-32 pl-24'>
            <h1 className='font-light uppercase text-2xl' >Webpack <span className='text-sm' >and</span> React</h1>
            <p className='mb-3 text-gray-600' >Proyecto creado con <strong>Webpack</strong>, <strong>React.js</strong> y <strong>TailwindCSS</strong></p>
            <ButtonMain />
            <ButtonMain to='/about' text='About' />
        </main>
    )
}

export default Home
