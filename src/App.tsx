import React from 'react'

import { Route, Routes } from 'react-router-dom';
import LoginPage from "./router/LoginPage";
import HomePage from "./router/HomePage";


function App() {

    return (
        // <Provider store={store}>
            <div className="App">
                <Routes>
                    <Route path={'/'} element={<LoginPage/>}/>
                    <Route path={'home'} element={<HomePage/>}/>
                </Routes>
            </div>
        // </Provider>
    )
}

export default App
