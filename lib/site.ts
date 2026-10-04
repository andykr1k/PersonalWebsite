export const site = {
  name: 'Andrew Krikorian',
  url: 'https://akrik.vercel.app',
  email: 'akrik@umich.edu',
  github: 'https://github.com/andykr1k',
  linkedin: 'https://www.linkedin.com/in/andrew-krikorian/',
  twitter: 'https://twitter.com/krik_exe',
}

export const formatDate = (d: string) =>
  new Date(d + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
