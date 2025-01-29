//堀:~/microCMS_250123/005_next_microCMS_app/next-app-microcms/app/page.tsx
import Link from 'next/link';//Added.
import styles from '@/app/page.module.css'
import { client } from '@/lib/client'
import { trcLev } from '@/lib/constants'
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//const trcLev = 1;
const sty1 = {padding: '2ex'};
const sty2 = {margin: '1ex'};
const sty3 = {margin: '2ex'};
const clrBlue = {color:'blue'};
const clrBlue1 = {color:'blue', fontSize:'20px'};
const clrGreen = {color:'green'};
const clrGreen1 = {color:'green', fontSize:'20px'};
//**********************************************************************
export default async function Home(){
  return (
    <div style={sty3}>
      <h1>Top-Page of next-app-microcms</h1>
      <h2 style={clrBlue}>Links：</h2>
      <ul style={sty2}>
        <li style={sty2}>
        <Link href='/index00' style={clrGreen1}>→Original Next.js to-page</Link>
        </li>
        <li style={sty2}>
          <Link href='/index01' style={clrGreen1}>→microCMS test page, No.1</Link>
        </li>
        <li style={sty2}>
          <Link href='/index02' style={clrGreen1}>→microCMS test page, No.2</Link>
        </li>
        <li style={sty2}>
          <Link href='/index03' style={clrGreen1}>→microCMS test page, No.3</Link>
        </li>
      </ul>
    </div>
  )
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
