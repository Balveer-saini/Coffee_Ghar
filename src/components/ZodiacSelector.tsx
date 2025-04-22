import React from 'react';

interface ZodiacSelectorProps {
  selectedSign: string | null;
  onSelectSign: (sign: string) => void;
}

const ZodiacSelector: React.FC<ZodiacSelectorProps> = ({ selectedSign, onSelectSign }) => {
  const zodiacSigns = [
    { name: 'Aries', dates: 'Mar 21 - Apr 19', element: 'Fire' },
    { name: 'Taurus', dates: 'Apr 20 - May 20', element: 'Earth' },
    { name: 'Gemini', dates: 'May 21 - Jun 20', element: 'Air' },
    { name: 'Cancer', dates: 'Jun 21 - Jul 22', element: 'Water' },
    { name: 'Leo', dates: 'Jul 23 - Aug 22', element: 'Fire' },
    { name: 'Virgo', dates: 'Aug 23 - Sep 22', element: 'Earth' },
    { name: 'Libra', dates: 'Sep 23 - Oct 22', element: 'Air' },
    { name: 'Scorpio', dates: 'Oct 23 - Nov 21', element: 'Water' },
    { name: 'Sagittarius', dates: 'Nov 22 - Dec 21', element: 'Fire' },
    { name: 'Capricorn', dates: 'Dec 22 - Jan 19', element: 'Earth' },
    { name: 'Aquarius', dates: 'Jan 20 - Feb 18', element: 'Air' },
    { name: 'Pisces', dates: 'Feb 19 - Mar 20', element: 'Water' }
  ];

  const getElementColor = (element: string) => {
    switch (element) {
      case 'Fire': return 'bg-red-100 text-red-800';
      case 'Earth': return 'bg-green-100 text-green-800';
      case 'Air': return 'bg-blue-100 text-blue-800';
      case 'Water': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-amber-900 mb-4">Select Your Zodiac Sign</h3>
      <p className="text-gray-600 mb-6">
        Your zodiac sign influences your taste preferences and personality traits.
      </p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {zodiacSigns.map((sign) => (
          <button
            key={sign.name}
            onClick={() => onSelectSign(sign.name)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedSign === sign.name
                ? 'border-amber-700 bg-amber-50'
                : 'border-gray-200 hover:border-amber-300'
            }`}
          >
            <div className="text-center">
              <h4 className="font-bold text-amber-900">{sign.name}</h4>
              <p className="text-xs text-gray-500 mt-1">{sign.dates}</p>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${getElementColor(sign.element)}`}>
                {sign.element}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ZodiacSelector;