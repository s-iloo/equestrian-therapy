/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import {
  GridProps,
  SwitchFieldProps,
  TextFieldProps,
} from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type TimeslotCreateFormInputValues = {
  startTime?: string;
  endTime?: string;
  eventId?: string;
  available?: boolean;
};
export declare type TimeslotCreateFormValidationValues = {
  startTime?: ValidationFunction<string>;
  endTime?: ValidationFunction<string>;
  eventId?: ValidationFunction<string>;
  available?: ValidationFunction<boolean>;
};
export declare type FormProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type TimeslotCreateFormOverridesProps = {
  TimeslotCreateFormGrid?: FormProps<GridProps>;
  startTime?: FormProps<TextFieldProps>;
  endTime?: FormProps<TextFieldProps>;
  eventId?: FormProps<TextFieldProps>;
  available?: FormProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TimeslotCreateFormProps = React.PropsWithChildren<
  {
    overrides?: TimeslotCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: TimeslotCreateFormInputValues
    ) => TimeslotCreateFormInputValues;
    onSuccess?: (fields: TimeslotCreateFormInputValues) => void;
    onError?: (
      fields: TimeslotCreateFormInputValues,
      errorMessage: string
    ) => void;
    onCancel?: () => void;
    onChange?: (
      fields: TimeslotCreateFormInputValues
    ) => TimeslotCreateFormInputValues;
    onValidate?: TimeslotCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function TimeslotCreateForm(
  props: TimeslotCreateFormProps
): React.ReactElement;
