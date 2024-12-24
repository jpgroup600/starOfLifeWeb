import React from 'react'
import s from './contact.module.scss'

interface ContactInputProps {
  label: string;
  id: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}


function ContactInput({label, id, onchange, value}:ContactInputProps) {
  return (
    <div className={s.input_container}>
      <input type="text" id={id} required placeholder=" " value={value} onChange={onchange}/>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default ContactInput