import React, { useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'

const Booking = () => {
  const { id } = useParams()
  const location = useLocation()
  const hospital = location.state?.hospital || null

  const [form, setForm] = useState({ name: '', contact: '', date: '', doctor: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder: in a real app you'd POST to an appointments API
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold">Appointment Confirmed</h2>
        <p className="mt-3">Thanks, {form.name}. Your appointment with {hospital?.name || 'the hospital'} is set for {form.date}.</p>
        <Link to={`/hospital/${id}`} className="inline-block mt-4 text-sm text-slate-600">← Back to hospital</Link>
      </main>
    )
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <Link to={`/hospital/${id}`} className="inline-block mb-4 text-sm text-slate-600">← Back to hospital</Link>
      <h1 className="text-2xl font-black">Book Appointment</h1>
      <p className="mt-2 text-sm text-slate-600">Booking for: {hospital?.name || id}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
        <div>
          <label className="block text-sm font-medium text-slate-700">Your Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Contact (phone or email)</label>
          <input name="contact" value={form.contact} onChange={handleChange} required className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Preferred Date & Time</label>
          <input name="date" type="datetime-local" value={form.date} onChange={handleChange} required className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Preferred Doctor (optional)</label>
          <input name="doctor" value={form.doctor} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>

        <div className="flex items-center justify-end gap-3">
          <Link to={`/hospital/${id}`} className="text-sm text-slate-600">Cancel</Link>
          <button type="submit" className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Confirm Booking</button>
        </div>
      </form>
    </main>
  )
}

export default Booking
