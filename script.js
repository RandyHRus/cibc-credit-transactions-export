[...document.querySelector('.transaction-list').querySelectorAll('.transaction-row')].reverse().map((row) => ([
    row.querySelector('.transactionDate > span')?.innerHTML,
    row.querySelector('.transactions > span')?.innerHTML,
    row.querySelector('.amount > span.negative')?.innerHTML.substring(2),
    row.querySelector('.amount > span:not(.negative)')?.innerHTML.substring(1)
])).map(lines => lines.join("\t")).join("\n");
