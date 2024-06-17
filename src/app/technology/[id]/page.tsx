import { News } from "@/components/News/News";

export default function NewsTechnology ({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <main>
      <News id={id}/>
    </main>
  );
}