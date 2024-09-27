/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Timeslot } from "../models";
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
export declare type TimeslotUpdateFormInputValues = {
  startTime?: string;
  endTime?: string;
  eventId?: string;
  available?: boolean;
};
export declare type TimeslotUpdateFormValidationValues = {
  startTime?: ValidationFunction<string>;
  endTime?: ValidationFunction<string>;
  eventId?: ValidationFunction<string>;
  available?: ValidationFunction<boolean>;
};
export declare type FormProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type TimeslotUpdateFormOverridesProps = {
  TimeslotUpdateFormGrid?: FormProps<GridProps>;
  startTime?: FormProps<TextFieldProps>;
  endTime?: FormProps<TextFieldProps>;
  eventId?: FormProps<TextFieldProps>;
  available?: FormProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TimeslotUpdateFormProps = React.PropsWithChildren<
  {
    overrides?: TimeslotUpdateFormOverridesProps | undefined | null;
  } & {
    id?: string;
    timeslot?: Timeslot;
    onSubmit?: (
      fields: TimeslotUpdateFormInputValues
    ) => TimeslotUpdateFormInputValues;
    onSuccess?: (fields: TimeslotUpdateFormInputValues) => void;
    onError?: (
      fields: TimeslotUpdateFormInputValues,
      errorMessage: string
    ) => void;
    onCancel?: () => void;
    onChange?: (
      fields: TimeslotUpdateFormInputValues
    ) => TimeslotUpdateFormInputValues;
    onValidate?: TimeslotUpdateFormValidationValues;
  } & React.CSSProperties
>;
export default function TimeslotUpdateForm(
  props: TimeslotUpdateFormProps
): React.ReactElement;
