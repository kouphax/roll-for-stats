import args from "command-line-args";
import { readFileSync } from "fs";
import { Configuration, Page } from "./types";
import { writeFileSync } from "fs";
import api from "./api";

const options = args([
  {
    name: "config",
    alias: "c",
    type: String,
    defaultValue: "scraper/config.json"
  }
]);

function flatMap<T, U>(
  array: T[],
  callbackfn: (value: T, index: number, array: T[]) => U[]
): U[] {
  return Array.prototype.concat(...array.map(callbackfn));
}

const config: Configuration = JSON.parse(
  readFileSync(options.config).toString()
);

(async () => {
  const firstPage: Page = await api.plays(config.username, 1);
  const pageCount = Math.ceil(firstPage.total / 100);
  const pages: Page[] = [
    firstPage,
    ...(await Promise.all(
      Array.from(Array(pageCount + 1).keys())
        .slice(2)
        .map(pn => api.plays(config.username, pn))
    ))
  ];
  const plays = flatMap(pages, p => p.plays);

  const combined: Page = {
    ...firstPage,
    plays
  };

  writeFileSync(
    `${config.outputDirectory}/${config.username}.json`,
    JSON.stringify(combined, null, 2)
  );
})();
