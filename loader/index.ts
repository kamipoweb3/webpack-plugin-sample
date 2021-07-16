import { getOptions } from "loader-utils";

export default async function loader(source: string) {
  const options = getOptions(this);
  console.log("options: " + JSON.stringify(options));

  source = source + " // comment"

  return source;
}
