import React from 'react'
import axios from 'axios';

export function Doctor() {
    async function x(){
        const res = await axios.get('http://127.0.0.1:8000/api/doctors/',{
            
        });
        console.log(res.data);
    }
    x();
  
    return (
    <div>Doctor</div>
  )
}
