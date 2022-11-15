import {useState, useRef} from "react";
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
  ToastPortal,
  Typography,
} from "@devinovastudio/devinova-comp-lib";
import {Box} from "theme-ui";
import {ButtonPreviews} from "./buttonPreview";

interface renderComponentProps {
  component: string;
}

const RenderComponent = ({component}: renderComponentProps) => {
  type CountdownHandle = React.ElementRef<typeof ToastPortal>;
  const toastRef = useRef<CountdownHandle>(null);
  const [content, setContent] = useState("This is a Toast");
  const [variant, setVariant] = useState("success");
  const [position, setPosition] = useState("bottom-right");
  const [autoClose, setAutoClose] = useState(true);
  const [autoCloseTime, setAutoCloseTime] = useState(5000);
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
      break;
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
      const addToast = () => {
        toastRef.current?.createToast({
          variant,
          content,
        });
      };

      return (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addToast();
            }}
          >
            <Button variant="outlined">Toast</Button>
          </form>
          <ToastPortal
            position={position}
            ref={toastRef}
            autoClose={autoClose}
            autoCloseTime={autoCloseTime}
          />
        </>
      );
    case "typography":
      return (
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis et
          mollitia perferendis debitis quidem sunt libero consequatur,
          recusandae quas laborum?
        </Typography>
      );

    default:
      break;
  }

  return <div>{component}</div>;
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

export const ComponentCard = ({component}: componentCardProps) => {
  return (
    <Box variant="styles.deviCard">
      <RenderComponent component={component.toLowerCase()} />
    </Box>
  );
};