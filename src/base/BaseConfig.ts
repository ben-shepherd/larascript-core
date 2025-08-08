import { HasConfigConcern } from "@/concerns/HasConfigConcern";
import { compose } from "@/utils/compose";

export class BaseConfig extends compose(class {}, HasConfigConcern) {
  declare getConfig: <T = unknown>() => T;

  declare setConfig: (config: unknown) => void;
}
