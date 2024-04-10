import CardContext from "@/contexts/CardInfoContext";

export default function JoinLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <CardContext>{children}</CardContext>
    </section>
  );
}
