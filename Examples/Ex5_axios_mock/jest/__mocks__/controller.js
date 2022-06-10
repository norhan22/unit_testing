function generateViewList(items, showProps = [], listTagName = "ol") {
  let list = "";

  items.forEach((r) => {
    const getValues = showProps.map((p) => r[p]),
      newRow = `<li><p>${getValues.join(" - ")}</p></li>`;
    list += newRow;
  });
  const newList = `<${listTagName}>${list}</${listTagName}>`,
    resultBlock = `<div>${newList}</div>`;

  return resultBlock;
}

module.exports = generateViewList;
