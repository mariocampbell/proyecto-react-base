import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './03-pages/Home.jsx'
import ButtonMain from './00-atoms/Button--main.jsx'

const App = () => {
    return (
        <Switch >
            <Route exact path='/' component={ Home } />
            <Route exact path='/about' render= {() => (
                    <div className='container mx-auto pt-32 pl-24' >
                        <h1 className='font-light uppercase text-2xl' >About Page</h1>
                        <p className='mb-3 text-gray-600' >Página About de muestra</p>
                        <ButtonMain text='Home' />
                    </div>
                )}
                />
        </Switch>
    )
}

export default App