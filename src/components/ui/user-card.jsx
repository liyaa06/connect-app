 export default function UserCard({ title, description, tag, statusText }) {
  return (
    <div className="py-2 ">
      <div className="border border-gray-300 w-full rounded-lg p-4 flex flex-col justify-between gap-3 shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-lg md:text-xl font-bold text-black truncate" title={title}>
              {title}
            </p>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {description}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-xs md:text-sm font-semibold text-gray-500">{statusText}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="bg-gray-800 text-white text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
        </div>
      </div>
    </div>
  );
}