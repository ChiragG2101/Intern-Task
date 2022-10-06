import { useState, useEffect } from 'react'

const calculateRange = (data, rowsPerPage) => {
  const range = []
  const num = Math.ceil(data / rowsPerPage)
  let i = 1
  for (let i = 1; i <= num; i++) {
    range.push(i)
  }
  return range
}

const useTable = (total, rowsPerPage) => {
  const [tableRange, setTableRange] = useState([])

  useEffect(() => {
    const range = calculateRange(total, rowsPerPage)
    setTableRange([...range])
  }, [setTableRange])

  return { range: tableRange }
}

export default useTable
