import React from 'react'

const ResourcesLinks = () => {
 const links = ["Support", "Privacy Policy", "Terms & Conditions",];

 return (
   <div className="flex flex-col justify-start gap-6">
     <p className="text-xl font-bold">Resources</p>
     <div className="flex flex-col gap-2">
       {links.map((val, idx) => (
         <p>{val}</p>
       ))}
     </div>
   </div>
 );
}

export default ResourcesLinks
