import { useState, useRef } from "react";
import {
  Button,
  IconButton,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  Loader,
  Textfield,
  Typography,
} from "@devinovastudio/devinova-comp-lib";
import { Box } from "theme-ui";
import { ButtonPreviews } from "./buttonPreview";
import { ToastPreview } from "./toastPreview";
import { TypographyPreview } from "./typographyPreview";

interface renderComponentProps {
  component: string;
}

const RenderComponent = ({ component }: renderComponentProps) => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };
  const openDialog = () => {
    setOpen(true);
  };
  switch (component) {
    case "button":
      return <ButtonPreviews />;
    case "iconbutton":
      return <IconButton iconName="Plus" size="small" variant="positive" />;
    case "badge":
      return <Badge variant="Active" />;
    case "card":
      return (
        <Card>
          <CardHeader
            title="This is a CardHeader"
            subheader="This is a CardSubheader"
          />
          <CardContent></CardContent>
          <CardMedia />
        </Card>
      );
    case "dialog":
      return (
        <>
          <Button variant="contained" onClick={openDialog}>
            Open Dialog
          </Button>
          <Dialog open={open} onClose={closeDialog}>
            Button
          </Dialog>
        </>
      );
    case "loader":
      return (
        <>
          <Loader />
          <Loader progress="error" />
          <Loader progress="success" />
        </>
      );
    case "textfield":
      return (
        <Textfield
          inputSize="medium"
          variant="primary"
          type="text"
          placeholder="test"
        />
      );
    case "toast":
      return <ToastPreview />;
    case "typography":
      return <TypographyPreview />;

    default:
      break;
  }

  return <>{component}</>;
};

// const theme = useTheme()

// const cardDiv = styled.div(`
// background: (${theme}) => {
// }
// border: ${theme};
// box-shadow: ${"var(--theme-ui-colors-cardShadow)"};
// border-radius: ${"var(--theme-ui-colors-cardRadius)"};
// padding: 1rem;
// height: fit-content;
// min-height: 100px;
// width: "735px";
// `)

interface componentCardProps {
  component: string;
  width?: number;
  style?: React.CSSProperties;
}

export const ComponentCard = ({ component }: componentCardProps) => {
  return (
    <Box variant="styles.deviCard">
      <RenderComponent component={component.toLowerCase()} />
    </Box>
  );
};
