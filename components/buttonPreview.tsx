import {Button} from "@devinovastudio/devinova-comp-lib";
import {Field, Form, Formik} from "formik";
import {useState} from "react";
import {Box} from "theme-ui";
import {isPropertySignature} from "typescript";

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

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => setVariant(values.variant as unknown as variant)}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit} onChange={props.handleSubmit}>
            <div>
              <label>
                <Field
                  type="radio"
                  name="variant"
                  value="contained"
                  onChange={props.handleChange}
                />
                Contained
              </label>
              <label>
                <Field
                  type="radio"
                  name="variant"
                  value="outlined"
                  onChange={props.handleChange}
                />
                Outlined
              </label>
              <label>
                <Field
                  type="radio"
                  name="variant"
                  value="text"
                  onChange={props.handleChange}
                />
                Text
              </label>
            </div>
          </Form>
        )}
      </Formik>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => setColor(values.color as unknown as color)}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit} onChange={props.handleSubmit}>
            <div>
              <label>
                <Field
                  type="radio"
                  name="color"
                  value="primary"
                  onChange={props.handleChange}
                />
                Primary
              </label>
              <label>
                <Field
                  type="radio"
                  name="color"
                  value="error"
                  onChange={props.handleChange}
                />
                Error
              </label>
              <label>
                <Field
                  type="radio"
                  name="color"
                  value="positive"
                  onChange={props.handleChange}
                />
                Positive
              </label>
            </div>
          </Form>
        )}
      </Formik>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => setContent(values.content)}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit} onChange={props.handleSubmit}>
            <label>
              Content:
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
