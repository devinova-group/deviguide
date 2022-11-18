import Link from "next/link";
import { css } from "@emotion/css";
import Image from "next/image";
import { Switch, useColorMode } from "theme-ui";
import img from "./Frame.png";
import ToggleSwitch from "./Toggle";



const align = css`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;
const nav = css`
    background: rgba(0,0,0,0,2);
    display: flex;
    align-items: center;
`;
const header = css`
    width: 100%;
    display: flex;
    height: 6rem;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.25);   
`;
const headerLeft = css`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  padding-right: 13rem;
  cursor: pointer;
`;
const link = css`
color: ${"var(--theme-ui-colors-linkPrimary)"};
margin-right: 50px;
padding-bottom: 10px;
border-bottom: 3px solid transparent;
font-size: 15px;
box-sizing: border-box;
cursor: pointer;
:hover {
 border-color: #6044B5;
 
}
`;
const toggleAlign = css`
  display: flex;
  align-items: center;
`;


function NavBar () {
    
    return (
        <header className={header}>
            <div className={headerLeft}>
            <Link href={"/"}>
            <Image src={img} alt={""}></Image>
            </Link>
             </div>
        <nav className={nav}>
            <ul className={align}>
                <Link href={""} className={link}>Components</Link>
                <Link href={""} className={link}>Coding</Link>
                <Link href={""} className={link}>Pages Design</Link>
                <Link href={""} className={link}>Design Guide</Link>
                <Link href={""} className={link}>About Devinova Guides</Link>
            </ul>
            <div className={toggleAlign}>
            <ToggleSwitch ></ToggleSwitch>
            </div>
            
        </nav>
        </header>
    )
}

export default NavBar;
