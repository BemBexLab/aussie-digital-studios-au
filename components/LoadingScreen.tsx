import React from 'react'

type LoadingScreenProps = {
  onComplete?: () => void
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  return (
    <section
      className='loading-screen fixed inset-0 z-[9999] bg-black flex items-center justify-center'
      onAnimationEnd={onComplete}
    >
      <div
        style={{
          backgroundImage: "url('/Group_1.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "20%",
          height: "20%",
        }}
      ></div>
    </section>
  )
}

export default LoadingScreen
