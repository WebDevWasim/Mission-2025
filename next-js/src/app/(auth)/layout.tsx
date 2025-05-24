export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Auth Pages</h1>
      <div>{children}</div>
    </>
  );
}
