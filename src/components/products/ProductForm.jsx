import { useEffect, useState } from "react";
import TagsInput from "react-tagsinput";
import { XMarkIcon } from "@heroicons/react/24/outline";
import CurrencyInput from "../inputs/CurrencyInput";
import SelectPicker from "../inputs/SelectPicker";
import { brands } from "../../data/brands";
import { categories } from "../../data/categories";

export default function ProductForm({ product }) {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (product) {
      setTags(product.tags);
    }
  }, []);

  const handleSelectChange = (value) => {
    console.log(value);
  };

  const handleImageSelect = (e) => {
    let files = Array.from(e.target.files);
    if (files.length > 0) {
      let newPreviews = [...imagePreviews];

      files.forEach((file) => {
        newPreviews.push(URL.createObjectURL(file));
      });

      setImagePreviews(newPreviews);
    }
  };

  const handleRemovePreview = (index) => {
    let newPreviews = [...imagePreviews];
    newPreviews.splice(index, 1);
    setImagePreviews(newPreviews);
  };

  return (
    <form action="">
      <div className="mb-6 shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-8 divide-y divide-gray-200 bg-white px-4 py-6 sm:p-6">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              General information
            </h3>
            <div className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  defaultValue={product?.name}
                  className="focus:ring-primary-600 mt-1 block w-full rounded-md border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows="3"
                    defaultValue={product?.description}
                    className="focus:ring-primary-600 mt-1 block w-full rounded-md border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  ></textarea>
                  <span className="text-xs text-red-500"></span>
                </div>
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <SelectPicker
                  className="mt-1"
                  selected={product?.category_id}
                  options={categories}
                  onChange={handleSelectChange}
                />
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Brand
                </label>
                <SelectPicker
                  className="mt-1 "
                  selected={product?.brand_id}
                  options={brands}
                  onChange={handleSelectChange}
                />
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tags
                </label>

                <TagsInput
                  value={tags}
                  onChange={(tags) => setTags(tags)}
                  className="focus:ring-primary-600 mt-1 block w-full rounded-md border-0 px-2.5 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Images
                </label>
                <div className="mt-2">
                  <div className="flex flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pb-6 pt-5">
                    {/* Preview */}
                    <div className="mb-3 grid w-full grid-cols-6 gap-4">
                      {imagePreviews.map((file, index) => {
                        return (
                          <div
                            key={"image-" + index}
                            className="relative h-28 w-28 rounded bg-gray-100 bg-cover bg-center shadow-md"
                            style={{ backgroundImage: `url(${file})` }}
                          >
                            <button
                              type="button"
                              className="r-0 absolute -right-2 -top-2 rounded-2xl bg-red-400 text-white hover:text-gray-300"
                              onClick={() => handleRemovePreview(index)}
                            >
                              <XMarkIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    {/* Actions */}
                    <div className="flex max-w-sm flex-col items-center justify-center space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label className="text-primary-600 hover:text-primary-500 relative cursor-pointer rounded-md bg-white font-medium">
                          <span>Select files</span>
                          <input
                            id="file-upload"
                            type="file"
                            className="sr-only"
                            accept="image/png, image/gif, image/jpeg"
                            onChange={handleImageSelect}
                            onClick={(e) => (e.target.value = "")}
                            multiple
                          />
                        </label>
                        {/* <p className="pl-1">or drag and drop</p> */}
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 1MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Stocks
            </h3>
            <div className="mt-4 grid grid-cols-6 gap-6 sm:mt-8">
              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor="qty"
                  className="block text-sm font-medium text-gray-700"
                >
                  SKU
                </label>
                <input
                  type="text"
                  defaultValue={product?.stocks?.sku}
                  className="focus:ring-primary-600 mt-1 block w-full rounded-md border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor="qty"
                  className="block text-sm font-medium text-gray-700"
                >
                  Barcode
                </label>
                <input
                  type="text"
                  defaultValue={product?.stocks?.barcode}
                  className="focus:ring-primary-600 mt-1 block w-full rounded-md border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>

              {/* Spacer */}
              <div className="col-span-6  hidden sm:col-span-2 sm:block"></div>

              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor="qty"
                  className="block text-sm font-medium text-gray-700"
                >
                  Initial quantity
                </label>
                <input
                  type="number"
                  min="1"
                  name="qty"
                  defaultValue={product?.stocks?.qty}
                  className="focus:ring-primary-600 mt-1 block w-full rounded-md border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor="qty"
                  className="block text-sm font-medium text-gray-700"
                >
                  Buffer level
                </label>
                <input
                  type="number"
                  min="1"
                  name="qty"
                  defaultValue={product?.stocks?.buffer_level}
                  className="focus:ring-primary-600 mt-1 block w-full rounded-md border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>

              {/* Spacer */}
              <div className="col-span-6 hidden sm:col-span-2 sm:block"></div>

              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-700"
                >
                  Buying price
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <CurrencyInput
                    name="buying_price"
                    min="1"
                    value={product?.stocks?.buying_price.toString()}
                    className="focus:ring-primary-600 mt-1 block w-full rounded-md border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-700"
                >
                  Selling price
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <CurrencyInput
                    name="selling_price"
                    min="1"
                    value={product?.stocks?.selling_price.toString()}
                    className="focus:ring-primary-600 mt-1 block w-full rounded-md border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-700"
                >
                  Discount price
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <CurrencyInput
                    name="discount_price"
                    min="1"
                    value={product?.stocks?.discount_price.toString()}
                    className="focus:ring-primary-600 mt-1 block w-full rounded-md border-0 py-1.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between bg-gray-50 px-4 py-3 sm:px-6">
          <a
            href="/products"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Cancel
          </a>

          <div>
            <button className="bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-500 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2">
              Save as draft
            </button>
            <button className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 ml-3 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2">
              Publish
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
