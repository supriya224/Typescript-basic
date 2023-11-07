import React, { ReactNode } from 'react'

interface IMainComponent {
    children: ReactNode
}

function MainLayout({ children }: IMainComponent) {
    return (
        <main id='main-layout' className='my-10 text-center' >{children}</main>

    )
}

export default MainLayout