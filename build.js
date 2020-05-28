"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.white("               James Sherry"),
  handle: chalk.white("@jmsherry"),
  work: chalk.white("Founder of The Jump Digital School"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("theJumpTech"),
  github: chalk.gray("https://github.com/") + chalk.green("jmsherry"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") + chalk.blue("james-sherry-389060b"),
  web: chalk.cyan("https://thejump.tech/about/"),
  tel: chalk.white("0207 310 8642"),
  labelWork: chalk.white.bold("       Work:"),
  labelOpenSource: chalk.white.bold("Open Source:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelnpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelTel: chalk.white.bold("       Tel:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `          ${data.work}`;
// const opensourcing = `${data.labelOpenSource}  ${data.opensource}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const teling = `${data.labelTel}  ${data.tel}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  // opensourcing +
  // newline +
  newline + // data.labelOpenSource + data.opensource
  twittering +
  newline + // data.labelTwitter + data.twitter
  // npming +
  // newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  webing +
  newline +
  newline + // data.labelWeb + data.web
  teling; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.green(boxen(output, options))
);
