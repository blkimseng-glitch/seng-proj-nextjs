export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <body>
      <div className="bg-red-500">This is dashboard</div>
      {children}
    </body>
  );
}
