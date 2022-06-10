import html2canvas, { Options } from 'html2canvas';
import JsPdf, { jsPDFOptions } from 'jspdf';
import { MutableRefObject } from 'react';

interface ReactToPdfDownloadContainerProperties {
  toPdf: () => Promise<void>;
}

interface ReactToPdfProperties<ContainerType, TargetType> {
  canvasOptions?: Partial<Options>;
  downloadContainer: (
    properties: ReactToPdfDownloadContainerProperties
  ) => ContainerType;
  filename: string;
  jsPdfOptions?: Partial<jsPDFOptions>;
  onComplete?: () => void;
  options?: Record<string, string>;
  scale?: number;
  targetReference: MutableRefObject<TargetType>;
  x?: number;
  y?: number;
}

export function ReactToPdf<ContainerType, TargetType>({
  filename = 'download.pdf',
  x = 0,
  y = 0,
  canvasOptions = { logging: false, scale: 1, useCORS: true },
  jsPdfOptions,
  downloadContainer,
  onComplete,
  targetReference,
}: ReactToPdfProperties<ContainerType, TargetType>): ContainerType {
  const toPdf = async (): Promise<void> => {
    if (typeof targetReference.current === 'undefined') {
      throw new TypeError('Target reference must be defined.');
    }

    const canvasElement = await html2canvas(
      targetReference.current as unknown as HTMLElement,
      canvasOptions
    );

    const imageData = canvasElement.toDataURL();
    const pdf = new JsPdf(jsPdfOptions);
    pdf.addImage(imageData, 'JPEG', x, y, 0, 0, undefined, 'SLOW');
    pdf.save(filename);

    if (typeof onComplete !== 'undefined') {
      onComplete();
    }
  };

  return downloadContainer({ toPdf });
}
