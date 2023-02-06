import 'src/components/layout/waveCanvas/WaveCanvas.scss';

import { useRef, FC, useEffect } from 'react';

import WaveEntity from 'src/components/layout/waveCanvas/WaveEntity';
import defineBlock from 'src/utils/defineBlock';

const bem = defineBlock('WaveCanvas');

const WaveCanvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  let frequency = 0.013;
  const waves = [
    new WaveEntity([0.0211, 0.028, 0.015], 'rgba(47,2,126,0.6)'),
    new WaveEntity([0.0122, 0.018, 0.005], 'rgba(47,2,126,0.6)'),
  ];

  const renderWaves = (canvasContext: CanvasRenderingContext2D) => {
    canvasContext.clearRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
    waves.forEach((wave) => {
      wave.draw(canvasContext, canvasContext.canvas.width, canvasContext.canvas.height, frequency);
    });
    frequency += 0.005;
    requestAnimationFrame(() => {
      renderWaves(canvasContext);
    });
  };

  useEffect(() => {
    const canvasContext = canvasRef.current?.getContext('2d');
    if (canvasContext) {
      renderWaves(canvasContext);
    }
  }, [canvasRef]);

  return (
    <div className={bem()}>
      <canvas
        ref={canvasRef}
        width={1500}
        height={600}
      ></canvas>
    </div>
  );
};

export default WaveCanvas;
