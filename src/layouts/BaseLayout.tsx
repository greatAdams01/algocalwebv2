import React from 'react'
import Header from '@/components/header/Header';
import LeftBar from '@/components/sidebar/LeftBar';
import RightBar from '@/components/sidebar/RightBar';
import MobileHeader from '@/components/header/MobileHeader';

type LayoutProps = {
  children: React.ReactNode,
};

function BaseLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <MobileHeader />
      <LeftBar />
      <RightBar />

      <main>{ children }</main>
    </>
  )
}

export default BaseLayout