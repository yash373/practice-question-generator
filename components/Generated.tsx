import React from 'react'
import { getGroqChatCompletion } from '@/scripts/generateText'


interface GeneratedProps {
    topic: string,
    solved: string
}

const Generated = async({topic, solved}: GeneratedProps) => {
    const generated = await getGroqChatCompletion()

    return (
        <div>{generated}</div>
    )
}

export default Generated