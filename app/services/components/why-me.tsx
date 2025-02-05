import { CheckIcon } from "lucide-react";

import { whyMeListItem } from "@/app/services/data";

export default function WhyMe() {
  return (
    <section className="py-10 max-md:px-5">
      <div className="container mx-auto">
        <h2 className="mb-10 text-3xl text-center font-semibold">
          Защо да изберете мен?
        </h2>
        <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {whyMeListItem.map((x, index) => (
            <li
              className="flex gap-5 bg-white p-5 border rounded-md shadow"
              key={index}
            >
              <div>
                <CheckIcon className="w-20 h-20 text-white bg-green-500 rounded-full p-2 border-4 border-green-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold">{x.title}</h3>
                <p className="text-muted-foreground">{x.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
