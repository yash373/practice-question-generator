import React from 'react'
import Heading from '@/components/Heading'
import Input from '@/components/Input'
import Generated from '@/components/Generated'

const Page = () => {
  return (
    <div className='flex flex-col h-screen space-y-10  justify-center items-center'>
      <Heading/>
      <Input/>
      {/* <Generated/> */}
    </div>
  )
}

export default Page