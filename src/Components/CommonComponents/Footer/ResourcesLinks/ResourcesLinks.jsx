import React from 'react'

const ResourcesLinks = () => {
 const links = ["Support", "Privacy Policy", "Terms & Conditions",];

 return (
   <div className="flex flex-col justify-start gap-6">
     <p className="text-lg font-bold md:text-center lg:text-left lg:text-xl">
       Resources
     </p>
     <div className="flex flex-col gap-2 md:text-center lg:text-left">
       {links.map((val, idx) => (
         <p key={idx}>{val}</p>
       ))}
     </div>
   </div>
 );
}

export default ResourcesLinks
