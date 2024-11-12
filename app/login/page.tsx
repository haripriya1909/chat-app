
import Image from "next/image";
import LoginButton from "../../components/Login/LoginButton";

export default function Login() {
  return (
    <main className="flex h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-10">
        <Image
          src="https://www.freepnglogos.com/uploads/pen-png/pen-administrators-message-stw-website-22.png"
          alt="logo"
          height={80}
          width={80}></Image>
        {/* login button */}
        <LoginButton></LoginButton>
        
      </div>
    </main>
  );
}
