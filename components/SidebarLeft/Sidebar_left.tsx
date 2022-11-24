import {css, CSSObject} from "@emotion/css";
import styled from "@emotion/styled";
import componentsData from "./componentsData";
import {useState} from "react";
import SvgMagnifyingGlass from "../../IconAsset/MagnifyingGlass";
import Link from "next/link";

interface mode {
  dark?: boolean;
}

//*******Different device size if later consider to use *******//
/* const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const media = ` @media ${device.mobileM} { 
  width:375px;
  justify-content:center;
  margin:auto;
 };
 @media ${device.laptop} { 
  width:239px;
  justify-content:none;
  margin:0;
}`; */


const Gridbase: CSSObject = {
  display: "block",
  width: "239px",
  height: "994px",
  position: "fixed",
};

const Grid = styled.div<mode>`
  ${Gridbase};
  background: ${(props) => (props.dark ? "#4A4458" : "#4C3A80")};
`;

const Header = styled.div`
display:block;
position: relative; 
width: 100%;
height: 108px;
left: 9px;
top: 40px;
justify-content:center;
margin-bottom:30px;
`;
const H3 = styled.h3({
  display: "block",
  position: "initial",
  paddingLeft: "50px"
});

const Divider = styled.div({
  position: "absolute",
  width: "221px",
  height: "2px",
  left: "0px",
  top: "47px",
  background: "rgba(199, 190, 215, 0.3)",
  borderRadius: "2px",
});

const SearchInput = styled.input({
  display: "block",
  boxSizing: "border-box",
  position: "absolute",
  width: "221px",
  height: "41px",
  left: "0px",
  top: "67px",
  background: "rgba(255, 255, 255, 0.38)",
  border: "2px solid #CFC6E8",
  boxShadow: "2px 5px 10px rgba(76, 58, 128, 0.25)",
  borderRadius: "6px",
  paddingLeft: "30px",
  color:"wheat",
});

const ComponentChecklist = styled.div`
display: block;
position: initial;
width: 238px;
height: 1150px;
left: 0px;
top: 221px;
margin-top:55px;
`;

const ComponentList = styled.div`
flex-direction: column;
align-items: center;
width:231px;
height:68%;
overflow-y: scroll;
scrollbar-width: thin;
::-webkit-scrollbar {
    border: 1px solid transparent;
    background: rgba(106, 90, 205, 0.2);
    border-radius: 8px 8px 8px 8px;
    width:10px;
};
::-webkit-scrollbar-thumb {
    background: rgb(217, 217, 217, 0.35);
    border-radius: 8px ;
    border: 1px solid transparent;
}
`;

const ListGrid = styled.div({
  width: "227px",
  height: "45px",
  flex: "none",
  order: "0",
  flexGrow: "0",
  paddingLeft: "50px",
  paddingTop: "10px",
  marginTop: "20px",
  "&:hover": {
    boxSizing: "border-box",
    height: "45px",
    backgroundColor: "rgba(217, 217, 217, 0.35)",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    boxShadow: " 0px 4px 4px rgba(255, 255, 255, 0.25)",
    borderRadius: "20px 20px 20px 20px",
  },
  "&:active": {
    boxSizing: "border-box",
    height: "45px",
    backgroundColor: "rgba(217, 217, 217, 0.35)",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    borderRight: "5px solid #F5ECFE",
    boxShadow: " 0px 4px 4px rgba(255, 255, 255, 0.25)",
    borderRadius: "20px 0px 0px 20px",
  },
});

export const SidebarLeft = ({dark}: mode) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const searchData = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = componentsData.filter((data: string) => {
        return Object.values(data)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
      console.log(filteredResults);
    } else {
      setFilteredResults(componentsData);
    }
  };

  return (
    <Grid dark={dark}>
      <Header>
        <H3>Component</H3>
        <Divider />
        <SvgMagnifyingGlass
          className={css({
            paddingTop: 37,
            marginLeft: 10,
            position: "absolute",
            display: "block",
          })}
          fill="grey"
          width={16}
        />

        <SearchInput
          type={"search"}
          placeholder={"search component"}
          onChange={(e) => searchData(e.target.value)}
        ></SearchInput>
      </Header>

      <ComponentChecklist>
        {searchInput.length > 1 ? (
          <ComponentList>
            {filteredResults.map((item: any) => {
              return (
                <Link href={`/components/${item.id}`} key={item.id}>
                  <ListGrid key={item.id}>{item.id}</ListGrid>
                </Link>
              );
            })}
          </ComponentList>
        ) : (
          <ComponentList>
            {componentsData.map((data: any) => {
              return (
                <Link href={`/components/${data.id}`} key={data.id}>
                  <ListGrid key={data.id}>{data.id}</ListGrid>
                </Link>
              );
            })}
          </ComponentList>
        )}
      </ComponentChecklist>
    </Grid>
  );
};
