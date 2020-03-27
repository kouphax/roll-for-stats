import { Document as XmlDocument } from "xml-parser";
import { Page, Play, Player } from "../types";
import { Node }  from "xml-parser";


export function page(page: XmlDocument): Page {
  return {
    userid: page.root.attributes.userid,
    username: page.root.attributes.username,
    total: parseInt(page.root.attributes.total),
    page: parseInt(page.root.attributes.page),
    plays: page.root.children.map((play: Node): Play => {
      return {
        date: play.attributes.date,
        location: play.attributes.location,
        id: play.attributes.id,
        game: {
          name: play.children.find(c => c.name === "item")!.attributes.name,
          id: play.children.find(c => c.name === "item")!.attributes.objectid
        },
        players: play.children.find(c => c.name === "players")!.children.map((player: Node): Player => {
          return  {
            name: player.attributes.name,
            win: player.attributes.win === '1',
            score: parseInt(player.attributes.score),
            firstPlay: player.attributes.new === '1',
            team: player.attributes.color
          }
        })
      }
    })
  }
}
