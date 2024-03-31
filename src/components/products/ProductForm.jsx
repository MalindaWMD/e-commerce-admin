import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import CurrencyInput from "../inputs/CurrencyInput";
import SelectPicker from "../inputs/SelectPicker";
import { brands } from "../../data/brands";
import { categories } from "../../data/categories";
import TagsInput from "react-tagsinput";

export default function ProductForm({ product }) {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [tags, setTags] = useState([]);

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
      <div className="shadow sm:rounded-md sm:overflow-hidden mb-6">
        <div className="px-4 py-6 space-y-8 bg-white divide-y divide-gray-200 sm:p-6">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              General information
            </h3>
            <div className="grid grid-cols-6 gap-6 mt-8">
              <div className="col-span-6 sm:col-span-4">
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6">
                <label
                  for="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows="3"
                    className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  ></textarea>
                  <span className="text-xs text-red-500"></span>
                </div>
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <SelectPicker
                  className="mt-1"
                  selected={null}
                  options={categories}
                  onChange={handleSelectChange}
                />
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Brand
                </label>
                <SelectPicker
                  className="mt-1"
                  selected={null}
                  options={brands}
                  onChange={handleSelectChange}
                />
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tags
                </label>

                <TagsInput
                 value={tags}
                 onChange={(tags) => setTags(tags)}
                 className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border py-1.5 px-1.5"
                />
              </div>
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Images
                </label>
                <div className="mt-2">
                  <div className="flex flex-col items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    {/* Preview */}
                    <div className="grid w-full grid-cols-6 gap-4 mb-3">
                      {imagePreviews.map((file, index) => {
                        return (
                          <div
                            key={"image-" + index}
                            className="relative bg-gray-100 bg-center bg-cover rounded shadow-md h-28 w-28"
                            style={{ backgroundImage: `url(${file})` }}
                          >
                            <button
                              type="button"
                              className="absolute text-white bg-red-400 -right-2 -top-2 hover:text-gray-300 r-0 rounded-2xl"
                              onClick={() => handleRemovePreview(index)}
                            >
                              <XMarkIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    {/* Actions */}
                    <div className="flex flex-col items-center justify-center max-w-sm space-y-1 text-center">
                      <svg
                        className="w-12 h-12 mx-auto text-gray-400"
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
                        <label className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500">
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
            <div className="grid grid-cols-6 gap-6 mt-8">
              <div className="col-span-6 sm:col-span-2">
                <label
                  for="qty"
                  className="block text-sm font-medium text-gray-700"
                >
                  SKU
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label
                  for="qty"
                  className="block text-sm font-medium text-gray-700"
                >
                  Barcode
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              {/* Spacer */}
              <div className="col-span-6 sm:col-span-2"></div>

              <div className="col-span-6 sm:col-span-2">
                <label
                  for="qty"
                  className="block text-sm font-medium text-gray-700"
                >
                  Initial quantity
                </label>
                <input
                  type="number"
                  min="1"
                  name="qty"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <label
                  for="qty"
                  className="block text-sm font-medium text-gray-700"
                >
                  Buffer level
                </label>
                <input
                  type="number"
                  min="1"
                  name="qty"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              {/* Spacer */}
              <div className="col-span-6 sm:col-span-2"></div>

              <div className="col-span-6 sm:col-span-2">
                <label
                  for=""
                  className="block text-sm font-medium text-gray-700"
                >
                  Buying price
                </label>
                <div className="relative rounded-md shadow-sm mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <CurrencyInput
                    name="buying_price"
                    min="1"
                    className="block w-full px-3 text-right border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 h-9 sm:text-sm"
                  />
                </div>
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label
                  for=""
                  className="block text-sm font-medium text-gray-700"
                >
                  Selling price
                </label>
                <div className="relative rounded-md shadow-sm mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <CurrencyInput
                    name="selling_price"
                    min="1"
                    className="block w-full px-3 text-right border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 h-9 sm:text-sm"
                  />
                </div>
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label
                  for=""
                  className="block text-sm font-medium text-gray-700"
                >
                  Discount price
                </label>
                <div className="relative rounded-md shadow-sm mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <CurrencyInput
                    name="discount_price"
                    min="1"
                    className="block w-full px-3 text-right border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 h-9 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 flex justify-between items-center bg-gray-50 sm:px-6">
          <a
            href="/products"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Cancel
          </a>

          <div>
            <button className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Save as draft
            </button>
            <button className="ml-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Publish
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
