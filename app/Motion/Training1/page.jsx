"use client";
const box = {
    width: 100,
    height: 100,
    backgroundColor: "#0cdcf7",
    borderRadius: 5,
}

export default function Training1() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 to-pink-400 flex items-center justify-center">




        <motion.div
            style={box}
            /**
             * Setting the initial keyframe to "null" will use
             * the current value to allow for interruptable keyframes.
             */
            whileHover={{
                scale: [null, 1.1, 1.6],
                transition: {
                    duration: 0.5,
                    times: [0, 0.6, 1],
                    ease: ["easeInOut", "easeOut"],
                },
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
        />
    


/**
 * ==============   Styles   ================
 */






    </main>
  );
}
