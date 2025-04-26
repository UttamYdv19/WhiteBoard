import { strokeColorContext } from "../../App";
import { useContext } from "react";

export default function useExportImage() {
  const { stageRef} = useContext(strokeColorContext) 
  const downloadURI = (uri,name) =>
    {
      const link = document.createElement("a");
      link.download=name;
      link.href=uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    const handleExport = ()=>
        {
           const uri = stageRef.current.toDataURL();
           downloadURI(uri,"My-Export.png");
        }
    return [handleExport]
}