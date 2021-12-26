import '../styles/home.module.css'

import {
  Header,
  ContainerHeader,
  HeroHeader
} from '../components/Layout'


export default function Home() {
  return (
    <>
      <Header title="Johnny Personal Blog - HOME" />
      <ContainerHeader />
      <HeroHeader />
    </>
  )
}
