import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function FlowingTrace({ d, color, delay, duration, fadeDelay, sw }: { d: string; color: string; delay: number; duration: number; fadeDelay?: number; sw: number }) {
  const ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const len = el.getTotalLength();

    el.style.transition = "none";
    el.style.strokeDasharray = len.toString();
    el.style.strokeDashoffset = len.toString();
    el.style.opacity = "1";

    const drawTimer = setTimeout(() => {
      el.style.transition = `stroke-dashoffset ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`;
      el.style.strokeDashoffset = "0";
    }, delay * 1000);

    const totalMs = (delay + duration + (fadeDelay ?? 0.3)) * 1000;
    const fadeTimer = setTimeout(function loop() {
      el.style.transition = "opacity 0.6s ease";
      el.style.opacity = "0";
      setTimeout(() => {
        el.style.transition = "none";
        el.style.strokeDashoffset = len.toString();
        el.style.opacity = "1";
        setTimeout(() => {
          el.style.transition = `stroke-dashoffset ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`;
          el.style.strokeDashoffset = "0";
          setTimeout(loop, (duration + (fadeDelay ?? 0.3) + 0.6) * 1000);
        }, 60);
      }, 700);
    }, totalMs);

    return () => { clearTimeout(drawTimer); clearTimeout(fadeTimer); };
  }, [d, delay, duration, fadeDelay]);

  return (
    <path ref={ref} d={d} fill="none" stroke={color}
      strokeWidth={sw} strokeLinejoin="round" strokeLinecap="round" />
  );
}

const PIN_COUNT = 8;
function Chip() {
  return (
    <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", top: -16, left: 0, right: 0, display: "flex", justifyContent: "space-around", padding: "0 14px" }}>
        {Array.from({ length: PIN_COUNT }).map((_, i) => (
          <div key={i} style={{ width: 3, height: 14, background: "#555", borderRadius: "2px 2px 0 0" }} />
        ))}
      </div>
      <div style={{ position: "absolute", bottom: -16, left: 0, right: 0, display: "flex", justifyContent: "space-around", padding: "0 14px" }}>
        {Array.from({ length: PIN_COUNT }).map((_, i) => (
          <div key={i} style={{ width: 3, height: 14, background: "#555", borderRadius: "0 0 2px 2px" }} />
        ))}
      </div>
      <div style={{
        background: "#1a1a1a",
        border: "1.5px solid #444",
        borderRadius: 8,
        padding: "14px 32px",
        fontFamily: "'Courier New', monospace",
        fontSize: 15,
        fontWeight: 700,
        color: "#888",
        letterSpacing: "0.2em",
        whiteSpace: "nowrap",
        zIndex: 1,
      }}>
        SF
      </div>
    </div>
  );
}

