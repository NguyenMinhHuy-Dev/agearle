import React, {useState, useEffect} from 'react'
import '../../styles/Clock.css'

const Clock = ({date, title}) => {

  const [days,setDays] = useState(0)
  const [hours,setHours] = useState(0)
  const [minutes,setMinutes] = useState(0)
  const [seconds,setSeconds] = useState(0)

  let interval;

  const countDown =()=>{
    const destination = new Date(date).getTime(); 

    interval = setInterval(()=>{
      const now = new Date().getTime()
      const different = destination - now

      const days = Math.floor(different / (1000* 60 * 60 * 24))
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((different % (1000 * 60)) / 1000)

      
      if(destination < 0) {
        clearInterval(interval.current)
        // console.log(destination)
      }
      else if (seconds < 0) {
        clearInterval(interval.current)
      }
      else{
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }
  });
  };

  useEffect(()=>{
    countDown()
  })

  // useEffect(() => {
  //   console.log(date);
  // }, [])

  return (
    <>
    
      <div className="clock__top-content">
          <h4>Limited Offers</h4>
          <h3>{title}</h3>
      </div>
      <div className="clock__wrapper">
          <div className="clock__data">
              <div style={{textAlign : 'center'}}>
                  <h1>{days}</h1>
                  <h5>Days</h5>
              </div>
              <span>:</span>
          </div>

          <div className="clock__data">
              <div style={{textAlign : 'center'}}>
                  <h1>{hours} </h1>
                  <h5>Hours</h5>
              </div>
              <span>:</span>
          </div>

          <div className="clock__data">
              <div style={{textAlign : 'center'}}>
                  <h1>{minutes} </h1>
                  <h5>Minutes</h5>
              </div>
              <span>:</span>
          </div>

          <div className="clock__data">
              <div style={{textAlign : 'center'}}>
                  <h1>{seconds} </h1>
                  <h5>Seconds</h5>
              </div>
          </div>

      </div>
    </>
  )
}

export default Clock