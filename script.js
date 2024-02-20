[...document.querySelector('.transaction-list').querySelectorAll('.transaction-row')].reverse().map((row) => ([
    row.querySelector('.transactionDate > span')?.innerHTML,
    row.querySelector('.transactions > span')?.innerHTML,
    row.querySelector('.amount > span')?.innerHTML.substring(2)
])).map(lines => lines.join("\t")).join("\n");
