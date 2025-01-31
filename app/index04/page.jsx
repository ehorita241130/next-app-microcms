import Link from 'next/link';//Added.
import parse from 'html-react-parser';
import Image from "next/image";
//**********************************************************************
import styles from '@/app/page.module.css';
import { client } from '@/lib/client';
import { trcLev } from '@/lib/constants';
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
export default async function Home(){
  const data = await client.get({
    endpoint: 'blog',
  })
  if( trcLev >= 2 ){
    console.log('-- data=');
    console.dir(data);
  }
  let contents = data.contents;
  let totalCount = data.totalCount;
  //======================================================================
  function mapper1(content0, k){
    let pbTime0 = content0.publishedAt;
    let title0 = content0.title; 
    let description0 = content0.description; 
    return (
      <div key={k}>
        <h3>● Item{k}：</h3>
        <p>title={title0}</p>
        <p>pbTime{k}={pbTime0}</p>
        <p>description={description0}</p>
      </div>
    )
  }
  //======================================================================
  return (
    <div style={sty3}>
    <Link href='/' style={clrGreen1}>←Top-page</Link>
    <main>
      <p>totalCount={totalCount}</p>
      {contents.map(mapper1)}
    </main>
    </div>
  );
  //======================================================================
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
