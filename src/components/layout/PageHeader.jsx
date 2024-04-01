export default function PageHeader({ children }) {
  return (
    <div className="bg-white shadow">
      <div className="lg:mx-auto lg:max-w-6xl">
        <div className="py-3 md:flex md:items-center md:justify-between lg:border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
}
