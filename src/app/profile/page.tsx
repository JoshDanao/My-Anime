import Image from "next/image";

export default function Profile() { 
  return (
    <div className="mx-20 my-32 space-y-4">
      <Image width={300} height={300}  alt="Profile Image" src="/profile-img.jpg" />
      <h2 className="text-2xl ">Josh</h2>
    </div>
  );
};

