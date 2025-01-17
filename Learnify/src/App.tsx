import React from 'react';
import Navbar from './components/navbar';
import Aside from './components/aside';
import Side from './components/aside2';

const App: React.FC = () => {
    return (
        <div className='bg-white w-screen h-screen p-5 flex justify-center gap-4 overflow-x-hidden' >
            <Aside />
            <Navbar />
            <Side />
        </div>
    )
}

export default App;