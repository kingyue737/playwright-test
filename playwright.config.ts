import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./e2e",
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  use: {
    actionTimeout: 0,
    headless: false,
  },
  projects: [
    {
      name: "Microsoft",
      use: {
        ...devices["Desktop Edge"],
        channel: "msedge",
      },
    },
  ],
};

export default config;
