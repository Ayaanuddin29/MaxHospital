import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"
function SIgnup() {
  return (
    <div className="min-h-screen mt-20 ">
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
    <div className="flex-1">
    <Link to='/' className="font-bold text-sm sm:text-xl "><span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-yellow-500 rounded-lg text-white text-4xl">RSVP</span>Hub</Link>
    <p className="mt-2 text-sm">The RSVP App is a user-friendly platform befor using signup through email.</p>
    </div>
    <div className="flex-1">
      <form className="flex flex-col gap-4">
        <div>
          <Label value="Your User name"/>
          <TextInput type='text' placeholder="Username" id='username'/>
        </div>
        <div>
          <Label value="Your Email"/>
          <TextInput type='email' placeholder="name@email.com" id='email'/>
        </div>
        <div>
          <Label value="Password"/>
          <TextInput type='password' placeholder="Password" id='password'/>
        </div>
       <Button gradientDuoTone='purpleToPink' outline type='submit'>Signup</Button>
      </form>
       <div className="flex gap-2 mt-5">
   <span>Have an Account?</span>
   <Link to='/signin' className="text-blue-600">Signin</Link>
   </div>
    </div>
    </div>
    </div>
  )
}

export default SIgnup