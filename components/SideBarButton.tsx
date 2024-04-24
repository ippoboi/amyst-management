import Image from "next/image";

interface SideBarButtonProps {
  icon: any;
  alt: string;
  active?: boolean;
  onClick?: () => void;
}

export default function SideBarButton({
  icon,
  alt,
  active,
  onClick,
}: SideBarButtonProps) {
  return (
    <div
      className={`p-2 hover:bg-[#343434] rounded group transition-all ${
        active && "bg-[#343434]"
      }`}
    >
      <Image
        src={icon}
        alt={alt}
        width={20}
        className={`${!active && "opacity-50"} group-hover:opacity-100`}
      />
    </div>
  );
}
