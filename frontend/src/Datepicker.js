import 'react-datepicker/dist/react-datepicker.css'
import React, { useState } from 'react'
import Datepicker from 'react-datepicker'
const ReactDatepicker = () => {
    const [Selectdate,setSelectedDate]=useState(null)
  return (
    <div className='datepicker'>
      <Datepicker
      selected={Selectdate}
      onChange={data=>setSelectedDate(data)}
      dateFormat="YYYY/MM/D"
      minDate={new Date()}
     showYearDropdown
     scrollableMonthYearDropdown
      />
    </div>
  )
}

export default ReactDatepicker
