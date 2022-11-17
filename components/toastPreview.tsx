import {ToastPortal, Button} from "@devinovastudio/devinova-comp-lib";
import {Form, Formik, Field} from "formik";
import {useRef, useState} from "react";

const initialValues = {
  content: "This is a Toast!",
  variant: "success",
  position: "bottom-right",
  autoClose: 1,
  autoCloseTime: 5000,
};

export const ToastPreview = () => {
  type CountdownHandle = React.ElementRef<typeof ToastPortal>;
  const toastRef = useRef<CountdownHandle>(null);
  const [content, setContent] = useState<string>();
  const [variant, setVariant] = useState<string>();
  const [position, setPosition] = useState<string>();
  const [autoClose, setAutoClose] = useState<boolean>();
  const [autoCloseTime, setAutoCloseTime] = useState<number>();

  const addToast = () => {
    toastRef.current?.createToast({
      variant,
      content,
    });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          const autoClose = values.autoClose === 1;
          setContent(values.content);
          setVariant(values.variant);
          setPosition(values.position);
          setAutoClose(autoClose);
          setAutoCloseTime(values.autoCloseTime);
          addToast();
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit} onChange={props.handleChange}>
            <Field
              name="content"
              placeholder="Toast Content"
              onChange={props.handleChange}
            />
            <Field
              name="variant"
              component="select"
              onChange={props.handleChange}
            >
              <optgroup label="Light">
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
                <option value="notice">Notice</option>
                <option value="info">Info</option>
              </optgroup>
              <optgroup label="Dark">
                <option value="successv2">Success Dark</option>
                <option value="warningv2">Warning Dark</option>
                <option value="errorv2">Error Dark</option>
                <option value="noticev2">Notice Dark</option>
                <option value="infov2">Info Dark</option>
              </optgroup>
            </Field>
            <Field
              name="position"
              component="select"
              onChange={props.handleChange}
            >
              <option value="top-left">Top-Left</option>
              <option value="top-center">Top-Center</option>
              <option value="top-right">Top-Right</option>
              <option value="bottom-left">Bottom-Left</option>
              <option value="bottom-center">Bottom-Center</option>
              <option value="bottom-right">Bottom-Right</option>
            </Field>
            <Field
              name="autoClose"
              component="select"
              onChange={props.handleChange}
            >
              <option value={1}>True</option>
              <option value={0}>False</option>
            </Field>
            <Field
              name="autoCloseTime"
              placeholder="Auto Closing Time"
              onChange={props.handleChange}
            />

            <Button color="positive">Toast</Button>
          </Form>
        )}
      </Formik>
      <ToastPortal
        position={position}
        ref={toastRef}
        autoClose={autoClose}
        autoCloseTime={autoCloseTime}
      />
    </div>
  );
};
