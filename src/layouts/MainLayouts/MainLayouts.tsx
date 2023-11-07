import React, { ReactNode } from 'react'

interface IMainComponent {
    children: ReactNode
}

function MainLayout({ children }: IMainComponent) {
    return (
        <main id='main-layout' className='my-32 text-center' >{children}</main>

    )
}

export default MainLayout