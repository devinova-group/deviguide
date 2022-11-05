import {useRouter} from "next/router";
import {compData} from "../../data";
// import {Typography} from "@devinovastudio/devinova-comp-lib";
import dynamic from "next/dynamic";

const Typography = dynamic(
  () => import("@devinovastudio/devinova-comp-lib").Typography,
  {
    suspense: true,
  }
);

export default function Component() {
  const router = useRouter();
  const {component} = router.query;
  if (component !== undefined) {
    if (compData.hasOwnProperty(component.toString())) {
      return (
        <main>
          <Typography>{component}</Typography>
          <span>{}</span>
        </main>
      );
    }
  }
  return <main>{component}</main>;
}
