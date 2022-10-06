import React, { useEffect } from 'react'

const TableFooter = ({ range, setPage, page }) => {
  // useEffect(() => {
  //   if (slice.length < 1 && page !== 1) {
  //     setPage(page - 1)
  //   }
  // }, [slice, page, setPage])
  return (
    <div className='py-2 w-full font-semibold text-gray-700 flex'>
      {range.map((el, index) => (
        <button
          key={index}
          className={`py-2 px-4 cursor-pointer rounded-lg mx-2 ${
            page === el
              ? 'text-white bg-blue-500'
              : 'text-gray-800 bg-slate-100'
          }`}
          onClick={() => setPage(el)}>
          {el}
        </button>
      ))}
    </div>
  )
}

export default TableFooter
