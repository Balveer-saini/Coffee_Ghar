import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Droplet, Leaf, Thermometer, Cookie } from 'lucide-react';

interface CustomCoffeeOptions {
  milk: string;
  beans: string;
  roast: string;
  flavor: string[];
  sweetener: string;
  size: string;
  temperature: string;
}

const CustomCoffee = () => {
  const [customization, setCustomization] = useState<CustomCoffeeOptions>({
    milk: '',
    beans: '',
    roast: '',
    flavor: [],
    sweetener: '',
    size: 'medium',
    temperature: 'hot'
  });

  const milkOptions = [
    { value: 'whole', label: 'Whole Milk' },
    { value: 'skim', label: 'Skim Milk' },
    { value: 'oat', label: 'Oat Milk' },
    { value: 'almond', label: 'Almond Milk' },
    { value: 'soy', label: 'Soy Milk' },
    { value: 'coconut', label: 'Coconut Milk' }
  ];

  const beanOptions = [
    { value: 'arabica', label: 'Arabica' },
    { value: 'robusta', label: 'Robusta' },
    { value: 'colombian', label: 'Colombian' },
    { value: 'ethiopian', label: 'Ethiopian' },
    { value: 'brazilian', label: 'Brazilian' }
  ];

  const roastLevels = [
    { value: 'light', label: 'Light Roast' },
    { value: 'medium', label: 'Medium Roast' },
    { value: 'dark', label: 'Dark Roast' },
    { value: 'espresso', label: 'Espresso Roast' }
  ];

  const flavorOptions = [
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'caramel', label: 'Caramel' },
    { value: 'hazelnut', label: 'Hazelnut' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'cinnamon', label: 'Cinnamon' },
    { value: 'pumpkin', label: 'Pumpkin Spice' }
  ];

  const sweetenerOptions = [
    { value: 'none', label: 'No Sweetener' },
    { value: 'sugar', label: 'Regular Sugar' },
    { value: 'brown', label: 'Brown Sugar' },
    { value: 'honey', label: 'Honey' },
    { value: 'stevia', label: 'Stevia' },
    { value: 'agave', label: 'Agave Nectar' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCustomization(prev => ({ ...prev, [name]: value }));
  };

  const handleFlavorChange = (flavor: string) => {
    setCustomization(prev => ({
      ...prev,
      flavor: prev.flavor.includes(flavor)
        ? prev.flavor.filter(f => f !== flavor)
        : [...prev.flavor, flavor]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Custom coffee order:', customization);
    alert('Your custom coffee has been added to the cart!');
  };

  return (
    <div className="min-h-screen pt-16 bg-amber-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Coffee size={48} className="text-amber-700" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Customize Your Perfect Coffee</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create your own unique coffee blend by selecting from our premium ingredients and customization options.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Milk Selection */}
              <div>
                <label className="block text-gray-700 font-medium mb-4 flex items-center">
                  <Droplet size={20} className="mr-2 text-amber-700" />
                  Choose Your Milk
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {milkOptions.map(option => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                        customization.milk === option.value
                          ? 'border-amber-700 bg-amber-50'
                          : 'border-gray-200 hover:border-amber-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="milk"
                        value={option.value}
                        checked={customization.milk === option.value}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Bean Selection */}
              <div>
                <label className="block text-gray-700 font-medium mb-4 flex items-center">
                  <Coffee size={20} className="mr-2 text-amber-700" />
                  Select Coffee Beans
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {beanOptions.map(option => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                        customization.beans === option.value
                          ? 'border-amber-700 bg-amber-50'
                          : 'border-gray-200 hover:border-amber-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="beans"
                        value={option.value}
                        checked={customization.beans === option.value}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Roast Level */}
              <div>
                <label className="block text-gray-700 font-medium mb-4 flex items-center">
                  <Thermometer size={20} className="mr-2 text-amber-700" />
                  Choose Roast Level
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {roastLevels.map(option => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                        customization.roast === option.value
                          ? 'border-amber-700 bg-amber-50'
                          : 'border-gray-200 hover:border-amber-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="roast"
                        value={option.value}
                        checked={customization.roast === option.value}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Flavors */}
              <div>
                <label className="block text-gray-700 font-medium mb-4 flex items-center">
                  <Leaf size={20} className="mr-2 text-amber-700" />
                  Add Flavors (Multiple Selection)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {flavorOptions.map(option => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                        customization.flavor.includes(option.value)
                          ? 'border-amber-700 bg-amber-50'
                          : 'border-gray-200 hover:border-amber-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={customization.flavor.includes(option.value)}
                        onChange={() => handleFlavorChange(option.value)}
                        className="hidden"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sweetener */}
              <div>
                <label className="block text-gray-700 font-medium mb-4 flex items-center">
                  <Cookie size={20} className="mr-2 text-amber-700" />
                  Choose Sweetener
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {sweetenerOptions.map(option => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                        customization.sweetener === option.value
                          ? 'border-amber-700 bg-amber-50'
                          : 'border-gray-200 hover:border-amber-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="sweetener"
                        value={option.value}
                        checked={customization.sweetener === option.value}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size and Temperature */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-700 font-medium mb-4">Size</label>
                  <select
                    name="size"
                    value={customization.size}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="small">Small (8 oz)</option>
                    <option value="medium">Medium (12 oz)</option>
                    <option value="large">Large (16 oz)</option>
                    <option value="extra-large">Extra Large (20 oz)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-4">Temperature</label>
                  <select
                    name="temperature"
                    value={customization.temperature}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="hot">Hot</option>
                    <option value="iced">Iced</option>
                    <option value="extra-hot">Extra Hot</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="px-8 py-4 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors flex items-center space-x-2 text-lg"
                >
                  <Coffee size={24} />
                  <span>Create My Custom Coffee</span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomCoffee;