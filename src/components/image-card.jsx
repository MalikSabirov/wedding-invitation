export const ImageCard = ({ src, txt }) => {
  return (
    <div className="flex-1 relative overflow-hidden bg-black flex items-center justify-center">
      <img src={src} alt="groom" className="object-cover h-full w-full" />
      <div className="text-7xl absolute bottom-2 left-1/2 -translate-x-1/2 text-white font-light drop-shadow">
        {txt}
      </div>
    </div>
  );
};
