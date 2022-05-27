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

export const SetIntervalExample = () => {
   const [counter, setCounter] = useState(0)

   console.log('SetIntervalExample')

   useEffect(() => {
      const interval = setInterval(() => {
         setCounter((state: number) => state + 1)
      }, 1000)

      return () => {
         clearInterval(interval)
      }
   }, [])



   return <>
      Hello, Counter: {counter}
   </>
}

export const ResetEffectExample = () => {
   const [counter, setCounter] = useState(1)

   console.log('Component rendered: ' + counter)

   useEffect(() => {
      console.log("Effect occurred: " + counter)

      return () => {
         console.log('RESET EFFECT: ' + counter)
      }
   }, [counter])

   const increase = () => setCounter(counter + 1)

   return <>
      Hello, Counter: {counter}
      <button onClick={increase }>+</button>
   </>
}


export const KeysTrackerExample = () => {
   const [text, setText] = useState("")

   console.log('Component rendered with: ' + text)

   useEffect(() => {
      const handler = (e: KeyboardEvent) => {
         console.log(e.key)
         setText(state => state + e.key)
      }

     window.addEventListener('keypress', handler)
      return () => {
        window.removeEventListener('keypress', handler)
      }

   }, [])
   return <>
      Typed text: {text}
   </>
}

export const setTimeoutExample = () => {
   const [text, setText] = useState("")

   console.log('Component rendered with: ' + text)

   useEffect(() => {
      const timeout = setTimeout(() => {
         console.log('TIMEOUT EXPIRED')
         setText('3 seconds passed')
      }, 3000)
      return () => {
      clearInterval(timeout)
      }

   }, [text])

   return <>
      Typed text: {text}
   </>
}

