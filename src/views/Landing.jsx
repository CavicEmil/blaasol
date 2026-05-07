import { Link } from 'react-router-dom';
import frivilligVideo from '/Frivilligvideo_16x9.mp4';

export default function Landing() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={frivilligVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 flex justify-center items-center h-full translate-y-50">
        <Link
          to="/signup"
          className="w-[90vw] px-8 py-4 bg-main-light text-center text-white text-accent-18px font-medium font-body hover:opacity-90 transition-opacity"
        >
          Bliv frivillig nu
        </Link>
      </div>
    </div>
  );
}