import { redirect } from 'next/navigation';

export default function VibeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  redirect('https://www.figma.com/board/WfrxfETkjv2wRmnUZ8rJs2/mood-board?node-id=0-1&t=ImjPDd54nSKjqDdv-1');
  return <>{children}</>;
}
