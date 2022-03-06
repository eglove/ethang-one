import { animationInterval } from '@ethang/util-typescript';
import { useEffect, useState } from 'react';

type UseCopyClipboardReturn = {
  copyToClipboard: (text: string) => void;
  error?: Error;
  isCopied: boolean;
};

export const useCopyClipboard = (
  successDuration = 2000
): UseCopyClipboardReturn => {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState<Error>();

  const copyToClipboard = (text: string): void => {
    const asyncCopy = async (): Promise<void> => {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setIsCopied(true);
          return null;
        })
        .catch((error: Error) => {
          setError(error);
          setIsCopied(false);
        });
    };

    asyncCopy().catch((error: Error) => {
      setError(error);
      setIsCopied(false);
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    if (isCopied) {
      animationInterval(successDuration, controller.signal, () => {
        setIsCopied(false);
      });
    }

    return (): void => {
      controller.abort();
    };
  }, [isCopied, successDuration]);

  return { copyToClipboard, error, isCopied };
};
