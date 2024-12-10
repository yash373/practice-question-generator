"use client"

import React from 'react'
import { useState } from 'react'

const Input = () => {
    const [input, SetInput] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetInput(e.target.value)
    }

    return (
        <div>
            <input className='border-2 dark:text-slate-900' onChange={handleChange} />
        </div>
    )
}

export default Input