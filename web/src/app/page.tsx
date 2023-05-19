import { Copyright } from "@/components/Copyright";
import { EmptyMemories} from "@/components/EmptyMemories";
import { HomePage } from "@/components/HomePages";

export default function Home() {
  return (

<main className="grid min-h-screen grid-cols-2">

        <HomePage />

        <EmptyMemories />

    </main>
  );
}
