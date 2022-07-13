import {Link} from "react-router-dom";

const menuitems=[
        {title:"Home",
        path:"/",
        icons:''},

        {title:"About",
        path:"/about",
        icons:''},
     {title:"Clients",
        path:"/clients",
        icons:''},
     {title:"Contact",
        path:"/contacts",
        icons:''}
    ]


const Layout=({childern})=>{

     return (
         <div>
             <div className={"content"}>
                 {childern}
             </div>
             <div className={"fixed bottom-10 left-0 right-0"}>
                 <div className={"flex w-full justify-center"}>
                     {menuitems.map((item,index) =>(
                         <div className={`px-20 bg-primary py-5  ${index === 0 && "rounded-l"} ${index === menuitems.length-1 && "rounded-r"}`}>
                             <Link to={`${item.path}`} className={'text-secondary text-xl'}>{item.title}</Link>
                         </div>
                     ))}
                 </div>
             </div>
         </div>
     );
 }
 export default Layout;