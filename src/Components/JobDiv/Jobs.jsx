// eslint-disable-next-line no-unused-vars
import React from 'react'

const Jobs = () => {
  return (
    <div>
     <div className="jobsContainer flex gap justify center flex-wrap items-center 
     py-10" >

      <div className='group/item singleJob w-[250px] p-[20px] bg-white rounded
      [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

    <span className='flex justify-between items-center gap-4'>
    <h1 className='text-[15px] font-semibold text-text color group-hover:text-white'>Web Developer</h1>
    </span>
      </div>
    
     </div>
    </div>
  )
}

export default Jobs
