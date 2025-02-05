import { Metadata } from "next";

import DisplayServices from "@/app/services/components/display-services";
import DisplayHeader from "@/app/services/components/display-header";
import CallToAction from "@/app/services/components/call-to-action";
import WhyMe from "@/app/services/components/why-me";
import {
  meta,
  header,
  pageHeading,
  servicesItems,
  callToAction,
} from "@/app/services/data";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  openGraph: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: "/services",
  },
};

export default function Services() {
  return (
    <>
      <DisplayHeader {...header} />
      <main className="bg-slate-100 pb-10">
        <DisplayServices title={pageHeading} services={servicesItems} />
        <CallToAction {...callToAction} />
        <WhyMe />
      </main>
    </>
  );
}
