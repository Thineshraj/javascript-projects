'use strict'

const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const amORpm = document.querySelector('.amORpm')

function showTime() {
  const now = new Date()
  const getHours = `${now.getHours()}`.padStart(2, 0)
  const getMinutes = `${now.getMinutes()}`.padStart(2, 0)
  const getSeconds = `${now.getSeconds()}`.padStart(2, 0)
  hours.innerHTML = getHours < 12 ? getHours : '0' + (getHours - 12)
  minutes.innerHTML = getMinutes
  seconds.innerHTML = getSeconds
  amORpm.innerHTML = getHours < 12 ? 'AM' : 'PM'
  setTimeout(showTime, 1000)
}

showTime()
