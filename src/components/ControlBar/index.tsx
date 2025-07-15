import React from 'react'

export const ControlBar = () => {
  return (
    <div className='flex flex-col self-stretch shadow-[0px_0.5px_2px_0px_rgba(96,97,112,0.16),0px_0px_1px_0px_rgba(40,41,61,0.08)] rounded-[4px]'>
      {/* Top Bar with Tab and Action Button */}
      <div className='flex items-center w-[1364px] border-b border-[rgba(0,0,0,0.2)] bg-white'>
        <div className='flex items-center flex-grow'>
          <div className='flex items-center'>
            <div className='flex items-center h-[53px]'>
              {/* Search Tab (Active) */}
              <div className='flex items-center gap-1 px-4 py-4 border-b-2 border-[#EA580C]'>
                <div className='flex items-center justify-center w-4 h-4'>
                  <div className='relative w-4 h-4'>
                    {/* Assuming these are the correct SVGs based on previous download */}
                    <img
                      src='/src/assets/images/vector.svg'
                      alt='Search Icon Vector 1'
                      className='absolute w-4 h-4'
                    />
                    <img
                      src='/src/assets/images/vector.svg'
                      alt='Search Icon Vector 2'
                      className='absolute top-[1.5px] left-[1.5px] w-[13px] h-[13px] fill-[#EA580C]'
                    />
                  </div>
                </div>
                <span className='text-sm font-bold leading-[1.29] text-center text-[#EA580C]'>
                  Search
                </span>
              </div>
              {/* Placeholder for other potential tabs */}
            </div>
          </div>
        </div>
        <div className='flex items-center self-stretch justify-end'>
          <div className='flex items-center gap-4 px-4'>
            {/* Upload Invoice Button */}
            <button
              type='button'
              className='flex items-center justify-center gap-1 px-4 h-[33px] rounded-[4px] bg-[#EA580C]'
            >
              <span className='text-sm font-bold leading-[1.43] tracking-[0.035em] text-center text-white'>
                Upload Invoice
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Search Container */}
      <div className='flex items-center justify-between gap-4 px-4 py-2 w-[1364px] bg-white'>
        {/* Search Input Field */}
        <div className='flex flex-col gap-2 w-[663.39px]'>
          <div className='flex items-center self-stretch gap-2 px-4 py-2 border border-[rgba(0,0,0,0.38)] rounded-[4px]'>
            <div className='flex items-center'>
              <span className='text-sm leading-[1.43] text-[rgba(0,0,0,0.38)]'>
                Search by Invoice ID, Invoice No.
              </span>
            </div>
            <div className='flex-grow h-[calc(100%-16px)] w-px rounded-[1px]' />{' '}
            {/* Spacer - Adjusted height calculation might be needed */}
            <div className='flex items-center justify-center w-5 h-5'>
              <div className='relative w-5 h-5'>
                {/* Assuming these are the correct SVGs */}
                <img
                  src='/src/assets/images/vector.svg'
                  alt='Search Field Icon Vector 1'
                  className='absolute w-5 h-5'
                />
                <img
                  src='/src/assets/images/vector.svg'
                  alt='Search Field Icon Vector 2'
                  className='absolute top-[1.88px] left-[1.88px] w-[16.25px] h-[16.25px] fill-[rgba(0,0,0,0.87)]'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Count and More Actions Button */}
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-1'>
            <span className='text-sm font-bold leading-[1.5] text-[rgba(0,0,0,0.87)]'>20</span>
            <span className='text-sm leading-[1.43] text-[rgba(0,0,0,0.6)]'>Invoices</span>
          </div>
          <button
            type='button'
            className='flex flex-col items-center justify-center w-6 h-6 gap-2.5 rounded-full bg-white'
          >
            <div className='flex items-center justify-center w-5 h-5'>
              <div className='relative w-5 h-5'>
                {/* Assuming these are the correct SVGs */}
                <img
                  src='/src/assets/images/vector.svg'
                  alt='More Icon Vector 1'
                  className='absolute w-5 h-5'
                />
                {/* The second vector for the more_vert icon seems to be the dots themselves */}
                <img
                  src='/src/assets/images/vector.svg'
                  alt='More Icon Vector 2'
                  className='absolute top-[calc(50%-6.875px)] left-[calc(50%-0.625px)] w-[1.25px] h-[13.75px] fill-[rgba(0,0,0,0.87)]'
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
