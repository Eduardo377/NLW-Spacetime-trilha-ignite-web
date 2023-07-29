import { getUser } from "@/lib/auth"
import { User } from "lucide-react"
import Image from 'next/image'

export function Profile() {
  const {name, avatarUrl} = getUser()

  return (
    <a
      target="_blank"
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
    >
      <Image
      src={avatarUrl}
      width={40}
      height={40}
      alt=''
      className="w-10 h-10"
      />

      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a href="" className="block text-red-400 hover:text-red-300">Quero sair</a>
      </p>
    </a>
  );
}
