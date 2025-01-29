import Link from 'next/link';//Added.
import parse from 'html-react-parser';
import Image from "next/image";
//**********************************************************************
import styles from '@/app/page.module.css';
import { client } from '@/lib/client';
import { trcLev } from '@/lib/constants';
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//const trcLev = 1;
const crlBule = {color:'blue'};
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
  let content0 = contents[0];
  let pbTime0 = content0.publishedAt;
  let title0 = content0.title; 
  let description0 = content0.description; 
  let content0C = content0.content;
  if( trcLev >= 2 ){
    console.log('-- content0C=\n', content0C);
  }
  let elmContent0C = parse(content0C);
  let thumb0 = content0.thumbnail;
  let thumb0_url = thumb0.url;
  if( trcLev >= 2 ){
    console.log('-- thumb0_url=');
    console.dir(thumb0_url);
  }
  let thumb0_width = thumb0.width; 
  let thumb0_height = thumb0.height; 
  //======================================================================
  return (
    <div style={sty3}>
    <Link href='/' style={clrGreen1}>←Top-page</Link>
    <main>
      <div style={sty5}>
        <p>totalCount={totalCount}</p>
        <p>pbTime0={pbTime0}</p>
        <p>title0={title0}</p>
        <p>description0={description0}</p>
        <p>content0C：</p>
        <div style={sty6}>{elmContent0C}</div>
        <p>thumb0：</p>
        <Image src={thumb0_url} width={thumb0_width/10} height={thumb0_height/10} alt='thumb0' />
      </div>
      <hr/>
      <h1>JSON.stringify(content0)：</h1>
      <div className={styles.center}>
        <pre style={sty5}>
        {JSON.stringify(content0, null, 2)}
        </pre>
      </div>
    </main>
    </div>
  );
  //======================================================================
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
