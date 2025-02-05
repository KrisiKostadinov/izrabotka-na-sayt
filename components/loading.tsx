import { LoaderCircle } from "lucide-react";

export default function LoadingComponent() {
  return (
    <main className="w-full min-h-screen container mx-auto px-5 py-5 sm:py-10">
      <div className="w-full h-full flex justify-center items-center">
        <LoaderCircle className="repeat-infinite animate-spin" />
      </div>
    </main>
  );
}
