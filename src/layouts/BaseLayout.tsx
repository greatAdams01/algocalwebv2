import React from 'react'
import Header from '@/components/header/Header';
import LeftBar from '@/components/sidebar/LeftBar';
import RightBar from '@/components/sidebar/RightBar';

type LayoutProps = {
  children: React.ReactNode,
};

function BaseLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <LeftBar />
      <RightBar />

      <main>{ children }</main>
    </>
  )
}

export default BaseLayout