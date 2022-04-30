import { isClient } from '@ethang/util-typescript';
import { MutableRefObject, useEffect, useState } from 'react';

type UseFullscreenReturn = {
  closeFullScreen: () => void;
  fullScreen: boolean;
  openFullScreen: () => void;
  toggle: () => void;
};

export const useFullscreen = (
  reference: MutableRefObject<HTMLElement>
): UseFullscreenReturn => {
  const initialState = isClient ? Boolean(document.fullscreenElement) : false;
  const [fullScreen, setFullScreen] = useState(initialState);

  const openFullScreen = (): void => {
    reference.current
      .requestFullscreen()
      .catch((requestFullscreenError: Error) => {
        console.error(requestFullscreenError);
      });
  };

  const closeFullScreen = (): void => {
    document.exitFullscreen().catch((exitFullscreenError: Error) => {
      console.error(exitFullscreenError);
    });
  };

  useEffect(() => {
    const handleChange = (): void => {
      setFullScreen(document.fullscreenElement === reference.current);
    };

    addEventListener('fullscreenchange', handleChange);

    return (): void => {
      removeEventListener('fullscreenchange', handleChange);
    };
  }, [reference]);

  return {
    closeFullScreen,
    fullScreen,
    openFullScreen,
    toggle: fullScreen ? closeFullScreen : openFullScreen,
  };
};
