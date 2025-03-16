import React from 'react'

const ColourPallete = () => {

      const colors = [
        {
          category: 'Brand Colours',
          items: [
            { name: 'Primary Colour', hex: '#171A3A' },
            { name: 'Darker', hex: '#03062A' },
            { name: 'Lighter', hex: '#90388F' },
            { name: 'Subtle', hex: '#949CF4' },
          ],
        },
        {
          category: 'State Colours',
          items: [
            { name: 'Error', hex: '#8A1C1C' },
            { name: 'Warning', hex: '#E5B109' },
            { name: 'Info', hex: '#0B80D5' },
            { name: 'Success', hex: '#125E2D' },
          ],
        },
        {
          category: 'Grey Colours',
          items: [
            { name: 'Dark 1', hex: '#2C2A2A' },
            { name: 'Dark 2', hex: '#525252' },
            { name: 'Dark 3', hex: '#888C8C' },
            { name: 'White', hex: '#FFFFFF', textColor: 'text-black' },
          ],
        },
      ];
  return (
    <>
      <div className='w-full  py-12 px-6 flex flex-col items-center'>
        {colors.map((section, index) => (
          <div key={index} className='w-full max-w-4xl mb-12'>
            <h2 className='text-lg font-bold text-gray-800 border-b-2 border-gray-700 mb-4'>
              {section.category}
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              {section.items.map((color, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg p-4 flex flex-col items-center justify-center shadow-md`}
                  style={{ backgroundColor: color.hex }}
                >
                  <p
                    className={`text-white font-semibold ${
                      color.textColor || 'text-white'
                    }`}
                  >
                    {color.name}
                  </p>
                  <p className={`text-sm ${color.textColor || 'text-white'}`}>
                    {color.hex}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ColourPallete