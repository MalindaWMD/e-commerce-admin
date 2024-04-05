export default function PageHeader({ children }) {
  return (
    <div className="bg-white shadow">
      <div className="lg:mx-auto lg:max-w-6xl">
        <div className="py-3 px-3 sm:px-0 flex items-center justify-between lg:border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
}
