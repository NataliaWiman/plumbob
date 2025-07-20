import Content from "@/components/Content";

export default function ContentPage() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-12">
      <div className="col-start-3 col-end-10">
        <Content />
      </div>
    </main>
  );
}
