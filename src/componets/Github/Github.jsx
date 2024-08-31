import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData()

  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch('https://api.github.com/users/Gaurav-Kanse')
  //     .then(response => response.json())
  //     .then(data => {
  //       setData(data);
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
      Github Followers: {data.followers || 'Loading...'}
      {/* <img  src={data.avatar_url} alt="Git picture" widht ={10}  /> */}
    </div>
  );
}

export default Github;

export const githubinfoLoader = async() => {
  const  response = await fetch('https://api.github.com/users/Gaurav-Kanse')
  return response.json()
}