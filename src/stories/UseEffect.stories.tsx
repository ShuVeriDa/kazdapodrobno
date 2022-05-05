import React, {useEffect, useState} from "react";

export default {
   title: 'UseEffect'
}

export const SimpleExample = () => {
   const [counter, setCounter] = useState(0)
   const [fake, setFake] = useState(0)

   console.log('SimpleExample')

   useEffect(() => {
      console.log('useEffect every render')
      document.title = counter.toString()
   })

   useEffect(() => {
      console.log('useEffect only first render (componentDidMount)')
      document.title = counter.toString()
   }, [])

   useEffect(() => {
      console.log('useEffect first render and every counter change')
      document.title = counter.toString()
   }, [counter])

   return <>
      Hello, Counter: {counter}; Fake: {fake}
      <button onClick={() => setFake(fake + 1)}>fake+</button>
      <button onClick={() => setCounter(counter + 1)}>counter+</button>
   </>
}