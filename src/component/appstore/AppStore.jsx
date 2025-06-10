import React from 'react'
import playSotre from '../../assets/play_store-25MAnoNl.png'
import appSotre from '../../assets/app_store-aoAyJ2T_.png'
import Gif from '../../assets/mobile_bike-mOS0gbAl.gif'

const AppStore = () => {
    return (
        <>
            <div className='bg-gray-100 dark:bg-gray-800 py-14'>
                <div className='container'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
                        <div className='space-y-6 max-w-xl mx-auto'>
                            <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semiblod dark:text-gray-400 text-gray-700 '>Foody us Avilable on Android and IOS</h1>
                            <div>
                                <a href="#">
                                    <img src={playSotre} alt="play-store" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px] ' />
                                </a>
                                <a href="#">
                                    <img src={appSotre} alt="play-store" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px] ' />
                                </a>
                            </div>
                        </div>
                    <div>
                        <img src={Gif} alt="" className='max-w-[300px] mx-auto'/>
                    </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AppStore