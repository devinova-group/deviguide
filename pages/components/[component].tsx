import {useRouter} from "next/router";
import {compData} from "../../data";
import {Typography} from "@devinovastudio/devinova-comp-lib";
import {GetServerSideProps} from "next";
import {useThemeUI} from "theme-ui";
import {ComponentCard} from "../../components/ComponentCard";

export default function Component() {
  const router = useRouter();
  const {component} = router.query;

  const isDarkTheme = useThemeUI().colorMode === "dark";

  if (!component) return <h1>No comp?</h1>;

  if (compData.hasOwnProperty(component.toString().toLowerCase())) {
    const compName = (component as string).toLowerCase();
    const data = compData[compName];

    return (
      <main>
        <Typography variant="h4QS" dark={isDarkTheme}>
          {data.name}
        </Typography>
        <Typography variant="NSBody3" dark={isDarkTheme}>
          {data.description}
        </Typography>
        <ComponentCard component={component as string} />
        <Typography variant="h6QS" dark={isDarkTheme}>
          Usage
        </Typography>
        <Typography variant="NSBody3" dark={isDarkTheme}>
          {data.usage}
        </Typography>
        <Typography variant="h6QS" dark={isDarkTheme}>
          Spacing
        </Typography>
        <Typography variant="NSBody3" dark={isDarkTheme}>
          {data.spacing}
        </Typography>
        <Typography variant="h6QS" dark={isDarkTheme}>
          Principles
        </Typography>
        <Typography variant="NSBody3" dark={isDarkTheme}>
          {data.principles}
        </Typography>
      </main>
    );
  }

  return <h1>?</h1>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const component = ctx.params?.component;

  if (
    component === undefined ||
    !compData[(component as string).toLowerCase()]
  ) {
    return {
      notFound: true,
      props: {},
    };
  }

  return {
    props: {},
  };
};
