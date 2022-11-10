import { useState, ChangeEvent } from "react";
import styled from "@emotion/styled";
import {css} from "@emotion/css";
import {useColorMode} from "theme-ui";

const StyledLabel = styled.label<{ checked: boolean }>`  
cursor: pointer;  
text-indent: -9999px;  
width: 60px;
margin-left: 5rem;  
height: 30px;  
background: ${({ checked }) => (checked ? "#4C3A80" :  "#F9D183")};  
display: block;  
border-radius: 40px;  
position: relative;
&:after {    
content: "";    
position: absolute;    
left: ${({ checked }) => (checked ? "6px" : "calc(55% - 5px)")};    top: 2px;    
width: 25px;    
height: 25px;    
background: #fff;    
border-radius: 40px;    
transition: 0.3s;  
}`;

const labels = css`
    
`;


export default function ToggleSwitch(){
    const [switchState, setSwitchState] = useState(true);  
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    console.log("---", e.target.checked);
    setSwitchState(!switchState);
  }
  const [colorMode, setColorMode] = useColorMode();

    return (    
        <StyledLabel htmlFor="checkbox" checked={switchState}> 
            
          <input 
            id="checkbox" 
            type="checkbox"
            checked={switchState}
            onChange={handleOnChange}
            onClick={(e) => {
                setColorMode(colorMode === "default" ? "dark" : "default");
              }} />
            
        </StyledLabel>
      );
    }