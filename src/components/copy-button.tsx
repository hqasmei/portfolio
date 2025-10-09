import { useState } from 'react';

import { Check, Copy } from 'lucide-react';

export function CopyButton({ text }: { text: any }) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  const Icon = isCopied ? Check : Copy;

  return (
    <button
      className="rounded p-2 duration-200 hover:bg-neutral-200 dark:hover:bg-neutral-800"
      disabled={isCopied}
      onClick={copy}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
