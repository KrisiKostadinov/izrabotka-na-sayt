import { ReactNode } from "react";

type ContainerProps = {
  title: string;
  children?: ReactNode;
};

export default function Container({ title, children }: ContainerProps) {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {children}
    </div>
  );
}
