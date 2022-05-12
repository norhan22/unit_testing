function generateViewList(items,showProps=[],listTagName='ol'){

    const
        resultBlock=document.createElement('div'),
        newList = document.createElement(listTagName),
        itemsCounts = document.createElement('h5')

    itemsCounts.innerHTML=`counts: ${items.length}`
    resultBlock.append(itemsCounts)
    items.map((r)=>{
        const newRow = document.createElement('li'),
            getValues =  showProps.map((p)=> r[p])
        newRow.innerHTML=`<p>${getValues.join(' - ')}</p>`
        newList.append(newRow)
    })
    resultBlock.append(newList)
    return resultBlock
}

module.exports = generateViewList