import { IconButton } from "@devinovastudio/devinova-comp-lib";
import {Field, Form, Formik} from "formik";
import {useState} from "react";
import {Box} from "theme-ui";

const initialValues = {
  content: "IconButton",
  variant: "primary",
  size: "small",
  disabled : false,
};

type variant = 'primary' | 'error' | 'positive' ;

type size = "small" | "medium" | "large";

export const IconButtonPreviews = () => {
  const [content, setContent] = useState("IconButton");
  const [variant, setVariant] = useState<variant>("primary");
  const [size, setSize] = useState<size>("medium");
  const [disabled, setDisabled] = useState(false);
  const [isHover, setIsHover] = useState(false);



  
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
                  value="primary"
                  onChange={props.handleChange}
                />
                Primary
              </label>
              <label>
                <Field
                  type="radio"
                  name="variant"
                  value="error"
                  onChange={props.handleChange}
                />
                Error
              </label>
              <label>
                <Field
                  type="radio"
                  name="variant"
                  value="positive"
                  onChange={props.handleChange}
                />
               Postive
              </label>
            </div>
          </Form>
        )}
      </Formik>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => setSize(values.size as unknown as size)}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit} onChange={props.handleSubmit}>
            <div>
              <label>
                <Field
                  type="radio"
                  name="size"
                  value="small"
                  onChange={props.handleChange}
                />
                Small
              </label>
              <label>
                <Field
                  type="radio"
                  name="size"
                  value="medium"
                  onChange={props.handleChange}
                />
                Medium
              </label>
              <label>
                <Field
                  type="radio"
                  name="size"
                  value="large"
                  onChange={props.handleChange}
                />
                Large
              </label>
            </div>
          </Form>
        )}
      </Formik>

      <Formik
        initialValues={initialValues}
        onSubmit={() => setDisabled(true)}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}  onChange={props.handleSubmit}>
            <label>
              <Field
                onChange={props.handleChange}
                type="radio"
                name="disabled"   
                value={true}     
              />
              Disable
            </label>
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


      <IconButton size={size} variant={variant} color="white" iconName={content} isDisabled={disabled} />

    </Box>
  );
};
