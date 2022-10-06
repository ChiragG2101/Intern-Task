import React, { useState } from 'react'
import { axiosPrivate as axios } from '../api/axios'

const AddUser = () => {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const body = {
      name: name,
      job: job,
    }

    axios.post('/', body).then((res) => {
      console.log(res)
      alert(`Status Code : ${res.status} \nStatus Text : ${res.statusText}`)
    })
  }

  return (
    <div>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg text-center'>
          <h1 className='text-2xl font-bold sm:text-3xl'>Add New User</h1>
        </div>

        <form
          className='mx-auto mt-8 mb-0 max-w-md space-y-4'
          onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email' className='sr-only'>
              Name
            </label>

            <div className='relative'>
              <input
                type='name'
                className='w-full rounded-lg ring-2 p-4 pr-12 text-sm shadow-sm'
                placeholder='Enter name'
                onChange={(e) => {
                  setName(e.target.value)
                }}
                value={name}
              />
            </div>
          </div>

          <div>
            <label htmlFor='job' className='sr-only'>
              Job
            </label>
            <div className='relative'>
              <input
                type='text'
                className='w-full rounded-lg ring-2 p-4 pr-12 text-sm shadow-sm'
                placeholder='Enter Job'
                onChange={(e) => {
                  setJob(e.target.value)
                }}
                value={job}
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'>
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUser
