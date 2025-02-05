import Container from "@/components/container";
import data from "@/data/home.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: data.home.title,
  description: data.home.description,
  keywords: data.home.keywords,
  openGraph: {
    title: data.home.title,
    description: data.home.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <Container title="Начало">
    </Container>
  );
}
