import Navbar from '@/app/components/navbar'
import Banner from '@/app/components/benner'
import Search from '@/app/components/search'
import Card from '@/app/components/card'
import Footer from '@/app/components/footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner />
      <Search />
      <Card />
      <Footer />
    </div>
  )
}
