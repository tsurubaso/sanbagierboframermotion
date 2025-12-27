"use client";
import MotionEffects from "@/components/MotionEffects";

const {
  DoubleMoveCube,
} = MotionEffects;


const box = {
    width: 100,
    height: 100,
    backgroundColor: "#0cdcf7",
    borderRadius: 5,
}

export default function Training1() {
  return (
<main className="min-h-screen bg-gradient-to-br from-purple-700 to-pink-400 flex items-center justify-center gap-12">
  <DoubleMoveCube scaleHover={[null, 1.2, 1.8]} />
<DoubleMoveCube scaleHover={[null, 1.05, 1.3]} />
<DoubleMoveCube duration={0.8} />
  <div style={box} className="transition-transform duration-700 hover:scale-125" />
</main>

  );
}
