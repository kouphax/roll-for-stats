import { Page } from "../types";
import axios from "axios";
import xml from "xml-parser";
import { page as pageProjector } from "../projector";

const timeout = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));

export async function plays(username: string, page: number): Promise<Page> {
  return await timeout(2000).then(() =>
    axios
      .get(`https://www.boardgamegeek.com/xmlapi2/plays`, {
        responseType: "text",
        params: {
          username,
          page
        }
      })
      .then(response => xml(response.data))
      .then(pageProjector)
  );
}

export default {
  plays
};
