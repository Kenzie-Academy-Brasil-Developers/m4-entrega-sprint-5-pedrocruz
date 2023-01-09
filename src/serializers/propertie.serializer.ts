import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPropertyRequest } from "../interfaces/properties";

export const propertiesSerializer: SchemaOf<IPropertyRequest> = yup
  .object()
  .shape({
    value: yup.number().required(),
    size: yup.number().required(),
    address: yup.object(),
    categoryId: yup.string().required(),
  });
