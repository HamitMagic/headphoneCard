import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import CardItem from '../components/CardItem'
import data from '../assets/data.json'



export default function Home() {
  return (
    <>
      <Head>
        <title>Headphone card</title>
        <meta name="возьмите меня на работу))" content="я же лучший ;)" />
        <meta name="и это мой первый 'проект' на next.js" content="раньше писал только на react.js ;)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <CardItem card={data}/>
      </main>
    </>
  )
}
