import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppoinments = () => {

    const {doctors} =useContext(AppContext)

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'> My Appointments</p>
      <div>
           {doctors.slice(0,2).map((item,index)=>(
                <div key={index}> 
                        <div className='grid grid-cols-[1fr_2fr] gap-4 sm:gap-6 py-2 border-b'>
                            <img className='w-32 bg-indigo-50' src={item.image}/>
                        </div>
                        <div className='flex-1 text-sm text-zinc-600'>
                            <p className='text-neutral-800 font-semibold'>{item.name}</p>
                            <p>{item.speciality}</p>
                            <p className='text-zinnc-700 font-medium mt-1'>Address:</p>
                            <p className='text-xs'>{item.address.line1}</p>
                            <p className='text-xs'>{item.address.line2}</p>
                            <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span>25,july,2024 | 8:30 PM</p>

                        </div>
                        <div></div>
                        <div className='flex flex-col gap-2 justify-end'>
                            <button>Pay Online</button>
                            <button>Cancle Appointment</button>
                        </div>
                </div>
            ))
           }
      </div>
    </div>
  )
}

export default MyAppoinments
