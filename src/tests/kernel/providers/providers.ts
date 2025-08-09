import { BaseProvider } from "@/base";

export type TestContainers = {
  example: string;
  object: {
    value: 1;
  };
};

export class TestProvider extends BaseProvider {
  async register(): Promise<void> {
    this.bind("example", "hello world");
    this.bind("object", { value: 1 });
  }
}
