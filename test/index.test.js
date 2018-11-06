import introspectionResult from "./mock-schema.json";
import _ from "underscore";
import {
  generateApiSchema,
  pluckEnums,
  pluckFilterTypes,
  pluckInputObjects,
  pluckInputTypes
} from "../src/index";
import { apiSchema } from "./mock-api-schema";

describe("Qewl#withSchema utility functions", () => {
  it("Qewl#generateApiSchema returns processed apiSchema object", () => {
    const generatedApiSchema = generateApiSchema(introspectionResult.__schema);
    expect(generatedApiSchema.enums.length).toEqual(apiSchema.enums.length);
    expect(generatedApiSchema.filterTypes.length).toEqual(
      apiSchema.filterTypes.length
    );
    expect(generatedApiSchema.inputTypes.length).toEqual(
      apiSchema.inputTypes.length
    );
    expect(generatedApiSchema.queries.length).toEqual(apiSchema.queries.length);
    expect(generatedApiSchema.mutations.length).toEqual(
      apiSchema.mutations.length
    );
  });

  it("Qewl#pluckInputObject only returns INPUT_OBJECT types", () => {
    const inputObjects = pluckInputObjects(introspectionResult.__schema);
    expect(
      _.chain(inputObjects)
        .pluck("kind")
        .uniq()
        .value().length
    ).toEqual(1);
  });

  it("Qewl#pluckEnums only returns ENUM types", () => {
    const inputObjects = pluckEnums(introspectionResult.__schema);
    expect(
      _.chain(inputObjects)
        .pluck("kind")
        .uniq()
        .value().length
    ).toEqual(1);
  });

  it("Qewl#pluckFilterTypes only returns Filter types", () => {
    const schema = introspectionResult.__schema;
    const inputObjects = pluckInputObjects(schema);
    const filterTypes = pluckFilterTypes(schema);
    const inputTypes = pluckInputTypes(schema);

    expect(inputObjects.length - inputTypes.length).toEqual(filterTypes.length);
  });

  it("Qewl#pluckInputTypes only returns Input types", () => {
    const schema = introspectionResult.__schema;
    const inputObjects = pluckInputObjects(schema);
    const filterTypes = pluckFilterTypes(schema);
    const inputTypes = pluckInputTypes(schema);

    expect(inputObjects.length - filterTypes.length).toEqual(inputTypes.length);
  });
});
