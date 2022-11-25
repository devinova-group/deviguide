import React from "react";
import { useState } from "react";
import { Avatar } from "@devinovastudio/devinova-comp-lib";
import styled from "@emotion/styled";
const Box = styled.div({
    display: "inline-flex",
    height: "100px",
    marginTop: "20px",
    [`svg`]:
    {
        fill: "white",
        width: "10.37px",
        height: "10.37px",
        paddingTop: "0px",
        paddingLeft: "0px",
        paddingRight: "0px",
        paddingBottom:"0px",
        marginLeft: "6px",
    }
})

export const AvatarPreview = () => {
    const [content, setContent] = useState("Devinova");
    const [imgsrc, setImgsrc] = useState("");
    const handleContentChange =(event:any)=>{
        setContent(event.target.value)
      }
    const handleImageSource =(event:any)=>{
      setImgsrc(event.target.value)
      }
  return (
    <>

  <span>
  <form>
    <p >User Name</p>
    <div>
      <input
        type="text"
        value= {content}
        onChange={handleContentChange}
      /> 
    </div>
  </form>
  </span>

  <span>
  <form>
    <p >Image Source</p>
    <div>
      <input
        type="text"
        value= {imgsrc}
        onChange={handleImageSource}
      /> 
    </div>
  </form>
  </span>

    <Box>
    <Avatar userName={content} />
    <Avatar src={imgsrc} />
    </Box>
 </>

  );
};
