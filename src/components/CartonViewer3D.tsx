import React, { useState, useEffect } from 'react';
import cartonDataRaw from '../carton-full-data.json';

export interface SponsorCartonData {
  id: string;
  name: string;
  tag: string;
  desc: string;
  roof: string;
  roofink: string;
  className: string;
  panels: {
    front: string;
    sideA: string;
    back: string;
    sideB: string;
  };
}

export const SPONSOR_CARTONS: SponsorCartonData[] = cartonDataRaw as SponsorCartonData[];

interface InteractiveCarton3DProps {
  carton: SponsorCartonData;
  scale?: number;
  autoSpin?: boolean;
  hideControls?: boolean;
  stageHeight?: number;
  translateYOffset?: number;
}

export function InteractiveCarton3D({
  carton,
  scale = 0.44,
  autoSpin = true,
  hideControls = false,
  stageHeight = 440,
  translateYOffset = 30
}: InteractiveCarton3DProps) {
  const [view, setView] = useState<'spin' | 'front' | 'sideA' | 'back' | 'sideB'>(
    autoSpin ? 'spin' : 'front'
  );
  const [rotation, setRotation] = useState({ rx: -10, ry: -25 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Official dimensions from original dieline
  // Panel width = 300px, Panel height = 760px
  // Distance from center to faces = 150px
  // Slanted gable: base = 150px, gable peak height = 110px => slant length L = sqrt(150^2 + 110^2) = 186px
  // Inward slant angle from vertical = atan(150 / 110) = 53.74 deg
  // In CSS 3D: Front face is at translateZ(150px) translateY(-380px).
  // Slanted roof face hinges at top edge: transformOrigin: '50% 100%'
  // When rotated inward, rotateX(-53.7deg) pitches the top edge inward toward Z=0.
  const W = 300;
  const H = 760;
  const halfW = 150;
  const halfH = 380;
  const roofH = 186;
  const gableH = 110;
  const finH = 24;

  useEffect(() => {
    if (view !== 'spin') return;
    let animId: number;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;
      setRotation(prev => ({
        ...prev,
        ry: (prev.ry - dt * 0.02) % 360
      }));
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [view]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setView('front');
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    setRotation(prev => ({
      rx: Math.max(-35, Math.min(25, prev.rx - dy * 0.25)),
      ry: prev.ry + dx * 0.45
    }));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const setFixedView = (targetView: 'front' | 'sideA' | 'back' | 'sideB') => {
    setView(targetView);
    const angles = {
      front: 0,
      sideA: -90,
      back: -180,
      sideB: -270
    };
    setRotation({ rx: -8, ry: angles[targetView] });
  };

  const panels = [
    { key: 'front', angle: 0, html: carton.panels.front, bright: 1 },
    { key: 'sideA', angle: 90, html: carton.panels.sideA, bright: 0.9 },
    { key: 'back', angle: 180, html: carton.panels.back, bright: 0.82 },
    { key: 'sideB', angle: 270, html: carton.panels.sideB, bright: 0.9 }
  ];

  return (
    <div
      className={carton.className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '100%',
        position: 'relative'
      }}
    >
      {/* 3D Viewport Stage */}
      <div
        style={{
          width: '100%',
          height: `${stageHeight}px`,
          perspective: '2400px',
          display: 'grid',
          placeItems: 'center',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          touchAction: 'none',
          position: 'relative',
          overflow: 'hidden'
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Scaler Wrapper */}
        <div
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateY(${translateYOffset}px) scale(${scale})`
          }}
        >
          {/* Carton 3D Container */}
          <div
            style={{
              position: 'relative',
              width: 0,
              height: 0,
              transformStyle: 'preserve-3d',
              transform: `rotateX(${rotation.rx}deg) rotateY(${rotation.ry}deg)`,
              transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.3, 0.7, 0.2, 1)'
            }}
          >
            {/* 4 Dieline Body Faces with Exact HTML Panels */}
            {panels.map(f => (
              <div
                key={f.key}
                className={`panel face f-${f.key}`}
                style={{
                  position: 'absolute',
                  left: `-${halfW}px`,
                  top: `-${halfH}px`,
                  width: `${W}px`,
                  height: `${H}px`,
                  transform: `rotateY(${f.angle}deg) translateZ(${halfW}px)`,
                  backfaceVisibility: 'hidden',
                  filter: `brightness(${f.bright})`,
                  overflow: 'hidden',
                  padding: '26px 24px 22px',
                  boxSizing: 'border-box'
                }}
                dangerouslySetInnerHTML={{ __html: f.html }}
              />
            ))}

            {/* Front & Back Slanted Roof Faces (Gable Slope) */}
            {[0, 180].map(deg => (
              <div
                key={deg}
                className="roof"
                style={{
                  position: 'absolute',
                  left: `-${halfW}px`,
                  width: `${W}px`,
                  height: `${roofH}px`,
                  top: `-${roofH}px`,
                  background: carton.roof,
                  color: carton.roofink,
                  transformOrigin: '50% 100%',
                  transform: `rotateY(${deg}deg) translateZ(${halfW}px) translateY(-${halfH}px) rotateX(53.7deg)`,
                  backfaceVisibility: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  border: 0,
                  boxSizing: 'border-box'
                }}
              >
                <div style={{ font: "900 34px/1 'Archivo', sans-serif", letterSpacing: '-1px' }}>
                  PAANI POP!
                </div>
                <div style={{ font: "700 11px/1 'JetBrains Mono', monospace", letterSpacing: '1px' }}>
                  FREE WATER · SPONSORED BY {carton.name.toUpperCase()}
                </div>
                {deg === 0 && (
                  <div
                    style={{
                      width: '46px',
                      height: '30px',
                      borderRadius: '6px',
                      background: carton.roofink,
                      marginTop: '6px'
                    }}
                  />
                )}
              </div>
            ))}

            {/* Left & Right Triangular Gables */}
            {[90, 270].map(deg => (
              <div
                key={deg}
                className="gable"
                style={{
                  position: 'absolute',
                  left: `-${halfW}px`,
                  width: `${W}px`,
                  height: `${gableH}px`,
                  top: `-${gableH}px`,
                  clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                  background: carton.roof,
                  transform: `rotateY(${deg}deg) translateZ(${halfW}px) translateY(-${halfH}px)`,
                  backfaceVisibility: 'hidden',
                  filter: 'brightness(0.85)'
                }}
              />
            ))}

            {/* Top Gable Fin (Seal line) */}
            <div
              className="fin"
              style={{
                position: 'absolute',
                left: `-${halfW}px`,
                top: '-24px',
                width: `${W}px`,
                height: `${finH}px`,
                borderRadius: '4px 4px 0 0',
                background: carton.roof,
                transform: `translateY(-${halfH + gableH}px)`
              }}
            />
          </div>
        </div>
      </div>

      {/* View Angle Switcher Controls (Only shown when not hideControls) */}
      {!hideControls && (
        <div
          className="views"
          style={{
            display: 'flex',
            gap: '8px',
            marginTop: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            zIndex: 10,
            position: 'relative'
          }}
        >
          {(['front', 'sideA', 'back', 'sideB'] as const).map(f => (
            <button
              key={f}
              type="button"
              style={{
                font: '700 13px/1 "DM Sans", sans-serif',
                border: '2px solid var(--ink)',
                background: view === f ? 'var(--ink)' : '#fff',
                color: view === f ? '#fff' : 'var(--ink)',
                padding: '9px 13px',
                borderRadius: '99px',
                cursor: 'pointer',
                minHeight: '38px',
                boxShadow: view === f ? 'inset 0 2px 4px rgba(0,0,0,0.2)' : 'none'
              }}
              onClick={() => setFixedView(f)}
            >
              {f === 'front' ? 'Front' : f === 'sideA' ? 'Side A' : f === 'back' ? 'Back' : 'Side B'}
            </button>
          ))}
          <button
            type="button"
            style={{
              font: '800 13px/1 "DM Sans", sans-serif',
              border: '2px solid var(--ink)',
              borderRadius: '99px',
              padding: '9px 15px',
              cursor: 'pointer',
              minHeight: '38px',
              background: view === 'spin' ? 'var(--lime)' : '#fff',
              color: 'var(--ink)',
              boxShadow: view === 'spin' ? '2px 2px 0 var(--ink)' : 'none'
            }}
            onClick={() => setView('spin')}
          >
            {view === 'spin' ? '⚡ Spinning' : 'Spin 3D'}
          </button>
        </div>
      )}
    </div>
  );
}
