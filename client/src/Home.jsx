import React, { useEffect, useState } from 'react'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

const Home = () => {
  const [hospitals, setHospitals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(`${API_BASE_URL}/api/hospitals`)

        if (!response.ok) {
          throw new Error('Unable to fetch hospitals')
        }

        const data = await response.json()
        setHospitals(Array.isArray(data) ? data : [])
      } catch (err) {
        setError(err.message || 'Something went wrong while loading hospitals')
      } finally {
        setLoading(false)
      }
    }

    fetchHospitals()
  }, [])

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Hospitals</h1>
        <p className="text-sm text-slate-500">Total: {hospitals.length}</p>
      </div>

      {loading && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
          Loading hospitals...
        </div>
      )}

      {!loading && error && (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-700 shadow-sm">
          {error}
        </div>
      )}

      {!loading && !error && hospitals.length === 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
          No hospitals found.
        </div>
      )}

      {!loading && !error && hospitals.length > 0 && (
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {hospitals.map((hospital) => (
            <article
              key={hospital.placeId || hospital.name}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">{hospital.name}</h2>
                  <p className="text-sm text-slate-500">{hospital.address}</p>
                </div>
                <span className="rounded-lg bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                  ⭐ {hospital.rating ?? 'N/A'}
                </span>
              </div>

              <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
                <span
                  className={`rounded-full px-2.5 py-1 font-semibold ${
                    hospital.isGovernment
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-sky-100 text-sky-700'
                  }`}
                >
                  {hospital.isGovernment ? 'Government' : 'Private'}
                </span>
                {hospital.locations?.[0] && (
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
                    {hospital.locations[0]}
                  </span>
                )}
              </div>

              <div className="space-y-2 border-t border-slate-100 pt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Available Doctors
                </p>
                {(hospital.doctors || []).slice(0, 2).map((doctor, index) => (
                  <div key={`${doctor.name}-${index}`} className="rounded-xl bg-slate-50 p-2.5">
                    <p className="text-sm font-semibold text-slate-700">{doctor.name}</p>
                    <p className="text-xs text-slate-500">
                      {doctor.specialization} • {doctor.availability?.[0]} - {doctor.availability?.[1]}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

export default Home