import About from "@/components/About/About";
import Client from "@/components/Client/Client";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Showreel from "@/components/Showreel/Showreel";
import Work from "@/components/Work/Work";
import Hero from "@/components/Hero/Hero";
import Head from "next/head";
import KoreanArchive from "@/components/Archive/KoreanArchive";
import Archive from "@/components/Archive/Archive";
import useChannelIO from "@/hooks/useChannel";
import KoreanServices from "@/components/Services/KoreanServices";
import Client2 from "@/components/Client/Client_copy"

export default function Home() {
  // useChannelIO("191ac84c-8517-4966-89ce-90152c22369e");

  return (
    <>
      <Head>
        <title>언더스탠딩 - 마케팅 전문가</title>
        <meta name="description" content="마케팅의 성공은 시행착오를 얼마나 짧게 줄이는가에 달려있습니다. 브랜드 전략부터 실행까지 전문적인 마케팅 솔루션을 제공합니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="언더스탠딩 - 마케팅 전문가" />
        <meta property="og:description" content="마케팅의 성공은 시행착오를 얼마나 짧게 줄이는가에 달려있습니다. 브랜드 전략부터 실행까지 전문적인 마케팅 솔루션을 제공합니다." />
        <meta property="og:image" content="/owner.png" />
        <meta property="og:url" content="https://www.understanding.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="언더스탠딩 - 마케팅 전문가" />
        <meta name="twitter:description" content="마케팅의 성공은 시행착오를 얼마나 짧게 줄이는가에 달려있습니다." />
        <meta name="twitter:image" content="/owner.png" />
      </Head>
      <Hero />
      <Showreel />
      <Client2 />
      <Work />
      <KoreanArchive />
      <KoreanServices />
      <Client /> 
      <About />
      {/* <Archive /> */}
      {/* why us */}
      <Contact />
    </>
  );
}
