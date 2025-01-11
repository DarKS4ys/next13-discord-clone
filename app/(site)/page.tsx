import Image from 'next/image';
import AuthForm from '../components/authform';

export default function Home() {
  return (
    <div className="flex flex-col justify-center sm:px-6 lg:px-8 min-h-full bg-[var(--backgroundcolor)]">
      <div>
        <Image
          alt="Logo"
          height={48}
          width={36}
          className="mx-auto w-auto"
          src="/images/logo.png"
        />
        <h2 className="mt-3 text-white text-center text-3xl font-bold tracking-tight">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
