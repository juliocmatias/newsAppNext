import { News } from "@/components/News/News";

export default function NewsBusiness ({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <main>
      <News id={id}/>
    </main>
  );
}