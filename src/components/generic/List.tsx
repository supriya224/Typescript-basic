import React from 'react'

// type ListProps = {
//     items: string[] | number[]
//     onClick: (value: string | number) => void  // value astring type arugment lega
// }
type ListProps<T> = { // t is generic type props
    items: T[]
    onClick: (value: T) => void  // value astring type arugment lega
}
export const List = <T extends {id:number}>({ items, onClick }: ListProps<T>) => {
    return (
        <div className='flex'>
            <h2>List item is here</h2>
            {items.map((item) => {

                return (
                    <div className='bg-yellow-400 w-[20rem] m-9 p-9' key={item.id} onClick={() => onClick(item)}>{item.id}</div>
                )
            })}
        </div>
    )
}
