import {
  Header,
  StickyHeader,
  Footer,
  HeroHeader
} from '../components/Layout'

import Section from '../components/Layout/Section'


const data = [
    {
        title: "TOPIC 1",
        items: [
            {
                title: "Blog - 1",
                link: "https://github.com/saiwas"
            },
            {
                title: "Blog - 2",
                link: "https://github.com/saiwas"
            }
        ]
    },
    {
        title: "TBC",
        items: [
            {
                title: "TBC",
                link: "",
                image: ""
            }
        ]
    }
]


export default function Home() {
  return (
    <>
        <Header title="Johnny Personal Blog - HOME" />
        <StickyHeader />
        <HeroHeader />
        { data.map((section, index) => <Section key={index} {...section} />) }
        <Footer />
    </>
  )
}
