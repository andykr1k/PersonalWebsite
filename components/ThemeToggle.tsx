'use client'

export default function ThemeToggle() {
  const toggle = () => {
    const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark'
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(next)
    try {
      localStorage.setItem('theme', next)
    } catch {}
  }
  return (
    <button className="theme-toggle" aria-label="Toggle theme" onClick={toggle}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path
          d="M6 0.5C9.03757 0.5 11.5 2.96243 11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6C0.5 2.96243 2.96243 0.5 6 0.5ZM6 1.84961C3.70802 1.84961 1.84961 3.70802 1.84961 6C1.84961 8.29198 3.70802 10.1504 6 10.1504V1.84961Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}
