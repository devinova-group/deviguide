import {Button, Typography} from "@devinovastudio/devinova-comp-lib";
import {css} from "@emotion/css";
import {Formik, Form, Field} from "formik";
import {useState} from "react";

const initialValues = {
  content: "The quick brown fox jumps over the lazy dog",
  variant: "NSBody1",
};

type variant =
  | "h1Neucha"
  | "h2Neucha"
  | "h3Neucha"
  | "h4Neucha"
  | "h5Neucha"
  | "h6Neucha"
  | "h1QS"
  | "h2QS"
  | "h3QS"
  | "h4QS"
  | "h5QS"
  | "h6QS"
  | "h1POI"
  | "h2POI"
  | "h3POI"
  | "h4POI"
  | "h5POI"
  | "h6POI"
  | "NSDisplay"
  | "NSTitle1"
  | "NSTitle2"
  | "NSSubhead"
  | "NSBody1"
  | "NSBody2"
  | "NSBody3"
  | "NSCaption"
  | "NSButton"
  | "NSOverline"
  | "QSDisplay"
  | "QSTitle1"
  | "QSTitle2"
  | "QSSubhead"
  | "QSBody1"
  | "QSBody2"
  | "QSCaption"
  | "QSButton"
  | "QSOverline";

export const TypographyPreview = () => {
  const [content, setContent] = useState<string>(
    "The quick brown fox jumps over the lazy dog"
  );
  const [variant, setVariant] = useState<variant>();

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          setContent(values.content);
          setVariant(values.variant as unknown as variant);
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <Field
              name="content"
              component="textarea"
              className={css`
                height: 100px;
                width: 150px;
              `}
            />
            <br />
            <Field component="select" name="variant">
              <optgroup label="Neucha">
                <option value="h1Neucha">h1Neucha</option>
                <option value="h2Neucha">h2Neucha</option>
                <option value="h3Neucha">h3Neucha</option>
                <option value="h4Neucha">h4Neucha</option>
                <option value="h5Neucha">h5Neucha</option>
                <option value="h6Neucha">h6Neucha</option>
              </optgroup>
              <optgroup label="Quicksand">
                <option value="h1QS">h1QS</option>
                <option value="h2QS">h2QS</option>
                <option value="h3QS">h3QS</option>
                <option value="h4QS">h4QS</option>
                <option value="h5QS">h5QS</option>
                <option value="h6QS">h6QS</option>
              </optgroup>
              <optgroup label="Poiret One">
                <option value="h1POI">h1POI</option>
                <option value="h2POI">h2POI</option>
                <option value="h3POI">h3POI</option>
                <option value="h4POI">h4POI</option>
                <option value="h5POI">h5POI</option>
                <option value="h6POI">h6POI</option>
              </optgroup>
              <optgroup label="Quicksand">
                <option value="QSDisplay">QSDisplay</option>
                <option value="QSTitle1">QSTitle1</option>
                <option value="QSTitle2">QSTitle2</option>
                <option value="QSSubhead">QSSubhead</option>
                <option value="QSBody1">QSBody1</option>
                <option value="QSBody2">QSBody2</option>
                <option value="QSCaption">QSCaption</option>
                <option value="QSButton">QSButton</option>
                <option value="QSOverline">QSOverline</option>
              </optgroup>
              <optgroup label="Noto Sans">
                <option value="NSDisplay">NSDisplay</option>
                <option value="NSTitle1">NSTitle1</option>
                <option value="NSTitle2">NSTitle2</option>
                <option value="NSSubhead">NSSubhead</option>
                <option value="NSBody1">NSBody1</option>
                <option value="NSBody2">NSBody2</option>
                <option value="NSBody3">NSBody3</option>
                <option value="NSCaption">NSCaption</option>
                <option value="NSButton">NSButton</option>
                <option value="NSOverline">NSOverline</option>
              </optgroup>
            </Field>
            <br />
            <Button color="error">Update</Button>
          </Form>
        )}
      </Formik>
      <Typography variant={variant}>{content}</Typography>
    </>
  );
};
