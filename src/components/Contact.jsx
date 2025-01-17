import React from 'react'

const Contact = () => {

    const emailAddress = 'sabriyecbc@gmail.com'; 
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='' action="/" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-300 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4 '>Submit the form below or shoot me an email</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <a href={`mailto:${emailAddress}`}>
                <button className='text-white border-2 border-pink-300 hover:bg-[#6fc2b0] hover:border-[#6fc2b0] hover:rounded-[40px] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
                </a>
            </form>
            
        </div>
      )
}

export default Contact