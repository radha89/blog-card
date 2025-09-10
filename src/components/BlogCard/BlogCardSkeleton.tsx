export function BlogCardSkeleton() {
  return (
    <div className="w-[340px] mt-[120px] rounded-lg bg-white shadow-[3px_3px_1px_rgba(0,0,0,0.03)] overflow-hidden">
      <div className="w-full h-[288px] bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 shimmer" />
      </div>

      <div className="w-[308px] flex flex-col mx-auto gap-3 py-4">
        <div className="w-[67px] h-[24px] bg-gray-200 rounded-[20px] relative overflow-hidden">
          <div className="absolute inset-0 shimmer" />
        </div>

        <div className="w-[308px] h-[28px] bg-gray-200 rounded relative overflow-hidden">
          <div className="absolute inset-0 shimmer" />
        </div>

        <div className="w-[308px] h-12 bg-gray-200 rounded relative overflow-hidden">
          <div className="absolute inset-0 shimmer" />
        </div>

        <div className="flex gap-2 mt-2 mb-6">
          <div className="w-20 h-6 bg-gray-200 rounded relative overflow-hidden">
            <div className="absolute inset-0 shimmer" />
          </div>
          <div className="w-5 h-5 bg-gray-200 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}