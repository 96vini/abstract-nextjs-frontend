import Header from '@/app/ui/components/header/header';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen">
      <Header />
      <div>{children}</div>
    </div>
  );
}