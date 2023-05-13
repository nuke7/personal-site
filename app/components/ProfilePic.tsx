import Image from "next/image";

export const ProfilePic = () => (
  <Image
    className="rounded-full contrast-125 my-10 mx-auto hover:contrast-200"
    src="/images/profile.jpg"
    height={144}
    width={144}
    alt="Marton Gombos profile picture"
  />
);
