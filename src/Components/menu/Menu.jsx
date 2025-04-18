// import React from 'react'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faXmark,faTrash,faDownload, faBug} from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// export default function Menu({hidden,setHidden}) {
//   return (
//     <div className={`h-lvh w-1/5 bg-white border-r border-gray-300 p-5 ${hidden ? 'hidden': '' }`}>
//         <header className='flex text-center justify-between py-4 text-xl  border-b border-gray-300'>
//             <span>Menu Bar</span>
//             <span className='cursor-pointer' onClick={()=>setHidden(true)}><FontAwesomeIcon icon={faXmark} /></span>
//         </header>
//         <div className='py-4 text-gray-400'>
//           <span className=' '>Stroke Color</span>
//           <div className='flex justify-around my-6 cursor-pointer'>
//             <div className='border-gray-50 rounded-2xl w-10 h-10 bg-black'></div>
//             <div className='border-gray-50 rounded-2xl w-10 h-10 bg-blue-400'></div>
//             <div className='border-gray-50 rounded-2xl w-10 h-10 bg-amber-300'></div>
//             <div className='border-gray-50 rounded-2xl w-10 h-10 bg-green-500'></div>
//             <div className='border-gray-50 rounded-2xl w-10 h-10 bg-fuchsia-700'></div>
//           </div>
//           </div>
//           <div className='py-4 text-gray-400 '>
//            <span>Stroke</span>
//             <div className='border my-6 cursor-pointer h-2  w-40 rounded-2xl bg-gray-100 '></div>
//           </div>
//           <div className='py-4 text-gray-400'>
//           <span className=' '>Sketch Book Background</span>
//           <div className='flex justify-around my-6 cursor-pointer'>
//             <div className='border-gray-200 border-2 rounded-2xl w-10 h-10 bg-gray-200'></div>
//             <div className='border-gray-200 border-2 rounded-2xl w-10 h-10 bg-lime-200'></div>
//             <div className='border-gray-200 border-2 rounded-2xl w-10 h-10 bg-amber-200'></div>
//             <div className='border-gray-200 border-2 rounded-2xl w-10 h-10 bg-blue-200'></div>
//             <div className='border-gray-200 border-2 rounded-2xl w-10 h-10 bg-white2'></div>
//           </div>
//         </div>
//         <div className=' py-4 flex flex-col gap-5  border-b border-gray-200 text-gray-600'>
//           <span className='flex gap-3 items-center'><FontAwesomeIcon icon={faTrash} />reset Canvas</span>
//           <span className='flex gap-3 items-center'><FontAwesomeIcon icon={faDownload} />Export Image</span>
//           </div>

//         <div className='py-4 flex flex-col gap-5 text-gray-600'>
//           <span className='flex gap-3 items-center'><FontAwesomeIcon icon={faLinkedin} />LinkedIN</span>
//           <span className='flex gap-3 items-center'><FontAwesomeIcon icon={faGithub} />Git</span>
//           <span className='flex gap-3 items-center'><FontAwesomeIcon icon={faBug} />Report Bug</span>
//         </div>
        
//     </div>
//   )
// }
