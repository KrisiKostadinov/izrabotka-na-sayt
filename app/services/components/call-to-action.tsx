import JumbotronVersion1 from "@/components/jumbotrons/jumbotron-version-1";

type CallToActionProps = {
  title: string;
  text: string;
  buttonText: string;
  buttonUrl: string;
  opacity: string;
  imageUrl: string;
  imageAlt: string;
}

export default function CallToAction({
  title,
  text,
  buttonText,
  buttonUrl,
  opacity,
  imageUrl,
  imageAlt,
}: CallToActionProps) {
  return (
    <JumbotronVersion1
      className="mt-10"
      title={title}
      text={text}
      buttonText={buttonText}
      buttonUrl={buttonUrl}
      opacity={opacity}
      height={"900"}
      imageUrl={imageUrl}
      imageAlt={imageAlt}
    />
  );
}
