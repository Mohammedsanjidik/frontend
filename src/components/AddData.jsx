import React, { useState } from 'react'
import axios from 'axios'


function AddData() {

    const [formdata,setFormdata] = useState({

        title:'',
        price:'',
        image:''
    })


    const convertBase64 =(file)=>{
        return new Promise((resolve,reject)=>{
            const filereader = new FileReader()
            filereader.readAsDataURL(file)
            filereader.onload=()=>{
                resolve(filereader.result)
            }
            filereader.onerror=(error)=>{
                reject(error)
            }
        })
    }



    const handlechange = async (e)=>{
        if(e.target.name==='image'){
            const file = e.target.files[0]
            const base64 = await convertBase64(file)
            setFormdata({...formdata,[e.target.name]:base64})
        }
        else{
            setFormdata({...formdata,[e.target.name]:e.target.value})
        }
    }


    const handlesubmit =async (e)=>{
        e.preventDefault()
        try {
            const token = localStorage.getItem('token')
            if(!token){
                alert("authentication faild")
            }
            const res = await axios.post(`${import.meta.env.VITE_API_URL}addData`,formdata,{

            headers:{
                Authorization:`Bearer ${token}`

            }
        })
        console.log(res);

        if(res.status==201){
            alert("success")
        }
        
    } catch (error){
        alert("error data adding")
        console.log(error);
        
    }
}

  return (
    <div>
        <form onSubmit={handlesubmit}>
         <h1>ADD Data</h1>
          <input type="text" name='title' onChange={handlechange} value={formdata.title} placeholder='enter title'/>,
          <input type="text" name='price' onChange={handlechange} value={formdata.price} placeholder='enter price'/>,
          <input type="file" name='image' onChange={handlechange} />
          <button type='submit'>submit</button>
        </form>
      
    </div>
  )
}

export default AddData
