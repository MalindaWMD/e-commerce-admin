import Layout from "../components/layout/Layout";
import ProductForm from "../components/products/ProductForm";

export default function AddProduct() {
  return (
    <Layout>
      <div className="relative flex flex-col">
        <ProductForm />
      </div>
    </Layout>
  );
}
