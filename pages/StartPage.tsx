import {css} from "@emotion/css";
import styled from "@emotion/styled";
import Image from "next/image";
import lightmode from "./Background.jpg"
import dynamic from "next/dynamic";
import Link from "next/link";
import arrow from "./Vector.svg"


const test = css`
    background-image: url('./light.jpg');
`;
const arrowAlign = css`
    padding-right: 10px;
    font-size: 5rem;
`;

const align = css`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    margin-left: 10rem;

`;
const head1 = css`
    
    color: #585858;
    font-size: 3.5rem;
    font-weight: 300;  
`;
const head2 = css`
    margin-top: 3rem;
    color: #4C3A80;
    font-size: 5rem;
    font-weight: 300;  
`;
const button = css`
    margin-top: 5rem;
    color: #885FFF;
    background-color: transparent;
    font-size: 1rem;
    width: 25rem;
    height: 4rem;
    font-weight: 100;
    border: 2px solid #885FFF;
    border-radius: 8px;
    cursor: pointer;
`;


const StartPage = () => {
        
     return (
         <div >
            <div className={align}>
                <span className={head1}>Welcome To</span>
                <span className={head2}>Devinova Guides</span>
                <Link href={"/Sidebar_left"}>
                <button className={button}>
                    <Image src={arrow} alt={""} className={arrowAlign}></Image>
                View Components
                </button>
                </Link>
            </div> 

         </div>

        
         
         
     )
 
 }
 
 
 export default StartPage;