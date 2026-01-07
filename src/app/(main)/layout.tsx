import React from 'react';


export default function MainPagesLayout({
    children,
    }: {
        children: React.ReactNode;
    }) {
    return (
       <>
       <main>
         {children}
         
         
         </main>
       </>
     );
   }