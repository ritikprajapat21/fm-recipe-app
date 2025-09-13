import clsx from "clsx";

interface Props {
  title: string;
  as?: "h1" | "h2";
  className?: string;
}

export default function Heading({ title, as = "h2", className }: Props) {
  if (as === "h2") {
    return (
      <h2 className={clsx("font-serif text-neutral-800", className)}>
        {title}
      </h2>
    );
  }

  return (
    <h1 className={clsx("font-serif text-neutral-800", className)}>{title}</h1>
  );
}
