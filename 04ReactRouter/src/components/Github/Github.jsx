import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
    // const [data, setData] = useState([])
    //     useEffect(()=> {
    //         fetch('https://api.github.com/users/Sougata-jana')
    //             .then((response)=> response.json())
    //             .then((data) =>{
    //                 console.log(data);
    //                 setData(data);
                    
    //             })
    //     }, [])

  return (
    <div className='bg-gray-700 text-white text-2xl p-4'>github Followers:{data.followers} </div>
  )
}

export default Github

export const githubInfoLoder = async () =>{
  const response  = await fetch("https://api.github.com/users/Sougata-jana")
  return response.json();
}

