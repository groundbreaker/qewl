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
      name: "ContactInfoLabel",
      description: "  Label for Contact Info",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "PRIMARY",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "WORK",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "HOME",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "OTHER",
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
      name: "TypicalInvestment",
      description: "  Typical Investment Size per Deal",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "TIER_ONE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "TIER_TWO",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "TIER_THREE",
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
      name: "AnnualInvestment",
      description: "  Expected Total Investment in the next 12 months",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "TIER_ONE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "TIER_TWO",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "TIER_THREE",
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
      name: "InvestmentObjectives",
      description: "  Investment Objectives",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "GROWTH",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "LIQUIDITY",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "INCOME",
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
      name: "PropertyType",
      description: "  Property Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "OFFICE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "RETAIL",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "INDUSTRIAL",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "HOTEL_MOTEL",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "RESIDENTIAL",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "LAND",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "AGRICULTURAL",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "SENIORHOUSING",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "SPECIALPURPOSE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "SPORT_ENTERTAINMENT",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "MULTI_FAMILY",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "HOSPITAL",
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
      name: "USRegion",
      description: "  Preferred Region (US)",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "NATIONWIDE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "NE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "NW",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "SE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "SW",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "MIDWEST",
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
      name: "HoldingPeriod",
      description: "  Holding Period",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "ONE_TWO",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "TWO_FIVE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "SIX_NINE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "TEN_PLUS",
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
      name: "RiskTolerance",
      description: "  Risk Tolerance",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "HIGH",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "MODERATE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "LOW",
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
      name: "AssetType",
      description: "  Asset Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "EQUITY",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "DEBT",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "FUND",
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
      name: "MembershipType",
      description: "  Membership Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "OWNER",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "ADMIN",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "USER",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "INVESTOR",
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
      name: "DealType",
      description: "  Deal Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "SINGLE_ASSET",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "MULTI_ASSET",
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
      name: "HoldTimeType",
      description: "  Hold Time Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "YEARS",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "MONTH",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "DAYS",
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
      name: "DebtType",
      description: "  Debt Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "BRIDGE_LOAN",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "CASH",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "HARD_MONEY_LOAN",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "CONSTRUCTION_LOAN",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "LAND_LOAN",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "LINE_OF_CREDIT",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "PERMANANT_LOAN",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "MORTGAGE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "SENIOR_NOTES",
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
      name: "IRRType",
      description: "  IRR Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "GROSS",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "NET",
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
      name: "InvestmentEntityType",
      description: "  InvestmentEntity Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "INDIVIDUAL",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "TRUST",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "IRA",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "EBP",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "CORP",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "LLC",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "PARTNERSHIP",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "JOINT",
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
      name: "TaxIdTypeSSNandEIN",
      description: "  Tax Identification Number Type (SSN and EIN Only)",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "SSN",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "EIN",
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
      name: "IRACustodian",
      description: "  IRA Custodians",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "CUSTODIAN_ONE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "OTHER",
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
      name: "JointOwnershipType",
      description: "  Joint Ownership Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "JOINT_ONE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "JOINT_TWO",
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
      name: "TaxIdTypeSSN",
      description: "  Tax Identification Number (SSN Only)",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "SSN",
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
      name: "PaymentMethodType",
      description: "  Payment Method Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "ACH",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "CHECK",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "WIRE",
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
      name: "BankAccountType",
      description: "  BankAccount Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "CHECKING",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "SAVINGS",
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
      name: "BankAccountOwnerType",
      description: "  BankAccount Owner Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "BUSINESS",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "PERSONAL",
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
      name: "TaxIdType",
      description: "  Tax Identification Number Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "SSN",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "EIN",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "TIN",
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
      name: "InvestmentStructure",
      description: "  Investment Structure",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "STRUCTURE_ONE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "STRUCTURE_TWO",
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
      name: "InvestmentStrategy",
      description: "  Investment Strategy",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "ACQUISITION",
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
      name: "PaymentType",
      description: "  Payment Method Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "ACH",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "WIRE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "CHECK",
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
          name: "PENDING",
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
          name: "PAID",
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
      name: "DistributionType",
      description: "  Distribution Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "PRORATA",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "PROMOTE",
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
      name: "CashFlowType",
      description: "  Cash Flow Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "CASHFLOW_ONE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "CASHFLOW_TWO",
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
      name: "DistributionNoticeStatus",
      description: "  DistributionNotice Status",
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
          name: "PENDING",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "APPROVED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "SCHEDULED",
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
          name: "COMPLETE",
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
      name: "PartnerType",
      description: "  Partner Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "GENERAL",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "LIMITED",
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
      name: "DelegateRole",
      description: "  DelegateRole",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "INVESTOR",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "ADVISOR",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "ACCOUNTANT",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "ATTORNEY",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "PROXY",
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
      name: "AccreditationType",
      description: "  Accreditation Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "QUESTIONNAIRE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "THIRD_PARTY",
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
      name: "FundingType",
      description: "  Funding Announcement Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "ROLLING_CLOSE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "FUNDING_DATE",
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
      name: "MessageCategory",
      description: "  Message Category",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "ALERT",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "MARKETING",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "NOTIFICATION",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "TRANSACTIONAL",
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
      name: "MessageType",
      description: "  Message Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "EMAIL",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "MOBILE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "WEB",
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
      name: "DealAccessType",
      description: "  Deal Access Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "INVITE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "PRIVATE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "PUBLIC",
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
      name: "FundType",
      description: "  Fund Type",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "OPEN_END",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
          __typename: "__EnumValue"
        },
        {
          name: "CLOSED_END",
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
      name: "TaxIdTypeEIN",
      description: "  Tax Identification Number (EIN Only)",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "EIN",
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
            name: "ActorFilterInput",
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
            name: "SubjectFilterInput",
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
      name: "ActorFilterInput",
      description: "  Actor Filter.",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "   Filter ID",
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
          name: "type",
          description: "  Type Filter",
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
      name: "SubjectFilterInput",
      description: "  Subject Filter",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  ID Filter",
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
          name: "type",
          description: "  Type Filter",
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
          name: "routingNumber",
          description: "  Routing Number Filter",
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
          name: "accountNumber",
          description: "  Account Number Filter",
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
          name: "bankAccountType",
          description: "  Bank Account Type Filter",
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
          name: "primaryOwner",
          description: "  Primary Owner Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "BankAccountOwnerFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "beneficialOwners",
          description: "  Beneficial Owners Filter",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "BankAccountOwnerFilterInput",
              ofType: null,
              __typename: "__Type"
            },
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
      name: "BankAccountOwnerFilterInput",
      description: "  BankAccountOwner Filter",
      fields: null,
      inputFields: [
        {
          name: "firstName",
          description: "  BankAccountOwner's First Name",
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
          name: "lastName",
          description: "  BankAccountOwner's Last Name",
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
          name: "email",
          description: "  BankAccountOwner's Email",
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
          name: "ownerType",
          description: "  Type of BankAccount Owner",
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
          name: "businessName",
          description: "  Registered Business Name",
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
          name: "ipAddress",
          description: "  BankAccountOwner's IP Address (at time of creation)",
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
          name: "ssn",
          description: "  BankAccountOwner's Social Security Number",
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
          name: "dateOfBirth",
          description: "  BankAccountOwner's Date of Birth",
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
          name: "passport",
          description:
            "  BankAccountOwner's Passport, if no SSN can be provided.",
          type: {
            kind: "INPUT_OBJECT",
            name: "PassportFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description:
            "  BankAccount Owner's Address. Note: PO Boxes are not allowed.",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressFilterInput",
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
      name: "PassportFilterInput",
      description: "  Passport Filter",
      fields: null,
      inputFields: [
        {
          name: "number",
          description: "  Passport Number Filter",
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
          name: "country",
          description: "  Passport Country Filter",
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
      name: "AddressFilterInput",
      description: "  Address Filter",
      fields: null,
      inputFields: [
        {
          name: "address1",
          description: "  Street Address Filter",
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
          name: "address2",
          description: "  Address (Line 2) Filter",
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
          name: "city",
          description: "  City Filter",
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
          name: "state",
          description: "  State Filter",
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
          name: "country",
          description: "  Country Filter",
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
          name: "postalCode",
          description: "  Postal Code Filter",
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
          name: "map",
          description: "  Map URL Filter",
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
          name: "address",
          description: "  Address Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "company",
          description: "  Company Filter",
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
          name: "title",
          description: "  Title Filter",
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
          name: "dateOfBirth",
          description: "  Date of Birth",
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
          name: "notes",
          description: "  Notes",
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
          name: "emails",
          description: "  Emails filter",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ContactEmailFilterInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "phones",
          description: "  Phones",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ContactPhoneFilterInput",
              ofType: null,
              __typename: "__Type"
            },
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
      name: "ContactEmailFilterInput",
      description: "  Email Address w/ Label",
      fields: null,
      inputFields: [
        {
          name: "address",
          description: "  Email Address Filter",
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
          name: "label",
          description: "  Email Address Label Filter",
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
      name: "ContactPhoneFilterInput",
      description: "  Phone Number w/ Label",
      fields: null,
      inputFields: [
        {
          name: "number",
          description: "  Phone Number Filter",
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
          name: "label",
          description: "  Phone Number Label Filter",
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
          name: "address",
          description: "  Address Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "type",
          description: "  Type Filter",
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
          name: "deadline",
          description: "  Deadline Filter",
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
          name: "total",
          description: "  Total Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "propertyType",
          description: "  Property Type Filter",
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
          name: "holdTime",
          description: "  Hold Time Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "holdTimeType",
          description: "  Hold Time Type Filter",
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
          name: "investmentMin",
          description: "  Investment Minimum Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "description",
          description: "  Description Filter",
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
      name: "USCurrencyFilterInput",
      description: "  US Currency Filter",
      fields: null,
      inputFields: [
        {
          name: "value",
          description: "  Value Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "display",
          description: "  Display Filter",
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
          name: "businessAccreditation",
          description: "  Business Accreditation Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "BusinessAccreditationFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "individualAccreditation",
          description: "  Individual Accreditation Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "BusinessAccreditationFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "agreed",
          description: "  Agrement Date Filter",
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
      name: "BusinessAccreditationFilterInput",
      description: "  Business Accreditation Questionnaire Filter",
      fields: null,
      inputFields: [
        {
          name: "trust",
          description: "  Trust Accreditation Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableBooleanFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "entity",
          description: "  Business Entity Accreditation Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableBooleanFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "corporation",
          description: "  Corporation Accreditation Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableBooleanFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "institutional",
          description: "  Institutional Accreditation Filter",
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
      name: "DelegateFilterInput",
      description: "  Filter Delegates",
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
          name: "role",
          description: "  Role Filter",
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
          name: "amount",
          description: "  Amount Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyFilterInput",
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
          name: "distributionNoticeId",
          description: "  DistributionNotice ID Filter",
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
      name: "DistributionNoticeFilterInput",
      description: "  Filter DistributionNotices",
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
          name: "type",
          description: "  Type Filter",
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
          name: "cashFlow",
          description: "  CashFlow Filter",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "TableStringFilterInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "amount",
          description: "  Amount Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "distributed",
          description: "  Distribution Date Filter",
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
          name: "promote",
          description: "  Promote Options Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "DistributionPromoteFilterInput",
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
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DistributionPromoteFilterInput",
      description: "  Filter Distribution Promote Options",
      fields: null,
      inputFields: [
        {
          name: "promoteGP",
          description: "  General Partner Promote Split percentage Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableFloatFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "promoteLP",
          description: "  Limited Partner Promote Split percentage Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableFloatFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "carriedInterest",
          description: "  Carried Interest Amount Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyFilterInput",
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
        },
        {
          name: "subscriptionPackageId",
          description: "  SubscriptionPackage ID Filter",
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
          name: "taxId",
          description: "  Tax ID Filter",
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
          name: "taxIdType",
          description: "  Tax ID Type Filter",
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
          name: "address",
          description: "  Address Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "structure",
          description: "  Structure Filter",
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
          name: "strategies",
          description: "  Strategies Filter",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "TableStringFilterInput",
              ofType: null,
              __typename: "__Type"
            },
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
          name: "amount",
          description: "  Amount Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "partner",
          description: "  Partner Filter",
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
          name: "promote",
          description: "  Promote Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableBooleanFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "closingDate",
          description: "  Closing Date Filter",
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
          name: "dealSubscriptionId",
          description: "  DealSubscription ID Filter",
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
          name: "details",
          description: "  Details Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "InvestmentEntityDetailsFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "type",
          description: "  Type Filter",
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
      name: "InvestmentEntityDetailsFilterInput",
      description: "  Filter InvestmentEntity Details",
      fields: null,
      inputFields: [
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
          name: "taxIdType",
          description: "  Tax Identification Number Type Filter",
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
          name: "taxId",
          description: "  Tax Identification Number Filter",
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
          name: "dateOfBirth",
          description: "  Date of Birth Filter",
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
          name: "other",
          description: "  IRA - Other Filter",
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
          name: "accountNumber",
          description: "  IRA Account Number Filter",
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
          name: "type",
          description: "  Joint Ownership Type Filter",
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
          name: "firstName",
          description: "  First Name Filter",
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
          name: "lastName",
          description: "  First Name Filter",
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
          name: "sender",
          description: "  Sender Filter",
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
          name: "recipient",
          description: "  Recipient Filter",
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
          name: "body",
          description: "  Body Filter",
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
          name: "category",
          description: "  Category Filter",
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
          name: "type",
          description: "  Type Filter",
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
          name: "paymentType",
          description: "  Payment Type Filter",
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
          name: "payeeId",
          description: "  BankAccount ID Filter (Payee)",
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
          name: "payorId",
          description: "  BankAccount ID Filter (Payor)",
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
      name: "ProspectFilterInput",
      description: "  Filter Propsects",
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
          name: "summary",
          description: "  Summary Filter",
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
          name: "email",
          description: "  Email Filter",
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
          name: "phone",
          description: "  Phone Filter",
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
          name: "address",
          description: "  Address Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "logo",
          description: "  Logo Filter",
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
          name: "favicon",
          description: "  Favicon Filter",
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
          name: "color",
          description: "  Color Filter",
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
          name: "loginImg",
          description: "  Login Image Filter",
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
          name: "dealsImg",
          description: "  Deals Image Filter",
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
          name: "loginMsg",
          description: "  Login Message Filter",
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
          name: "welcomeMsg",
          description: "  Welcome Message Filter",
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
          name: "fromName",
          description: "  From Name Filter",
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
          name: "fromEmail",
          description: "  From Email Filter",
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
          name: "ga",
          description: "  Google Analytics ID Filter",
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
          name: "gtm",
          description: "  Google Tag Manager ID Filter",
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
          name: "fb",
          description: "  FaceBook Pixel ID Filter",
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
      name: "SubscriptionPackageFilterInput",
      description: "  Filter SubscriptionPackage",
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
          name: "accreditation",
          description: "  Accreditation Filter",
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
          name: "commitmentAmount",
          description: "  Commitment Amount Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "CommitmentAmountFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investorLimits",
          description: "  Investor Limit",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "InvestorLimitFilterInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "taxDoc",
          description: "  Tax Doc Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableBooleanFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "formationDoc",
          description: "  Formation Doc Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableBooleanFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "countersignerId",
          description: "  Countersigner Filter",
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
          name: "signatureElectronic",
          description: "  Signature (Electronic) Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableBooleanFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "signatureWet",
          description: "  Signature (Wet) Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableBooleanFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "funding",
          description: "  Funding Filter",
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
          name: "fundingDate",
          description: "  Funding Date",
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
          name: "ach",
          description: "  ACH Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Check Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckFilterInput",
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
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "CommitmentAmountFilterInput",
      description: "  CommitmentAmount Filter",
      fields: null,
      inputFields: [
        {
          name: "min",
          description: "  Min Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "max",
          description: "  Max Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyFilterInput",
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
      name: "InvestorLimitFilterInput",
      description: "  InvestorLimit Filter",
      fields: null,
      inputFields: [
        {
          name: "commitmentAmount",
          description: "  Commitment Amount Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "CommitmentAmountFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investmentEntity",
          description: "  InvestmentEntity Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "InvestmentEntityFilterInput",
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
      name: "PaymentMethodACHFilterInput",
      description: "  Payment Method (ACH) Filter",
      fields: null,
      inputFields: [
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
          name: "enabled",
          description: "  Enabled Filter",
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
      name: "PaymentMethodWireFilterInput",
      description: "  Payment Method (Wire) Filter",
      fields: null,
      inputFields: [
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
          name: "routingNumber",
          description: "  Routing Number Filter",
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
          name: "accountNumber",
          description: "  Account Number Filter",
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
          name: "enabled",
          description: "  Enabled Filter",
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
      name: "PaymentMethodCheckFilterInput",
      description: "  Payment Method (Check) Filter",
      fields: null,
      inputFields: [
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
          name: "address",
          description: "  Address Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "enabled",
          description: "  Enabled?",
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
          name: "body",
          description: "  Body Filter",
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
        },
        {
          name: "preferences",
          description: "  Preferences Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "InvestorPreferencesFilterInput",
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
      name: "InvestorPreferencesFilterInput",
      description: "  InvestorPreferences Filter",
      fields: null,
      inputFields: [
        {
          name: "typical",
          description: "  Typical Filter",
          type: {
            kind: "ENUM",
            name: "TypicalInvestment",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "annual",
          description: "  Annual Filter",
          type: {
            kind: "ENUM",
            name: "AnnualInvestment",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "objectives",
          description: "  Objectives Filter",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "InvestmentObjectives",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "propertyTypes",
          description: "  Property Types Filter",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "PropertyType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "regions",
          description: "  Regions Filter",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "USRegion",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "periods",
          description: "  Periods Filter",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "HoldingPeriod",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "risk",
          description: "  Risk Filter",
          type: {
            kind: "ENUM",
            name: "RiskTolerance",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "assetType",
          description: "  Asset Type Filter",
          type: {
            kind: "ENUM",
            name: "AssetType",
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
      name: "CapitalStackBlockFilterInput",
      description: "  CapitalStack Filter",
      fields: null,
      inputFields: [
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
          name: "showDebt",
          description: "  Show Debt Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableBooleanFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "debt",
          description: "  Debt Amount Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "debtType",
          description: "  Debt Type Filter",
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
          name: "showMezzanine",
          description: "  Show Mezzanine Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableBooleanFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "mezzanine",
          description: "  Mezzanine Amount Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "equity",
          description: "  Equity Amount Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "notes",
          description: "  Notes Filter",
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
          name: "ordinal",
          description: "  Ordinal Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
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
      name: "CashOnCashBlockFilterInput",
      description: "  CashOnCash Filter",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Name",
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
          name: "initial",
          description: "  Initial Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "stablized",
          description: "  Stablized Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "average",
          description: "  Average Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Ordinal Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
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
      name: "DealSectionFilterInput",
      description: "  DealSection Filter",
      fields: null,
      inputFields: [
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
          name: "info",
          description: "  Info Filter",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ContentBlockFilterInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "list",
          description: "  List Filter",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ListBlockFilterInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "cost",
          description: '  "Summary of Cost" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CostSummaryBlockFilterInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "stack",
          description: '  "Capital Stack" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CapitalStackBlockFilterInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "coc",
          description: '  "Cash On Cash" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CashOnCashBlockFilterInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "irr",
          description: '  "Internal Rate of Return" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "InternalRateOfReturnBlockFilterInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "equity",
          description: '  "Return on Equity" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ReturnOnEquityBlockFilterInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "equityRange",
          description: '  "Return on Equity" (Range) Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ReturnOnEquityRangeBlockFilterInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "exit",
          description: '  "Projected Exit Capitalization Rate" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ExitCapitlizationRateBlockFilterInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "sale",
          description: '  "Projected Sale Price" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ProjectedSalePriceBlockFilterInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "return",
          description: '  "Preferred Return" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "PreferredReturnBlockFilterInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "target",
          description: '  "Target Distributions" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "TargetDistributionsBlockFilterInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
          type: {
            kind: "NON_NULL",
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
      name: "ContentBlockFilterInput",
      description: "  Filter ContentBlock",
      fields: null,
      inputFields: [
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
          name: "ordinal",
          description: "  Ordinal Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
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
      name: "ListBlockFilterInput",
      description: "  ListBlock Filter",
      fields: null,
      inputFields: [
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
          name: "items",
          description: "  List Items",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ListItemFilterInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Ordinal Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
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
      name: "ListItemFilterInput",
      description: null,
      fields: null,
      inputFields: [
        {
          name: "key",
          description: "  Key Filter",
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
          name: "value",
          description: "  Value Filter",
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
          name: "ordinal",
          description: "  Ordinal Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
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
      name: "CostSummaryBlockFilterInput",
      description: "  Cost Summary Filter",
      fields: null,
      inputFields: [
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
          name: "summary",
          description: "  Summary Filter",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CostItemFilterInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "capitalization",
          description: "  Capitalization Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Ordinal Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
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
      name: "CostItemFilterInput",
      description: "  Cost Item Filter",
      fields: null,
      inputFields: [
        {
          name: "key",
          description: "  Key Filter",
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
          name: "value",
          description: "  Value Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Ordinal Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
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
      name: "InternalRateOfReturnBlockFilterInput",
      description: "  InternalRateOfReturn Filter",
      fields: null,
      inputFields: [
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
          name: "from",
          description: "  From Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "to",
          description: "  To Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "type",
          description: "  Type Filter",
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
          name: "ordinal",
          description: "  Ordinal Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
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
      name: "ReturnOnEquityBlockFilterInput",
      description: "  ReturnOnEquity Filter",
      fields: null,
      inputFields: [
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
          name: "multiple",
          description: "  Multiple Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Ordinal Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
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
      name: "ReturnOnEquityRangeBlockFilterInput",
      description: "  ReturnOnEquityRange Filter",
      fields: null,
      inputFields: [
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
          name: "from",
          description: "  From Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "to",
          description: "  To Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Ordinal Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
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
      name: "ExitCapitlizationRateBlockFilterInput",
      description: "  ExitCapitlizationRate Filter",
      fields: null,
      inputFields: [
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
          name: "from",
          description: "  From Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "to",
          description: "  To Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Ordinal Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
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
      name: "ProjectedSalePriceBlockFilterInput",
      description: "  ProjectedSalePrice Filter",
      fields: null,
      inputFields: [
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
          name: "from",
          description: "  From Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "to",
          description: "  To Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Ordinal Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
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
      name: "PreferredReturnBlockFilterInput",
      description: "  PreferredReturn Filter",
      fields: null,
      inputFields: [
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
          name: "rate",
          description: "  Rate Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Ordinal Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
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
      name: "TargetDistributionsBlockFilterInput",
      description: "  TargetDistributions Filter",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Name",
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
          name: "startDate",
          description: "  Start Date Filter",
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
          name: "ordinal",
          description: "  Ordinal Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
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
      name: "PhotoFilterInput",
      description: "  Filter Photos",
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
          name: "ordinal",
          description: "  Ordinal Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableIntFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "primary",
          description: "  Primary Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableBooleanFilterInput",
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
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "IndividualAccreditationFilterInput",
      description: "  Individual Accreditation Questionnaire Filter",
      fields: null,
      inputFields: [
        {
          name: "networth",
          description: "  Individual Net Worth Accreditation Filter",
          type: {
            kind: "INPUT_OBJECT",
            name: "TableBooleanFilterInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "income",
          description: "  Individual Income Accreditation Filter",
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
              kind: "INPUT_OBJECT",
              name: "ActorInput",
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
              kind: "INPUT_OBJECT",
              name: "SubjectInput",
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
      name: "ActorInput",
      description: "  Actor is the thing that initiated the event.",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  The ID of the Actor",
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
          name: "type",
          description: '  The type of Actor, e.g. "Member"',
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
      name: "SubjectInput",
      description: "  Subject is the thing the event occurred for.",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  The ID of the Subject",
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
          name: "type",
          description: '  The type of Subject, e.g. "Contact"',
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
          name: "routingNumber",
          description: "  BankAccount Routing Number",
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
          name: "accountNumber",
          description: "  BankAccount Account Number",
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
          name: "bankAccountType",
          description: "  BankAccount Type",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "BankAccountType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "primaryOwner",
          description: "  BankAccount Owner (Primary)",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "BankAccountOwnerInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "beneficialOwners",
          description: "  BankAccount Beneficial Owners",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "BankAccountOwnerInput",
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
      name: "BankAccountOwnerInput",
      description: "  Verified Bank Account Owner",
      fields: null,
      inputFields: [
        {
          name: "firstName",
          description: "  BankAccountOwner's First Name",
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
          name: "lastName",
          description: "  BankAccountOwner's Last Name",
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
          name: "email",
          description: "  BankAccountOwner's Email",
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
          name: "ownerType",
          description: "  Type of BankAccount Owner",
          type: {
            kind: "ENUM",
            name: "BankAccountOwnerType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "businessName",
          description: "  Registered Business Name",
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
          name: "ipAddress",
          description: "  BankAccountOwner's IP Address (at time of creation)",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "AWSIPAddress",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ssn",
          description: "  BankAccountOwner's Social Security Number",
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
          name: "dateOfBirth",
          description: "  BankAccountOwner's Date of Birth",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "AWSDate",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "passport",
          description:
            "  BankAccountOwner's Passport, if no SSN can be provided.",
          type: {
            kind: "INPUT_OBJECT",
            name: "PassportInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description:
            "  BankAccount Owner's Address. Note: PO Boxes are not allowed.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "AddressInput",
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
      name: "PassportInput",
      description:
        "  Passport can be used to identify the BankAccountOwner when SSN is not provided",
      fields: null,
      inputFields: [
        {
          name: "number",
          description: "  Passport Number",
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
          name: "country",
          description: "  Passport Country",
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
      name: "AddressInput",
      description: "  Physical Address",
      fields: null,
      inputFields: [
        {
          name: "address1",
          description: "  Street Number and Route Name, e.g. 123 Fake Street",
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
          name: "address2",
          description: "  Unit Number, e.g. Suite 13",
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
          name: "city",
          description: "  City",
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
          name: "state",
          description:
            "  Two-letter US state or territory abbreviation code, e.g. IL",
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
          name: "country",
          description: "  Two digit ISO Country code, e.g. US.",
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
          name: "postalCode",
          description: "  Postal Code",
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
          name: "map",
          description: "  Map URL",
          type: {
            kind: "SCALAR",
            name: "AWSURL",
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
          name: "routingNumber",
          description: "  BankAccount Routing Number",
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
          name: "accountNumber",
          description: "  BankAccount Account Number",
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
          name: "bankAccountType",
          description: "  BankAccount Type",
          type: {
            kind: "ENUM",
            name: "BankAccountType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "primaryOwner",
          description: "  BankAccount Owner (Primary)",
          type: {
            kind: "INPUT_OBJECT",
            name: "BankAccountOwnerInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "beneficialOwners",
          description: "  BankAccount Beneficial Owners",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "BankAccountOwnerInput",
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
          name: "address",
          description: "  Contact Address",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "company",
          description: "  Contact Company",
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
          name: "title",
          description: "  Contact Title",
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
          name: "dateOfBirth",
          description: "  Contact Date of Birth",
          type: {
            kind: "SCALAR",
            name: "AWSDate",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "notes",
          description: "  Contact Notes",
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
          name: "emails",
          description: "  Contact Emails",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "INPUT_OBJECT",
                name: "ContactEmailInput",
                ofType: null,
                __typename: "__Type"
              },
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "phones",
          description: "  Contact Phone",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "INPUT_OBJECT",
                name: "ContactPhoneInput",
                ofType: null,
                __typename: "__Type"
              },
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
      name: "ContactEmailInput",
      description: "  Email Address w/ Label",
      fields: null,
      inputFields: [
        {
          name: "address",
          description: "  Email Address",
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
          name: "label",
          description: "  Email Address Label",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "ContactInfoLabel",
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
      name: "ContactPhoneInput",
      description: "  Phone Number w/ Label",
      fields: null,
      inputFields: [
        {
          name: "number",
          description: "  Phone Number. Format: +1234567890",
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
          name: "label",
          description: "  Phone Number Label",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "ContactInfoLabel",
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
          name: "address",
          description: "  Contact Address",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "company",
          description: "  Contact Company",
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
          name: "title",
          description: "  Contact Title",
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
          name: "dateOfBirth",
          description: "  Contact Date of Birth",
          type: {
            kind: "SCALAR",
            name: "AWSDate",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "notes",
          description: "  Contact Notes",
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
          name: "emails",
          description: "  Contact Emails",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ContactEmailInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "phones",
          description: "  Contact Phone Number",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ContactPhoneInput",
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
          name: "address",
          description: "  Property Address",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "type",
          description: "  The Type of Deal.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "DealType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deadline",
          description: "  The Estimated Date to stop accepting offers.",
          type: {
            kind: "SCALAR",
            name: "AWSDate",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "assetType",
          description: "  Asset Type",
          type: {
            kind: "ENUM",
            name: "AssetType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "total",
          description: "  Total Raise",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "propertyType",
          description: "  Property Type",
          type: {
            kind: "ENUM",
            name: "PropertyType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "holdTime",
          description: "  Hold Time",
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
          name: "holdTimeType",
          description: "  Hold Time Type",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "HoldTimeType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investmentMin",
          description: "  Minimum Investment",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "description",
          description: "  Description",
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
          name: "sections",
          description: "  Custom Content Sections",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DealSectionInput",
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
      name: "USCurrencyInput",
      description: "  US Currency representation",
      fields: null,
      inputFields: [
        {
          name: "value",
          description: "  Monetary Value (in US cents)",
          type: {
            kind: "NON_NULL",
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
        },
        {
          name: "display",
          description:
            "  Formatted Value to display to End-Users, e.g. $10,000.00",
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
      name: "DealSectionInput",
      description: "  Deal Section",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Deal Section Title",
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
          name: "info",
          description: '  "Info" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ContentBlockInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "list",
          description: '  "List" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ListBlockInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "cost",
          description: '  "Summary of Cost" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CostSummaryBlockInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "stack",
          description: '  "Capital Stack" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CapitalStackBlockInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "coc",
          description: '  "Cash On Cash" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CashOnCashBlockInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "irr",
          description: '  "Internal Rate of Return" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "InternalRateOfReturnBlockInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "equity",
          description: '  "Return on Equity" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ReturnOnEquityBlockInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "equityRange",
          description: '  "Return on Equity" (Range) Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ReturnOnEquityRangeBlockInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "exit",
          description: '  "Projected Exit Capitalization Rate" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ExitCapitlizationRateBlockInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "sale",
          description: '  "Projected Sale Price" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ProjectedSalePriceBlockInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "return",
          description: '  "Preferred Return" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "PreferredReturnBlockInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "target",
          description: '  "Target Distributions" Content Blocks',
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "TargetDistributionsBlockInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
          type: {
            kind: "NON_NULL",
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
      name: "ContentBlockInput",
      description: "  (WYSIWYG) Content Block",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Name",
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
          name: "html",
          description: "  Rendered HTML version of the content",
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
          name: "json",
          description: "  JSON representation of the content",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "AWSJSON",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
          type: {
            kind: "NON_NULL",
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
      name: "ListBlockInput",
      description: "  List Block",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Name",
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
          name: "items",
          description: "  List Items",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "ListItemInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
          type: {
            kind: "NON_NULL",
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
      name: "ListItemInput",
      description: "  List Item",
      fields: null,
      inputFields: [
        {
          name: "key",
          description: "  Label of List Item",
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
          name: "value",
          description: "  Value of List Item",
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
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
          type: {
            kind: "NON_NULL",
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
      name: "CostSummaryBlockInput",
      description: "  Summary of Costs",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Name",
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
          name: "items",
          description: "  Cost Items",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "INPUT_OBJECT",
                name: "CostItemInput",
                ofType: null,
                __typename: "__Type"
              },
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "capitalization",
          description: "  Total Estimated Capitalization",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
          type: {
            kind: "NON_NULL",
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
      name: "CostItemInput",
      description: "  Summary of Costs line item",
      fields: null,
      inputFields: [
        {
          name: "key",
          description: "  Label of Cost Item",
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
          name: "value",
          description: "  Value of Cost Item",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "USCurrencyInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
          type: {
            kind: "NON_NULL",
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
      name: "CapitalStackBlockInput",
      description: "  Capital Stack",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Name",
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
          name: "showDebt",
          description: "  Show Debt to Investors",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "debt",
          description: "  Debt Amount ($)",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "debtType",
          description: "  Debt Type",
          type: {
            kind: "ENUM",
            name: "DebtType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "showMezzanine",
          description: "  Show Mezzanine Financing",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "mezzanine",
          description: "  Mezzanine Financing Amount",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "equity",
          description: "  Equity Amount",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "notes",
          description: "  Notes on GP Participation",
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
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
          type: {
            kind: "NON_NULL",
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
      name: "CashOnCashBlockInput",
      description: "  Cash on Cash Return Ratio",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Name",
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
          name: "initial",
          description: "  Initial (%)",
          type: {
            kind: "NON_NULL",
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
        },
        {
          name: "stablized",
          description: "  Stablized (%)",
          type: {
            kind: "NON_NULL",
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
        },
        {
          name: "average",
          description: "  Average over Holding Period (%)",
          type: {
            kind: "NON_NULL",
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
        },
        {
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
          type: {
            kind: "NON_NULL",
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
      name: "InternalRateOfReturnBlockInput",
      description: "  Internal Rate of Return (IRR)",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Name",
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
          name: "from",
          description: "  Lower Bound (%)",
          type: {
            kind: "NON_NULL",
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
        },
        {
          name: "to",
          description: "  Upper Bound (%)",
          type: {
            kind: "NON_NULL",
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
        },
        {
          name: "type",
          description: "  IRR Type",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "IRRType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
          type: {
            kind: "NON_NULL",
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
      name: "ReturnOnEquityBlockInput",
      description: "  Return on Equity",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Name",
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
          name: "multiple",
          description: "  Return on Equity Multiplier (×)",
          type: {
            kind: "NON_NULL",
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
        },
        {
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
          type: {
            kind: "NON_NULL",
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
      name: "ReturnOnEquityRangeBlockInput",
      description: "  Return on Equity Range",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Name",
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
          name: "from",
          description: "  Lower Bound Multiplier (×)",
          type: {
            kind: "NON_NULL",
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
        },
        {
          name: "to",
          description: "  Upper Bound Multiplier (×)",
          type: {
            kind: "NON_NULL",
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
        },
        {
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
          type: {
            kind: "NON_NULL",
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
      name: "ExitCapitlizationRateBlockInput",
      description: "  Projected Exit Capitlization Rate",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Name",
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
          name: "from",
          description: "  Lower Bound (%)",
          type: {
            kind: "NON_NULL",
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
        },
        {
          name: "to",
          description: "  Upper Bound (%)",
          type: {
            kind: "NON_NULL",
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
        },
        {
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
          type: {
            kind: "NON_NULL",
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
      name: "ProjectedSalePriceBlockInput",
      description: "  Projected Sale Price",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Name",
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
          name: "from",
          description: "  Lower Bound ($)",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "USCurrencyInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "to",
          description: "  Upper Bound ($)",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "USCurrencyInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
          type: {
            kind: "NON_NULL",
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
      name: "PreferredReturnBlockInput",
      description: "  Total Preferred Return",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Name",
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
          name: "rate",
          description: "  Total Preferred Return Rate (%)",
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
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
          type: {
            kind: "NON_NULL",
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
      name: "TargetDistributionsBlockInput",
      description: "  Target Distribution Date",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Name",
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
          name: "startDate",
          description: "  Start Date for Distributions",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "AWSDate",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
          type: {
            kind: "NON_NULL",
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
          name: "address",
          description: "  Property Address",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "deadline",
          description: "  The Estimated Date to stop accepting offers.",
          type: {
            kind: "SCALAR",
            name: "AWSDate",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "assetType",
          description: "  Asset Type",
          type: {
            kind: "ENUM",
            name: "AssetType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "total",
          description: "  Total Raise",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "propertyType",
          description: "  Property Type",
          type: {
            kind: "ENUM",
            name: "PropertyType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "holdTime",
          description: "  Hold Time",
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
          name: "holdTimeType",
          description: "  Hold Time Type",
          type: {
            kind: "ENUM",
            name: "HoldTimeType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investmentMin",
          description: "  Minimum Investment",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "description",
          description: "  Description",
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
          name: "sections",
          description: "  Custom Content Sections",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DealSectionInput",
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
          name: "businessAccreditation",
          description: "  Business Accreditation Questionnaire",
          type: {
            kind: "INPUT_OBJECT",
            name: "BusinessAccreditationInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "individualAccreditation",
          description: "  Individual Accreditation Questionnaire",
          type: {
            kind: "INPUT_OBJECT",
            name: "IndividualAccreditationInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "agreed",
          description:
            "  This is when the Terms and Conditions were agreed to.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "AWSDateTime",
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
      name: "BusinessAccreditationInput",
      description: "  Business Accreditation Questionnaire",
      fields: null,
      inputFields: [
        {
          name: "trust",
          description: "  Trust Accreditation",
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
          name: "entity",
          description: "  Business Entity Accreditation",
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
          name: "corporation",
          description: "  Corporation Accreditation",
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
          name: "institutional",
          description: "  Institutional Accreditation",
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
      name: "IndividualAccreditationInput",
      description: "  Individual Accreditation Questionnaire",
      fields: null,
      inputFields: [
        {
          name: "networth",
          description: "  Individual Net Worth Accreditation",
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
          name: "income",
          description: "  Individual Income Accreditation",
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
          name: "businessAccreditation",
          description: "  Business Accreditation Questionnaire",
          type: {
            kind: "INPUT_OBJECT",
            name: "BusinessAccreditationInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "individualAccreditation",
          description: "  Individual Accreditation Questionnaire",
          type: {
            kind: "INPUT_OBJECT",
            name: "IndividualAccreditationInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "agreed",
          description:
            "  This is when the Terms and Conditions were agreed to.",
          type: {
            kind: "SCALAR",
            name: "AWSDateTime",
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
      name: "CreateDelegateInput",
      description: "  Create Delegate",
      fields: null,
      inputFields: [
        {
          name: "role",
          description: "  Delegate Role",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "DelegateRole",
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
          description: "  Contact ID",
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
          description: "  InvestmentEntity ID",
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
      name: "UpdateDelegateInput",
      description: "  Update Delegate",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Delegate ID",
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
          name: "role",
          description: "  Delegate Role",
          type: {
            kind: "ENUM",
            name: "DelegateRole",
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
      name: "DeleteDelegateInput",
      description: "  Delete Delegate",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Delegate ID",
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
          name: "amount",
          description: "  Amount to be Distributed",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "USCurrencyInput",
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
          name: "distributionNoticeId",
          description: "  The DistributionNotice this belongs to.",
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
      name: "CreateDistributionNoticeInput",
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
          name: "type",
          description: "  Type of Distribution",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "DistributionType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "cashFlow",
          description: "  Cash Flow Types",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "CashFlowType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "amount",
          description: "  Total Amount to be Distributed",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "USCurrencyInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "distributed",
          description: "  This is when the Disribution was distributed.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "AWSDateTime",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "promote",
          description: "  Promote Split Options, if type is PROMOTE.",
          type: {
            kind: "INPUT_OBJECT",
            name: "DistributionPromoteInput",
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
        }
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
      __typename: "__Type"
    },
    {
      kind: "INPUT_OBJECT",
      name: "DistributionPromoteInput",
      description:
        "  Promote Options for a DistributionNotice, when type is PROMOTE.",
      fields: null,
      inputFields: [
        {
          name: "promoteGP",
          description: "  General Partner Promote Split percentage",
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
          name: "promoteLP",
          description: "  Limited Partner Promote Split percentage",
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
          name: "carriedInterest",
          description: "  Carried Interest Amount",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyInput",
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
      name: "UpdateDistributionNoticeInput",
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
      name: "DeleteDistributionNoticeInput",
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
          description: "  The Deal ID this File belongs to",
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
          description: "  The InvestmentEntity ID this File belongs to",
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
          name: "subscriptionPackageId",
          description: "  The SubscriptionPackage ID this File belongs to",
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
      name: "CreatePhotoInput",
      description: "  Create Photo",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Photo Name",
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
          description: "  Photo Version",
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
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
          type: {
            kind: "NON_NULL",
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
        },
        {
          name: "primary",
          description:
            "  The Primary Photo with the lowest ordinal will be shown as the cover photo for a deal.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
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
          description: "  The Deal ID associated with this Photo",
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
      name: "UpdatePhotoInput",
      description: "  Update Photo",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Photo ID",
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
          description: "  Photo Name",
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
          description: "  Photo Version",
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
          name: "ordinal",
          description: "  Used for sorting; lower numbers have precedence.",
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
          name: "primary",
          description:
            "  The Primary Photo with the lowest ordinal will be shown as the cover photo for a deal.",
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
      name: "DeletePhotoInput",
      description: "  Delete Photo",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  Photo ID",
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
          name: "taxId",
          description: "  Tax Identification Number",
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
          name: "taxIdType",
          description: "  Type of Tax Identification Number",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "TaxIdType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  HoldingEntity's Mailing Address",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "AddressInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "structure",
          description: "  Investment Structure",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "InvestmentStructure",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "strategies",
          description: "  Investment Strategies",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "ENUM",
                name: "InvestmentStrategy",
                ofType: null,
                __typename: "__Type"
              },
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
          name: "taxId",
          description: "  Tax Identification Number",
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
          name: "taxIdType",
          description: "  Type of Tax Identification Number",
          type: {
            kind: "ENUM",
            name: "TaxIdType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  HoldingEntity's Mailing Address",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "structure",
          description: "  Investment Structure",
          type: {
            kind: "ENUM",
            name: "InvestmentStructure",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "strategies",
          description: "  Investment Strategies",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "InvestmentStrategy",
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
          name: "amount",
          description: "  Commitment Amount",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "USCurrencyInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "partner",
          description: "  Type of Partner",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "PartnerType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "promote",
          description: "  Can this Investment receive fees or promote?",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "closingDate",
          description: "  Closing Date",
          type: {
            kind: "SCALAR",
            name: "AWSDate",
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
          name: "dealSubscriptionId",
          description: "  The DealSubscription ID this belongs to.",
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
          name: "amount",
          description: "  Commitment Amount",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "partner",
          description: "  Type of Partner",
          type: {
            kind: "ENUM",
            name: "PartnerType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "promote",
          description: "  Can this Investment receive fees or promote?",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "closingDate",
          description: "  Closing Date",
          type: {
            kind: "SCALAR",
            name: "AWSDate",
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
      name: "CreateInvestmentEntityIndividualInput",
      description: "  Create InvestmentEntity: Individual",
      fields: null,
      inputFields: [
        {
          name: "type",
          description: "  InvestmentEntity Type",
          type: {
            kind: "ENUM",
            name: "InvestmentEntityType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "details",
          description: "  InvestmentEntity Details: Individual",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "InvestmentEntityIndividualInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  Mailing Address",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "AddressInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "paymentMethod",
          description: "  Preferred PaymentMethod",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "PaymentMethodType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Payment Method: ACH",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Payment Method: Wire",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Payment Method: Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
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
          description: "  The Contact this belongs to.",
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
      name: "InvestmentEntityIndividualInput",
      description: "  InvestmentEntity: Individual",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  The Name of the InvestmentEntity.",
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
          name: "taxIdType",
          description: "  Type of Tax Identification Number",
          type: {
            kind: "ENUM",
            name: "TaxIdTypeSSNandEIN",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "taxId",
          description: "  Tax Identification Number",
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
          name: "dateOfBirth",
          description: "  Date of Birth",
          type: {
            kind: "SCALAR",
            name: "AWSDate",
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
      name: "PaymentMethodACHInput",
      description: "  Payment Method: ACH",
      fields: null,
      inputFields: [
        {
          name: "bankAccountId",
          description: "  BankAccount ID",
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
          name: "enabled",
          description: "  Enabled?",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
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
      name: "PaymentMethodWireInput",
      description: "  Payment Method: Wire",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Payee's Bank Name",
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
          name: "routingNumber",
          description: "  Payee's ABA Routing Number",
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
          name: "accountNumber",
          description: "  Payee's Bank Account Number",
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
          name: "enabled",
          description: "  Enabled?",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
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
      name: "PaymentMethodCheckInput",
      description: "  Payment Method: Check",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  Pay to the Order of...",
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
          name: "address",
          description: "  This is the address Checks should be mailed to",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "AddressInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "enabled",
          description: "  Enabled?",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
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
      name: "UpdateInvestmentEntityIndividualInput",
      description: "  Update InvestmentEntity: Individual",
      fields: null,
      inputFields: [
        {
          name: "id",
          description:
            "  Id uniquely identifies an instance of an InvestmentEntity.",
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
          name: "type",
          description: "  InvestmentEntity Type",
          type: {
            kind: "ENUM",
            name: "InvestmentEntityType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "details",
          description: "  InvestmentEntity Details: Individual",
          type: {
            kind: "INPUT_OBJECT",
            name: "InvestmentEntityIndividualInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  Mailing Address",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "paymentMethod",
          description: "  Preferred PaymentMethod",
          type: {
            kind: "ENUM",
            name: "PaymentMethodType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Payment Method: ACH",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Payment Method: Wire",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Payment Method: Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
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
      name: "CreateInvestmentEntityTrustInput",
      description: "  Create InvestmentEntity: Trust",
      fields: null,
      inputFields: [
        {
          name: "type",
          description: "  InvestmentEntity Type",
          type: {
            kind: "ENUM",
            name: "InvestmentEntityType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "details",
          description: "  InvestmentEntity Details: Trust",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "InvestmentEntityTrustInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  Mailing Address",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "AddressInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "paymentMethod",
          description: "  Preferred PaymentMethod",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "PaymentMethodType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Payment Method: ACH",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Payment Method: Wire",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Payment Method: Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
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
          description: "  The Contact this belongs to.",
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
      name: "InvestmentEntityTrustInput",
      description: "  InvestmentEntity: Trust",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  The Name of the InvestmentEntity.",
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
          name: "taxIdType",
          description: "  Type of Tax Identification Number",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "TaxIdTypeSSNandEIN",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "taxId",
          description: "  Tax Identification Number",
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
      name: "UpdateInvestmentEntityTrustInput",
      description: "  Update InvestmentEntity: Trust",
      fields: null,
      inputFields: [
        {
          name: "id",
          description:
            "  Id uniquely identifies an instance of an InvestmentEntity.",
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
          name: "type",
          description: "  InvestmentEntity Type",
          type: {
            kind: "ENUM",
            name: "InvestmentEntityType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "details",
          description: "  InvestmentEntity Details: Trust",
          type: {
            kind: "INPUT_OBJECT",
            name: "InvestmentEntityTrustInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  Mailing Address",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "paymentMethod",
          description: "  Preferred PaymentMethod",
          type: {
            kind: "ENUM",
            name: "PaymentMethodType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Payment Method: ACH",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Payment Method: Wire",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Payment Method: Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
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
      name: "CreateInvestmentEntityIRAInput",
      description: "  Create InvestmentEntity: Individual Retirement Account",
      fields: null,
      inputFields: [
        {
          name: "type",
          description: "  InvestmentEntity Type",
          type: {
            kind: "ENUM",
            name: "InvestmentEntityType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "details",
          description:
            "  InvestmentEntity Details: Individual Retirement Account",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "InvestmentEntityIRAInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  Mailing Address",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "AddressInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "paymentMethod",
          description: "  Preferred PaymentMethod",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "PaymentMethodType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Payment Method: ACH",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Payment Method: Wire",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Payment Method: Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
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
          description: "  The Contact this belongs to.",
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
      name: "InvestmentEntityIRAInput",
      description: "  InvestmentEntity: Individual Retirement Account",
      fields: null,
      inputFields: [
        {
          name: "name",
          description:
            "  The Name of the IRA Custodian for this InvestmentEntity.",
          type: {
            kind: "ENUM",
            name: "IRACustodian",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "other",
          description: '  Custodian Name, if "name" is OTHER.',
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
          name: "accountNumber",
          description: "  Custodian Account Number",
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
      name: "UpdateInvestmentEntityIRAInput",
      description: "  Update InvestmentEntity: Individual Retirement Account",
      fields: null,
      inputFields: [
        {
          name: "id",
          description:
            "  Id uniquely identifies an instance of an InvestmentEntity.",
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
          name: "type",
          description: "  InvestmentEntity Type",
          type: {
            kind: "ENUM",
            name: "InvestmentEntityType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "details",
          description:
            "  InvestmentEntity Details: Individual Retirement Account",
          type: {
            kind: "INPUT_OBJECT",
            name: "InvestmentEntityIRAInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  Mailing Address",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "paymentMethod",
          description: "  Preferred PaymentMethod",
          type: {
            kind: "ENUM",
            name: "PaymentMethodType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Payment Method: ACH",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Payment Method: Wire",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Payment Method: Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
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
      name: "CreateInvestmentEntityEBPInput",
      description: "  Create InvestmentEntity: Employee Benefit Plan",
      fields: null,
      inputFields: [
        {
          name: "type",
          description: "  InvestmentEntity Type",
          type: {
            kind: "ENUM",
            name: "InvestmentEntityType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "details",
          description: "  InvestmentEntity Details: Employee Benefit Plan",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "InvestmentEntityEBPInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  Mailing Address",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "AddressInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "paymentMethod",
          description: "  Preferred PaymentMethod",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "PaymentMethodType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Payment Method: ACH",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Payment Method: Wire",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Payment Method: Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
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
          description: "  The Contact this belongs to.",
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
      name: "InvestmentEntityEBPInput",
      description: "  InvestmentEntity: Employee Benefit Plan",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  The Name of the InvestmentEntity.",
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
          name: "taxIdType",
          description: "  Type of Tax Identification Number",
          type: {
            kind: "ENUM",
            name: "TaxIdTypeSSNandEIN",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "taxId",
          description: "  Tax Identification Number",
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
      name: "UpdateInvestmentEntityEBPInput",
      description: "  Update InvestmentEntity: Employee Benefit Plan",
      fields: null,
      inputFields: [
        {
          name: "id",
          description:
            "  Id uniquely identifies an instance of an InvestmentEntity.",
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
          name: "type",
          description: "  InvestmentEntity Type",
          type: {
            kind: "ENUM",
            name: "InvestmentEntityType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "details",
          description: "  InvestmentEntity Details: Employee Benefit Plan",
          type: {
            kind: "INPUT_OBJECT",
            name: "InvestmentEntityEBPInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  Mailing Address",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "paymentMethod",
          description: "  Preferred PaymentMethod",
          type: {
            kind: "ENUM",
            name: "PaymentMethodType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Payment Method: ACH",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Payment Method: Wire",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Payment Method: Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
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
      name: "CreateInvestmentEntityCorpInput",
      description: "  Create InvestmentEntity: Corporation",
      fields: null,
      inputFields: [
        {
          name: "type",
          description: "  InvestmentEntity Type",
          type: {
            kind: "ENUM",
            name: "InvestmentEntityType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "details",
          description: "  InvestmentEntity Details: Corporation",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "InvestmentEntityCorpInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  Mailing Address",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "AddressInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "paymentMethod",
          description: "  Preferred PaymentMethod",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "PaymentMethodType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Payment Method: ACH",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Payment Method: Wire",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Payment Method: Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
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
          description: "  The Contact this belongs to.",
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
      name: "InvestmentEntityCorpInput",
      description: "  InvestmentEntity: Corporation",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  The Name of the InvestmentEntity.",
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
          name: "taxIdType",
          description: "  Type of Tax Identification Number",
          type: {
            kind: "ENUM",
            name: "TaxIdTypeSSNandEIN",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "taxId",
          description: "  Tax Identification Number",
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
      name: "UpdateInvestmentEntityCorpInput",
      description: "  Update InvestmentEntity: Corporation",
      fields: null,
      inputFields: [
        {
          name: "id",
          description:
            "  Id uniquely identifies an instance of an InvestmentEntity.",
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
          name: "type",
          description: "  InvestmentEntity Type",
          type: {
            kind: "ENUM",
            name: "InvestmentEntityType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "details",
          description: "  InvestmentEntity Details: Corporation",
          type: {
            kind: "INPUT_OBJECT",
            name: "InvestmentEntityCorpInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  Mailing Address",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "paymentMethod",
          description: "  Preferred PaymentMethod",
          type: {
            kind: "ENUM",
            name: "PaymentMethodType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Payment Method: ACH",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Payment Method: Wire",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Payment Method: Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
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
      name: "CreateInvestmentEntityLLCInput",
      description: "  Create InvestmentEntity: Limited Liability Corporation",
      fields: null,
      inputFields: [
        {
          name: "type",
          description: "  InvestmentEntity Type",
          type: {
            kind: "ENUM",
            name: "InvestmentEntityType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "details",
          description:
            "  InvestmentEntity Details: Limited Liability Corporation",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "InvestmentEntityLLCInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  Mailing Address",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "AddressInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "paymentMethod",
          description: "  Preferred PaymentMethod",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "PaymentMethodType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Payment Method: ACH",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Payment Method: Wire",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Payment Method: Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
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
          description: "  The Contact this belongs to.",
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
      name: "InvestmentEntityLLCInput",
      description: "  InvestmentEntity: Limited Liability Corporation",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  The Name of the InvestmentEntity.",
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
          name: "taxIdType",
          description: "  Type of Tax Identification Number",
          type: {
            kind: "ENUM",
            name: "TaxIdTypeSSNandEIN",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "taxId",
          description: "  Tax Identification Number",
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
      name: "UpdateInvestmentEntityLLCInput",
      description: "  Update InvestmentEntity: Limited Liability Corporation",
      fields: null,
      inputFields: [
        {
          name: "id",
          description:
            "  Id uniquely identifies an instance of an InvestmentEntity.",
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
          name: "type",
          description: "  InvestmentEntity Type",
          type: {
            kind: "ENUM",
            name: "InvestmentEntityType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "details",
          description:
            "  InvestmentEntity Details: Limited Liability Corporation",
          type: {
            kind: "INPUT_OBJECT",
            name: "InvestmentEntityLLCInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  Mailing Address",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "paymentMethod",
          description: "  Preferred PaymentMethod",
          type: {
            kind: "ENUM",
            name: "PaymentMethodType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Payment Method: ACH",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Payment Method: Wire",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Payment Method: Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
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
      name: "CreateInvestmentEntityPartnershipInput",
      description: "  Create InvestmentEntity: Limited Partnership",
      fields: null,
      inputFields: [
        {
          name: "type",
          description: "  InvestmentEntity Type",
          type: {
            kind: "ENUM",
            name: "InvestmentEntityType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "details",
          description: "  InvestmentEntity Details: Limited Partnership",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "InvestmentEntityPartnershipInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  Mailing Address",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "AddressInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "paymentMethod",
          description: "  Preferred PaymentMethod",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "PaymentMethodType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Payment Method: ACH",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Payment Method: Wire",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Payment Method: Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
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
          description: "  The Contact this belongs to.",
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
      name: "InvestmentEntityPartnershipInput",
      description: "  InvestmentEntity: Limited Partnership",
      fields: null,
      inputFields: [
        {
          name: "name",
          description: "  The Name of the InvestmentEntity.",
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
          name: "taxIdType",
          description: "  Type of Tax Identification Number",
          type: {
            kind: "ENUM",
            name: "TaxIdTypeSSNandEIN",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "taxId",
          description: "  Tax Identification Number",
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
      name: "UpdateInvestmentEntityPartnershipInput",
      description: "  Update InvestmentEntity: Limited Partnership",
      fields: null,
      inputFields: [
        {
          name: "id",
          description:
            "  Id uniquely identifies an instance of an InvestmentEntity.",
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
          name: "type",
          description: "  InvestmentEntity Type",
          type: {
            kind: "ENUM",
            name: "InvestmentEntityType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "details",
          description: "  InvestmentEntity Details: Limited Partnership",
          type: {
            kind: "INPUT_OBJECT",
            name: "InvestmentEntityPartnershipInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  Mailing Address",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "paymentMethod",
          description: "  Preferred PaymentMethod",
          type: {
            kind: "ENUM",
            name: "PaymentMethodType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Payment Method: ACH",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Payment Method: Wire",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Payment Method: Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
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
      name: "CreateInvestmentEntityJointInput",
      description: "  Create InvestmentEntity: Joint Ownership",
      fields: null,
      inputFields: [
        {
          name: "type",
          description: "  InvestmentEntity Type",
          type: {
            kind: "ENUM",
            name: "InvestmentEntityType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "details",
          description: "  InvestmentEntity Details: Joint Ownership",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "InvestmentEntityJointInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  Mailing Address",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "AddressInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "paymentMethod",
          description: "  Preferred PaymentMethod",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "PaymentMethodType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Payment Method: ACH",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Payment Method: Wire",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Payment Method: Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
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
          description: "  The Contact this belongs to.",
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
      name: "InvestmentEntityJointInput",
      description: "  InvestmentEntity: Joint Ownership",
      fields: null,
      inputFields: [
        {
          name: "type",
          description: "  Joint Ownership Type",
          type: {
            kind: "ENUM",
            name: "JointOwnershipType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "firstName",
          description: "  First Name",
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
          name: "lastName",
          description: "  Last Name",
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
          name: "taxIdType",
          description: "  Type of Tax Identification Number",
          type: {
            kind: "ENUM",
            name: "TaxIdTypeSSN",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "taxId",
          description: "  Tax Identification Number",
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
          name: "dateOfBirth",
          description: "  Date of Birth",
          type: {
            kind: "SCALAR",
            name: "AWSDate",
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
      name: "UpdateInvestmentEntityJointInput",
      description: "  Update InvestmentEntity: Joint Ownership",
      fields: null,
      inputFields: [
        {
          name: "id",
          description:
            "  Id uniquely identifies an instance of an InvestmentEntity.",
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
          name: "type",
          description: "  InvestmentEntity Type",
          type: {
            kind: "ENUM",
            name: "InvestmentEntityType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "details",
          description: "  InvestmentEntity Details: Joint Ownership",
          type: {
            kind: "INPUT_OBJECT",
            name: "InvestmentEntityJointInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "address",
          description: "  Mailing Address",
          type: {
            kind: "INPUT_OBJECT",
            name: "AddressInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "paymentMethod",
          description: "  Preferred PaymentMethod",
          type: {
            kind: "ENUM",
            name: "PaymentMethodType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Payment Method: ACH",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Payment Method: Wire",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Payment Method: Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
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
          name: "type",
          description: "  Membership Type",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "MembershipType",
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
        },
        {
          name: "type",
          description: "  Membership Type",
          type: {
            kind: "ENUM",
            name: "MembershipType",
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
          name: "sender",
          description: "  The Sender of the Message",
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
          name: "recipient",
          description: "  The Recipient of the Message",
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
          description: "  The Subject of the Message",
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
          name: "body",
          description: "  The Body of the Message",
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
          name: "category",
          description: "  The Message Category",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "MessageCategory",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "type",
          description: "  The Type of Message",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "MessageType",
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
          name: "amount",
          description: "  Payment Amount",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "USCurrencyInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "type",
          description: "  Payment Type",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "PaymentType",
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
          name: "payorId",
          description: "  The Sender's BankAccount, if type is ACH.",
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
          name: "payeeId",
          description: "  The Reciever's BankAccount, if type is ACH.",
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
      name: "CreateProspectInput",
      description: "  Create Prospect",
      fields: null,
      inputFields: [
        {
          name: "contactId",
          description: "  Contact ID",
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
          description: "  Deal Id",
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
      name: "DeleteProspectInput",
      description: "  Delete Prospect",
      fields: null,
      inputFields: [
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
      name: "UpdateSettingsGeneralInput",
      description: "  Update Settings: General",
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
          name: "summary",
          description: "  Account Summary",
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
          name: "email",
          description: "  Account Email",
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
          name: "phone",
          description: "  Account Phone",
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
          name: "address",
          description: "  Company Address",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "AddressInput",
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
      name: "UpdateSettingsBrandingLogoInput",
      description: "  Update Settings: Branding - Logo",
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
        },
        {
          name: "logo",
          description: "  Logo URL",
          type: {
            kind: "SCALAR",
            name: "AWSURL",
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
      name: "UpdateSettingsBrandingFaviconInput",
      description: "  Update Settings: Branding - Favicon",
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
        },
        {
          name: "favicon",
          description: "  Favicon URL",
          type: {
            kind: "SCALAR",
            name: "AWSURL",
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
      name: "UpdateSettingsBrandingColorInput",
      description: "  Update Settings: Branding - Color",
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
        },
        {
          name: "color",
          description: "  Color",
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
      name: "UpdateSettingsBrandingLoginImageInput",
      description: "  Update Settings: Branding - Login Image",
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
        },
        {
          name: "loginImg",
          description: "  Login Image",
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
      name: "UpdateSettingsBrandingDealsImageInput",
      description: "  Update Settings: Branding - Deals Image",
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
        },
        {
          name: "dealsImg",
          description: "  Login Image",
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
      name: "UpdateSettingsBrandingDetailsInput",
      description: "  Update Settings: Branding - Details",
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
        },
        {
          name: "loginMsg",
          description: "  Login Message",
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
          name: "welcomeMsg",
          description: "  Welcome Message",
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
      name: "UpdateSettingsMailInput",
      description: "  Update Settings: Mail",
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
        },
        {
          name: "fromName",
          description: "  Default From Name",
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
          name: "fromEmail",
          description: "  Default From Email",
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
          name: "signature",
          description: "  Mail Signature",
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
      name: "UpdateSettingsAnalyticsInput",
      description: "  Update Settings: Analytics",
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
        },
        {
          name: "ga",
          description: "  Google Analytics ID",
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
          name: "gtm",
          description: "  Google Tag Manager ID",
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
          name: "fb",
          description: "  FaceBook Pixel ID",
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
      name: "CreateSubscriptionPackageInput",
      description: "  Create SubscriptionPackage",
      fields: null,
      inputFields: [
        {
          name: "accreditation",
          description: "  Type of Accreditation Method",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "AccreditationType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "commitmentAmount",
          description:
            "  The amount of capital Investors are allowed to commit to the deal.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CommitmentAmountInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investorLimits",
          description:
            "  Limit the amount of capital specific Investors are allowed to commit to the deal.",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "InvestorLimitInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "taxDoc",
          description: "  Request Tax Document from Investors",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "formationDoc",
          description: "  Request InvestmentEntity Formation documentation",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "countersignerId",
          description:
            "  The Team Membership ID that is the designated Countersigner for DealSubscriptions",
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
          name: "signatureElectronic",
          description: "  Allow Electronic Signatures for DealSubscriptions",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "signatureWet",
          description:
            '  Allow Physical (aka "Wet") Signatures for DealSubscriptions',
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "fundingAnnouncement",
          description:
            "  This specifies when Investment funds needs to be remitted.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "FundingType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "fundingDate",
          description:
            "  The Date when Commitments will start to be collected.",
          type: {
            kind: "SCALAR",
            name: "AWSDate",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Payment Method: ACH",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Wire Payment Method: Wire",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Payment Method: Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "dealId",
          description: "  The Deal ID associated with this SubscriptionPackage",
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
          name: "holdingEntityId",
          description:
            "  The HoldingEntity ID associated with this SubscriptionPackage",
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
      name: "CommitmentAmountInput",
      description: "  Allowed Commitment Amount Range",
      fields: null,
      inputFields: [
        {
          name: "min",
          description: "  Minimum Commitment Value",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "max",
          description: "  Maximum Commitment Value",
          type: {
            kind: "INPUT_OBJECT",
            name: "USCurrencyInput",
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
      name: "InvestorLimitInput",
      description: "  Investor-specific Commitment Amount",
      fields: null,
      inputFields: [
        {
          name: "commitmentAmount",
          description: "  Allowed Commitment Amount Range",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CommitmentAmountInput",
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
          description: "  InvestmentEntity ID this limit applies to",
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
      name: "UpdateSubscriptionPackageInput",
      description: "  Update SubscriptionPackage",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  SubscriptionPackage ID",
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
          name: "accreditation",
          description: "  Type of Accreditation Method",
          type: {
            kind: "ENUM",
            name: "AccreditationType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "commitmentAmount",
          description:
            "  The amount of capital Investors are allowed to commit to the deal.",
          type: {
            kind: "INPUT_OBJECT",
            name: "CommitmentAmountInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "investorLimits",
          description:
            "  Limit the amount of capital specific Investors are allowed to commit to the deal.",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "InvestorLimitInput",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "taxDoc",
          description: "  Request Tax Document from Investors",
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
          name: "formationDoc",
          description: "  Request InvestmentEntity Formation documentation",
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
          name: "countersignerId",
          description:
            "  The Team Member that is the designated Countersigner for DealSubscriptions",
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
          name: "signatureElectronic",
          description: "  Allow Electronic Signatures for DealSubscriptions",
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
          name: "signatureWet",
          description:
            '  Allow Physical (aka "Wet") Signatures for DealSubscriptions',
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
          name: "fundingAnnouncement",
          description:
            "  This specifies when Investment funds needs to be remitted.",
          type: {
            kind: "ENUM",
            name: "FundingType",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "fundingDate",
          description:
            "  The Date when Commitments will start to be collected.",
          type: {
            kind: "SCALAR",
            name: "AWSDate",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "ach",
          description: "  Allow Investment via ACH Transfer",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodACHInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "wire",
          description: "  Allow Investment via Wire Transfer",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodWireInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "check",
          description: "  Allow Investment via Check",
          type: {
            kind: "INPUT_OBJECT",
            name: "PaymentMethodCheckInput",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "dealId",
          description: "  The Deal ID associated with this SubscriptionPackage",
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
      name: "DeleteSubscriptionPackageInput",
      description: "  Delete SubscriptionPackage",
      fields: null,
      inputFields: [
        {
          name: "id",
          description: "  SubscriptionPackage ID",
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
          name: "subject",
          description: "  The Subject of the Message",
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
          name: "body",
          description: "  The Body of the Message.",
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
          name: "subject",
          description: "  The Subject of the Message",
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
          name: "body",
          description: "  The Body of the Message.",
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
          name: "preferences",
          description: "  Investor Preferences",
          type: {
            kind: "INPUT_OBJECT",
            name: "InvestorPreferencesInput",
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
      name: "InvestorPreferencesInput",
      description: "  Investor Preferences",
      fields: null,
      inputFields: [
        {
          name: "typical",
          description: "  Typical Investment Size per Deal",
          type: {
            kind: "ENUM",
            name: "TypicalInvestment",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "annual",
          description: "  Expected Total Investment in the next 12 months",
          type: {
            kind: "ENUM",
            name: "AnnualInvestment",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "objectives",
          description: "  Investment Objectives",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "InvestmentObjectives",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "propertyTypes",
          description: "  Preferred Property Types",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "PropertyType",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "regions",
          description: "  Preferred Regions (US)",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "USRegion",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "periods",
          description: "  Holding Period",
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "HoldingPeriod",
              ofType: null,
              __typename: "__Type"
            },
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "risk",
          description: "  Risk Tolerance",
          type: {
            kind: "ENUM",
            name: "RiskTolerance",
            ofType: null,
            __typename: "__Type"
          },
          defaultValue: null,
          __typename: "__InputValue"
        },
        {
          name: "assetType",
          description: "  Preferred Asset Type",
          type: {
            kind: "ENUM",
            name: "AssetType",
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
          name: "preferences",
          description: "  InvestorPreferences",
          type: {
            kind: "INPUT_OBJECT",
            name: "InvestorPreferencesInput",
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
      name: "createDelegate",
      description: "  Create a Delegate",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateDelegateInput",
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
        name: "Delegate",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateDelegate",
      description: "  Update a Delegate",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateDelegateInput",
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
        name: "Delegate",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteDelegate",
      description: "  Delete a Delegate",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteDelegateInput",
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
        name: "Delegate",
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
      name: "createDistributionNotice",
      description: "  Create a DistributionNotice",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateDistributionNoticeInput",
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
        name: "DistributionNotice",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateDistributionNotice",
      description: "  Update a DistributionNotice",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateDistributionNoticeInput",
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
        name: "DistributionNotice",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteDistributionNotice",
      description: "  Delete a DistributionNotice",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteDistributionNoticeInput",
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
        name: "DistributionNotice",
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
      name: "createPhoto",
      description: "  Create a Photo",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreatePhotoInput",
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
        name: "Photo",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updatePhoto",
      description: "  Update a Photo",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdatePhotoInput",
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
        name: "Photo",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deletePhoto",
      description: "  Delete a Photo",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeletePhotoInput",
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
        name: "Photo",
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
      name: "createInvestmentEntityIndividual",
      description: "  Create an InvestmentEntity: Individual",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateInvestmentEntityIndividualInput",
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
      name: "updateInvestmentEntityIndividual",
      description: "  Update an InvestmentEntity: Individual",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateInvestmentEntityIndividualInput",
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
      name: "createInvestmentEntityTrust",
      description: "  Create an InvestmentEntity: Trust",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateInvestmentEntityTrustInput",
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
      name: "updateInvestmentEntityTrust",
      description: "  Update an InvestmentEntity: Trust",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateInvestmentEntityTrustInput",
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
      name: "createInvestmentEntityIRA",
      description:
        "  Create an InvestmentEntity: Individual Retirement Account",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateInvestmentEntityIRAInput",
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
      name: "updateInvestmentEntityIRA",
      description:
        "  Update an InvestmentEntity: Individual Retirement Account",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateInvestmentEntityIRAInput",
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
      name: "createInvestmentEntityEBP",
      description: "  Create an InvestmentEntity: Employee Benefit Plan",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateInvestmentEntityEBPInput",
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
      name: "updateInvestmentEntityEBP",
      description: "  Update an InvestmentEntity: Employee Benefit Plan",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateInvestmentEntityEBPInput",
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
      name: "createInvestmentEntityCorp",
      description: "  Create an InvestmentEntity: Corporation",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateInvestmentEntityCorpInput",
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
      name: "updateInvestmentEntityCorp",
      description: "  Update an InvestmentEntity: Corporation",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateInvestmentEntityCorpInput",
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
      name: "createInvestmentEntityLLC",
      description:
        "  Create an InvestmentEntity: Limited Liability Corporation",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateInvestmentEntityLLCInput",
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
      name: "updateInvestmentEntityLLC",
      description:
        "  Update an InvestmentEntity: Limited Liability Corporation",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateInvestmentEntityLLCInput",
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
      name: "createInvestmentEntityPartnership",
      description: "  Create an InvestmentEntity: Limited Partnership",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateInvestmentEntityPartnershipInput",
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
      name: "updateInvestmentEntityPartnership",
      description: "  Update an InvestmentEntity: Limited Partnership",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateInvestmentEntityPartnershipInput",
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
      name: "createInvestmentEntityJoint",
      description: "  Create an InvestmentEntity: Joint Ownership",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateInvestmentEntityJointInput",
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
      name: "updateInvestmentEntityJoint",
      description: "  Update an InvestmentEntity: Joint Ownership",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateInvestmentEntityJointInput",
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
      name: "createProspect",
      description: "  Create a Prospect",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateProspectInput",
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
        name: "Prospect",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteProspect",
      description: "  Delete an Prospect",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteProspectInput",
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
        name: "Prospect",
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
      name: "updateSettingsGeneral",
      description: "  Update Settings: General",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateSettingsGeneralInput",
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
      name: "updateSettingsBrandingLogo",
      description: "  Update Settings: Branding - Logo",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateSettingsBrandingLogoInput",
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
      name: "updateSettingsBrandingFavicon",
      description: "  Update Settings: Branding - Favicon",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateSettingsBrandingFaviconInput",
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
      name: "updateSettingsBrandingColor",
      description: "  Update Settings: Branding - Color",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateSettingsBrandingColorInput",
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
      name: "updateSettingsBrandingLoginImage",
      description: "  Update Settings: Branding - Login Image",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateSettingsBrandingLoginImageInput",
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
      name: "updateSettingsBrandingDealsImage",
      description: "  Update Settings: Branding - Deals Image",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateSettingsBrandingDealsImageInput",
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
      name: "updateSettingsBrandingDetails",
      description: "  Update Settings: Branding - Details",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateSettingsBrandingDetailsInput",
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
      name: "updateSettingsMail",
      description: "  Update Settings: Mail",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateSettingsMailInput",
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
      name: "updateSettingsAnalytics",
      description: "  Update Settings: Analytics",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateSettingsAnalyticsInput",
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
      name: "createSubscriptionPackage",
      description: "  Create a SubscriptionPackage",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "CreateSubscriptionPackageInput",
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
        name: "SubscriptionPackage",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "updateSubscriptionPackage",
      description: "  Update an SubscriptionPackage",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "UpdateSubscriptionPackageInput",
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
        name: "SubscriptionPackage",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "deleteSubscriptionPackage",
      description: "  Delete an SubscriptionPackage",
      args: [
        {
          name: "input",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "INPUT_OBJECT",
              name: "DeleteSubscriptionPackageInput",
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
        name: "SubscriptionPackage",
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
      name: "getDelegate",
      description: "  Get a single Delegate",
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
        name: "Delegate",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listDelegates",
      description: "  Get a list of Delegates",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "DelegateFilterInput",
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
        name: "DelegateConnection",
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
      name: "getDistributionNotice",
      description: "  Get a single DistributionNotice",
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
        name: "DistributionNotice",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listDistributionNotices",
      description: "  Get a list of DistributionNotices",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "DistributionNoticeFilterInput",
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
        name: "DistributionNoticeConnection",
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
      name: "getProspect",
      description: "  Get a single Prospect",
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
        name: "Prospect",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listProspects",
      description: "  Get a list of Prospects",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "ProspectFilterInput",
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
        name: "ProspectConnection",
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
      name: "getSubscriptionPackage",
      description: "  Get a single SubscriptionPackage",
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
        name: "SubscriptionPackage",
        ofType: null,
        __typename: "__Type"
      },
      isDeprecated: false,
      deprecationReason: null,
      __typename: "__Field"
    },
    {
      name: "listSubscriptionPackages",
      description: "  Get a list of SubscriptionPackages",
      args: [
        {
          name: "filter",
          description: null,
          type: {
            kind: "INPUT_OBJECT",
            name: "SubscriptionPackageFilterInput",
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
        name: "SubscriptionPackageConnection",
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
