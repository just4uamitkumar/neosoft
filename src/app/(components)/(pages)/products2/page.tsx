import Child from "./Child";

const Products2: React.FC = () => {
  return (
    <>
      <div>
        <h1
          id="main-heading"
          className="text-3xl font-bold text-gray-900 mt-6 mb-2 text-center focus:outline-none dark:text-gray-200"
          tabIndex={0} // Make focusable for screen readers
        >
          Product List
        </h1>
      </div>
      <Child />
    </>
  );
};

export default Products2;
