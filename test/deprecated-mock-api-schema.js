export const apiSchema = {
  enums: [
    {
      kind: "ENUM",
      name: "AccountStatus",
      description: "  Account Status",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "ACTIVE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "CANCELED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "INACTIVE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "SUSPENDED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "TRIAL",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        }
      ],
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "ENUM",
      name: "ContactStatus",
      description: "  Contact Status",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "ACTIVE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "INACTIVE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "PENDING",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        }
      ],
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "ENUM",
      name: "DealStatus",
      description: "  Deal Status",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "ARCHIVED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "CANCELED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "COMMITTED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "CONTRIBUTED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "DRAFT",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "OPERATING",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "PUBLISHED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "SUBSCRIBED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        }
      ],
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "ENUM",
      name: "DealSubscriptionStatus",
      description: "  DealSubscription Status",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "CANCELED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "COMPLETED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "COUNTERSIGNED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "DECLINED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "PENDING",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "SIGNED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        }
      ],
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "ENUM",
      name: "InvestmentEntityStatus",
      description: "  InvestmentEntity Status",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "ACTIVE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "INACTIVE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        }
      ],
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "ENUM",
      name: "BankAccountStatus",
      description: "  BankAccount Status",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "FAILED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "INACTIVE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "PENDING",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "SUSPENDED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "UNVERIFIED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "VERIFIED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        }
      ],
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "ENUM",
      name: "HoldingEntityStatus",
      description: "  HoldingEntity Status",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "ACTIVE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "INACTIVE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        }
      ],
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "ENUM",
      name: "PaymentStatus",
      description: "  Payment Status",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "SENT",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "CONFIRMED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "FAILED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        }
      ],
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "ENUM",
      name: "DistributionStatus",
      description: "  Distribution Status",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "CANCELED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "COMPLETED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "CONFIRMED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "DECLINED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "FAILED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "INITIATED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "PENDING",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        }
      ],
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "ENUM",
      name: "InvestmentStatus",
      description: "  Investment Status",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "CANCELED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "COMMITTED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "CONTRIBUTED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "FAILED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "OFFERED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "PENDING",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "REJECTED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        }
      ],
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "ENUM",
      name: "FileStatus",
      description: "  File Status",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "ACTIVE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "INACTIVE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        }
      ],
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "ENUM",
      name: "MessageStatus",
      description: "  Message Status",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "DRAFT",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "SENT",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "DELIVERED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "OPENED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "CLICKED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "FAILED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        }
      ],
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "ENUM",
      name: "UserProfileStatus",
      description: "  UserProfile Status",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "ARCHIVED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "COMPROMISED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "CONFIRMED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "UNCONFIRMED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "UNKNOWN",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        }
      ],
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "ENUM",
      name: "TemplateStatus",
      description: "  Template Status",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "ENABLED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "DISABLED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        }
      ],
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "ENUM",
      name: "__TypeKind",
      description: "An enum describing what kind of type a given __Type is",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "SCALAR",
          description: "Indicates this type is a scalar.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "OBJECT",
          description:
            "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "INTERFACE",
          description:
            "Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "UNION",
          description:
            "Indicates this type is a union. `possibleTypes` is a valid field.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "ENUM",
          description:
            "Indicates this type is an enum. `enumValues` is a valid field.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "INPUT_OBJECT",
          description:
            "Indicates this type is an input object. `inputFields` is a valid field.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "LIST",
          description:
            "Indicates this type is a list. `ofType` is a valid field.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "NON_NULL",
          description:
            "Indicates this type is a non-null. `ofType` is a valid field.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        }
      ],
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "ENUM",
      name: "__DirectiveLocation",
      description:
        "An enum describing valid locations where a directive can be placed",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "QUERY",
          description: "Indicates the directive is valid on queries.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "MUTATION",
          description: "Indicates the directive is valid on mutations.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "FIELD",
          description: "Indicates the directive is valid on fields.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "FRAGMENT_DEFINITION",
          description:
            "Indicates the directive is valid on fragment definitions.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "FRAGMENT_SPREAD",
          description: "Indicates the directive is valid on fragment spreads.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "INLINE_FRAGMENT",
          description: "Indicates the directive is valid on inline fragments.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "SCHEMA",
          description:
            "Indicates the directive is valid on a schema SDL definition.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "SCALAR",
          description:
            "Indicates the directive is valid on a scalar SDL definition.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "OBJECT",
          description:
            "Indicates the directive is valid on an object SDL definition.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "FIELD_DEFINITION",
          description:
            "Indicates the directive is valid on a field SDL definition.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "ARGUMENT_DEFINITION",
          description:
            "Indicates the directive is valid on a field argument SDL definition.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "INTERFACE",
          description:
            "Indicates the directive is valid on an interface SDL definition.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "UNION",
          description:
            "Indicates the directive is valid on an union SDL definition.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "ENUM",
          description:
            "Indicates the directive is valid on an enum SDL definition.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "ENUM_VALUE",
          description:
            "Indicates the directive is valid on an enum value SDL definition.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "INPUT_OBJECT",
          description:
            "Indicates the directive is valid on an input object SDL definition.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "INPUT_FIELD_DEFINITION",
          description:
            "Indicates the directive is valid on an input object field SDL definition.",
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        }
      ],
      possibleTypes: null,
      __typename: "__Type"
    }
  ],
  filterTypes: [
    {
      kind: "INPUT_OBJECT",
      name: "AccountFilterInput",
      description: "  Filter Accounts",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Name Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deletion Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Status Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "TableIDFilterInput",
      description: "  ID Filter Input",
      fields: null,
      inputFields: [
        {
          name: "ne",
          description: "  Not Equals",
          type: {
            kind: "SCALAR",
            name: "ID",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "eq",
          description: "  Equals",
          type: {
            kind: "SCALAR",
            name: "ID",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "le",
          description: "  Less Than or Equals",
          type: {
            kind: "SCALAR",
            name: "ID",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "lt",
          description: "  Less Than",
          type: {
            kind: "SCALAR",
            name: "ID",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ge",
          description: "  Greater Than or Equals",
          type: {
            kind: "SCALAR",
            name: "ID",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "gt",
          description: "  Greater Than",
          type: {
            kind: "SCALAR",
            name: "ID",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "contains",
          description: "  Contains",
          type: {
            kind: "SCALAR",
            name: "ID",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "notContains",
          description: "  Does Not Contain",
          type: {
            kind: "SCALAR",
            name: "ID",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "between",
          description: "  Between",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "beginsWith",
          description: "  Begins With",
          type: {
            kind: "SCALAR",
            name: "ID",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "TableStringFilterInput",
      description: "  String Filter Input",
      fields: null,
      inputFields: [
        {
          name: "ne",
          description: "  Not Equals",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "eq",
          description: "  Equals",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "le",
          description: "  Less Than or Equals",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "lt",
          description: "  Less Than",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ge",
          description: "  Greater Than or Equals",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "gt",
          description: "  Greater Than",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "contains",
          description: "  Contains",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "notContains",
          description: "  Does Not Contain",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "between",
          description: "  Between",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "beginsWith",
          description: "  Begins With",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "ActivityFilterInput",
      description: "  Filter Activities",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "actor",
          description: "  Actor Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "subject",
          description: "  Subject Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "action",
          description: "  Action Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "accountId",
          description: "  Account ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "BankAccountFilterInput",
      description: "  Filter BankAccounts",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Name Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deletion Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Status Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "holdingEntityId",
          description: "  HoldingEntity ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investmentEntityId",
          description: "  InvestmentEntity ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "ContactFilterInput",
      description: "  Filter Contacts",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Name Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deletion Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Status Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "accountId",
          description: "  Account ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "userProfileId",
          description: "  UserProfile ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DealFilterInput",
      description: "  Filter Deals",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Name Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deletion Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Status Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "holdingEntityId",
          description: "  InvestmentEntity ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DealSubscriptionFilterInput",
      description: "  Filter DealSubscriptions",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Name Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deletion Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Status Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "dealId",
          description: "  Deal ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investmentEntityId",
          description: "  InvestmentEntity ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DistributionFilterInput",
      description: "  Filter Distributions",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Name Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deleted Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Status Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "dealId",
          description: "  Deal ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investmentEntityId",
          description: "  InvestmentEntity ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "FileFilterInput",
      description: "  Filter Files",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Name Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deletion Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Status Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "url",
          description: "  URL Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "version",
          description: "  Version Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "dealId",
          description: "  Deal ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investmentEntityId",
          description: "  InvestmentEntity ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "HoldingEntityFilterInput",
      description: "  Filter HoldingEntities",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Name Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deletion Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Status Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "accountId",
          description: "  Account ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "InvestmentFilterInput",
      description: "  Investment Filter",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Name Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deleted Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Status Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "dealId",
          description: "  Deal ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investmentEntityId",
          description: "  InvestmentEntity ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "InvestmentEntityFilterInput",
      description: "  Filter InvestmentEntities",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Name Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deletion Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Status Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "contactId",
          description: "  Contact ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "MembershipFilterInput",
      description: "  Filter Memberships",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Name Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deletion Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Status Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "accountId",
          description: "  Account ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "userProfileId",
          description: "  UserProfile ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "MessageFilterInput",
      description: "  Filter Messages",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deletion Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Status Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "contactId",
          description: "  Contact ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "MetricsFilterInput",
      description: "  Filter Metricss",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Name Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deletion Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "accountId",
          description: "  Account ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "PaymentFilterInput",
      description: "  Filter Payments",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deletion Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Status Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "bankAccountId",
          description: "  BankAccount ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "dealId",
          description: "  Deal ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "distributionId",
          description: "  Distribution ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investmentId",
          description: "  Investment ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "SettingsFilterInput",
      description: "  Filter Settings",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deletion Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Status Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "accountId",
          description: "  Account ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "TagFilterInput",
      description: "  Filter Tags",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deletion Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "accountId",
          description: "  Account ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "TemplateFilterInput",
      description: "  Filter Templates",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deletion Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Status Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "accountId",
          description: "  Account ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "default",
          description: "  Default Tempalte Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableBooleanFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "TableBooleanFilterInput",
      description: "  Boolean Filter Input",
      fields: null,
      inputFields: [
        {
          name: "ne",
          description: "  Not Equals",
          type: {
            kind: "SCALAR",
            name: "Boolean",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "eq",
          description: "  Equals",
          type: {
            kind: "SCALAR",
            name: "Boolean",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UserProfileFilterInput",
      description: "  Filter UserProfiles",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIDFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "created",
          description: "  Creation Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "updated",
          description: "  Updated Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deleted",
          description: "  Deletion Date Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Status Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "cognitoUserPoolId",
          description: "  AWS Cognito User Pool Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "cognitoUserId",
          description: "  AWS Cognito User Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableStringFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "TableIntFilterInput",
      description: "  Int Filter Input",
      fields: null,
      inputFields: [
        {
          name: "ne",
          description: "  Not Equals",
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "eq",
          description: "  Equals",
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "le",
          description: "  Less Than or Equals",
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "lt",
          description: "  Less Than",
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ge",
          description: "  Greater Than or Equals",
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "gt",
          description: "  Greater Than",
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "contains",
          description: "  Contains",
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "notContains",
          description: "  Does Not Contain",
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "between",
          description: "  Between",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "TableFloatFilterInput",
      description: "  Float Filter Input",
      fields: null,
      inputFields: [
        {
          name: "ne",
          description: "  Not Equals",
          type: {
            kind: "SCALAR",
            name: "Float",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "eq",
          description: "  Equals",
          type: {
            kind: "SCALAR",
            name: "Float",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "le",
          description: "  Less Than or Equals",
          type: {
            kind: "SCALAR",
            name: "Float",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "lt",
          description: "  Less Than",
          type: {
            kind: "SCALAR",
            name: "Float",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ge",
          description: "  Greater Than or Equals",
          type: {
            kind: "SCALAR",
            name: "Float",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "gt",
          description: "  Greater Than",
          type: {
            kind: "SCALAR",
            name: "Float",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "contains",
          description: "  Contains",
          type: {
            kind: "SCALAR",
            name: "Float",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "notContains",
          description: "  Does Not Contain",
          type: {
            kind: "SCALAR",
            name: "Float",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "between",
          description: "  Between",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Float",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    }
  ],
  inputTypes: [
    {
      kind: "INPUT_OBJECT",
      name: "CreateAccountInput",
      description: "  Create Account",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Account Name",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Account Status",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "AccountStatus",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UpdateAccountInput",
      description: "  Update Account",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Account ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Account Name",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Account Status",
          type: {
            kind: "ENUM",
            name: "AccountStatus",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DeleteAccountInput",
      description: "  Delete Account",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Account ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CreateActivityInput",
      description: "  Create Activity",
      fields: null,
      inputFields: [
        {
          name: "summary",
          description: "  Activity Summary",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "actor",
          description: "  Activity Actor",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "subject",
          description: "  Activity Subject",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "action",
          description: "  Activity Action",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "accountId",
          description: "  The Account the Activity occured on.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CreateBankAccountInput",
      description: "  Create BankAccount",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  BankAccount Name",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  BankAccount Status",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "BankAccountStatus",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "holdingEntityId",
          description: "  The HoldingEntity ID this belongs to.",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investmentEntityId",
          description: "  The InvestmentEntity ID this belongs to.",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UpdateBankAccountInput",
      description: "  Update BankAccount",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  BankAccount ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  BankAccount Name",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  BankAccount Status",
          type: {
            kind: "ENUM",
            name: "BankAccountStatus",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DeleteBankAccountInput",
      description: "  Delete BankAccount",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  BankAccount ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CreateContactInput",
      description: "  Create Contact",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Contact Name",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Contact Status",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "ContactStatus",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "accountId",
          description: "  The Account this belongs to.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "userProfileId",
          description: "  The UserProfile this belongs to.",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UpdateContactInput",
      description: "  Update Contact",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Contact Name",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Contact Status",
          type: {
            kind: "ENUM",
            name: "ContactStatus",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "userProfileId",
          description: "  The UserProfile this belongs to.",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DeleteContactInput",
      description: "  Delete Contact",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Contact ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CreateDealInput",
      description: "  Create Deal",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  The Name of the Deal.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Deal Status",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "DealStatus",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "holdingEntityId",
          description: "  The Holding Entity this belongs to.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UpdateDealInput",
      description: "  Update Deal",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Id uniquely identifies an instance of an Deal.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  The Name of the Deal.",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Deal Status",
          type: {
            kind: "ENUM",
            name: "DealStatus",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DeleteDealInput",
      description: "  Delete Deal",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Deal ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CreateDealSubscriptionInput",
      description: "  Create DealSubscription",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  DealSubscription Name",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  DealSubscription Status",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "DealSubscriptionStatus",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "dealId",
          description: "  The Investment Entity this belongs to.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investmentEntityId",
          description: "  The Investment Entity this belongs to.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UpdateDealSubscriptionInput",
      description: "  Update DealSubscription",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  DealSubscription ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  DealSubscription Name",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  DealSubscription Status",
          type: {
            kind: "ENUM",
            name: "DealSubscriptionStatus",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DeleteDealSubscriptionInput",
      description: "  Delete DealSubscription",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  DealSubscription ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CreateDistributionInput",
      description: "  Create Distribution",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Distribution Name",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Distribution Status",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "DistributionStatus",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "dealId",
          description: "  The Investment Entity this belongs to.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investmentEntityId",
          description: "  The Investment Entity this belongs to.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UpdateDistributionInput",
      description: "  Update Distribution",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Distribution ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Distribution Name",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Distribution Status",
          type: {
            kind: "ENUM",
            name: "DistributionStatus",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DeleteDistributionInput",
      description: "  Delete Distribution",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Distribution ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CreateFileInput",
      description: "  Create File",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  File Name",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  File Status",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "FileStatus",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "url",
          description: "  Download URL",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "AWSURL",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "version",
          description: "  File Version",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "dealId",
          description: "  The Deal ID associated with this File",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investmentEntityId",
          description: "  The InvestmentEntity ID associated with this File",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UpdateFileInput",
      description: "  Update File",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  File ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  File Name",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  File Status",
          type: {
            kind: "ENUM",
            name: "FileStatus",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "version",
          description: "  File Version",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DeleteFileInput",
      description: "  Delete File",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  File ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CreateHoldingEntityInput",
      description: "  Create HoldingEntity",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  HoldingEntity Name",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  HoldingEntity Status",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "HoldingEntityStatus",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "accountId",
          description: "  The Account ID this belongs to.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UpdateHoldingEntityInput",
      description: "  Update HoldingEntity",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  HoldingEntity ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  HoldingEntity Name",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  HoldingEntity Status",
          type: {
            kind: "ENUM",
            name: "HoldingEntityStatus",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DeleteHoldingEntityInput",
      description: "  Delete HoldingEntity",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  HoldingEntity ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CreateInvestmentInput",
      description: "  Create Investment",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Investment Name",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Investment Status",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "InvestmentStatus",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "dealId",
          description: "  The InvestmentEntity this belongs to.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investmentEntityId",
          description: "  The InvestmentEntity ID this belongs to.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UpdateInvestmentInput",
      description: "  Update Investment",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Investment ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Investment Name",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Investment Status",
          type: {
            kind: "ENUM",
            name: "InvestmentStatus",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DeleteInvestmentInput",
      description: "  Delete Investment",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Investment ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CreateInvestmentEntityInput",
      description: "  Create InvestmentEntity",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  InvestmentEntity Name",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  InvestmentEntity Status",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "InvestmentEntityStatus",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "contactId",
          description: "  The Contact ID this belongs to.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UpdateInvestmentEntityInput",
      description: "  Update InvestmentEntity",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  InvestmentEntity ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  InvestmentEntity Name",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  InvestmentEntity Status",
          type: {
            kind: "ENUM",
            name: "InvestmentEntityStatus",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DeleteInvestmentEntityInput",
      description: "  Delete InvestmentEntity",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  InvestmentEntity ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CreateMembershipInput",
      description: "  Create a Membership",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Membership Name",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "accountId",
          description: "  The Account ID this Membership is for.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "userProfileId",
          description: "  The UserProfile ID this Membership is for.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UpdateMembershipInput",
      description: "  Update a Membership",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Membership ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Membership Name",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DeleteMembershipInput",
      description: "  Delete Membership",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Membership ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CreateMessageInput",
      description: "  Create Message",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Message Name",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Message Status",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "MessageStatus",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "contactId",
          description: "  The Contact ID this belong to.",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UpdateMessageInput",
      description: "  Update Message",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Message ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Message Name",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Message Status",
          type: {
            kind: "ENUM",
            name: "MessageStatus",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DeleteMessageInput",
      description: "  Delete Message",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Message ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CreatePaymentInput",
      description: "  Create Payment",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Payment Name",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Payment Status",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "PaymentStatus",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "dealId",
          description: "  The Deal ID this belong to.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "distributionId",
          description: "  The Distribution ID associated with this Payment.",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investmentId",
          description: "  The Investment Id associated with this Payment.",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UpdatePaymentInput",
      description: "  Update Payment",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Payment ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Payment Name",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Payment Status",
          type: {
            kind: "ENUM",
            name: "PaymentStatus",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DeletePaymentInput",
      description: "  Delete Payment",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Payment ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CreateSettingsInput",
      description: "  Create Settings",
      fields: null,
      inputFields: [
        {
          name: "accountId",
          description: "  The Account ID this belong to.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UpdateSettingsInput",
      description: "  Update Settings",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Settings ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DeleteSettingsInput",
      description: "  Delete Settings",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Settings ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CreateTagInput",
      description: "  Create Tag",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Tag Name",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "accountId",
          description: "  The Account ID this belong to.",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UpdateTagInput",
      description: "  Update Tag",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Tag ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Tag Name",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DeleteTagInput",
      description: "  Delete Tag",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Tag ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CreateTemplateInput",
      description: "  Create Template",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Template Name",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Template Status",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "TemplateStatus",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "accountId",
          description: "  The Account ID this belong to.",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UpdateTemplateInput",
      description: "  Update Template",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Template ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  Template Name",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  Template Status",
          type: {
            kind: "ENUM",
            name: "TemplateStatus",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DeleteTemplateInput",
      description: "  Delete Template",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Template ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CreateUserProfileInput",
      description: "  Create UserProfile",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  UserProfile Name",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  UserProfile Status",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "UserProfileStatus",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "cognitoUserPoolId",
          description: "  AWS Cognito User Pool ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "cognitoUserId",
          description: "  AWS Cognito User ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "UpdateUserProfileInput",
      description: "  Update UserProfile",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  UserProfile ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "name",
          description: "  UserProfile Name",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "status",
          description: "  UserProfile Status",
          type: {
            kind: "ENUM",
            name: "UserProfileStatus",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DeleteUserProfileInput",
      description: "  Delete UserProfile",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  UserProfile ID",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    }
  ],
  mutations: [
    {
      name: "createAccount",
      description: "  Create an Account",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateAccountInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Account",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateAccount",
      description: "  Update an Account",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateAccountInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Account",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteAccount",
      description: "  Delete an Account",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteAccountInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Account",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "createActivity",
      description: "  Create an Activity",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateActivityInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Activity",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "createBankAccount",
      description: "  Create a BankAccount",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateBankAccountInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "BankAccount",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateBankAccount",
      description: "  Update a BankAccount",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateBankAccountInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "BankAccount",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteBankAccount",
      description: "  Delete a BankAccount",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteBankAccountInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "BankAccount",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "createContact",
      description: "  Create a Contact",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateContactInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Contact",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateContact",
      description: "  Update a Contact",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateContactInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Contact",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteContact",
      description: "  Delete a Contact",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteContactInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Contact",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "createDeal",
      description: "  Create a Deal",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateDealInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Deal",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateDeal",
      description: "  Update a Deal",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateDealInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Deal",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteDeal",
      description: "  Delete a Deal",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteDealInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Deal",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "createDealSubscription",
      description: "  Create a DealSubscription",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateDealSubscriptionInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "DealSubscription",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateDealSubscription",
      description: "  Update a DealSubscription",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateDealSubscriptionInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "DealSubscription",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteDealSubscription",
      description: "  Delete a DealSubscription",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteDealSubscriptionInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "DealSubscription",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "createDistribution",
      description: "  Create a Distribution",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateDistributionInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Distribution",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateDistribution",
      description: "  Update a Distribution",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateDistributionInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Distribution",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteDistribution",
      description: "  Delete a Distribution",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteDistributionInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Distribution",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "createFile",
      description: "  Create a File",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateFileInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "File",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateFile",
      description: "  Update a File",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateFileInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "File",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteFile",
      description: "  Delete a File",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteFileInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "File",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "createHoldingEntity",
      description: "  Create an HoldingEntity",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateHoldingEntityInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "HoldingEntity",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateHoldingEntity",
      description: "  Update an HoldingEntity",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateHoldingEntityInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "HoldingEntity",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteHoldingEntity",
      description: "  Delete an HoldingEntity",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteHoldingEntityInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "HoldingEntity",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "createInvestment",
      description: "  Create an Investment",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateInvestmentInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Investment",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateInvestment",
      description: "  Update an Investment",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateInvestmentInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Investment",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteInvestment",
      description: "  Delete an Investment",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteInvestmentInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Investment",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "createInvestmentEntity",
      description: "  Create an InvestmentEntity",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateInvestmentEntityInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "InvestmentEntity",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateInvestmentEntity",
      description: "  Update an InvestmentEntity",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateInvestmentEntityInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "InvestmentEntity",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteInvestmentEntity",
      description: "  Delete an InvestmentEntity",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteInvestmentEntityInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "InvestmentEntity",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "createMembership",
      description: "  Create a Membership",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateMembershipInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Membership",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateMembership",
      description: "  Update an Membership",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateMembershipInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Membership",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteMembership",
      description: "  Delete an Membership",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteMembershipInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Membership",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "createMessage",
      description: "  Create a Message",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateMessageInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Message",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateMessage",
      description: "  Update an Message",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateMessageInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Message",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteMessage",
      description: "  Delete an Message",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteMessageInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Message",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "createPayment",
      description: "  Create a Payment",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreatePaymentInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Payment",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updatePayment",
      description: "  Update an Payment",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdatePaymentInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Payment",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deletePayment",
      description: "  Delete an Payment",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeletePaymentInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Payment",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "createSettings",
      description: "  Create Settings",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateSettingsInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Settings",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateSettings",
      description: "  Update Settings",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateSettingsInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Settings",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteSettings",
      description: "  Delete Settings",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteSettingsInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Settings",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "createTag",
      description: "  Create a Tag",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateTagInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Tag",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateTag",
      description: "  Update an Tag",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateTagInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Tag",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteTag",
      description: "  Delete an Tag",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteTagInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Tag",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "createTemplate",
      description: "  Create a Template",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateTemplateInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Template",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateTemplate",
      description: "  Update an Template",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateTemplateInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Template",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteTemplate",
      description: "  Delete an Template",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteTemplateInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Template",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "createUserProfile",
      description: "  Create a UserProfile",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateUserProfileInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "UserProfile",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateUserProfile",
      description: "  Update a UserProfile",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateUserProfileInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "UserProfile",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteUserProfile",
      description: "  Delete a UserProfile",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteUserProfileInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "UserProfile",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    }
  ],
  queries: [
    {
      name: "getAccount",
      description: "  Get a single Account",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Account",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listAccounts",
      description: "  Get a list of Accounts",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "AccountFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "AccountConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getActivity",
      description: "  Get a single Activity",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Activity",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listActivities",
      description: "  Get a list of Activities",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "ActivityFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "ActivityConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getBankAccount",
      description: "  Get a single BankAccount",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "BankAccount",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listBankAccounts",
      description: "  Get a list of BankAccounts",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "BankAccountFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "BankAccountConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getContact",
      description: "  Get a single Contact",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Contact",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listContacts",
      description: "  Get a list of Contacts",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "ContactFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "ContactConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getDeal",
      description: "  Get a single Deal",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Deal",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listDeals",
      description: "  Get a list of Deals",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "DealFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "DealConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getDealSubscription",
      description: "  Get a single DealSubscription",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "DealSubscription",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listDealSubscriptions",
      description: "  Get a list of DealSubscriptions",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "DealSubscriptionFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "DealSubscriptionConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getDistribution",
      description: "  Get a single Distribution",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Distribution",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listDistributions",
      description: "  Get a list of Distributions",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "DistributionFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "DistributionConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getFile",
      description: "  Get a single File",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "File",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listFiles",
      description: "  Get a list of Files",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "FileFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "FileConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getHoldingEntity",
      description: "  Get a single HoldingEntity",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "HoldingEntity",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listHoldingEntities",
      description: "  Get a list of investmentEntities",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "HoldingEntityFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "HoldingEntityConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getInvestment",
      description: "  Get a single Investment",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Investment",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listInvestments",
      description: "  Get a list of Investments",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "InvestmentFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "InvestmentConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getInvestmentEntity",
      description: "  Get a single InvestmentEntity",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "InvestmentEntity",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listInvestmentEntities",
      description: "  Get a list of investmentEntities",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "InvestmentEntityFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "InvestmentEntityConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getMembership",
      description: "  Get a single Membership",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Membership",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listMemberships",
      description: "  Get a list of Memberships",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "MembershipFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "MembershipConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getMessage",
      description: "  Get a single Message",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Message",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listMessages",
      description: "  Get a list of Memberships",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "MessageFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "MessageConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getMetrics",
      description: "  Get a single set of Metrics",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Metrics",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listMetrics",
      description: "  Get a list of Metrics",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "MetricsFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "MetricsConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getPayment",
      description: "  Get a single Payment",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Payment",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listPayments",
      description: "  Get a list of Payments",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "PaymentConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getSettings",
      description: "  Get a single Account's Settings",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Settings",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listSettings",
      description: "  Get a list of Account Settings",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "SettingsFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "SettingsConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getTag",
      description: "  Get a single Tag",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Tag",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listTags",
      description: "  Get a list of Tags",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "TagFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "TagConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getTemplate",
      description: "  Get a single Template",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "Template",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listTemplates",
      description: "  Get a list of Templates",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "TemplateFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "TemplateConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "getUserProfile",
      description: "  Get a single UserProfile",
      args: [
        {
          name: "id",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "UserProfile",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listUserProfiles",
      description: "  Get a list of UserProfiles",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "UserProfileFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "limit",
          description: null,
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "nextToken",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        }
      ],
      type: {
        kind: "OBJECT",
        name: "UserProfileConnection",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    }
  ]
};