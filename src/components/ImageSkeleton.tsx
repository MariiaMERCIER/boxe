export function ImageSkeleton() {
  const images = [
    {
      id: 1,
      url: "http://www.w3.org/2000/svg",
    },
    {
      id: 2,
      url: "http://www.w3.org/2000/svg",
    },
    {
      id: 3,
      url: "http://www.w3.org/2000/svg",
    },
    {
      id: 4,
      url: "http://www.w3.org/2000/svg",
    },
  ];

  return (
    <div className="flex animate-pulse flex-wrap items-center gap-8 h-full w-full">
      <div className="flex flex-wrap gap-6">
        {images.map((image) => (
          <svg
            key={image.id}
            xmlns={image.url}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-64 text-gray-500 h-72  bg-gray-300 rounded-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}
