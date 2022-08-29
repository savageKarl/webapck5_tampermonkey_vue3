import { GmFunctions, RunAt, UserScript } from "./UserScript";
import build from "./build";

const script: UserScript = {
  author: "savage",
  name: "name",
  description: "description",
  version: "2.0.1",
  includes: [''],
  grants: [GmFunctions.GM_xmlhttpRequest, GmFunctions.GM_setValue, GmFunctions.GM_getValue],
  runAt: RunAt.document_end,
};

build(script, "app_header.js");
