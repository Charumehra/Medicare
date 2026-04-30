import React, { useEffect, useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

const HospitalDetail = () => {
  const { id } = useParams()
  const location = useLocation()
  const [hospital, setHospital] = useState(location.state?.hospital || null)
  const [loading, setLoading] = useState(!hospital)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchHospital = async () => {
      if (hospital) return
      try {
        setLoading(true)
        setError('')
        const res = await fetch(`${API_BASE_URL}/api/hospitals`)
        if (!res.ok) throw new Error('Failed to load hospitals')
        const data = await res.json()
        const found = data.find((h) => (h.placeId || encodeURIComponent(h.name)) === id || h.placeId === id)
        setHospital(found || null)
      } catch (err) {
        setError(err.message || 'Unable to load hospital')
      } finally {
        setLoading(false)
      }
    }

    fetchHospital()
  }, [id])

  if (loading) return <div className="p-6">Loading hospital...</div>
  if (error) return <div className="p-6 text-rose-700">{error}</div>
  if (!hospital) return <div className="p-6">Hospital not found.</div>

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="flex justify-end">
        <Link
          to={`/hospital/${id}/book`}
          state={{ hospital }}
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Book Appointment
        </Link>
      </div>
      <Link to="/" className="inline-block mb-4 text-sm text-slate-600">← Back to list</Link>
      <header className="mb-6 rounded-2xl border border-slate-200 bg-white p-6">
        <h1 className="text-3xl font-black text-slate-900">{hospital.name}</h1>
        <p className="mt-2 text-sm text-slate-600">{hospital.address}</p>
        <div className="mt-3 flex items-center gap-3">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700">★ {hospital.rating ?? 'N/A'}</span>
          <span className={`rounded-full px-3 py-1 text-sm font-semibold ${hospital.isGovernment ? 'bg-emerald-100 text-emerald-700' : 'bg-sky-100 text-sky-700'}`}>{hospital.isGovernment ? 'Government' : 'Private'}</span>
        </div>
      </header>

      <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-slate-900">Available Doctors</h2>
        <div className="mt-4 space-y-3">
          {(hospital.doctors || []).map((doc, i) => (
            <div key={`${doc.name}-${i}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-800">{doc.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{doc.specialization}</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700">Available</span>
              </div>
              <p className="mt-2 text-xs text-slate-500">{doc.availability?.[0]} - {doc.availability?.[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-bold text-slate-900">Locations</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {(hospital.locations || []).map((loc, idx) => (
            <span key={idx} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">{loc}</span>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HospitalDetail
