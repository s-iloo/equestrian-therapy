/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Event } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type EventUpdateFormInputValues = {
  title?: string;
  date?: string;
  volunteers?: string[];
  rider?: string;
  description?: string;
};
export declare type EventUpdateFormValidationValues = {
  title?: ValidationFunction<string>;
  date?: ValidationFunction<string>;
  volunteers?: ValidationFunction<string>;
  rider?: ValidationFunction<string>;
  description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type EventUpdateFormOverridesProps = {
  EventUpdateFormGrid?: FormProps<GridProps>;
  title?: FormProps<TextFieldProps>;
  date?: FormProps<TextFieldProps>;
  volunteers?: FormProps<TextFieldProps>;
  rider?: FormProps<TextFieldProps>;
  description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: EventUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    event?: Event;
    onSubmit?: (
      fields: EventUpdateFormInputValues
    ) => EventUpdateFormInputValues;
    onSuccess?: (fields: EventUpdateFormInputValues) => void;
    onError?: (
      fields: EventUpdateFormInputValues,
      errorMessage: string
    ) => void;
    onCancel?: () => void;
    onChange?: (
      fields: EventUpdateFormInputValues
    ) => EventUpdateFormInputValues;
    onValidate?: EventUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function EventUpdateForm(
  props: EventUpdateFormProps
): React.ReactElement;
