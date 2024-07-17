import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"
import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom"
function Signin() {
  const [formData,setFormData]=useState({})
  const [errorMessage,setErrorMessage]=useState(null);
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]: e.target.value.trim()})
  }
  const handleSubmit=async(e)=>{
  e.preventDefault();
  if(!formData.email||!formData.password){
    return setErrorMessage('please fill out the details')
  }
  try{
    setLoading(true)
  const res=await fetch("/api/auth/signin",{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify(formData)
});
const data=await res.json();
if(data.success===false){
  return setErrorMessage(data.message)
}
if(res.ok){
  navigate('/')
}
setLoading(false);
  }
  catch(err){
setErrorMessage(err.message);
setLoading(false)
  }
  }
  return (
    <div className="min-h-screen mt-20 ">
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
    <div className="flex-1">
    <Link to='/' className="font-bold text-sm sm:text-xl "><span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-yellow-500 rounded-lg text-white text-4xl">RSVP</span>Hub</Link>
    <p className="mt-2 text-sm">The RSVP App is a user-friendly platform befor using signup through email.</p>
    </div>
    <div className="flex-1">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <Label value="Your Email"/>
          <TextInput type='email' placeholder="name@email.com" id='email' onChange={handleChange}/>
        </div>

        <div>
          <Label value="Password"/>
          <TextInput type='password' placeholder="Password" id='password' onChange={handleChange}/>
        </div>
       <Button gradientDuoTone='purpleToPink' outline type='submit' disabled={loading}>{
       loading?(
        <>
        <Spinner size='sm'/>
        <span className="p-1">Loading....</span>
        </>
       ):'Sign In'
       }</Button>
      </form>
       <div className="flex gap-2 mt-5">
   <span>Dont Have an Account?</span>
   <Link to='/signin' className="text-blue-600" disabled={loading}>SignUp</Link>
   </div>
   {
    errorMessage&&(
      <Alert className="mt-5" color='failure'>
        {errorMessage}
      </Alert>
    )
   }
    </div>
    </div>
    </div>
  )
}

export default Signin