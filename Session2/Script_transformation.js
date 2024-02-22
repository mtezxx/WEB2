// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const SCRIPTS = require("./scripts.js");

function oldestLivingScript(scripts) {
    return scripts.filter(s => s.living).reduce((res, s) => (res.year < s.year ? res : s));
}

console.log(oldestLivingScript(SCRIPTS).name);
