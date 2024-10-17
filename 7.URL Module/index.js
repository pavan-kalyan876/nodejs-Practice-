import { URL } from "url";
// it provides full details about url
const myUrl = new URL(
  "https://chatgpt.com/c/6710694b-3e84-8012-b9a7-b2a31c835ad0"
);
console.log(myUrl);

const youtubeUrl = new URL("https://www.youtube.com/watch?v=EsUL2bfKKLc");
console.log(youtubeUrl);
console.log("return href", youtubeUrl.href);
console.log("returns http or https:,", youtubeUrl.protocol);
console.log("host: ", youtubeUrl.host);
console.log("what u have serach in in search: ", youtubeUrl.search);
