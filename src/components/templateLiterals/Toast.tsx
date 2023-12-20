import React from 'react'

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps={
    position: | Exclude<`${HorizontalPosition}-${VerticalPosition}` ,'center-center'> | 'center'
    // position:`${HorizontalPosition}-${VerticalPosition}`
}
export const Toast = ({ position }:ToastProps) => {
    return (
        <div>Toast notification -{position}</div>
    )
}
