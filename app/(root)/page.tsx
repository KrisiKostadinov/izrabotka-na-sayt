import { Metadata } from "next";

import data from "@/data/meta.json";
import JumbotronVersion1 from "@/components/jumbotrons/jumbotron-version-1";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: data.home.meta.title,
  description: data.home.meta.description,
  keywords: data.home.meta.keywords,
  openGraph: {
    title: data.home.meta.title,
    description: data.home.meta.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <header>
      <Navbar />
      <JumbotronVersion1
        title={data.home.jumbotron.title}
        text={data.home.jumbotron.text}
        buttonText={data.home.jumbotron.buttonText}
        buttonUrl={data.home.jumbotron.buttonUrl}
        opacity={data.home.jumbotron.opacity}
        imageUrl={data.home.jumbotron.imageUrl}
        imageAlt={data.home.jumbotron.imageAlt}
      />
    </header>
  );
}
