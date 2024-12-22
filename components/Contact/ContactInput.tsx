import React from 'react'
import s from './contact.module.scss'
function ContactInput({lablel, id}:{lablel: string, id:string}) {
  return (
    <div className={s.input_container}>
      <input type="text" id={id} required placeholder=" "/>
      <label htmlFor={id}>{lablel}</label>
    </div>
  )
}

export default ContactInput