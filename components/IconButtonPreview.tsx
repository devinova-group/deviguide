import { IconButton } from "@devinovastudio/devinova-comp-lib";
import {useState} from "react";
import { css } from "@emotion/css";

const bigDiv =css`
border: 1px solid rgba(75, 136, 207, 0.1);
background-color: #3c21bd9e;
width:600px;
`

const divstyle = css`
  display:inline-flex;
  width:600px;
  justify-content:space-around;
  margin-bottom: 25px;
  svg{fill:white};
`
const pStyle= css`d
border: 1px solid rgba(75, 136, 207, 0.1);
display:flex;
justify-content:center;
background-color: #974fe0;
color: #fff;
font-weight:600;
`
type variant = 'primary' | 'error' | 'positive' ;

type size = "small" | "medium" | "large";

export const IconButtonPreview = () => {
  const [content, setContent] = useState("Plus");
  const [variant, setVariant] = useState<variant>("primary");
  const [size, setSize] = useState<size>("medium");
  const [disabled, setDisabled] = useState(false);
 

const handleVariantChange = (event:any) =>{
  setVariant(event.target.value)
}

const handleSizeCHange= (event:any) =>{
  setSize(event.target.value)
}

const handleContentChange =(event:any)=>{
  setContent(event.target.value)
}

const handleDisableChange = () =>setDisabled(true)


const resetAllchanges = ()=>{
  setVariant("primary")
  setSize("medium")
  setDisabled(false)
}
  return (
    <>
    <div className={css(bigDiv)}>
    <div className={css(divstyle)}>
    <span>
    <form>
    <p  className={css(pStyle)}>Variant</p>
    <div>
      <input
        type="radio"
        value="primary"
        checked={variant === 'primary'}
        onChange={handleVariantChange }
      /> Primary
    </div>
    <div>
      <input
        type="radio"
        value="error"
        checked={variant === 'error'}
        onChange={handleVariantChange }
      /> Error
    </div>
    <div>
      <input
        type="radio"
        value="positive"
        checked={variant === 'positive'}
        onChange={handleVariantChange }
      /> Positive
    </div>

  </form>
  </span>

  <span>
  <form>
    <p className={css(pStyle)}>Size</p>
    <div>
      <input
        type="radio"
        value="small"
        checked={size === 'small'}
        onChange={handleSizeCHange}
      /> Small
    </div>
    <div>
      <input
        type="radio"
        value="medium"
        checked={size === 'medium'}
        onChange={handleSizeCHange}
      /> Medium
    </div>
    <div>
      <input
        type="radio"
        value="large"
        checked={size === 'large'}
        onChange={handleSizeCHange}
      /> Large
    </div>

  </form>
  </span>

  <span>
  <form>
    <p className={css(pStyle)}>IconName</p>
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
    <p className={css(pStyle)}>Disabled </p>
    <div>
      <input
        type="radio"
        disabled={disabled}
        checked={disabled === true}
        onChange={handleDisableChange}
      /> 
      Disabled
    </div>
  </form>
  </span>
  </div>
  <br></br>
  <div className={css(divstyle)}>
      <button
        type="reset"
        onClick={resetAllchanges}>
          Reset All changes 
      </button>
  </div>
  <div className={css(divstyle)}>
      <IconButton 
      size={size} 
      variant={variant} 
      iconName={content} 
      isDisabled={disabled} />
  </div>
  </div>
 </>

  );
};
