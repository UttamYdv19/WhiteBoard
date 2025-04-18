import React from 'react'

export default function ExportImage({stageRef ,children}) {
    const handleExport = ()=>
        {
           const uri = stageRef.current.toDataURL();
           downloadURI(uri,"My-Export.png");
        }
      
         const downloadURI = (uri,name) =>
        {
         const link = document.createElement("a");
         link.download=name;
         link.href=uri;
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);
        }
  return (
    <div onClick={handleExport} style={{ display: 'inline-block' }}>
    {children}
  </div>
  )
}
