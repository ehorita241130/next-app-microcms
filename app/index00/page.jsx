//堀:~/microCMS_250123/005_next_microCMS_app/next-app-microcms/app/index00/page.tsx
import Link from 'next/link';//Added.
import Image from "next/image";
import styles from "@/app/page.module.css";
//**********************************************************************
const crlBule = {color:'blue'};
const clrGreen1 = {color:'green', fontSize:'20px'};
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export default function Home(){
  const hr1 = "https://vercel.com/new?utm_source=create-next-app"+
        "&utm_medium=appdir-template&utm_campaign=create-next-app";
  const hr2 = "https://nextjs.org/docs?utm_source=create-next-app"+
        "&utm_medium=appdir-template&utm_campaign=create-next-app";
  const hr3 = "https://nextjs.org/learn?utm_source=create-next-app"+
        "&utm_medium=appdir-template&utm_campaign=create-next-app";
  const hr4 = "https://vercel.com/templates?framework=next.js"+
        "&utm_source=create-next-app&utm_medium=appdir-template"+
        "&utm_campaign=create-next-app";
  const hr5 = "https://nextjs.org?utm_source=create-next-app"+
        "&utm_medium=appdir-template&utm_campaign=create-next-app";
  const re1 = "noopener noreferrer"; 
  const im1 = 
    <Image className={styles.logo} src="/next.svg" alt="Next.js logo"
      width={180} height={38} priority />;
  const im2 = 
    <Image className={styles.logo} src="/vercel.svg" alt="Vercel logomark"
      width={20} height={20} />;
  const im3 =
    <Image aria-hidden src="/file.svg" alt="File icon" 
      width={16} height={16} />;
  const im4 = 
    <Image aria-hidden src="/window.svg" alt="Window icon"       
           width={16} height={16} />;
  const im5 =
    <Image aria-hidden src="/globe.svg" alt="Globe icon"
      width={16} height={16} />;
  //======================================================================
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href='/' style={clrGreen1}>←Top-page</Link>
        <h1 style={crlBule}>index00</h1>
        {im1}
        <ol>
          <li>Get started by editing <code>app/page.tsx</code>.</li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <div className={styles.ctas}>
          <a className={styles.primary} href={hr1} target="_blank" rel={re1}>
            {im2} Deploy now
          </a>
          <a href={hr2} target="_blank" rel={re1} className={styles.secondary}>
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a href={hr3} target="_blank" rel={re1}>
          {im3} Learn
        </a>
        <a href={hr4} target="_blank" rel={re1}>
          {im4} Examples
        </a>
        <a href={hr5} target="_blank" rel={re1}>
          {im5} Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
  //======================================================================
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