export default function PoweredBy() {
  const W = 300, H = 200;
  const cx = 150, chipTopY = 72, chipBotY = 128;
  const sw = 1.8;

  const aTopL   = { x: cx - 40, y: chipTopY };
  const aTopR   = { x: cx + 40, y: chipTopY };
  const aLeftT  = { x: cx - 62, y: chipTopY + 14 };
  const aLeftB  = { x: cx - 62, y: chipBotY - 14 };
  const aRightT = { x: cx + 62, y: chipTopY + 14 };
  const aRightB = { x: cx + 62, y: chipBotY - 14 };
  const aBotL   = { x: cx - 40, y: chipBotY };
  const aBotR   = { x: cx + 40, y: chipBotY };

  const traces = [
    { id: "a", color: "#c0cad6", delay: 0.1, dur: 2.0, fade: 0.4,
      d: `M${aTopL.x},${aTopL.y} L${aTopL.x},${aTopL.y-20} L${aTopL.x-36},${aTopL.y-20} L${aTopL.x-36},4 L4,4` },
    { id: "b", color: "#818cf8", delay: 0.4, dur: 2.2, fade: 0.3,
      d: `M${aTopR.x},${aTopR.y} L${aTopR.x},${aTopR.y-28} L${W-4},${aTopR.y-28}` },
    { id: "c", color: "#a78cf8", delay: 0.7, dur: 1.8, fade: 0.5,
      d: `M${aTopR.x},${aTopR.y} L${aTopR.x+18},${aTopR.y} L${aTopR.x+18},${aTopR.y-16} L${W-4},${aTopR.y-16}` },
    { id: "d", color: "#60a5fa", delay: 0.6, dur: 2.4, fade: 0.3,
      d: `M${aLeftT.x},${aLeftT.y} L${aLeftT.x-14},${aLeftT.y} L${aLeftT.x-14},${H-4}` },
    { id: "e", color: "#3b82f6", delay: 0.9, dur: 1.9, fade: 0.4,
      d: `M${aLeftB.x},${aLeftB.y} L${aLeftB.x-26},${aLeftB.y} L${aLeftB.x-26},${H-20} L4,${H-20}` },
    { id: "f", color: "#f472b6", delay: 0.3, dur: 2.1, fade: 0.35,
      d: `M${aRightT.x},${aRightT.y} L${aRightT.x+16},${aRightT.y} L${aRightT.x+16},${H-4}` },
    { id: "g", color: "#fb7185", delay: 0.8, dur: 2.0, fade: 0.4,
      d: `M${aRightB.x},${aRightB.y} L${aRightB.x+28},${aRightB.y} L${aRightB.x+28},${H-16} L${W-4},${H-16}` },
    { id: "h", color: "#e8609a", delay: 0.5, dur: 2.3, fade: 0.3,
      d: `M${aBotL.x},${aBotL.y} L${aBotL.x},${aBotL.y+18} L${aBotL.x-48},${aBotL.y+18} L${aBotL.x-48},${H-4}` },
    { id: "i", color: "#f06060", delay: 0.2, dur: 2.0, fade: 0.45,
      d: `M${aBotR.x},${aBotR.y} L${aBotR.x},${aBotR.y+28} L${W-4},${aBotR.y+28}` },
    { id: "j", color: "#7dd3fc", delay: 1.1, dur: 1.7, fade: 0.3,
      d: `M${aTopL.x},${aTopL.y} L${aTopL.x-18},${aTopL.y} L${aTopL.x-18},${aTopL.y+32} L4,${aTopL.y+32}` },
  ];

  return (
    <div style={{
      width: 300, height: 200,
      // background: "#080808",
      background: "transparent",
      borderRadius: 12,
      position: "relative",
      overflow: "hidden",
      flexShrink: 0,
    }}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(#ffffff04 1px, transparent 1px), linear-gradient(90deg, #ffffff04 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }} />

      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}
        style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <defs>
          <linearGradient id="rb3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="50%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>
        </defs>

        {traces.map(t => (
          <path key={t.id + "bg"} d={t.d} fill="none" stroke="#181818" strokeWidth={sw} strokeLinejoin="round" />
        ))}

        {[aTopL, aTopR, aLeftT, aLeftB, aRightT, aRightB, aBotL, aBotR].map((a, i) => (
          <circle key={i} cx={a.x} cy={a.y} r={2.5} fill="#2e2e2e" />
        ))}

        <path d={`M${cx+48},${chipTopY-8} L${W-4},${chipTopY-8}`}
          fill="none" stroke="url(#rb3)" strokeWidth={2} />
        <path d={`M${cx+54},${chipTopY-4} L${W-4},${chipTopY-4}`}
          fill="none" stroke="#f97316" strokeWidth={1} opacity={0.25} />

        {traces.map(t => (
          <FlowingTrace key={t.id} d={t.d} color={t.color}
            delay={t.delay} duration={t.dur} fadeDelay={t.fade} sw={sw} />
        ))}
      </svg>

      <div style={{
        position: "absolute",
        left: cx,
        top: (chipTopY + chipBotY) / 2,
        transform: "translate(-50%, -50%)",
        zIndex: 3,
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Chip />
        </motion.div>
      </div>
    </div>
  );
}