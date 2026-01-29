import axios from 'axios'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'




function Register() {
      const navigate = useNavigate()

      const [formdata,setFormdata] = useState({
            name:'',
            email:'',
            pass:'',
            cpass:''
      })

      const handlechange = (e)=>{
            setFormdata({
              ...formdata,[e.target.name]:e.target.value
            })
      }
       const handlesubmit = async(e)=>{
            e.preventDefault()
       
      try{
          const res = await axios.post(`${import.meta.env.VITE_API_URL}addUser`,formdata)  
          console.log(res);

          if(res.status==200){
            alert("user added")


            navigate('/login')



          }
       else{
            alert("Registration faild")
       }
     


          
      } catch (error) {

            alert("Registration faild")
      }
       }
      return (

     
      <form onSubmit={handlesubmit}>
        <h1>User Login</h1>
      <input type="text" name='name'placeholder='enter your name'onChange={handlechange} value={formdata.name}/>,
      <input type="email" name='email'placeholder='enter your email'onChange={handlechange} value={formdata.email}/>,
      <input type="password" name='pass'placeholder='enter your password'onChange={handlechange} value={formdata.pass}/>,
      <input type="password" name='cpass'placeholder='conform password'onChange={handlechange} value={formdata.cpass}/>,
      <br />
      <Link to={'/login'}><button>login</button></Link>
      <button type='submit'>submit</button>
     </form>
   
      
      )
}

export default Register