import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useTranslation } from 'next-i18next'

const inter = Inter({ subsets: ['latin'] })
import Layout from '@/components/layout'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

import HeartPage from '@/components/heart'


 
import { appWithTranslation } from 'next-i18next'

const VitalGain: NextPageWithLayout = () => {
  
  return (
    <main className="">

        <HeartPage/>
      
    </main>
  )
}


VitalGain.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default appWithTranslation(VitalGain)
