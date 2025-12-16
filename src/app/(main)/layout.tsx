import React from 'react';
import MiniMenu from '@/components/MiniMenu';
import CardList from '@/components/CardList';

export default function MainPagesLayout({
    children,
    }: {
        children: React.ReactNode;
    }) {
    return (
       <>
       <main>
         {children}
         
         <MiniMenu />
         <CardList />
         </main>
       </>
     );
   }