import React from 'react'

const DashboardHeader
 = ({heading}) => {
  return (
    <div className="mt-8 flex items-center justify-between">
      <div className="grid gap-2">
        <p className="font-Plus-Jakarta-Sans text-2xl font-bold">{heading}</p>
        <div className="flex gap-5">
          <div className="flex gap-2">
            <div className="size-4">
              <img src="./icons/Import.png" alt="" />
            </div>
            <p className="text-xs">Import</p>
          </div>

          <div className="flex gap-2">
            <div className="size-4">
              <img src="./icons/Export.png" alt="" />
            </div>
            <p className="text-xs">Export</p>
          </div>
        </div>
      </div>

      <div>
        <button className=' bg-blue-lotus flex px-3 py-2 rounded-lg  items-center gap-2 text-white'>
          <div className="size-4">
            <img src="./icons/Plus.png" alt="" />
          </div>
          <p className=' text-xs'>Add</p>
        </button>
      </div>
    </div>
  );
}

export default DashboardHeader

