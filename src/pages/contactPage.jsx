import { useState, useRef, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import '../css/contact.scss'
import 'react-toastify/dist/ReactToastify.css'

const service_id = import.meta.env.VITE_EMAIL_SERVICE_ID
const template_id = import.meta.env.VITE_EMAIL_TEMPLATE_ID
const public_key = import.meta.env.VITE_EMAIL_PUBLIC_KEY

const ContactPage = () => {
  const formRef = useRef(null)
  const [sendLoading, setSendLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formSent, setFormSent] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all the fields!')
      return
    }
    setSendLoading(true)
    emailjs
      .send(
        service_id,
        template_id,
        {
          from_name: form.name,
          to_name: 'Mark',
          from_email: form.email,
          to_email: 'your email',
          message: form.message,
        },
        public_key
      )
      .then(() => {
        setSendLoading(false)
        toast.success('Message sent!')
        setForm({ name: '', email: '', message: '' })
        setFormSent(true)
      })
      .catch((error) => {
        setSendLoading(false)
        setError(error)
      })
  }

  useEffect(() => {
    if (formSent) {
      if (error) {
        console.log(error)
        toast.error('Something went wrong! Please try again')
      }
      setFormSent(false)
    }
  }, [formSent, error])

  return (
    <div className="contact-page">
      <ToastContainer />
      <div className="contact-page-wrapper">
        <h1>Contact Me</h1>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="senderInformation">
            <label className="input-field">
              <span>Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                style={{ width: '10rem' }}
              />
            </label>
            <label className="input-field">
              <span>Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                style={{ width: '10rem' }}
              />
            </label>
          </div>

          <label className="input-field">
            <span>Your Message</span>
            <textarea
              rows="4"
              cols="50"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Please write your message here"
              style={{
                width: '31.25rem',
                height: '20rem',
                resize: 'none',
                overflow: 'hidden',
              }}
            />
          </label>
          <button type="submit" className="submit-button">
            {sendLoading ? 'Sending...' : 'Send now'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
