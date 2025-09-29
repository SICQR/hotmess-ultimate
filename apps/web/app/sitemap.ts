export default async function sitemap(){
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://hotmessldn.com'
  const slugs = ['paul-king','stewart-who','nik-denton','tony-english','jon-hemming','grace']
  const routes = [
    '', 'hosts', 'press', 'membership', 'shop',
    ...slugs.map(s=>`shows/${s}`),
    ...slugs.map(s=>`shows/${s}/bio`),
  ]
  return routes.map(r=>({ url: `${base}/${r}`, lastModified: new Date() }))
}
