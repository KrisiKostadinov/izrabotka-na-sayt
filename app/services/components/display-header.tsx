import JumbotronVersion1 from "@/components/jumbotrons/jumbotron-version-1";
import Navbar from "@/components/navbar";

type DisplayHeaderProps = {
  title: string;
  text: string;
  buttonText?: string;
  buttonUrl?: string;
  opacity: string;
  imageUrl: string;
  imageAlt: string;
};

export default function DisplayHeader({
  title,
  text,
  buttonText,
  buttonUrl,
  opacity,
  imageUrl,
  imageAlt,
}: DisplayHeaderProps) {
  return (
    <header>
      <Navbar />
      <JumbotronVersion1
        title={title}
        text={text}
        buttonText={buttonText}
        buttonUrl={buttonUrl}
        opacity={opacity}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
      />
    </header>
  );
}