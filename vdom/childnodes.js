module.exports = getChildNode

function getChildNode(childNodes, i) {
    if (typeof(childNodes.item) === 'function') return childNodes.item(i)
    return childNodes[i]
}
