import type { CSSProperties, ReactNode } from 'react';
import { Recycle, Umbrella, ArrowUp } from 'lucide-react';
import { withBase } from '@/lib/utils';

type Hinge = 'none' | 'top' | 'bottom' | 'left' | 'right';

interface PanelProps {
  className: string;
  label: string;
  hinge: Hinge;
  print: ReactNode;
  turn?: number;
  children?: ReactNode;
}

/** One board panel: the inside faces the viewer when flat, the printed outside once folded. */
const Panel = ({ className, label, hinge, print, turn = 0, children }: PanelProps) => (
  <div className={`panel ${className}`}>
    <div className={`face face-in hinge-${hinge}`}>
      <span className="dieline-label">{label}</span>
    </div>
    <div className="face face-out">
      <div className="print" style={{ '--turn': `${turn}deg` } as CSSProperties}>
        {print}
      </div>
      {className === 'lid' && (
        <span className="tape" aria-hidden="true">
          <span>BALAJI · BALAJI · BALAJI · BALAJI</span>
        </span>
      )}
    </div>
    {children}
  </div>
);

const Wordmark = () => (
  <div className="print-wordmark">
    <img src={withBase('/brand-mark.svg')} alt="" />
    <div>
      <strong>The Balaji Group</strong>
      <span>Packaging since 2002</span>
    </div>
  </div>
);

const FoldingCarton = () => (
  <div
    className="carton-stage"
    role="img"
    aria-label="A flat sheet of kraft board folds into a sealed carton as you scroll"
  >
    <div className="carton-scene" aria-hidden="true">
      <div className="carton-shadow" />
      <Panel
        className="base"
        label="Base"
        hinge="none"
        print={<span className="print-small">Jaipur · Patna</span>}
      >
        <Panel
          className="front"
          label="Front"
          hinge="top"
          turn={180}
          print={<Wordmark />}
        />
        <Panel
          className="right"
          label="Side"
          hinge="left"
          turn={90}
          print={
            <div className="print-list">
              <span>Corrugated boxes</span>
              <span>Mono cartons</span>
              <span>Kraft paper</span>
            </div>
          }
        />
        <Panel
          className="left"
          label="Side"
          hinge="right"
          turn={-90}
          print={
            <div className="print-icons">
              <ArrowUp size={30} strokeWidth={2.4} />
              <Umbrella size={26} strokeWidth={2.2} />
              <Recycle size={26} strokeWidth={2.2} />
            </div>
          }
        />
        <Panel
          className="back"
          label="Back"
          hinge="bottom"
          print={<span className="print-small">thebalajigroup.in</span>}
        >
          <Panel
            className="lid"
            label="Lid"
            hinge="bottom"
            turn={180}
            print={<img className="print-mark" src={withBase('/brand-mark.svg')} alt="" />}
          />
        </Panel>
      </Panel>
    </div>
  </div>
);

export default FoldingCarton;
