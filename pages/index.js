import Head from 'next/head'
import Main from '../components/Main'


export default function Home() {
  return (
    <div>
      <Head>
        <title> Soomro | Deep Learing Engineer</title>
        <meta name="description" content="I’m a Deep Learning Engineer specializing in building (and occasionally designing) exceptional services!." />
        <link rel="icon" href="/CompanyLogo.png" />
      </Head>
    <Main />
    </div>
  )
}
