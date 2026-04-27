import React, { useEffect, useState } from 'react'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

const getInitials = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

const Home = () => {
  const [hospitals, setHospitals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const governmentCount = hospitals.filter((hospital) => hospital.isGovernment).length
  const privateCount = hospitals.length - governmentCount
  const doctorCount = hospitals.reduce((total, hospital) => total + (hospital.doctors?.length || 0), 0)

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
    <main className="relative overflow-hidden text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.1),_transparent_28%),linear-gradient(180deg,_#f8fafc_0%,_#eef7f3_100%)]" />
      <div className="absolute left-[-7rem] top-24 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute right-[-6rem] top-32 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-16 lg:pt-10">
        <section className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr] lg:items-stretch">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8 lg:p-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Live Hospital Directory
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Find the right hospital with a cleaner, faster experience.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Browse hospitals, compare doctors, and check availability in a polished layout
              designed to make care discovery feel simple and modern.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-2xl font-black text-slate-900">{hospitals.length}</p>
                <p className="text-sm text-slate-500">Hospitals listed</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-2xl font-black text-slate-900">{governmentCount}</p>
                <p className="text-sm text-slate-500">Government hospitals</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-2xl font-black text-slate-900">{doctorCount}</p>
                <p className="text-sm text-slate-500">Doctors available</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Directory Snapshot
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                  <div>
                    <p className="text-sm text-slate-500">Private hospitals</p>
                    <p className="text-2xl font-black text-slate-900">{privateCount}</p>
                  </div>
                  <div className="rounded-2xl bg-sky-100 px-3 py-2 text-sky-700">Private</div>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                  <div>
                    <p className="text-sm text-slate-500">Government hospitals</p>
                    <p className="text-2xl font-black text-slate-900">{governmentCount}</p>
                  </div>
                  <div className="rounded-2xl bg-emerald-100 px-3 py-2 text-emerald-700">Public</div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-emerald-500 via-emerald-500 to-sky-500 p-6 text-white shadow-[0_20px_60px_rgba(16,185,129,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                Quick Access
              </p>
              <p className="mt-3 text-2xl font-black">Modern cards, better scanning.</p>
              <p className="mt-2 text-sm leading-6 text-white/85">
                Each card highlights rating, location, type, and doctor availability so users can
                compare hospitals at a glance.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Hospital List
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-900 sm:text-3xl">
                All hospitals in one place
              </h2>
            </div>
            <p className="text-sm text-slate-500">Total: {hospitals.length}</p>
          </div>

          {loading && (
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-600">
              Loading hospitals...
            </div>
          )}

          {!loading && error && (
            <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-700">
              {error}
            </div>
          )}

          {!loading && !error && hospitals.length === 0 && (
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-600">
              No hospitals found.
            </div>
          )}

          {!loading && !error && hospitals.length > 0 && (
            <section className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {hospitals.map((hospital) => (
                <article
                  key={hospital.placeId || hospital.name}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-cyan-400" />
                  <div className="p-5 sm:p-6">
                    <div className="mb-5 flex items-start gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-500 text-lg font-black text-white shadow-lg shadow-emerald-500/20">
                        {getInitials(hospital.name)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="truncate text-lg font-bold text-slate-900">
                              {hospital.name}
                            </h3>
                            <p className="mt-1 text-sm text-slate-500">{hospital.address}</p>
                          </div>
                          <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                            ★ {hospital.rating ?? 'N/A'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5 flex flex-wrap items-center gap-2 text-xs">
                      <span
                        className={`rounded-full px-3 py-1 font-semibold ${
                          hospital.isGovernment
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-sky-100 text-sky-700'
                        }`}
                      >
                        {hospital.isGovernment ? 'Government' : 'Private'}
                      </span>
                      {hospital.locations?.[0] && (
                        <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
                          {hospital.locations[0]}
                        </span>
                      )}
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Available Doctors
                      </p>
                      <div className="mt-3 space-y-3">
                        {(hospital.doctors || []).slice(0, 2).map((doctor, index) => (
                          <div
                            key={`${doctor.name}-${index}`}
                            className="rounded-2xl border border-slate-200 bg-white p-3"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <p className="text-sm font-semibold text-slate-800">
                                  {doctor.name}
                                </p>
                                <p className="mt-1 text-xs text-slate-500">
                                  {doctor.specialization}
                                </p>
                              </div>
                              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700">
                                Available
                              </span>
                            </div>
                            <p className="mt-2 text-xs text-slate-500">
                              {doctor.availability?.[0]} - {doctor.availability?.[1]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          )}
        </section>
      </div>
    </main>
  )
}

export default Home