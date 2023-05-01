import Image from 'next/image'
import { Inter } from 'next/font/google'
import BaseLayout from '@/layouts/BaseLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <BaseLayout>
      <div>
        <h1>Next.js + TypeScript + Tailwind CSS + Emotion</h1>
      </div>
    </BaseLayout>
  )
}
