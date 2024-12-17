import { ReactNode } from 'react';

export default function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl p-6 md:pt-10 lg:px-20">
      {children}
    </div>
  );
}
