/* eslint-disable max-len */
class Banner {
  constructor(message, width = message.length) {
    this.message = message;
    this.width = width;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+-${"-".repeat(this.width)}-+`;
  }

  emptyLine() {
    return `| ${" ".repeat(this.width)} |`;
  }

  messageLine() {
    let count = 1;
    let messageArrs = [];

    if (this.message.length === 0) return `|  |`;

    for (let i = 0; i < this.message.length; i++) {
      for (let j = i + 1; j <= this.message.length; j++) {
        count += 1;

        if (count === this.width || j === this.message.length) {
          messageArrs.push(`| ${this.message.slice(i, j + 1)} |`);
          i = j + 1;
          j = i;
          count = 1;
        }
      }
    }
    messageArrs[messageArrs.length - 1] = this.fillString(messageArrs[messageArrs.length - 1]);

    return messageArrs.join("\n");
  }

  fillString(str) {
    let firstPart = str.slice(0, str.length - 1);
    let end = str.slice(str.length - 1);

    while (str.length < this.width + 4) {
      firstPart += " ";
      str = firstPart + end;
    }

    return str;
  }
}

let str = 'To boldly go where no one has gone before.';

let banner1 = new Banner(str, 17);
banner1.displayBanner();
// +-------------------+
// |                   |
// | To boldly go wher |
// | e no one has gone |
// |  before.          |
// |                   |
// +-------------------+

let banner2 = new Banner('');
banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+

let banner3 = new Banner(str);
banner3.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+