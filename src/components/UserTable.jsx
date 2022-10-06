// import { ExternalLinkIcon } from '@heroicons/react'
import React, { useEffect, useState } from 'react'
import useTable from '../hooks/useTable.jsx'
import TableFooter from './TableFooter.jsx'
import { Link } from 'react-router-dom'
import { axiosPrivate as axios } from '../api/axios'

const UserTable = ({ total = 20, rowsPerPage = 10 }) => {
  const [page, setPage] = useState(1)
  const { range } = useTable(total, rowsPerPage)
  const [data, setData] = useState({})

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const config = {
      params: {
        page: page,
      },
    }
    axios.get('/', config).then((res) => {
      console.log(res.data.data)
      setData(res.data.data)
      setLoading(false)
    })
  }, [page, setPage])

  return (
    <>
      <div className='w-full flex flex-col justify-center items-center gap-5'></div>
      {loading ? (
        <>
          <div className='flex flex-col justify-center items-center gap-5 pt-4'>
            <p className='text-2xl'>Users Loading...</p>
          </div>
        </>
      ) : (
        <div className='max-w-4xl mx-auto'>
          <table className='my-5 w-full mx-auto'>
            <thead>
              <tr>
                <th className='text-left px-4 py-2 border-b border-gray-200'>
                  <p>Avatar</p>
                </th>
                <th className='text-left px-4 py-2 border-b border-gray-200'>
                  <p>Name</p>
                </th>
                <th className='text-left px-4 py-2 border-b border-gray-200'>
                  <p>Email</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((user, i) => (
                <TableRow key={i} data={user} />
              ))}
            </tbody>
          </table>
          <TableFooter range={range} setPage={setPage} page={page} />
        </div>
      )}
    </>
  )
}

const TableRow = ({ data }) => {
  return (
    <>
      <tr>
        {/*  add user avatar*/}
        <td className='px-4 py-2 flex justify-center'>
          <img
            className='h-10 w-10 rounded-full'
            src={data?.avatar}
            alt='user-avatar'
          />
        </td>
        <td className='px-4 py-2'>{`${data?.first_name} ${data?.last_name}`}</td>
        <td className='px-4 py-2'>
          <a href='#' className='text-blue-500 hover:text-blue-700'>
            {data?.email}
          </a>
        </td>
      </tr>
    </>
  )
}

export default UserTable
