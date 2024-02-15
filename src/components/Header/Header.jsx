import React from 'react'
import UpperHeader from './UpperHeader'
import Menu from './Menu'

export default function Header() {
    return (
        <div className=' sticky top-0 left-0 z-10'>
            <UpperHeader />
            <Menu />
        </div>
    )
}
