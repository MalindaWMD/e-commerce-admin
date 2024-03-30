export default function PageHeader({ children }) {
  return (
    <div className="bg-white shadow">
      <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
        <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
          { children }
        </div>
      </div>
    </div>
  );
}
