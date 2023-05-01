import React from 'react'
import Header from '@/components/header/Header';

type LayoutProps = {
  children: React.ReactNode,
};

function BaseLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />

      <main>{ children }</main>
    </>
  )
}

export default BaseLayout