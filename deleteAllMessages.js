function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

var ellipses = getElementByXpath("/html/body/div[5]/div[3]/div[2]/div/div/main/div/section[2]/div[1]/div[1]/div/div[1]/button");

ellipses.click();

var deleteMessage = getElementByXpath("/html/body/div[5]/div[3]/div[2]/div/div/main/div/section[2]/div[1]/div[1]/div/div[1]/div/div/div/ul/div[2]");

deleteMessage.click();

var confirmDelete = getElementByXpath("/html/body/div[3]/div/div/div[3]/div/button[2]");

confirmDelete.click();



