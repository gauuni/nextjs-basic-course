import { getStaticPaths, makeStaticProps } from '@/getStatic'
import { useTranslation } from 'next-i18next'

const getStaticProps = makeStaticProps(['heart'])
export { getStaticPaths, getStaticProps }



const HeartPage = () => {
  const { t } = useTranslation('heart')
  
  return (
    <main className="">

        <h1>{t('avg_heart_rate_desk_work_time')}</h1>
      
    </main>
  )
}

  export default HeartPage