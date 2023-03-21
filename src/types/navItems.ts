import React, { FunctionComponent, ReactNode } from "react";

import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

// project imports

import { ChipProps } from "@mui/material";

// project imports

export type OverrideIcon =
  | (OverridableComponent<SvgIconTypeMap<Record<string, unknown>, "svg">> & {
      muiName: string;
    })
  | React.ComponentClass<unknown>
  | FunctionComponent<unknown>;

export interface GenericCardProps {
  title?: string;
  primary?: string | number | undefined;
  secondary?: string;
  content?: string;
  image?: string;
  dateTime?: string;
  iconPrimary?: OverrideIcon;
  color?: string;
  size?: string;
}

export interface NavGroupProps {
  item: {
    id?: string;
    type?: string;
    url?: string;
    icon?: GenericCardProps["iconPrimary"];
    children?: NavGroupProps["item"][];
    title?: ReactNode | string;
    caption?: ReactNode | string;
    color?: "primary" | "secondary" | "default" | undefined;
  };
}

export type NavItemType = {
  id?: string;
  icon?: GenericCardProps["iconPrimary"];
  target?: boolean;
  external?: string;
  url?: string;
  type?: string;
  title?: React.ReactNode | string;
  color?: "primary" | "secondary" | "default" | undefined;
  caption?: React.ReactNode | string;
  breadcrumbs?: boolean;
  disabled?: boolean;
  chip?: ChipProps;
};

export type LinkTarget = "_blank" | "_self" | "_parent" | "_top";

export type NavItemTypeObject = {
  children?: NavItemType[];
  items?: NavItemType[];
  type?: string;
};
