import React, { useState, useEffect } from 'react';
import { type SponsorCartonData } from './CartonViewer3D';

interface BottleViewer3DProps {
  carton: SponsorCartonData;
  scale?: number;
  autoSpin?: boolean;
  hideControls?: boolean;
  stageHeight?: number;
  translateYOffset?: number;
}

export function BottleViewer3D({
  carton,
  scale = 0.48,
  autoSpin = true,
  hideControls = false,
  stageHeight = 420,
  translateYOffset = 0
}: BottleViewer3DProps) {
  const [view, setView] = useState<'spin' | 'front' | 'sideA' | 'back' | 'sideB'>(
    autoSpin ? 'spin' : 'front'
  );
  const [rotation, setRotation] = useState({ rx: -8, ry: -25 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

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
      rx: Math.max(-30, Math.min(25, prev.rx - dy * 0.25)),
      ry: prev.ry + dx * 0.45
    }));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const setFixedView = (targetView: 'front' | 'sideA' | 'back' | 'sideB') => {
    setView(targetView);
    const viewAngles: Record<'front' | 'sideA' | 'back' | 'sideB', number> = {
      front: 0,
      sideA: -90,
      back: -180,
      sideB: -270
    };
    setRotation({ rx: -8, ry: viewAngles[targetView] });
  };

  // 8-faceted cylindrical prism label wrapping around the bottle
  // Circumference is approx 8 * 90px = 720px (radius ~ 114px)
  const facets = [
    { key: 'f0', angle: 0, html: carton.panels.front, bright: 1 },
    { key: 'f1', angle: 45, html: carton.panels.sideA, bright: 0.95 },
    { key: 'f2', angle: 90, html: carton.panels.sideA, bright: 0.90 },
    { key: 'f3', angle: 135, html: carton.panels.back, bright: 0.85 },
    { key: 'f4', angle: 180, html: carton.panels.back, bright: 0.82 },
    { key: 'f5', angle: 225, html: carton.panels.sideB, bright: 0.85 },
    { key: 'f6', angle: 270, html: carton.panels.sideB, bright: 0.90 },
    { key: 'f7', angle: 315, html: carton.panels.front, bright: 0.95 }
  ];

  return (
    <div
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
          perspective: '2200px',
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
          {/* 3D Bottle Assembly */}
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
            {/* Water Shadow Plane */}
            <div
              style={{
                position: 'absolute',
                left: '-110px',
                top: '320px',
                width: '220px',
                height: '70px',
                background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0) 70%)',
                transform: 'rotateX(90deg) translateZ(0)',
                pointerEvents: 'none'
              }}
            />

            {/* Translucent PET Bottle Inner Cylinder Body */}
            <div
              style={{
                position: 'absolute',
                left: '-105px',
                top: '-310px',
                width: '210px',
                height: '630px',
                borderRadius: '35px 35px 28px 28px',
                background: 'linear-gradient(105deg, rgba(230,248,255,0.72) 0%, rgba(185,225,255,0.35) 25%, rgba(255,255,255,0.75) 45%, rgba(170,215,255,0.3) 70%, rgba(200,235,255,0.65) 100%)',
                border: '2.5px solid rgba(23,23,23,0.85)',
                boxShadow: 'inset 0 0 25px rgba(80,180,255,0.4), 0 10px 30px rgba(0,0,0,0.12)',
                transform: 'translateZ(0)',
                pointerEvents: 'none',
                overflow: 'hidden'
              }}
            >
              {/* Molded Ergonomic Ribs & Liquid Water Waves */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '10px',
                  right: '10px',
                  height: '8px',
                  borderRadius: '99px',
                  background: 'rgba(255,255,255,0.6)',
                  boxShadow: '0 12px 0 rgba(0,0,0,0.06), 0 24px 0 rgba(255,255,255,0.4)'
                }}
              />
              {/* Bottom Grip Grooves */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '18px',
                  left: '14px',
                  right: '14px',
                  height: '6px',
                  borderRadius: '99px',
                  background: 'rgba(255,255,255,0.6)',
                  boxShadow: '0 -10px 0 rgba(0,0,0,0.06), 0 -20px 0 rgba(255,255,255,0.4)'
                }}
              />
              {/* Glass Specular Glare */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '18px',
                  width: '16px',
                  height: '100%',
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.75), rgba(255,255,255,0))',
                  borderRadius: '99px'
                }}
              />
            </div>

            {/* Tapered Bottle Shoulder (Neck Transition) */}
            <div
              style={{
                position: 'absolute',
                left: '-70px',
                top: '-375px',
                width: '140px',
                height: '75px',
                clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
                background: 'linear-gradient(135deg, rgba(240,250,255,0.85) 0%, rgba(180,225,255,0.45) 50%, rgba(255,255,255,0.8) 100%)',
                border: '2px solid rgba(23,23,23,0.8)',
                transform: 'translateZ(10px)',
                pointerEvents: 'none'
              }}
            />

            {/* Threaded Screw Neck Ring */}
            <div
              style={{
                position: 'absolute',
                left: '-32px',
                top: '-405px',
                width: '64px',
                height: '35px',
                background: 'linear-gradient(90deg, #f0f0f0, #ffffff 40%, #e0e0e0)',
                border: '2px solid var(--ink)',
                borderRadius: '4px',
                transform: 'translateZ(12px)',
                boxShadow: '0 3px 0 var(--ink)'
              }}
            />

            {/* High-Contrast Brand Cap (Matching Sponsor Roof Color) */}
            <div
              style={{
                position: 'absolute',
                left: '-34px',
                top: '-435px',
                width: '68px',
                height: '34px',
                background: carton.roof,
                color: carton.roofink,
                border: '2.5px solid var(--ink)',
                borderRadius: '8px 8px 3px 3px',
                boxShadow: '0 4px 0 var(--ink), inset 0 2px 5px rgba(255,255,255,0.4)',
                transform: 'translateZ(15px)',
                display: 'grid',
                placeItems: 'center',
                font: "900 11px/1 'Space Grotesk', sans-serif",
                letterSpacing: '0.04em'
              }}
            >
              POP!
            </div>

            {/* 360-Degree Wraparound Custom Brand Label (Cylindrical Facets) */}
            {facets.map(f => (
              <div
                key={f.key}
                style={{
                  position: 'absolute',
                  left: '-48px',
                  top: '-150px',
                  width: '96px',
                  height: '340px',
                  transform: `rotateY(${f.angle}deg) translateZ(107px)`,
                  backfaceVisibility: 'hidden',
                  filter: `brightness(${f.bright})`,
                  overflow: 'hidden',
                  background: '#fff',
                  borderTop: '2px solid var(--ink)',
                  borderBottom: '2px solid var(--ink)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: `-${(f.angle / 360) * 300}px`,
                    top: '-180px',
                    width: '300px',
                    height: '760px',
                    transform: 'scale(0.85)',
                    transformOrigin: '0 0'
                  }}
                  dangerouslySetInnerHTML={{ __html: f.html }}
                />
              </div>
            ))}

            {/* Floating Brand Badge Flag on Bottle Front */}
            <div
              style={{
                position: 'absolute',
                left: '-75px',
                top: '-70px',
                width: '150px',
                background: 'var(--lime)',
                border: '2px solid var(--ink)',
                borderRadius: '99px',
                padding: '6px 10px',
                textAlign: 'center',
                boxShadow: '3px 3px 0 var(--ink)',
                transform: 'translateZ(125px)',
                pointerEvents: 'none'
              }}
            >
              <div style={{ font: "900 12px/1 'Space Grotesk', sans-serif", color: 'var(--ink)' }}>
                {carton.name.toUpperCase()}
              </div>
              <div style={{ font: "700 8.5px/1 'JetBrains Mono', monospace", color: '#333', marginTop: '3px' }}>
                500 ML · PET BOTTLE
              </div>
            </div>
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
              {f === 'front' ? 'Front Label' : f === 'sideA' ? 'Story Side' : f === 'back' ? 'QR Code' : 'Brand Belief'}
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
