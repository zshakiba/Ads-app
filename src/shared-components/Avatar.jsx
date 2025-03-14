import Image from "next/image";

function Avatar({ src = "/alt", width = 24 }) {
  return (
    <Image
      src={src || "/images/avatar.png"}
      width={width}
      height={width}
      className="rounded-full ring-1 ring-secondary-200"
      priority
      alt={src}
    />
  );
}
export default Avatar;
