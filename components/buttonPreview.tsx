import {Button, Typography} from "@devinovastudio/devinova-comp-lib";
import {Field, Form, Formik} from "formik";
import {useState} from "react";
import {Box, useThemeUI} from "theme-ui";

const initialValues = {
  content: "Button",
  variant: "contained",
  color: "primary",
  disabled: false,
  isHover: true,
};

type variant = "contained" | "outlined" | "text";

type color = "primary" | "error" | "positive";

export const ButtonPreviews = () => {
  const [content, setContent] = useState("Button");
  const [variant, setVariant] = useState<variant>("contained");
  const [color, setColor] = useState<color>("primary");
  const [disabled, setDisabled] = useState(false);
  const [isHover, setIsHover] = useState(true);

  const theme = useThemeUI();
  const isDarkTheme = theme.colorMode === "dark";

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          setVariant(values.variant as unknown as variant);
          setColor(values.color as unknown as color);
          setContent(values.content);
        }}
      >
        {(props) => (
          <Form onChange={props.handleSubmit}>
            <Field
              name="variant"
              component="select"
              onChange={props.handleChange}
            >
              <option value="contained">Contained</option>
              <option value="outlined">Outlined</option>
              <option value="text">Text</option>
            </Field>
            <Field
              name="color"
              component="select"
              onChange={props.handleChange}
            >
              <option value="primary">Primary</option>
              <option value="error">Error</option>
              <option value="positive">Positive</option>
            </Field>
            <label>
              <Typography dark={isDarkTheme}>Content:</Typography>
              <Field
                onChange={props.handleChange}
                type="text"
                name="content"
                value={props.values.content}
              />
            </label>
          </Form>
        )}
      </Formik>
      <Button color={color} variant={variant}>
        {content}
      </Button>
    </Box>
  );
};
