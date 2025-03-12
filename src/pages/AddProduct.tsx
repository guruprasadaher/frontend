import React, { useState } from 'react';
import { Upload, Plus, X, DollarSign, Calendar } from 'lucide-react';

const AddProduct = () => {
  const [images, setImages] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>(['']);

  const addFeature = () => {
    setFeatures([...features, '']);
  };

  const removeFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Add New Equipment</h1>
          <p className="text-gray-600 mt-2">List your agricultural equipment for rent</p>
        </div>

        <form className="bg-white rounded-lg shadow-md p-6 space-y-6">
          {/* Basic Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Equipment Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="e.g., John Deere 5E Series Tractor"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                  <option>Tractor</option>
                  <option>Harvester</option>
                  <option>Planter</option>
                  <option>Irrigation Equipment</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Images */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Equipment Images</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">
                Drag and drop images here, or click to select files
              </p>
              <p className="text-xs text-gray-500 mt-1">
                PNG, JPG up to 10MB each
              </p>
              <button
                type="button"
                className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Select Files
              </button>
            </div>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Brand</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Model</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Year</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Condition</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500">
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                  <option>Poor</option>
                </select>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Features</h2>
            {features.map((feature, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Add a feature"
                />
                {features.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="p-2 text-red-600 hover:text-red-800"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addFeature}
              className="mt-2 inline-flex items-center text-sm text-green-600 hover:text-green-800"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Another Feature
            </button>
          </div>

          {/* Pricing */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Daily Rate</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    className="pl-10 block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Minimum Rental Period (days)</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    className="pl-10 block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                    placeholder="1"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Description</h2>
            <textarea
              rows={4}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              placeholder="Provide a detailed description of your equipment..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              List Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;