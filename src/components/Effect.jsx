import React, {useEffect} from 'react'

const Effect = () => {

   useEffect(() => {
      console.log('ComponentDitMonth');
      return () => {
         console.log('ComponentWillUnmount');
      }
   },[])

  return (
     <div>
        <p>Some text</p>
     </div>
  )
}

export default Effect