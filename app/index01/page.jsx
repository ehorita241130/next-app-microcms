import Link from 'next/link';//Added.
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
const sty4B = {color:'blue', fontSize:'17px'}
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
  return (
    <div style={sty3}>
    <Link href='/' style={clrGreen1}>←Top-page</Link>
    <main className={styles.main}>
      <h1> JSON.stringify(data)：</h1>
      <div className={styles.center}>
        <pre style={sty4B}>
        {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </main>
    </div>
  )
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
