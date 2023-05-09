import Image from 'next/image'
import { Inter } from 'next/font/google'
import BaseLayout from '@/layouts/BaseLayout'
import Sponsored from '@/components/Sponsored'
import Filter from '@/components/event/Filter'
import EventComp from '@/components/event/EventComp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <BaseLayout>
      <div className='desktop'>
        <Sponsored />
        <Filter />
        <EventComp />
      </div>
    </BaseLayout>
  )
}
