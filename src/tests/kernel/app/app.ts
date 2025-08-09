import { appSingleton } from "@/app/AppSingleton";
import { TestContainers } from "../providers/providers";

export const testApp = <K extends keyof TestContainers>(name: K) =>
  appSingleton<TestContainers>(name) as TestContainers[K];
