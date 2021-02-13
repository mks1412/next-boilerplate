export const config = {
  siteMeta: {
    title: '',
    teamName: '',
    description: '',
  },
  siteRoot:
    process.env.NODE_ENV === 'production' ? 'https://exsample.com' : 'http://localhost:3000',
  themeColor: '#fff',
}
