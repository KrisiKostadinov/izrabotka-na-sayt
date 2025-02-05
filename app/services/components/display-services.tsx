import Image from "next/image";
import Link from "next/link";

import { Service } from "@/app/services/types";

type DisplayServicesProps = {
  title: string;
  services: Service[];
};

export default function DisplayServices({
  title,
  services,
}: DisplayServicesProps) {
  return (
    <div className="container mx-auto max-md:px-5">
      <h2 className="text-3xl md:text-4xl font-semibold text-center py-10">
        {title}
      </h2>
      <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <li
            key={index}
            className="bg-white border rounded-md shadow p-5 space-y-5"
          >
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="text-muted-foreground text-lg line-clamp-2">
              {service.description}
            </p>
            <Image
              src={service.imageUrl}
              alt={service.imageAlt}
              width={600}
              height={450}
              className="border rounded"
            />
            <Link
              className="block w-fit bg-primary text-secondary hover:text-primary hover:bg-secondary py-3 px-4 border rounded"
              href={service.buttonUrl}
            >
              {service.buttonText}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
