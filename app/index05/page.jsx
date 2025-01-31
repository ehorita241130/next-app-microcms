/*堀
######################################################################
 File: "page.jsx".
 On nepi40 : (*home-common="/cygdrive/g/home2/"):
 (concat *home-common 
   "microCMS_250123/005_next_microCMS_app/next-app-microcms/app/index05/"
   "page.jsx")
 By Horita.
 On (2025 Jan 31).
######################################################################
*/
'use client';
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import Link from 'next/link';//Added.
import parse from 'html-react-parser';
import Image from "next/image";
//**********************************************************************
import styles from '@/app/page.module.css';
import { client } from '@/lib/client';
import { trcLev } from '@/lib/constants';
import { useRouter } from 'next/navigation';//Added
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export const dynamic='force-dynamic';//Added on 2025_1_30.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const crlBlue = {color:'blue'};
const clrGreen1 = {color:'green', fontSize:'20px'};
const sty3 = {margin: '2ex'};
const sty4 = {fontSize:'15px'}
const sty5 = {color:'blue', fontSize:'17px'}
const sty6 = {color:'red', fontSize:'17px'}
//**********************************************************************
export default function Page(){
  const router = useRouter();
  //======================================================================
  async function handleSubmit(formData){
    //'use server';
    const title = formData.get('title');
    console.log(`-- title=${title}`);
    try{
      let url2 = `/index05/${title}`;
      router.push(url2);
      router.refresh();
    }
    catch(err){
      console.log('-- err=');
      console.dir(err);
    }
  }
  //======================================================================
  return (
    <div style={sty3}>
      <Link href='/' style={clrGreen1}>←Top-page</Link>
      <h2>Show article by title：</h2>
      <form action={handleSubmit}>
        <input type='text' placeholder='Specify TITLE' name='title'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
  //======================================================================
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
