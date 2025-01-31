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
export default async function Page(context){//<1
  const params = await context.params;//New
  const title = params.title;
  console.log(`-- title=${title}`);
  const data = await client.get( { endpoint: 'blog'} );
  if( trcLev >= 2 ){
    console.log('-- data=');
    console.dir(data);
  }
  let contents = data.contents;
  let totalCount = data.totalCount;
  let elm = <p>To be defined.</p>;
  //======================================================================
  for(let k = 0; k < totalCount; ++k){//<2.___________________________BGN <LOOP.1>
    const content0 = contents[k];
    if( trcLev >= 2 ){
      console.log(`-- k=${k}`);
      console.log('-- content0=');
      console.dir(content0);
    }
    let title0 = content0.title; 
    let pbTime0 = content0.publishedAt;
    let description0 = content0.description;
    if( title0 == title ){//<3
      let content0C = content0.content;
      let elmContent0C = parse(content0C);
      let thumb0 = content0.thumbnail;
      let thumb0_url = thumb0.url;
      if( trcLev >= 2 ){//<4
        console.log('-- thumb0_url=');
        console.dir(thumb0_url);
      }//4>
      let thumb0_width = thumb0.width; 
      let thumb0_height = thumb0.height;
      elm = 
      <div key={k}>
        <h3>● Item{k}：</h3>
        <p>title：{title0}</p>
        <p>pbTime{k}：{pbTime0}</p>
        <p>description：{description0}</p>
        <p>content：</p>
        <div style={sty6}>{elmContent0C}</div>
        <p>thumb：</p>
        <Image src={thumb0_url} width={thumb0_width/10} height={thumb0_height/10} alt='thumb0' />
      </div>;
      break;//________________________________________________________EXT <LOOP.1>
    }//3>
  }//2>.______________________________________________________________END <LOOP.1>
  //======================================================================
  return (
    <div style={sty3}>
    <Link href='/' style={clrGreen1}>←Top-page</Link>
    <main>
      <p>totalCount={totalCount}</p>
      {elm}
    </main>
    </div>
  );
  //======================================================================
}//1>
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
