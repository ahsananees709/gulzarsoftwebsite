import React from 'react'
import Child5 from './ui/child5'
import Child1 from './ui/Child1'
import Child2 from './ui/Child2'
import Child3 from './ui/Child3'
import Child4 from './ui/Child4'
import Carousel from './ui/carousel'

export default function Page() {
  return (
    <div className='flex flex-col'>
      {/* <Carousel/> */}
      <Child5 />
      <Child1 />
      <Child2 />
      <Child3 />
      <Child4/>
      </div>
  )
}
