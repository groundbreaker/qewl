import { decorateCreate, decorateEdit, decorateDelete } from "./mutate";
import { decorateDetail, decorateList, decorateSearch } from "./query";
import { decorateCustom } from "./custom";
import withSchema from "./withSchema";

export {
  decorateCreate,
  decorateDelete,
  decorateEdit,
  decorateDetail,
  decorateList,
  decorateSearch,
  decorateCustom,
  withSchema
};
