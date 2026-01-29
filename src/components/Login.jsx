import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {

     const navigate = useNavigate()
     const [formdata,setFormdata] = useState({
      
        email:'',
        pass:''

     })

      const handlechange = (e)=>{
            setFormdata({
              ...formdata,[e.target.name]:e.target.value
            })
        }

        const handlesubmit = async(e)=>{
            e.preventDefault()

            try{
          const res = await axios.post(`${import.meta.env.VITE_API_URL}login`,formdata)  
          console.log(res);

          if(res.status==200){

            localStorage.setItem("token",res.data.token)

            alert("user logined")

            navigate("/adddata")
          }
          else{
            alert("login error")
          }
        } catch (error) {
            console.log(error);

            alert("login error",error)
            
        }

        }



        return(

            <div>
             <form onSubmit={handlesubmit}>
               <h1>User Registration</h1>
                <input type="email" name='email'placeholder='enter your email'onChange={handlechange} value={formdata.email}/>,
                 <input type="password" name='pass'placeholder='enter your password'onChange={handlechange} value={formdata.pass}/>
                 <button type='submit'>Login</button>
             </form>
             </div>
        )
}

export default Login

