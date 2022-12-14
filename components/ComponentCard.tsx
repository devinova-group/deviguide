import {useState} from "react";
import {
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  Loader,
  Textfield,
} from "@devinovastudio/devinova-comp-lib";

import { Box } from "theme-ui";
import { ButtonPreviews } from "./buttonPreview";
import { ToastPreview } from "./toastPreview";
import { TypographyPreview } from "./typographyPreview";
import { IconButtonPreview} from "./IconButtonPreview"; 
import { AvatarPreview } from "./avatarPreview";

interface renderComponentProps {
  component: string;
}

const RenderComponent = ({component}: renderComponentProps) => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };
  const openDialog = () => {
    setOpen(true);
  };
  switch (component) {
    case "avatar":
      return <AvatarPreview />;
    case "button":
      return <ButtonPreviews />;
    case "iconbutton":
      return <IconButtonPreview/>; 
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

interface componentCardProps {
  component: string;
  width?: number;
  style?: React.CSSProperties;
}

export const ComponentCard = ({component}: componentCardProps) => {
  return (
    <Box variant="styles.deviCard">
      <RenderComponent component={component.toLowerCase()} />
    </Box>
  );
};
