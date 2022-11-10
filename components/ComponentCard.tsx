import {css} from "@emotion/css";
import {useColorMode, useThemeUI} from "theme-ui";
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
      return <Button variant="primary">Button</Button>;
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
          <Button variant="primary" onClick={openDialog}>
            Open Dialog
          </Button>
          <Dialog isOpen={open} closeDialog={closeDialog}>
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
            <Button variant="primary">Toast</Button>
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

interface componentCardProps {
  component: string;
  width?: number;
  style?: React.CSSProperties;
}

export const ComponentCard = ({
  component,
  style,
  width,
}: componentCardProps) => {
  return (
    <div
      className={css`
        background: ${"var(--theme-ui-colors-cardBackground)"};
        border: ${"var(--theme-ui-colors-cardBorder)"};
        box-shadow: ${"var(--theme-ui-colors-cardShadow)"};
        border-radius: ${"var(--theme-ui-colors-cardRadius)"};
        padding: 1rem;
        height: fit-content;
        min-height: 100px;
        width: ${width ? width + "px" : "735px"};
      `}
      style={style}
    >
      <RenderComponent component={component.toLowerCase()} />
    </div>
  );
};
