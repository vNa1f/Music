module.exports = {
name: "eval",
descrption:"أمر خاص بالمطورين",
cooldown: 1,

async execute(message, args) {
if (!["751224380247244871", "537371063965712398","908688911172239380s"].includes(message.author.id)) return false;
const content = args.join(" ");
if (content.length == 0) return false;

try {
const result = await eval(content);
message.channel.send(String(result));
} catch (e) {
console.error(e)
}
}
};