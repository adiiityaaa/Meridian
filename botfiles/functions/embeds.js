module.exports.novoice = novoice;
module.exports.nomutual = nomutual;
module.exports.noqueue = noqueue;
module.exports.noplay = noplay;
module.exports.nojoin = nojoin;
module.exports.nodj = nodj;
module.exports.error = error;

function novoice(client) {
const novc = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please join a Voice Channel.**`)
return novc;
}

function nomutual(client) {
const nomuvc = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please join Mutual Voice Channel.**`)
return nomuvc;
}

function noqueue(client) {
const noque = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **The Queue is Empty.**`)
return noque;
}

function noplay(client) {
const nopl = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Player is not playing anything.**`)
return nopl;
}

function nojoin(client) {
const nojo = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Cannot join your Voice Channel.**`)
return nojo;
}

function nodj(client) {
const nj = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **You are not a DJ.**`)
return nj;
}

function error(client) {
const err = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **An Error has occured.**`)
return err;
}